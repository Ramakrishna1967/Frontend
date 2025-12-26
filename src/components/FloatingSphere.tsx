import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    )
}

function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null)
    const particleCount = 500

    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
            pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#3b82f6"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

interface FloatingSphereProps {
    className?: string
}

const FloatingSphere = ({ className }: FloatingSphereProps) => {
    return (
        <div className={className} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
                <AnimatedSphere />
                <ParticleField />
            </Canvas>
        </div>
    )
}

export default FloatingSphere
