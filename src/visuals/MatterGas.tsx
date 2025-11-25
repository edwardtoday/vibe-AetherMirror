import { useEffect, useRef } from 'react'
import Matter from 'matter-js'
import { initCameraStream } from './camera'

// Mode 2: Matter.js 2D collisions rendered on canvas
export function MatterGas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const prevFrameRef = useRef<Uint8ClampedArray | null>(null)

  useEffect(() => {
    let cancelled = false
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0 },
    })

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

      const makeBodies = () => {
        Matter.World.clear(engine.world, false)
        const w = canvas.clientWidth || 800
        const h = canvas.clientHeight || 600
        canvas.width = w
        canvas.height = h

        const wallThickness = 200
        const walls = [
          Matter.Bodies.rectangle(w / 2, -wallThickness / 2, w, wallThickness, {
            isStatic: true,
          }),
          Matter.Bodies.rectangle(w / 2, h + wallThickness / 2, w, wallThickness, {
            isStatic: true,
          }),
          Matter.Bodies.rectangle(-wallThickness / 2, h / 2, wallThickness, h, {
            isStatic: true,
          }),
          Matter.Bodies.rectangle(w + wallThickness / 2, h / 2, wallThickness, h, {
            isStatic: true,
          }),
        ]
        Matter.World.add(engine.world, walls)

        const bodies: Matter.Body[] = []
        const cols = 36
        const rows = 20
        const spacingX = w / cols
        const spacingY = h / rows
        const radius = Math.min(spacingX, spacingY) * 0.35
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const jitterX = (Math.random() - 0.5) * spacingX * 0.6
            const jitterY = (Math.random() - 0.5) * spacingY * 0.6
            const body = Matter.Bodies.circle(
              x * spacingX + spacingX * 0.5 + jitterX,
              y * spacingY + spacingY * 0.5 + jitterY,
              radius,
              {
                frictionAir: 0.02,
                restitution: 0.9,
              },
            )
            Matter.Body.setVelocity(body, {
              x: (Math.random() - 0.5) * 4,
              y: (Math.random() - 0.5) * 4,
            })
            bodies.push(body)
          }
        }
        Matter.World.add(engine.world, bodies)
      }

      makeBodies()
      window.addEventListener('resize', makeBodies)

      const render = () => {
        const w = canvas.clientWidth || 800
        const h = canvas.clientHeight || 600
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w
          canvas.height = h
          makeBodies()
        }

        const pixelSize = 10
        const dw = Math.max(1, Math.floor(w / pixelSize))
        const dh = Math.max(1, Math.floor(h / pixelSize))
        offscreen.width = dw
        offscreen.height = dh

        // 镜像采样
        offCtx.save()
        offCtx.clearRect(0, 0, dw, dh)
        offCtx.translate(dw, 0)
        offCtx.scale(-1, 1)
        offCtx.drawImage(video, 0, 0, dw, dh)
        offCtx.restore()

        const frame = offCtx.getImageData(0, 0, dw, dh)
        const data = frame.data
        const prev = prevFrameRef.current

        // Compute motion signal and apply pulses to nearby bodies
        if (engine.world.bodies.length > 0) {
          const bodies = engine.world.bodies.filter((b) => !b.isStatic)
          for (let py = 0; py < dh; py++) {
            for (let px = 0; px < dw; px++) {
              const idx = (py * dw + px) * 4
              const r = data[idx]
              const g = data[idx + 1]
              const b = data[idx + 2]

              let motion = 0
              if (prev && prev.length === data.length) {
                const dr = r - prev[idx]
                const dg = g - prev[idx + 1]
                const db = b - prev[idx + 2]
                const diff = Math.abs(dr) + Math.abs(dg) + Math.abs(db)
                motion = Math.min(1, diff / (3 * 128))
              }
              if (motion < 0.2) continue

              const cx = (px + 0.5) * pixelSize
              const cy = (py + 0.5) * pixelSize
              const forceMag = 0.0008 * (1 + motion * 2)

              // Apply force to a sampled subset of bodies for performance
              for (let k = 0; k < 6; k++) {
                const id = ((px + py * dw + k * 13) % bodies.length + bodies.length) % bodies.length
                const body = bodies[id]
                const dx = body.position.x - cx
                const dy = body.position.y - cy
                const dist2 = dx * dx + dy * dy + 1e-4
                const invDist = 1 / Math.sqrt(dist2)
                const fx = (dx * invDist) * forceMag
                const fy = (dy * invDist) * forceMag
                Matter.Body.applyForce(body, body.position, { x: fx, y: fy })
              }
            }
          }
        }

        // 热噪声
        engine.world.bodies.forEach((b: Matter.Body) => {
          if (b.isStatic) return
          Matter.Body.applyForce(b, b.position, {
            x: (Math.random() - 0.5) * 0.0002,
            y: (Math.random() - 0.5) * 0.0002,
          })
        })

        Matter.Engine.update(engine, 1000 / 60)

        // 绘制
        ctx.fillStyle = '#050816'
        ctx.fillRect(0, 0, w, h)
        ctx.save()
        ctx.globalAlpha = 0.03
        ctx.drawImage(offscreen, 0, 0, dw, dh, 0, 0, w, h)
        ctx.restore()

        ctx.fillStyle = 'rgba(140, 220, 255, 0.6)'
        engine.world.bodies.forEach((b: Matter.Body) => {
          if (b.isStatic) return
          ctx.beginPath()
          ctx.arc(b.position.x, b.position.y, (b.circleRadius || 4) * 0.9, 0, Math.PI * 2)
          ctx.fill()
        })

        if (!prev || prev.length !== data.length) {
          prevFrameRef.current = new Uint8ClampedArray(data)
        } else {
          prev.set(data)
        }

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
      Matter.Engine.clear(engine)
      const video = videoRef.current
      if (video && video.srcObject instanceof MediaStream) {
        video.srcObject.getTracks().forEach((t) => t.stop())
      }
      prevFrameRef.current = null
    }
  }, [])

  return <canvas ref={canvasRef} className="pixel-canvas" />
}
