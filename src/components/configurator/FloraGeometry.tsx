import type { FloraType } from '../../types/configurator'

interface Props {
  type: FloraType
}

export default function FloraGeometry({ type }: Props) {
  if (type === 'tropical') {
    return (
      <group position={[0, -0.2, 0.06]}>
        {/* Stem */}
        <mesh>
          <cylinderGeometry args={[0.02, 0.025, 0.7, 8]} />
          <meshStandardMaterial color="#2D3B28" roughness={0.9} metalness={0} />
        </mesh>
        {/* Primary leaf mass */}
        <mesh position={[0, 0.42, 0]}>
          <sphereGeometry args={[0.2, 12, 12]} />
          <meshStandardMaterial color="#3D7A52" roughness={0.85} metalness={0} />
        </mesh>
        {/* Secondary leaf clusters */}
        <mesh position={[0.13, 0.32, 0.03]}>
          <sphereGeometry args={[0.14, 10, 10]} />
          <meshStandardMaterial color="#2D5A3D" roughness={0.85} metalness={0} />
        </mesh>
        <mesh position={[-0.11, 0.36, -0.02]}>
          <sphereGeometry args={[0.13, 10, 10]} />
          <meshStandardMaterial color="#4A8E60" roughness={0.85} metalness={0} />
        </mesh>
      </group>
    )
  }

  if (type === 'desert') {
    return (
      <group position={[0, -0.3, 0.06]}>
        {/* Cactus body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.085, 0.095, 0.55, 8]} />
          <meshStandardMaterial color="#6B8E4E" roughness={0.9} metalness={0} />
        </mesh>
        {/* Cactus top cap */}
        <mesh position={[0, 0.29, 0]}>
          <sphereGeometry args={[0.085, 8, 8]} />
          <meshStandardMaterial color="#6B8E4E" roughness={0.9} metalness={0} />
        </mesh>
        {/* Left arm */}
        <group position={[-0.16, 0.04, 0]} rotation={[0, 0, 0.75]}>
          <mesh>
            <cylinderGeometry args={[0.04, 0.045, 0.22, 8]} />
            <meshStandardMaterial color="#5A7A3D" roughness={0.9} metalness={0} />
          </mesh>
          <mesh position={[0, 0.12, 0]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial color="#5A7A3D" roughness={0.9} metalness={0} />
          </mesh>
        </group>
        {/* Right arm */}
        <group position={[0.15, 0.08, 0]} rotation={[0, 0, -0.65]}>
          <mesh>
            <cylinderGeometry args={[0.038, 0.043, 0.20, 8]} />
            <meshStandardMaterial color="#6B8E4E" roughness={0.9} metalness={0} />
          </mesh>
          <mesh position={[0, 0.11, 0]}>
            <sphereGeometry args={[0.038, 8, 8]} />
            <meshStandardMaterial color="#6B8E4E" roughness={0.9} metalness={0} />
          </mesh>
        </group>
      </group>
    )
  }

  // Temperate — cluster of spheres at varying heights
  const spheres: [number, number, number, number][] = [
    [0, 0.06, 0, 0.12],
    [0.14, -0.02, 0.02, 0.09],
    [-0.12, 0.02, -0.01, 0.10],
    [0.06, 0.18, 0.03, 0.085],
    [-0.06, 0.16, -0.02, 0.095],
    [0.17, 0.13, 0, 0.075],
    [-0.09, 0.23, 0.04, 0.08],
  ]

  return (
    <group position={[0, -0.35, 0.06]}>
      {spheres.map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[r, 10, 10]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#3A7A4A' : '#2D6040'} roughness={0.85} metalness={0} />
        </mesh>
      ))}
    </group>
  )
}
