export const MirrorMode = {
  Fluid: 'fluid',
  Sand: 'sand',
  Stardust: 'stardust',
  Glyph: 'glyph',
} as const

export type MirrorMode = (typeof MirrorMode)[keyof typeof MirrorMode]

export interface ForceField {
  x: number
  y: number
  strength: number
  active: boolean
}
