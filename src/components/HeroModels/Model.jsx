import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();

  // Vibrant materials using only color and material properties
  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#9c27b0", // Rich purple
    emissive: "#4a148c",
    emissiveIntensity: 0.3,
    specular: "#e1bee7",
    shininess: 50,
    transparent: true,
    opacity: 0.9,
    combine: THREE.MixOperation,
    reflectivity: 0.2
  });

  const bodyMaterial = new THREE.MeshPhongMaterial({
    color: "#263238", // Dark blue-gray
    specular: "#607d8b",
    shininess: 100,
    bumpScale: 0.05,
    envMapIntensity: 0.5
  });

  const tableMaterial = new THREE.MeshStandardMaterial({
    color: "#3e2723", // Dark wood-like brown
    roughness: 0.7,
    metalness: 0.3,
    envMapIntensity: 0.5
  });

  const radiatorMaterial = new THREE.MeshStandardMaterial({
    color: "#cfd8dc", // Light metallic gray
    roughness: 0.4,
    metalness: 0.9,
    envMapIntensity: 1.2
  });

  const compMaterial = new THREE.MeshPhysicalMaterial({
    color: "#00bcd4", // Cyan
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    metalness: 0.7,
    roughness: 0.4,
    ior: 1.5,
    sheen: 0.5
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#ff4081", // Vibrant pink
    emissive: "#f50057",
    emissiveIntensity: 0.2,
    specular: "#ff80ab",
    shininess: 60
  });

  const chairMaterial = new THREE.MeshStandardMaterial({
    color: "#212121", // Near-black
    roughness: 0.4,
    metalness: 0.8,
    emissive: "#424242",
    emissiveIntensity: 0.2
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: "#e0f7fa",
    transmission: 0.9,
    roughness: 0.05,
    metalness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    ior: 1.5
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: "#ffeb3b", // Bright yellow
    emissive: "#ffc107",
    emissiveIntensity: 0.3,
    metalness: 0.5,
    roughness: 0.3
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={2.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.7}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
      
      {/* Main room elements */}
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} />
      
      {/* Tech elements */}
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh ref={screensRef} geometry={nodes.emis_lambert1_0.geometry}>
        <meshBasicMaterial color="#00e5ff" toneMapped={false} />
      </mesh>
      
      {/* Accented elements */}
      <mesh geometry={nodes.handls_blinn1_0.geometry} material={accentMaterial} />
      <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={nodes.kovrik_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={glassMaterial} />
      <mesh geometry={nodes.lamp_white_blinn1_0.geometry} material={glassMaterial} />
      
      {/* Other elements */}
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={accentMaterial} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} />
      <mesh geometry={nodes.railing_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={accentMaterial} />
      <mesh geometry={nodes.red_vac_blinn1_0.geometry} material={accentMaterial} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.tablet_blinn1_0.geometry} material={compMaterial} />
      <mesh geometry={nodes.triangle_blinn1_0.geometry} material={glassMaterial} />
      <mesh geometry={nodes.vires_blinn1_0.geometry} material={glassMaterial} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={glassMaterial} />
      <mesh geometry={nodes.window4_phong1_0.geometry} material={glassMaterial} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");