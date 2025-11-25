import * as THREE from 'three'
import { initCameraStream } from './camera'
import { MirrorMode, type ForceField } from './types'
import { updateFluidMode } from './modes/fluid'

// Legacy particle mirror controller (Three.js) — not used in current UI
export class ParticleMirror {
  private container: HTMLElement
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.OrthographicCamera
  private points: THREE.Points | null = null

  private video: HTMLVideoElement | null = null
  private videoCanvas: HTMLCanvasElement
  private videoCtx: CanvasRenderingContext2D

  private positions!: THREE.BufferAttribute
  private colors!: THREE.BufferAttribute
  private targets!: Float32Array
  private velocities!: Float32Array

  private particleCount = 0

  private mode: MirrorMode = MirrorMode.Fluid
  private frozen = false

  private forceField: ForceField = {
    x: 0,
    y: 0,
    strength: 0,
    active: false,
  }

  private lastTime = performance.now()
  private rafId: number | null = null

  constructor(container: HTMLElement) {
    this.container = container

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.renderer.setClearColor(0x050816, 1)
    const canvas = this.renderer.domElement
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.zIndex = '1'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    container.appendChild(canvas)

    this.scene = new THREE.Scene()

    const width = container.clientWidth
    const height = container.clientHeight
    this.camera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      0.1,
      10,
    )
    this.camera.position.z = 1

    this.videoCanvas = document.createElement('canvas')
    this.videoCanvas.width = 320
    this.videoCanvas.height = 240
    const ctx = this.videoCanvas.getContext('2d', {
      willReadFrequently: true,
    } as CanvasRenderingContext2DSettings)
    if (!ctx) throw new Error('Cannot create video canvas context')
    this.videoCtx = ctx

