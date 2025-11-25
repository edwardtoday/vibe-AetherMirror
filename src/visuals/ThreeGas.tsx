import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { initCameraStream } from './camera'

// Mode 3: Three.js Points render with simple dynamics + neighbor repulsion
export function ThreeGas() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const prevFrameRef = useRef<Uint8ClampedArray | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    container.appendChild(renderer.domElement)

    const camera = new THREE.OrthographicCamera(
      -container.clientWidth / 2,
      container.clientWidth / 2,
      container.clientHeight / 2,
      -container.clientHeight / 2,
      0.1,
      10,
    )
    camera.position.z = 1

    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 2)
    const basePos = new Float32Array(particleCount * 2)

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      size: 3,
      color: new THREE.Color(0.6, 0.9, 1.0),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    const init = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3
        const x = (Math.random() - 0.5) * w
        const y = (Math.random() - 0.5) * h
        positions[idx] = x
        positions[idx + 1] = y
        positions[idx + 2] = 0
        basePos[i * 2] = x
        basePos[i * 2 + 1] = y
        velocities[i * 2] = (Math.random() - 0.5) * 30
        velocities[i * 2 + 1] = (Math.random() - 0.5) * 30
      }
      geo.attributes.position.needsUpdate = true
      camera.left = -w / 2
      camera.right = w / 2
      camera.top = h / 2
      camera.bottom = -h / 2
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    init()
    window.addEventListener('resize', init)

    let video: HTMLVideoElement | null = null
    let offscreen: HTMLCanvasElement | null = null
    let offCtx: CanvasRenderingContext2D | null = null

    initCameraStream()
      .then((v) => {
        video = v
        videoRef.current = v
        offscreen = document.createElement('canvas')
        offCtx = offscreen.getContext('2d')
        if (offCtx) {
          offscreen.width = 200
          offscreen.height = 120
        }
      })
      .catch((e) => console.error(e))

    const animate = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      const dt = 1 / 60

      // 注入运动扰动
      if (video && offCtx && offscreen) {
        offCtx.save()
        offCtx.clearRect(0, 0, offscreen.width, offscreen.height)
        offCtx.translate(offscreen.width, 0)
        offCtx.scale(-1, 1)
        offCtx.drawImage(video, 0, 0, offscreen.width, offscreen.height)
        offCtx.restore()
        const frame = offCtx.getImageData(0, 0, offscreen.width, offscreen.height)
        const data = frame.data
        const prev = prevFrameRef.current
        for (let py = 0; py < offscreen.height; py += 2) {
          for (let px = 0; px < offscreen.width; px += 2) {
            const idx = (py * offscreen.width + px) * 4
            let motion = 0
            if (prev && prev.length === data.length) {
              const dr = data[idx] - prev[idx]
              const dg = data[idx + 1] - prev[idx + 1]
              const db = data[idx + 2] - prev[idx + 2]
              const diff = Math.abs(dr) + Math.abs(dg) + Math.abs(db)
              motion = Math.min(1, diff / (3 * 128))
            }
            if (motion > 0.2) {
              const cx = (px / offscreen.width - 0.5) * w
              const cy = (py / offscreen.height - 0.5) * h
              for (let k = 0; k < 8; k++) {
                const id = (idx + k * 17) % particleCount
                const vx = velocities[id * 2]
                const vy = velocities[id * 2 + 1]
                const dx = positions[id * 3] - cx
                const dy = positions[id * 3 + 1] - cy
                const dist2 = dx * dx + dy * dy + 1e-3
                const inv = 1 / Math.sqrt(dist2)
                velocities[id * 2] = vx + (dx * inv) * 80 * motion * dt
                velocities[id * 2 + 1] = vy + (dy * inv) * 80 * motion * dt
              }
            }
          }
        }
        if (!prev || prev.length !== data.length) {
          prevFrameRef.current = new Uint8ClampedArray(data)
        } else {
          prev.set(data)
        }
      }

      // 粒子动力学：阻尼 + 邻域排斥 + 边界反弹 + 热噪声
      const damping = 0.99
      const thermal = 40
      const radius = 5
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3
        let x = positions[idx]
        let y = positions[idx + 1]
        let vx = velocities[i * 2]
        let vy = velocities[i * 2 + 1]

        vx += (Math.random() - 0.5) * thermal
        vy += (Math.random() - 0.5) * thermal

        // slow flow field to keep movement even when camera is still
        const flowX = Math.sin(y * 0.003 + dt * 60) * 30
        const flowY = Math.cos(x * 0.003 + dt * 50) * 30
        vx += flowX * dt
        vy += flowY * dt

        // 简单的局部排斥（采样少量邻居）
        for (let k = 0; k < 4; k++) {
          const j = (i + k * 73) % particleCount
          if (j === i) continue
          const dx = x - positions[j * 3]
          const dy = y - positions[j * 3 + 1]
          const dist2 = dx * dx + dy * dy
          if (dist2 < (radius * 3) ** 2 && dist2 > 1e-2) {
            const inv = 1 / Math.sqrt(dist2)
            vx += dx * inv * 50 * dt
            vy += dy * inv * 50 * dt
          }
        }

        vx *= damping
        vy *= damping
        x += vx * dt
        y += vy * dt

        // 边界
        if (x < -w / 2) {
          x = -w / 2
          vx = Math.abs(vx)
        } else if (x > w / 2) {
          x = w / 2
          vx = -Math.abs(vx)
        }
        if (y < -h / 2) {
          y = -h / 2
          vy = Math.abs(vy)
        } else if (y > h / 2) {
          y = h / 2
          vy = -Math.abs(vy)
        }

        positions[idx] = x
        positions[idx + 1] = y
        velocities[i * 2] = vx
        velocities[i * 2 + 1] = vy
      }

      geo.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      window.removeEventListener('resize', init)
      if (videoRef.current && videoRef.current.srcObject instanceof MediaStream) {
        videoRef.current.srcObject.getTracks().forEach((t) => t.stop())
      }
    }
  }, [])

  return <div ref={containerRef} className="mirror-container" />
}
