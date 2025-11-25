import type { BufferAttribute } from 'three'
import type { ForceField } from '../types'

// Fluid mode: particles ease toward targets and respond to a simple force field
export function updateFluidMode(params: {
  positions: BufferAttribute
  targets: Float32Array
  velocities: Float32Array
  forceField: ForceField
  dt: number
}) {
  const { positions, targets, velocities, forceField, dt } = params
  const posArray = positions.array as Float32Array

  const damping = 0.85
  const stiffness = 4.5

  const fx = forceField.x
  const fy = forceField.y
  const fStrength = forceField.active ? forceField.strength : 0

  const count = positions.count
  for (let i = 0; i < count; i++) {
    const idx = i * 3
    const x = posArray[idx]
    const y = posArray[idx + 1]

    const tx = targets[idx]
    const ty = targets[idx + 1]

    const vx = velocities[idx]
    const vy = velocities[idx + 1]

    // 朝向目标位置的弹簧力
    const dx = tx - x
    const dy = ty - y

    let ax = dx * stiffness
    let ay = dy * stiffness

    if (fStrength !== 0) {
      const ddx = x - fx
      const ddy = y - fy
      const distSq = ddx * ddx + ddy * ddy + 0.0001
      const invDist = 1 / Math.sqrt(distSq)
      const dirx = ddx * invDist
      const diry = ddy * invDist

      ax += dirx * fStrength
      ay += diry * fStrength
    }

    const nvx = (vx + ax * dt) * damping
    const nvy = (vy + ay * dt) * damping

    velocities[idx] = nvx
    velocities[idx + 1] = nvy

    posArray[idx] = x + nvx * dt
    posArray[idx + 1] = y + nvy * dt
  }

  positions.needsUpdate = true
}
