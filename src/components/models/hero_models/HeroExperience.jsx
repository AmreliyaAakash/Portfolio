import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import HeroLight from './HeroLight.jsx'
import { Room } from './Room.jsx'
import Particles from './Particles.jsx'
import { Suspense } from 'react'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'




const HeroContent = ({ ismobile }) => {
  const groupRef = React.useRef();

  useGSAP(() => {
    gsap.from(groupRef.current.position, {
      y: -10,
      duration: 1.5,
      ease: "power3.out",
    });
    gsap.from(groupRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      delay: 0.2
    });
  }, []);

  return (
    <group
      ref={groupRef}
      scale={ismobile ? 1.1 : 1}
      position={[0, ismobile ? -2.0 : -3.5, 0]}
      rotation={[0, Math.PI / 4, 0]}
    >
      <Suspense fallback={null}>
        <Room ismobile={ismobile} />
      </Suspense>
    </group>
  );
};

const HeroExperience = () => {
  const istablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const ismobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [inView, setInView] = React.useState(true);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 1.5]}
        performance={{ min: 0.1 }}
        shadows={false}
        camera={{ position: [50, 5, -1], fov: 30 }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <OrbitControls
          enableZoom={!ismobile}
          enablePan={!istablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />

        <HeroLight />
        <Particles count={ismobile ? 50 : 100} />
        <HeroContent ismobile={ismobile} />
      </Canvas>
    </div>
  )
}

export default HeroExperience