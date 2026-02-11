import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import HeroLight from './HeroLight.jsx'
import { Room } from './Room.jsx'
import Particles from './Particles.jsx'
import { Suspense } from 'react'
import React from 'react'


const HeroExperience = () => {
  const istablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const ismobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (

    <Canvas camera={{ position: [50, 5, -1], fov: 30 }}>

      <OrbitControls
        enableZoom={true}
        enablePan={!istablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLight />
      <Particles count={50} />
      <group
        scale={ismobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <Suspense fallback={null}>
          <Room />
        </Suspense>

      </group>


    </Canvas>
  )
}

export default HeroExperience