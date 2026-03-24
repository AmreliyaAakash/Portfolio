import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react'
import * as THREE from 'three';
import { loadCachedModel } from '../../../utils/modelCache.js';

const TechIconContent = ({ model, modelUrl }) => {
    const scene = useGLTF(modelUrl);
    useEffect(() => {
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: "white",
                    });
                    child.material.needsUpdate = true;
                }
            });
        }
    }, [scene, model]);

    return (
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
        </group>
    )
}

const TechIcon = ({ model }) => {
    const [modelUrl, setModelUrl] = useState(null);

    useEffect(() => {
        loadCachedModel(model.modelPath).then(setModelUrl);
    }, [model.modelPath]);

    if (!modelUrl) return null;

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={1} floatIntensity={1}>
                <TechIconContent model={model} modelUrl={modelUrl} />
            </Float>
        </Canvas>
    )
}

export default TechIcon