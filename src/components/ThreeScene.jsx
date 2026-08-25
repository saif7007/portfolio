import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Float, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function ThreeScene() {
  const scroll = useScroll();
  const group = useRef();
  
  // Materials
  const material1 = new THREE.MeshPhysicalMaterial({
    color: '#b026ff',
    metalness: 0.1,
    roughness: 0.2,
    transmission: 0.9,
    thickness: 0.5,
    envMapIntensity: 1
  });
  
  const material2 = new THREE.MeshPhysicalMaterial({
    color: '#00f0ff',
    metalness: 0.3,
    roughness: 0.1,
    transmission: 0.8,
    thickness: 1
  });

  useFrame((state, delta) => {
    // r1 is the normalized scroll offset (0 to 1)
    const offset = scroll.offset;
    
    // Rotate the whole group based on scroll
    group.current.rotation.y = offset * Math.PI * 2;
    group.current.rotation.x = offset * Math.PI;
    
    // Move the group based on scroll to create parallax
    group.current.position.y = -offset * 10 + 2; 
    
    // Add constant idle rotation
    group.current.rotation.x += delta * 0.2;
    group.current.rotation.y += delta * 0.1;
  });

  return (
    <>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00f0ff" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <group ref={group}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[2, 1, -2]} material={material1}>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          </mesh>
        </Float>
        
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
          <mesh position={[-3, -2, -5]} material={material2}>
            <icosahedronGeometry args={[1.5, 0]} />
          </mesh>
        </Float>
        
        <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
          <mesh position={[4, -4, -3]} material={material1}>
             <octahedronGeometry args={[1, 0]} />
          </mesh>
        </Float>
      </group>
    </>
  );
}
