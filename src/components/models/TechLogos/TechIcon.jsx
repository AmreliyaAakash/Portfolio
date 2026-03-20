import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'
import * as THREE from 'three';

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);
    useEffect(() => {
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if (child.isMesh) {
                    console.log("Mesh:", child.name);


                    child.material = new THREE.MeshStandardMaterial({
                        color: "white",
                    });

                    child.material.needsUpdate = true;
                }
            });
        }
    }, [scene, model]);
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={1} floatIntensity={1}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon