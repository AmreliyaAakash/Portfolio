import * as THREE from "three";
import React from "react";
const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[9, 8, -4]}
      angle={0.105}
      penumbra={0.1}
      intensity={100}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#4cc9f0"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#9d4edd"
    />
    {/* Performance Optimized Light (Replaces heavy RectAreaLight) */}
    <spotLight
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
      color="#a259ff"
      angle={0.6}
      penumbra={0.5}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
  </>
);

export default HeroLights;