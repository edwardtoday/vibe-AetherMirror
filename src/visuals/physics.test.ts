import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { updateFluidMode } from './modes/fluid'

describe('updateFluidMode', () => {
  it('moves particles towards targets', () => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(3)
    const targets = new Float32Array(3)
    const velocities = new Float32Array(3)

    positions[0] = 0
    positions[1] = 0
    targets[0] = 10
    targets[1] = 0

    const attr = new THREE.BufferAttribute(positions, 3)
    geometry.setAttribute('position', attr)

    updateFluidMode({
      positions: attr,
      targets,
      velocities,
      forceField: { x: 0, y: 0, strength: 0, active: false },
      dt: 0.016,
    })

    expect((attr.array as Float32Array)[0]).toBeGreaterThan(0)
  })
}
)

