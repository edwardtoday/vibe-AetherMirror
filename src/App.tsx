import './App.css'
import { useEffect, useState } from 'react'
import { PixelatedVideo } from './visuals/PixelatedVideo'
import { MatterGas } from './visuals/MatterGas'
import { ThreeGas } from './visuals/ThreeGas'
import { FlowFieldGas } from './visuals/FlowFieldGas'

const modeNames: Record<number, string> = {
  1: 'Simple Gas (Canvas)',
  2: 'Physics Gas (Matter.js)',
  3: 'Three.js Points',
  4: 'Flow Field',
}

function App() {
  const [mode, setMode] = useState<number>(1)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '1') setMode(1)
      if (e.key === '2') setMode(2)
      if (e.key === '3') setMode(3)
      if (e.key === '4') setMode(4)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="app-root">
      <div className="mirror-container">
        {mode === 1 && <PixelatedVideo />}
        {mode === 2 && <MatterGas />}
        {mode === 3 && <ThreeGas />}
        {mode === 4 && <FlowFieldGas />}
      </div>
      <div className="overlay">
        <div className="overlay-inner">
          <h1>Particle Mirror</h1>
          <p>Press 1/2/3/4 to compare different physics/rendering modes.</p>
          <ul>
            <li>1: Simple gas (Canvas)</li>
            <li>2: Physics gas (Matter.js)</li>
            <li>3: Three.js Points</li>
            <li>4: Flow Field</li>
          </ul>
          <p className="mode-label">Current mode: {modeNames[mode]}</p>
        </div>
      </div>
    </div>
  )
}

export default App
