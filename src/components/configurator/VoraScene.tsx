import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import type { Config, PanelLayout } from '../../types/configurator'
import PanelUnit from './PanelUnit'

interface Props {
  config: Config
}

const panelPositions: Record<PanelLayout, [number, number, number][]> = {
  '1': [[0, 0, 0]],
  '2': [[-1.1, 0, 0], [1.1, 0, 0]],
  '4': [
    [-1.1, 0.85, 0],
    [1.1, 0.85, 0],
    [-1.1, -0.85, 0],
    [1.1, -0.85, 0],
  ],
}

function Scene({ config }: Props) {
  const positions = panelPositions[config.panels]

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} />
      <directionalLight position={[-4, 3, -3]} intensity={0.3} color="#C0D8FF" />
      <Environment preset="studio" />

      {positions.map((pos, i) => (
        <PanelUnit
          key={`${config.panels}-${i}`}
          position={pos}
          finish={config.finish}
          flora={config.flora}
          lighting={config.lighting}
        />
      ))}

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.4}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  )
}

export default function VoraScene({ config }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5], fov: 45 }}
      style={{ background: '#0D0F12', width: '100%', height: '100%', display: 'block' }}
      gl={{ antialias: true, alpha: false }}
    >
      <Scene config={config} />
    </Canvas>
  )
}
