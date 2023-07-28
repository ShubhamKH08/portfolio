import React,{useRef} from 'react'
import {Sphere, MeshDistortMaterial} from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import * as drei from  '@react-three/drei'

export default function AnimatedSphere({texture}) {
    const meshRef = useRef();
    useFrame(() => {
        // Update the rotation on each frame to increase speed
        if (meshRef.current) {
          meshRef.current.rotation.x += 0.01; // Increase rotation speed along the X-axis
          meshRef.current.rotation.y += 0.01; // Increase rotation speed along the Y-axis
          meshRef.current.rotation.z += 0.01; // Increase rotation speed along the Z-axis
        }
      });
  return (
    <mesh ref={meshRef}>
   <Sphere visible args={[1,100,200]} scale={1}>
    <MeshDistortMaterial map={texture} color="rgb(0, 255, 225)" attach="material" distord={1} Speed={80}
    roughness={0}/>
    
   </Sphere>
  
</mesh>
  )
}
