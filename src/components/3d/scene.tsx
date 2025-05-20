"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Float } from "@react-three/drei"
import { Mesh } from "three"

interface BoxProps {
  position: [number, number, number]
  color?: string
  scale?: number
}

function Box(props: BoxProps) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(t / 2) / 4
    ref.current.rotation.y = Math.sin(t / 4) / 4
    ref.current.position.y = Math.sin(t / 1.5) / 2
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color || "#9333ea"} />
    </mesh>
  )
}

interface FloatingTextProps {
  children: React.ReactNode
  position: [number, number, number]
  rotation?: [number, number, number]
  fontSize?: number
  color?: string
  maxWidth?: number
  textAlign?: "center" | "left" | "right"
}

function FloatingText({ children, position, rotation, ...props }: FloatingTextProps) {
  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={2}>
      <Text
        position={position}
        rotation={rotation}
        fontSize={0.5}
        color="#9333ea"
        maxWidth={2}
        textAlign="center"
        {...props}
      >
        {children}
      </Text>
    </Float>
  )
}

export default function Scene() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Box position={[0, -1, 0]} color="#9333ea" />
        <Box position={[2, 0, -2]} color="#ec4899" scale={0.8} />
        <Box position={[-2, 0, -2]} color="#8b5cf6" scale={0.6} />

        <FloatingText position={[-2, 1.5, 0]} rotation={[0, -0.2, 0]}>
          React
        </FloatingText>

        <FloatingText position={[2, 1.5, 0]} rotation={[0, 0.2, 0]}>
          Next.js
        </FloatingText>

        <FloatingText position={[0, 2, 0]}>Developer</FloatingText>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  )
}