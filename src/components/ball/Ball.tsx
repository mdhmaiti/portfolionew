"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// it is the black  cool ball 
const Ball = () => {
  return (
    <div className="flex snap-center">
      <Canvas>
        <Suspense fallback={<Loading />}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </div>
  );
};

const Loading = () => {
  return <h1>..is loading</h1>;
};

export default Ball;
