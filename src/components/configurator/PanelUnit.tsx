import type { FrameFinish, FloraType, LightingMode } from '../../types/configurator'
import FloraGeometry from './FloraGeometry'

interface Props {
  position: [number, number, number]
  finish: FrameFinish
  flora: FloraType
  lighting: LightingMode
}

const finishMaterials: Record<FrameFinish, { color: string; metalness: number; roughness: number }> = {
  'matte-black': { color: '#1C1C1E', metalness: 0.15, roughness: 0.92 },
  'brushed-aluminium': { color: '#8C9198', metalness: 0.75, roughness: 0.35 },
  'white': { color: '#EBEBEB', metalness: 0.05, roughness: 0.82 },
}

const lightingColors: Record<LightingMode, { color: string; intensity: number }> = {
  ambient: { color: '#FFE8C0', intensity: 1.5 },
  task: { color: '#D6ECFF', intensity: 2.5 },
  bioluminescent: { color: '#39FF14', intensity: 3.0 },
}

export default function PanelUnit({ position, finish, flora, lighting }: Props) {
  const mat = finishMaterials[finish]
  const light = lightingColors[lighting]

  return (
    <group position={position}>
      {/* Outer frame */}
      <mesh>
        <boxGeometry args={[1.0, 1.5, 0.18]} />
        <meshStandardMaterial color={mat.color} metalness={mat.metalness} roughness={mat.roughness} />
      </mesh>

      {/* Inner recess — very dark background */}
      <mesh position={[0, 0, 0.052]}>
        <boxGeometry args={[0.82, 1.32, 0.09]} />
        <meshStandardMaterial color="#070A0D" roughness={1.0} metalness={0} />
      </mesh>

      {/* Flora */}
      <FloraGeometry type={flora} />

      {/* Interior point light — illuminates flora */}
      <pointLight
        position={[0, -0.3, 0.22]}
        color={light.color}
        intensity={light.intensity}
        distance={2.0}
        decay={2}
      />

      {/* LED strip — emissive bar at bottom of recess */}
      <mesh position={[0, -0.625, 0.065]}>
        <boxGeometry args={[0.68, 0.022, 0.022]} />
        <meshStandardMaterial
          color={light.color}
          emissive={light.color}
          emissiveIntensity={2.5}
          roughness={0.2}
          metalness={0}
        />
      </mesh>

      {/* Subtle top accent line */}
      <mesh position={[0, 0.735, 0.065]}>
        <boxGeometry args={[0.68, 0.01, 0.01]} />
        <meshStandardMaterial
          color="#00F2FF"
          emissive="#00F2FF"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0}
        />
      </mesh>
    </group>
  )
}
