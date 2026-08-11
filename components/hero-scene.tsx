'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const GOLD = '#c9a227'
const FOREST = '#081408'

/* A simple stylized folding chair built from primitives. */
function chairMatrix(i: number, total: number) {
  // Arrange chairs in a shallow amphitheatre arc, rows curving back.
  const perRow = 10
  const row = Math.floor(i / perRow)
  const col = i % perRow
  const x = (col - (perRow - 1) / 2) * 1.15
  const z = -row * 1.25 - 1
  const y = row * 0.28
  const m = new THREE.Matrix4()
  const rot = new THREE.Matrix4().makeRotationY((x / 14) * -0.6)
  m.makeTranslation(x, y, z)
  m.multiply(rot)
  return m
}

function InstancedChairs({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const count = 50
  const seatRef = useRef<THREE.InstancedMesh>(null)
  const backRef = useRef<THREE.InstancedMesh>(null)

  const matrices = useMemo(
    () => Array.from({ length: count }, (_, i) => chairMatrix(i, count)),
    [],
  )

  const backOffset = useMemo(() => {
    const m = new THREE.Matrix4()
    m.makeTranslation(0, 0.55, -0.42)
    return m
  }, [])

  useFrame(() => {
    const progress = scrollRef.current
    // Start with a partial house so the opening frame isn't empty,
    // then fill the rest as the visitor scrolls (all revealed by ~85%).
    const min = 12
    const revealed = Math.round(
      min + THREE.MathUtils.clamp(progress / 0.85, 0, 1) * (count - min),
    )
    const seat = seatRef.current
    const back = backRef.current
    if (!seat || !back) return

    for (let i = 0; i < count; i++) {
      const base = matrices[i]
      const shown = i < revealed
      const scale = shown ? 1 : 0.001
      const s = new THREE.Matrix4().makeScale(scale, scale, scale)
      const seatM = base.clone().multiply(s)
      seat.setMatrixAt(i, seatM)
      const backM = base.clone().multiply(backOffset).multiply(s)
      back.setMatrixAt(i, backM)
    }
    seat.instanceMatrix.needsUpdate = true
    back.instanceMatrix.needsUpdate = true
  })

  return (
    <group>
      <instancedMesh ref={seatRef} args={[undefined, undefined, count]} castShadow receiveShadow>
        <boxGeometry args={[0.55, 0.08, 0.55]} />
        <meshStandardMaterial color="#5a4a2a" roughness={0.55} metalness={0.35} />
      </instancedMesh>
      <instancedMesh ref={backRef} args={[undefined, undefined, count]} castShadow>
        <boxGeometry args={[0.55, 0.7, 0.08]} />
        <meshStandardMaterial color="#5a4a2a" roughness={0.55} metalness={0.35} />
      </instancedMesh>
    </group>
  )
}

/* The always-empty chair up front, pulsing gold at ~60bpm. */
function FinalChair() {
  const matRef = useRef<THREE.MeshStandardMaterial>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    // 60bpm = 1 beat/sec -> sine at 2π rad/s.
    const beat = (Math.sin(state.clock.elapsedTime * Math.PI * 2) + 1) / 2
    const intensity = 0.4 + beat * 1.6
    if (matRef.current) matRef.current.emissiveIntensity = intensity
    if (lightRef.current) lightRef.current.intensity = 2 + beat * 6
  })

  return (
    <group position={[0, -0.1, 2.2]}>
      <mesh castShadow>
        <boxGeometry args={[0.6, 0.09, 0.6]} />
        <meshStandardMaterial
          ref={matRef}
          color={GOLD}
          emissive={GOLD}
          emissiveIntensity={1}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
      <mesh position={[0, 0.6, -0.45]} castShadow>
        <boxGeometry args={[0.6, 0.75, 0.09]} />
        <meshStandardMaterial
          color={GOLD}
          emissive={GOLD}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
      <pointLight ref={lightRef} color={GOLD} distance={6} position={[0, 0.8, 0.3]} />
    </group>
  )
}

/* Spotlight that follows the cursor X, damped. */
function MouseSpotlight() {
  const lightRef = useRef<THREE.SpotLight>(null)
  const targetRef = useRef<THREE.Object3D>(null)
  const { pointer } = useThree()

  useFrame(() => {
    const target = targetRef.current
    if (!target || !lightRef.current) return
    const desiredX = pointer.x * 6
    target.position.x = THREE.MathUtils.lerp(target.position.x, desiredX, 0.06)
    lightRef.current.target = target
  })

  return (
    <>
      <object3D ref={targetRef} position={[0, 0, -2]} />
      <spotLight
        ref={lightRef}
        position={[0, 9, 4]}
        angle={0.42}
        penumbra={1}
        intensity={220}
        color={GOLD}
        castShadow
        distance={30}
        shadow-mapSize={[1024, 1024]}
      />
    </>
  )
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
      <planeGeometry args={[60, 60]} />
      <meshStandardMaterial color="#0a1a0c" roughness={1} metalness={0} />
    </mesh>
  )
}

export function HeroScene({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 3.4, 8.5], fov: 48 }}
      gl={{ antialias: true }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color(FOREST)
        scene.fog = new THREE.Fog(FOREST, 6, 22)
      }}
    >
      <ambientLight intensity={0.4} color="#6a5a3a" />
      {/* Warm key from stage-right + cool rim to sculpt the chairs */}
      <directionalLight position={[6, 6, 4]} intensity={1.1} color="#e6c04a" />
      <directionalLight position={[-5, 3, 2]} intensity={0.5} color="#4a6a58" />
      <MouseSpotlight />
      <InstancedChairs scrollRef={scrollRef} />
      <FinalChair />
      <Floor />
    </Canvas>
  )
}
