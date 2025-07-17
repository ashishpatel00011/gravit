import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/logo-q3.gltf');
  
  const material = new THREE.MeshStandardMaterial({
    color: '#08E8DE',
    
    transparent: true,
    opacity: 2,
  });

  gltf.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });
  
  return (
    <primitive 
      object={gltf.scene} 
      scale={0.5}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Logo3D() {
  return (
    <div className="flex items-center"> 
      {/* Static Logo */}
      <div className="h-18 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full flex items-center justify-center">
        <img 
          src="/Images/logo-4.png" 
          alt="Logo" 
          className="w-full h-full object-contain"
          style={{ 
        filter: 'brightness(1) contrast(1.5) drop-shadow(0 0 12px #08E8DE)', 
        background: 'transparent' 
          }}
        />
      </div>

      {/* 3D Logo */}
      <div className="h-14 w-28 -ml-6"> 
        <Canvas
          camera={{ 
            position: [0, 0, 15],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          style={{ background: 'transparent' }}
          gl={{
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: true
          }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[-5, 5, 5]} intensity={0.5} />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={2}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

