import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Model } from './Model.jsx'
import HeroLights from './HeroLights.jsx';
import Particles from './Particles.jsx'
const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width:768)' });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color={'#1a1a40'} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={1}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <HeroLights />
        <Particles />
        <Model />
      </group>
    </Canvas>

  )
}

export default HeroExperience