    window.addEventListener('resize', this.handleResize)
  }

  async init() {
    this.video = await initCameraStream()
    this.attachVideoLayer()
    await this.buildParticles()
    this.lastTime = performance.now()
    this.animate()
  }

  dispose() {
    window.removeEventListener('resize', this.handleResize)
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    this.renderer.dispose()
    if (this.points) {
      this.scene.remove(this.points)
      this.points.geometry.dispose()
      ;(this.points.material as THREE.Material).dispose()
    }
    if (this.video && this.video.srcObject instanceof MediaStream) {
      this.video.srcObject.getTracks().forEach((t) => t.stop())
    }
  }

  setMode(mode: MirrorMode) {
    this.mode = mode
  }

  toggleFreeze() {
    this.frozen = !this.frozen
  }

  updateForceField(x: number, y: number, strength: number, active: boolean) {
    this.forceField.x = x
    this.forceField.y = y
    this.forceField.strength = strength
    this.forceField.active = active
  }

  takeScreenshot(): string {
    return this.renderer.domElement.toDataURL('image/png')
  }

  private handleResize = () => {
    const width = this.container.clientWidth
    const height = this.container.clientHeight
    this.renderer.setSize(width, height)
    this.camera.left = -width / 2
    this.camera.right = width / 2
    this.camera.top = height / 2
    this.camera.bottom = -height / 2
    this.camera.updateProjectionMatrix()
  }

  // Overlay raw video under particles at low opacity for reference
  private attachVideoLayer() {
    if (!this.video) return
    const videoEl = this.video
    const vStyle = videoEl.style
    vStyle.position = 'absolute'
    vStyle.inset = '0'
    vStyle.width = '100%'
    vStyle.height = '100%'
    vStyle.objectFit = 'cover'
    vStyle.opacity = '0.1'
    vStyle.pointerEvents = 'none'
    vStyle.zIndex = '0'
    // 如果想要镜像效果，可以解开下一行
    // vStyle.transform = 'scaleX(-1)'

    this.container.insertBefore(videoEl, this.renderer.domElement)
  }

  private async buildParticles() {
    const width = this.videoCanvas.width
    const height = this.videoCanvas.height

    const sampleStep = 2
    const maxParticles =
      ((width / sampleStep) * (height / sampleStep) * 0.75) | 0

    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(maxParticles * 3)
    const colors = new Float32Array(maxParticles * 3)
    const targets = new Float32Array(maxParticles * 3)
    const velocities = new Float32Array(maxParticles * 3)

    this.particleCount = maxParticles

    const widthWorld = this.container.clientWidth
    const heightWorld = this.container.clientHeight
    const sx = widthWorld / width
    const sy = heightWorld / height

    let i = 0
    for (let y = 0; y < height; y += sampleStep) {
      for (let x = 0; x < width; x += sampleStep) {
        const idx = i * 3
        const wx = (x - width / 2) * sx
        const wy = (height / 2 - y) * sy

        positions[idx] = wx + (Math.random() - 0.5) * 20
        positions[idx + 1] = wy + (Math.random() - 0.5) * 20
        positions[idx + 2] = 0

        targets[idx] = wx
        targets[idx + 1] = wy
        targets[idx + 2] = 0

        velocities[idx] = 0
        velocities[idx + 1] = 0
        velocities[idx + 2] = 0

        colors[idx] = 0.2
        colors[idx + 1] = 0.8
        colors[idx + 2] = 1.0

        i++
        if (i >= maxParticles) break
      }
      if (i >= maxParticles) break
    }

    const positionAttr = new THREE.BufferAttribute(positions, 3)
    const colorAttr = new THREE.BufferAttribute(colors, 3)
    geometry.setAttribute('position', positionAttr)
    geometry.setAttribute('color', colorAttr)

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const points = new THREE.Points(geometry, material)
    this.scene.add(points)

    this.points = points
    this.positions = positionAttr
    this.colors = colorAttr
    this.targets = targets
    this.velocities = velocities
  }

  private sampleVideoToTargets() {
    if (!this.video) return
    const { video, videoCanvas, videoCtx } = this

    videoCtx.drawImage(video, 0, 0, videoCanvas.width, videoCanvas.height)
    const frame = videoCtx.getImageData(0, 0, videoCanvas.width, videoCanvas.height)
    const data = frame.data

    const width = videoCanvas.width
    const height = videoCanvas.height

    const widthWorld = this.container.clientWidth
    const heightWorld = this.container.clientHeight
    const sx = widthWorld / width
    const sy = heightWorld / height
    const count = this.particleCount
    let i = 0

    for (let y = 0; y < height; y += 2) {
      for (let x = 0; x < width; x += 2) {
        if (i >= count) return
        const px = (y * width + x) * 4
        const r = data[px]
        const g = data[px + 1]
        const b = data[px + 2]

        const brightness = (r + g + b) / (3 * 255)

        // 只保留较亮的像素，让轮廓更明显
        if (brightness < 0.55) {
          continue
        }

        const idx = i * 3
        const wx = (x - width / 2) * sx
        const wy = (height / 2 - y) * sy

        this.targets[idx] = wx
        this.targets[idx + 1] = wy

        const colorArray = this.colors.array as Float32Array
        const intensity = 0.2 + brightness * 0.8
        colorArray[idx] = intensity * 0.3
        colorArray[idx + 1] = intensity * 0.8
        colorArray[idx + 2] = intensity

        i++
      }
    }

    this.colors.needsUpdate = true
  }

  private animate = () => {
    this.rafId = requestAnimationFrame(this.animate)
    const now = performance.now()
    const dt = Math.min((now - this.lastTime) / 1000, 0.05)
    this.lastTime = now

    if (!this.frozen) {
      this.sampleVideoToTargets()
      if (this.points) {
        switch (this.mode) {
          case MirrorMode.Fluid:
          default:
            updateFluidMode({
              positions: this.positions,
              targets: this.targets,
              velocities: this.velocities,
              forceField: this.forceField,
              dt,
            })
            break
        }
      }
    }

    this.renderer.render(this.scene, this.camera)
  }
}
