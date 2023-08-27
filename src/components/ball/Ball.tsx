"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { useTexture } from "@react-three/drei";

//import * as THREE from "three";

interface BallProps {
  scale: number;
  ambientLightIntensity: number;
  color?: string;
  distort: number;
  speed: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  image: string;
}

interface ballsize {
  divStyling: string;
  size: number;
  light: number;
  distortion: number;
  distortionSpeed: number;

  image: string;
  color?: string;

  rotaion: [rotationX: number, rotationY: number, rotationZ: number];
}
//""

function Dcene(props: BallProps) {
  //const colorMap = useLoader(texture, 'cat-4008202_1280.png')

  //(imag:string)=>{}
  const [hasImage, setHasImage] = useState(false);

  //const texture = props.image ? useTexture(props.image) : null;
  const texture = useTexture<string>(props.image);
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += props.rotationX;
      mesh.current.rotation.y += props.rotationY;
      mesh.current.rotation.z += props.rotationZ;
    }
  });

  return (
    <mesh ref={mesh}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[3.6, 2.4, 1]} />

        <Sphere args={[1, 100, 200]} scale={props.scale}>
          <MeshDistortMaterial
            map={texture}
            color={props.color}
            attach="material"
            distort={props.distort}
            speed={props.speed}
          />
        </Sphere>
      </Suspense>
    </mesh>
  );
}

const Ball = (propss: ballsize) => {
  //const texture = useTexture<string>("./img/cat-4008202_1280.png")
  return (
    <section className={propss.divStyling}>
      <Canvas>
        <Dcene
          color={propss.color}
          image={propss.image}
          scale={propss.size}
          ambientLightIntensity={propss.light}
          distort={propss.distortion}
          speed={propss.distortionSpeed}
          rotationX={propss.rotaion[0]}
          rotationY={propss.rotaion[1]}
          rotationZ={propss.rotaion[2]}
        />
      </Canvas>
    </section>
  );
};

export default Ball;
