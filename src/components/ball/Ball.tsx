"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { useTexture } from "@react-three/drei";

import * as THREE from "three";


function Dcene() {
  //const colorMap = useLoader(texture, 'cat-4008202_1280.png')
  const texture = useTexture<string>("andrew-stutesman-l68Z6eF2peA-unsplash.jpg");
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.003;
      mesh.current.rotation.y += 0.003;
      mesh.current.rotation.z += 0.003;
    }
  });
  return (
    <mesh ref={mesh}>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          
          map={texture}
          attach="material"
          distort={0}
          speed={2}
        />
      </Sphere>
    </mesh>
  );
}

const Ball = () => {
  //const texture = useTexture<string>("./img/cat-4008202_1280.png")
  return (
    <section className="flex h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3.6, 2.4, 1]} />

          <Dcene />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Ball;
