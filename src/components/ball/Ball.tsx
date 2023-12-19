import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { useTexture, Stars } from "@react-three/drei";
import THREE, { MeshStandardMaterial } from "three";
import { DoubleSide } from "three";
interface BallProps {
  scale: number;
  ambientLightIntensity: number;
  color: string;
  
  
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  image: string;
}

interface ballsize {
  divStyling: string;
  size: number;
  light: number;
  
  image: string;
  color: string;
  rotation: [rotationX: number, rotationY: number, rotationZ: number];
}

function Dcene(props: BallProps) {
  //const [hasImage, setHasImage] = useState(false);
  const texture = useTexture(props.image);
  const cloud = useTexture("8k_earth_clouds.jpg");
  const spectacularMap = useTexture("8k_earth_specular_map.jpg");
  const normalMap = useTexture("8k_earth_normal_map.jpg");
  const mesh = useRef<THREE.Mesh>(null!);
  
  //const cameraDistance = useRef<number>(0);
  const controlsRef = useRef<OrbitControlsImpl>(null);
  //const cameraRef = useRef<THREE.Camera>(null!);





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
        
        {props.image === "8k_earth_nightmap.jpg" && (
          <Stars radius={100} depth={50} count={500} factor={4} />
        )}
        
        <ambientLight intensity={props.ambientLightIntensity} />
        <directionalLight position={[3.6, 2.4, 1]} />
       
        <pointLight color={props.color} position={[1,3,5]} intensity={5} />
        {props.image === "8k_earth_nightmap.jpg" && (
          <Stars
          radius={300}
          depth={60}
          count={2000}
          factor={7}
          saturation={0}
          fade={true}
        /> 
        )}
      
      <mesh >
        <sphereGeometry args={[1.005, 64, 128]} />
        <meshPhongMaterial
          map={cloud}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh >
        <sphereGeometry args={[1, 64, 128]} />
        <meshPhongMaterial specularMap={spectacularMap} />
        <meshStandardMaterial
          map={texture}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
         {/* <OrbitControls
           ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          minDistance={1.5}   
          maxDistance={6} 
          /> */}
          <OrbitControls
  ref={controlsRef}
  enableZoom={false}  // Set to false to disable zoom
  enablePan={false}   // Set to false to disable pan
  enableRotate={false} // Set to false to disable rotate
  minDistance={3}      // Set the minimum distance
  maxDistance={3}      // Set the maximum distance
/>
      </mesh>
      </Suspense>
    </mesh>
  );
}
const DceneMemo = React.memo(Dcene);

const Ball =  (propss: ballsize) => {
  return (
    <section className={propss.divStyling}>
      <Canvas>
        <DceneMemo
          color={propss.color}
          image={propss.image}
          scale={propss.size}
          ambientLightIntensity={propss.light}
          
          rotationX={propss.rotation[0]}
          rotationY={propss.rotation[1]}
          rotationZ={propss.rotation[2]}
        />
      </Canvas>
    </section>
  );
};

export default Ball;