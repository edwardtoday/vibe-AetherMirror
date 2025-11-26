import { useEffect, useRef } from 'react'
import { initCameraStream } from './camera'

// Mode 4: Flow-field-driven particles with motion injection (no rigid collisions)
export function FlowFieldGas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const prevFrameRef = useRef<Uint8ClampedArray | null>(null)
  const flowPhaseRef = useRef<Float32Array | null>(null)

  useEffect(() => {
    let cancelled = false

    const setup = async () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const video = await initCameraStream()
      if (cancelled) {
        if (video.srcObject instanceof MediaStream) {
          video.srcObject.getTracks().forEach((t) => t.stop())
        }
        return
      }
      videoRef.current = video

      const offscreen = document.createElement('canvas')
      const offCtx = offscreen.getContext('2d')
      if (!offCtx) return

      const particleCount = 2500
      const positions = new Float32Array(particleCount * 2)
      const velocities = new Float32Array(particleCount * 2)
      let phases = flowPhaseRef.current
      if (!phases || phases.length !== particleCount * 2) {
        phases = new Float32Array(particleCount * 2)
        for (let i = 0; i < particleCount; i++) {
          phases[i * 2] = Math.random() * Math.PI * 2
          phases[i * 2 + 1] = Math.random() * Math.PI * 2
        }
        flowPhaseRef.current = phases
      }

      const resetParticles = () => {
        const w = canvas.clientWidth || 800
        const h = canvas.clientHeight || 600
        canvas.width = w
        canvas.height = h
        for (let i = 0; i < particleCount; i++) {
          positions[i * 2] = Math.random() * w
          positions[i * 2 + 1] = Math.random() * h
          velocities[i * 2] = (Math.random() - 0.5) * 30
          velocities[i * 2 + 1] = (Math.random() - 0.5) * 30
        }
      }

      resetParticles()
      window.addEventListener('resize', resetParticles)

      const flowNoise = (x: number, y: number, t: number, phaseX: number, phaseY: number) => ({
        x: Math.sin(0.0015 * x + t * 0.7 + phaseX) * 50,
        y: Math.cos(0.0012 * y + t * 0.6 + phaseY) * 50,
      })

      const render = () => {
        const w = canvas.clientWidth || 800
        const h = canvas.clientHeight || 600
        if (canvas.width !== w || canvas.height !== h) {
          resetParticles()
        }

        const pixelSize = 8
        const dw = Math.max(1, Math.floor(w / pixelSize))
        const dh = Math.max(1, Math.floor(h / pixelSize))
        offscreen.width = dw
        offscreen.height = dh

        offCtx.save()
        offCtx.clearRect(0, 0, dw, dh)
        offCtx.translate(dw, 0)
        offCtx.scale(-1, 1)
        offCtx.drawImage(video, 0, 0, dw, dh)
        offCtx.restore()

        const frame = offCtx.getImageData(0, 0, dw, dh)
        const data = frame.data
        const prev = prevFrameRef.current

        // Inject local velocity into the flow based on motion
        const now = performance.now() * 0.001
        for (let py = 0; py < dh; py += 2) {
          for (let px = 0; px < dw; px += 2) {
            const idx = (py * dw + px) * 4
            let motion = 0
            if (prev && prev.length === data.length) {
              const dr = data[idx] - prev[idx]
              const dg = data[idx + 1] - prev[idx + 1]
              const db = data[idx + 2] - prev[idx + 2]
              const diff = Math.abs(dr) + Math.abs(dg) + Math.abs(db)
              motion = Math.min(1, diff / (3 * 128))
            }
            if (motion > 0.25) {
              for (let k = 0; k < 10; k++) {
                const id = (idx + k * 29) % particleCount
                velocities[id * 2] += (Math.random() - 0.5) * 80 * motion
                velocities[id * 2 + 1] += (Math.random() - 0.5) * 80 * motion
              }
            }
          }
        }
        if (!prev || prev.length !== data.length) {
          prevFrameRef.current = new Uint8ClampedArray(data)
        } else {
          prev.set(data)
        }

        // Update particles: flow advection + damping + wrap
        const damping = 0.995
        const thermal = 8
        const maxSpeed = 160
        for (let i = 0; i < particleCount; i++) {
          let x = positions[i * 2]
          let y = positions[i * 2 + 1]
          let vx = velocities[i * 2]
          let vy = velocities[i * 2 + 1]

          const phaseX = phases ? phases[i * 2] : 0
          const phaseY = phases ? phases[i * 2 + 1] : 0
          const flow = flowNoise(x, y, now, phaseX, phaseY)
          vx += flow.x * 0.02
          vy += flow.y * 0.02

          // small thermal noise
          vx += (Math.random() - 0.5) * thermal
          vy += (Math.random() - 0.5) * thermal

          // light neighbor repulsion (sampled)
          for (let k = 0; k < 3; k++) {
            const j = (i + k * 97) % particleCount
            if (j === i) continue
            const dx = x - positions[j * 2]
            const dy = y - positions[j * 2 + 1]
            const dist2 = dx * dx + dy * dy
            if (dist2 > 1e-2 && dist2 < 900) {
              const inv = 1 / Math.sqrt(dist2)
              vx += dx * inv * 20 * 0.016
              vy += dy * inv * 20 * 0.016
            }
          }

          vx *= damping
          vy *= damping

          x += vx * 0.016
          y += vy * 0.016

          // clamp speed
          const speed2 = vx * vx + vy * vy
          if (speed2 > maxSpeed * maxSpeed) {
            const scale = maxSpeed / Math.sqrt(speed2)
            vx *= scale
            vy *= scale
          }

          // Wrap around edges
          if (x < 0) x += w
          if (x > w) x -= w
          if (y < 0) y += h
          if (y > h) y -= h

          positions[i * 2] = x
          positions[i * 2 + 1] = y
          velocities[i * 2] = vx
          velocities[i * 2 + 1] = vy
        }

        // 绘制
        ctx.fillStyle = '#050816'
        ctx.fillRect(0, 0, w, h)
        ctx.save()
        ctx.globalAlpha = 0.03
        ctx.drawImage(offscreen, 0, 0, dw, dh, 0, 0, w, h)
        ctx.restore()

        ctx.fillStyle = 'rgba(90, 200, 255, 0.35)'
        for (let i = 0; i < particleCount; i++) {
          const x = positions[i * 2]
          const y = positions[i * 2 + 1]
          ctx.beginPath()
          ctx.arc(x, y, 1.6, 0, Math.PI * 2)
          ctx.fill()
        }

        rafRef.current = requestAnimationFrame(render)
      }

      render()
    }

    void setup()

    return () => {
      cancelled = true
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      const video = videoRef.current
      if (video && video.srcObject instanceof MediaStream) {
        video.srcObject.getTracks().forEach((t) => t.stop())
      }
      prevFrameRef.current = null
    }
  }, [])

  return <canvas ref={canvasRef} className="pixel-canvas" />
}
