import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import ThreeScene from './ThreeScene';

function canUseWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function useScenePreference() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactViewport = window.matchMedia('(max-width: 767px)');
    const lowPowerDevice = (navigator.deviceMemory && navigator.deviceMemory < 4)
      || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);

    const updatePreference = () => {
      setEnabled(!reducedMotion.matches && !compactViewport.matches && !lowPowerDevice && canUseWebGL());
    };

    updatePreference();
    reducedMotion.addEventListener('change', updatePreference);
    compactViewport.addEventListener('change', updatePreference);

    return () => {
      reducedMotion.removeEventListener('change', updatePreference);
      compactViewport.removeEventListener('change', updatePreference);
    };
  }, []);

  return enabled;
}

export default function SceneLayer({ theme }) {
  const enabled = useScenePreference();
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const updatePointer = (event) => {
      pointer.current.x = event.clientX / window.innerWidth * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => window.removeEventListener('pointermove', updatePointer);
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = documentHeight > 0 ? window.scrollY / documentHeight : 0;
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="scene-layer" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 44, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        performance={{ min: 0.55, debounce: 300 }}
      >
        <Suspense fallback={null}>
          <ThreeScene theme={theme} pointer={pointer} scroll={scroll} />
        </Suspense>
      </Canvas>
    </div>
  );
}
