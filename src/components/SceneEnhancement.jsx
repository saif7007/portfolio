import { lazy, Suspense, useEffect, useState } from 'react';

const SceneLayer = lazy(() => import('./SceneLayer'));

export default function SceneEnhancement({ theme }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadScene = () => setReady(true);
    const idleCallback = window.requestIdleCallback?.(loadScene, { timeout: 1800 });
    const timeout = idleCallback === undefined ? window.setTimeout(loadScene, 900) : undefined;

    return () => {
      if (idleCallback !== undefined) window.cancelIdleCallback?.(idleCallback);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, []);

  if (!ready) return null;

  return <Suspense fallback={null}><SceneLayer theme={theme} /></Suspense>;
}
