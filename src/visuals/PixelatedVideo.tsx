import { useEffect, useRef } from 'react'
import { initCameraStream } from './camera'

// Mode 1: simple canvas-based gas with Brownian motion and motion-driven pulses
export function PixelatedVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const prevFrameRef = useRef<Uint8ClampedArray | null>(null)
  const offsetXRef = useRef<Float32Array | null>(null)
  const offsetYRef = useRef<Float32Array | null>(null)
  const velXRef = useRef<Float32Array | null>(null)
  const velYRef = useRef<Float32Array | null>(null)
  const lastTimeRef = useRef<number | null>(null)
  const baseOffsetXRef = useRef<Float32Array | null>(null)
  const baseOffsetYRef = useRef<Float32Array | null>(null)

  useEffect(() => {
    let cancelled = false

    const setup = async () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const video = await initCameraStream()
      if (cancelled) {
        if (video.srcObject instanceof MediaStream) {
          video.srcObject.getTracks().forEach((t) => t.stop())
        }
        return
      }

      videoRef.current = video

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const offscreen = document.createElement('canvas')
      const offCtx = offscreen.getContext('2d')
      if (!offCtx) return

      const render = () => {
        const w = canvas.clientWidth || 800
        const h = canvas.clientHeight || 600
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w
          canvas.height = h
        }

        const pixelSize = 12 // 像素块大小，数值越大越粗糙
        const dw = Math.max(1, Math.floor(w / pixelSize))
        const dh = Math.max(1, Math.floor(h / pixelSize))
        offscreen.width = dw
        offscreen.height = dh

        const cellCount = dw * dh

        // 初始化粒子状态（偏移与速度），模拟气体效果
        let baseOffsetX = baseOffsetXRef.current
        let baseOffsetY = baseOffsetYRef.current
        let offsetX = offsetXRef.current
        let offsetY = offsetYRef.current
        let velX = velXRef.current
        let velY = velYRef.current
        if (
          !baseOffsetX ||
          !baseOffsetY ||
          !offsetX ||
          !offsetY ||
          !velX ||
          !velY ||
          offsetX.length !== cellCount
        ) {
          baseOffsetX = new Float32Array(cellCount)
          baseOffsetY = new Float32Array(cellCount)
          offsetX = new Float32Array(cellCount)
          offsetY = new Float32Array(cellCount)
          velX = new Float32Array(cellCount)
          velY = new Float32Array(cellCount)
          // 在每个单元格内部随机偏移，打破规则矩阵
          const spread = pixelSize * 0.4
          for (let i = 0; i < cellCount; i++) {
            baseOffsetX[i] = (Math.random() - 0.5) * spread
            baseOffsetY[i] = (Math.random() - 0.5) * spread
          }
          baseOffsetXRef.current = baseOffsetX
          baseOffsetYRef.current = baseOffsetY
          offsetXRef.current = offsetX
          offsetYRef.current = offsetY
          velXRef.current = velX
          velYRef.current = velY
        }

        // Downscale video heavily
        offCtx.save()
        offCtx.clearRect(0, 0, dw, dh)
        // 镜像摄像头画面，符合“镜子”直觉
        offCtx.translate(dw, 0)
        offCtx.scale(-1, 1)
        offCtx.drawImage(video, 0, 0, dw, dh)
        offCtx.restore()

        // Read low-res pixels for motion detection
        const frame = offCtx.getImageData(0, 0, dw, dh)
        const data = frame.data
        const prevFrame = prevFrameRef.current

        // Clear with dark tint, keep a faint trail
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = 'rgba(5, 8, 22, 0.35)'
        ctx.fillRect(0, 0, w, h)

        // Draw faint pixelated base (mirror)
        ctx.imageSmoothingEnabled = false
        ctx.save()
        ctx.globalAlpha = 0.03
        ctx.drawImage(offscreen, 0, 0, dw, dh, 0, 0, w, h)
        ctx.restore()

        const nowMs = performance.now()
        const last = lastTimeRef.current
        const dt =
          last != null ? Math.min(0.05, (nowMs - last) / 1000) : 1 / 60
        lastTimeRef.current = nowMs

        // Phase 1: compute motion, apply pulses
        for (let py = 0; py < dh; py++) {
          for (let px = 0; px < dw; px++) {
            const cellIndex = py * dw + px
            const idx = cellIndex * 4
            const r = data[idx]
            const g = data[idx + 1]
            const b = data[idx + 2]

            let motion = 0
            if (prevFrame && prevFrame.length === data.length) {
              const pr = prevFrame[idx]
              const pg = prevFrame[idx + 1]
              const pb = prevFrame[idx + 2]
              const dr = r - pr
              const dg = g - pg
              const db = b - pb
              const diff = Math.abs(dr) + Math.abs(dg) + Math.abs(db)
              motion = Math.min(1, diff / (3 * 128))
            }

            if (motion < 0.18) continue

            // Convert motion to a velocity impulse
            if (motion > 0.35) {
              const seed = px * 17.31 + py * 41.89
              const angle = seed * 1.3
              const speed = (30 + 160 * motion) * (pixelSize / 12)
              velX[cellIndex] += Math.cos(angle) * speed
              velY[cellIndex] += Math.sin(angle) * speed
            }
          }
        }

        // Phase 2: update physics (gas-like, no spring return)
        const damping = 0.98
        const thermal = 10 * (pixelSize / 12) // 热噪声强度
        const wallForce = 45

        for (let i = 0; i < cellCount; i++) {
          let ox = offsetX[i]
          let oy = offsetY[i]
          let vx = velX[i]
          let vy = velY[i]

          // Add small thermal noise every frame
          vx += (Math.random() - 0.5) * thermal
          vy += (Math.random() - 0.5) * thermal

          vx *= damping
          vy *= damping

          ox += vx * dt
          oy += vy * dt

          // Elastic bounce + slight inward force near walls
          const pxIndex = i % dw
          const pyIndex = (i / dw) | 0
          const baseX =
            (pxIndex + 0.5) * pixelSize + (baseOffsetX?.[i] ?? 0)
          const baseY =
            (pyIndex + 0.5) * pixelSize + (baseOffsetY?.[i] ?? 0)
          let x = baseX + ox
          let y = baseY + oy

          const radius = pixelSize * 0.6

          if (x < radius) {
            x = radius
            vx = Math.abs(vx)
          } else if (x > w - radius) {
            x = w - radius
            vx = -Math.abs(vx)
          }

          if (y < radius) {
            y = radius
            vy = Math.abs(vy)
          } else if (y > h - radius) {
            y = h - radius
            vy = -Math.abs(vy)
          }

          // Push inward near walls to avoid corner pile-up
          const padding = pixelSize * 2
          if (x < padding) {
            vx += ((padding - x) / padding) * wallForce * dt
          } else if (x > w - padding) {
            vx -= ((x - (w - padding)) / padding) * wallForce * dt
          }
          if (y < padding) {
            vy += ((padding - y) / padding) * wallForce * dt
          } else if (y > h - padding) {
            vy -= ((y - (h - padding)) / padding) * wallForce * dt
          }

          // 将位置重新映射回偏移
          ox = x - baseX
          oy = y - baseY

          offsetX[i] = ox
          offsetY[i] = oy
          velX[i] = vx
          velY[i] = vy
        }

        // Draw particle layer (no glow), with positions = base + offsets
        ctx.save()
        ctx.globalCompositeOperation = 'source-over'

        for (let py = 0; py < dh; py++) {
          for (let px = 0; px < dw; px++) {
            const cellIndex = py * dw + px
            const idx = cellIndex * 4
            const r = data[idx]
            const g = data[idx + 1]
            const b = data[idx + 2]

            const baseX =
              (px + 0.5) * pixelSize + (baseOffsetX?.[cellIndex] ?? 0)
            const baseY =
              (py + 0.5) * pixelSize + (baseOffsetY?.[cellIndex] ?? 0)

            const fx = baseX + offsetX[cellIndex]
            const fy = baseY + offsetY[cellIndex]

            const size = 1.4

            // Fixed cyan-ish color with mild transparency
            const mix = 0.7
            const baseR = r / 255
            const baseG = g / 255
            const baseB = b / 255
            const rOut = baseR * (1 - mix) + 0.12 * mix
            const gOut = baseG * (1 - mix) + 0.82 * mix
            const bOut = baseB * (1 - mix) + 0.95 * mix
            const alpha = 0.35

            ctx.beginPath()
            ctx.fillStyle = `rgba(${Math.round(rOut * 255)}, ${Math.round(
              gOut * 255,
            )}, ${Math.round(bOut * 255)}, ${alpha})`
            ctx.arc(fx, fy, size, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        // Save frame for next motion detection
        if (!prevFrame || prevFrame.length !== data.length) {
          prevFrameRef.current = new Uint8ClampedArray(data)
        } else {
          prevFrame.set(data)
        }

        ctx.restore()

        rafRef.current = requestAnimationFrame(render)
      }

      render()
    }

    void setup()

    return () => {
      cancelled = true
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
      const video = videoRef.current
      if (video && video.srcObject instanceof MediaStream) {
        video.srcObject.getTracks().forEach((t) => t.stop())
      }
      prevFrameRef.current = null
      offsetXRef.current = null
      offsetYRef.current = null
      velXRef.current = null
      velYRef.current = null
      lastTimeRef.current = null
    }
  }, [])

  return <canvas ref={canvasRef} className="pixel-canvas" />
}
