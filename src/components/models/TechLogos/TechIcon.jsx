import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState, useRef } from 'react'
import * as THREE from 'three';
import { loadCachedModel } from '../../../utils/modelCache.js';
import { useMediaQuery } from 'react-responsive'

const TechIconContent = ({ modelUrl, model, ismobile }) => {
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

    if (ismobile) {
        return (
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        );
    }

    return (
        <Float speed={5.5} rotationIntensity={1} floatIntensity={1}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    );
};

const TechIcon = ({ model }) => {
    const [modelUrl, setModelUrl] = useState(null);
    const ismobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [inView, setInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
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

    useEffect(() => {
        loadCachedModel(model.modelPath).then(setModelUrl);
    }, [model.modelPath]);

    return (
        <div ref={ref} className="w-full h-full">
            <Canvas 
                frameloop={inView ? (ismobile ? "demand" : "always") : "never"}
                dpr={[1, ismobile ? 1 : 1.5]}
                performance={{ min: 0.1 }}
            >
                <ambientLight intensity={ismobile ? 0.8 : 0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                {!ismobile && <Environment preset="city" />}
                <OrbitControls enableZoom={false} enablePan={false} />
                {modelUrl && <TechIconContent modelUrl={modelUrl} model={model} ismobile={ismobile} />}
            </Canvas>
        </div>
    )
}

export default TechIcon