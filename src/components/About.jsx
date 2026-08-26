import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const capabilities = {
  frontend: {
    label: '01 / Frontend',
    detail: 'Interfaces that make dense operational work feel legible: responsive layouts, considered interaction, and useful state—not decoration for its own sake.',
    tools: ['React', 'Next.js', 'JavaScript (ES6+)', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
  },
  backend: {
    label: '02 / Backend',
    detail: 'APIs and data flows built to support the product, with maintainable service boundaries and a practical eye on reliability.',
    tools: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL', 'System architecture'],
  },
  product: {
    label: '03 / Delivery',
    detail: 'I work from the workflow outward—understanding the people, hand-offs, and information each screen needs to support before writing the interface.',
    tools: ['Requirements discovery', 'Workflow design', 'Client delivery', 'QA & testing', 'Iterative delivery'],
  },
};

export default function About() {
  const [activeCapability, setActiveCapability] = useState('frontend');
  const active = capabilities[activeCapability];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-frame about-section" id="about" aria-labelledby="about-title">
      <div className="section-kicker"><span>02</span> // A practical engineering lens</div>
      <div className="about-layout">
        <div className="section-intro">
          <h2 id="about-title">I build the connective tissue behind good operations.</h2>
          <p style={{ marginTop: '1.5rem' }}>
            At RCS Tech LLP, I work on applications where clarity and reliability matter. I enjoy the point where a complicated business process becomes a product people can actually navigate with confidence.
          </p>
          <p>
            The goal is simple: ship interfaces that feel intentional and services that stay understandable as the system grows.
          </p>
        </div>

        <div className="bento-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="capability-tabs" role="tablist" aria-label="Engineering capabilities" style={{ display: 'flex', borderBottom: '1px solid var(--card-border)' }}>
            {Object.entries(capabilities).map(([key, capability]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeCapability === key}
                className={activeCapability === key ? 'capability-tab is-active' : 'capability-tab'}
                onClick={() => setActiveCapability(key)}
                style={{
                  flex: 1, padding: '1.25rem 1rem', background: activeCapability === key ? 'var(--card-bg-hover)' : 'transparent', border: 'none',
                  borderBottom: activeCapability === key ? '2px solid var(--accent-color)' : '2px solid transparent',
                  color: activeCapability === key ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textAlign: 'center', transition: 'all 0.2s'
                }}
              >
                {capability.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className="capability-content"
              key={activeCapability}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
              role="tabpanel"
              style={{ padding: '2.5rem' }}
            >
              <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '2rem' }}>{active.detail}</p>
              <ul className="tool-list">
                {active.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
