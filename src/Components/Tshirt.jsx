import { useState, useRef, useContext } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, useGLTF } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import modecontext from '../context/modecontext'




function TshirtModel({ color }) {
  // Load OBJ model
  const obj = useLoader(OBJLoader, '/Models/Tshirt.obj')
  const meshRef = useRef()
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [rotationPaused, setRotationPaused] = useState(false)

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Apply material to all meshes inside OBJ
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.3,
        metalness: 0.1,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        envMapIntensity: 1.5,
        transmission: 0.05, // Slight transparency for fabric look
      })
      // Add shadows
      child.castShadow = true
      child.receiveShadow = true
    }
  })

  // Animate the model
  useFrame(({ clock }) => {
    if (meshRef.current && !rotationPaused) {
      // Smoother rotation
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3 + Math.PI / 8
    }
    if (groupRef.current) {
      // Gentle floating effect
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <primitive
        ref={meshRef}
        object={obj}
        scale={isMobile ? [0.025, 0.025, 0.025] : [0.04, 0.04, 0.04]}
        position={isMobile ? [0, -0.6, 0] : [0, -0.8, 0]}
        onPointerOver={() => {
          setHovered(true)
          setRotationPaused(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          setRotationPaused(false)
          document.body.style.cursor = 'auto'
        }}
        onClick={() => {
          // Add a quick spin animation when clicked
          if (meshRef.current) {
            const currentRotation = meshRef.current.rotation.y
            const targetRotation = currentRotation + Math.PI * 2
            const startTime = Date.now()
            const duration = 1000 // 1 second
            
            const animate = () => {
              const now = Date.now()
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function for smooth animation
              const easeOut = (t) => 1 - Math.pow(1 - t, 3)
              
              if (meshRef.current) {
                meshRef.current.rotation.y = currentRotation + (targetRotation - currentRotation) * easeOut(progress)
              }
              
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setRotationPaused(false)
              }
            }
            
            setRotationPaused(true)
            animate()
          }
        }}
      />
    </group>
  )
}

const Tshirt = () => {
  const { mode } = useContext(modecontext);
  const [isHovered, setIsHovered] = useState(false);
  // Fixed white color only
  const tshirtColor = "#ffffff";
  
  return (
    <div>
      <motion.div 
        style={styles.container}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.canvas}>
          <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
            <color attach="background" args={['transparent']} />
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1} 
              castShadow 
              shadow-mapSize-width={2048} 
              shadow-mapSize-height={2048} 
            />
            <spotLight 
              position={[-5, 5, 5]} 
              angle={0.15} 
              penumbra={1} 
              intensity={0.7} 
              castShadow
            />
            <TshirtModel color={tshirtColor} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
              autoRotate={false}
              autoRotateSpeed={0.5}
            />
            <ContactShadows 
              position={[0, -1.5, 0]}
              opacity={0.4}
              scale={10}
              blur={2.5}
              far={4}
            />
            <Environment preset="city" />
          </Canvas>
        </div>
        
        {/* Color selection removed - T-shirt is white only */}
      </motion.div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
    background: 'transparent',
    position: 'relative',
    maxWidth: '100%',
    margin: '0 auto',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  canvas: {
    width: '100%',
    height: '100%',
    maxWidth: '600px',
    maxHeight: '500px',
    borderRadius: '12px',
    overflow: 'hidden',
  }
}

export default Tshirt