'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const GOLD = new THREE.Color('#c9a227')
const GOLD_BRIGHT = new THREE.Color('#f2d879')

function Galaxy({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const flashRef = useRef(0)

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Spiral galaxy: arms = instrument categories.
      const t = i / count
      const angle = t * Math.PI * 20
      const radius = 0.6 + t * 5
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.4
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5
      positions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.4
      const c = GOLD.clone().lerp(GOLD_BRIGHT, Math.random() * 0.5)
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    // Periodic "new donation" flash sweeps brightness up then decays.
    flashRef.current -= delta
    if (flashRef.current <= 0 && Math.random() < 0.012) flashRef.current = 1
    const mat = pointsRef.current.material as THREE.PointsMaterial
    mat.opacity = 0.65 + Math.max(flashRef.current, 0) * 0.35
    mat.size = 0.05 + Math.max(flashRef.current, 0) * 0.04
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function ImpactParticles({ donors = 6200 }: { donors?: number }) {
  const count = Math.min(donors, 8000)
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 4.5, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Galaxy count={count} />
    </Canvas>
  )
}
