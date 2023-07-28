  import { Canvas } from "@react-three/fiber";
  import styled from 'styled-components'
  import AnimatedSphere from "../component/AnimatedSphere";
  import React, { Suspense } from 'react'
  import { OrbitControls } from '@react-three/drei';
  import * as THREE from 'three'; // Import Three.js
  import './hero.css';

  export default function () {

    return (
      <Wrapper>
      <Canvas className="canvas" >
          <OrbitControls enableZoom={false} enablePan={true}/>
              <ambientLight  intensity={0.5}/>
              <directionalLight  position={[-2,5,2]} intensity={1}/>
              <Suspense fallback={null}>
                  <AnimatedSphere />
              </Suspense>

               </Canvas>

      </Wrapper>
    
    )
  }


  const Wrapper= styled.div`
  position:relative;
  background: black;
  color:white;

  canvas{
  height:100vh;

  }

  `;