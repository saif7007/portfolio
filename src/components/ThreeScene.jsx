import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const cameraStops = [
  { position: [0, 0, 6.2], target: [0.2, 0, 0] },
  { position: [-1.5, .35, 5.6], target: [0, .25, -.5] },
  { position: [1.6, -.25, 5.1], target: [.3, -.2, -.8] },
  { position: [-1.35, .25, 5.7], target: [-.3, .15, -.8] },
  { position: [1.25, .4, 5.5], target: [.2, .2, -.5] },
  { position: [0, -.1, 6.1], target: [0, 0, 0] },
  { position: [0, 0, 6.4], target: [0, 0, 0] },
];

function CameraPath({ pointer, scroll }) {
  const target = useMemo(() => new THREE.Vector3(), []);
  const position = useMemo(() => new THREE.Vector3(), []);
  const destination = useMemo(() => new THREE.Vector3(), []);
  const currentTarget = useMemo(() => new THREE.Vector3(), []);
  const destinationTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const progress = THREE.MathUtils.clamp(scroll.current, 0, .999);
    const currentStop = Math.floor(progress * (cameraStops.length - 1));
    const nextStop = Math.min(currentStop + 1, cameraStops.length - 1);
    const localProgress = (progress * (cameraStops.length - 1)) % 1;
    const from = cameraStops[currentStop];
    const to = cameraStops[nextStop];
    const softness = 1 - Math.exp(-delta * 2.6);

    position.set(...from.position).lerp(destination.set(...to.position), localProgress);
    target.set(...from.target).lerp(destinationTarget.set(...to.target), localProgress);
    target.x += pointer.current.x * .16;
    target.y += pointer.current.y * .1;
    state.camera.position.lerp(position, softness);
    currentTarget.lerp(target, softness);
    state.camera.lookAt(currentTarget);
  });

  return null;
}

function ParticleField({ color }) {
  const points = useMemo(() => {
    const positions = new Float32Array(220 * 3);
    for (let index = 0; index < positions.length; index += 3) {
      const radius = 4.5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const height = (Math.random() - .5) * 8;
      positions[index] = Math.cos(theta) * radius;
      positions[index + 1] = height;
      positions[index + 2] = Math.sin(theta) * radius - 4;
    }
    return positions;
  }, []);
  const field = useRef();

  useFrame((_, delta) => {
    if (field.current) field.current.rotation.y += delta * .015;
  });

  return (
    <points ref={field}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={.025} sizeAttenuation transparent opacity={.65} depthWrite={false} />
    </points>
  );
}

function CoreSystem({ accent, pointer }) {
  const core = useRef();
  const rings = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.x += delta * .13;
      core.current.rotation.y += delta * .2;
      core.current.position.x = 1.55 + pointer.current.x * .24;
      core.current.position.y = .25 + pointer.current.y * .16 + Math.sin(time * .7) * .09;
    }
    if (rings.current) {
      rings.current.rotation.z -= delta * .09;
      rings.current.rotation.x = .36 + pointer.current.y * .08;
    }
  });

  return (
    <group>
      <group ref={core} position={[1.55, .25, -1.1]}>
        <mesh>
          <icosahedronGeometry args={[.82, 2]} />
          <meshStandardMaterial color={accent} roughness={.28} metalness={.25} emissive={accent} emissiveIntensity={.08} transparent opacity={.88} />
        </mesh>
        <mesh scale={1.28}>
          <icosahedronGeometry args={[.82, 1]} />
          <meshBasicMaterial color={accent} wireframe transparent opacity={.2} />
        </mesh>
      </group>
      <group ref={rings} position={[1.55, .25, -1.25]}>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}><torusGeometry args={[1.18, .018, 8, 80]} /><meshBasicMaterial color={accent} transparent opacity={.55} /></mesh>
        <mesh rotation={[Math.PI / 1.7, .3, .2]}><torusGeometry args={[1.45, .012, 8, 80]} /><meshBasicMaterial color={accent} transparent opacity={.3} /></mesh>
      </group>
    </group>
  );
}

function SectionMonoliths({ accent, muted }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * .025;
    group.current.position.y = Math.sin(state.clock.getElapsedTime() * .32) * .1 - .7;
  });

  return (
    <group ref={group} position={[-1.8, -.7, -2.8]}>
      {[-.82, 0, .82].map((x, index) => (
        <mesh key={x} position={[x, index === 1 ? .18 : 0, 0]} rotation={[0.1, index * .22, 0]}>
          <boxGeometry args={[.45, index === 1 ? 1.5 : 1.15, .45]} />
          <meshStandardMaterial color={index === 1 ? accent : muted} metalness={.3} roughness={.35} transparent opacity={index === 1 ? .75 : .35} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene({ theme, pointer, scroll }) {
  const palette = theme === 'light'
    ? { accent: '#6a9d00', muted: '#3c4a3e', particle: '#71866c' }
    : { accent: '#d9ff4d', muted: '#53704c', particle: '#9bc890' };

  return (
    <>
      <ambientLight intensity={theme === 'light' ? .8 : .5} />
      <pointLight position={[3, 3, 4]} intensity={theme === 'light' ? 7 : 11} color={palette.accent} distance={12} />
      <pointLight position={[-4, -2, 2]} intensity={theme === 'light' ? 2 : 3} color={palette.muted} distance={10} />
      <CameraPath pointer={pointer} scroll={scroll} />
      <ParticleField color={palette.particle} />
      <CoreSystem accent={palette.accent} pointer={pointer} />
      <SectionMonoliths accent={palette.accent} muted={palette.muted} />
    </>
  );
}
