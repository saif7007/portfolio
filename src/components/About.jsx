import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const capabilities = {
  frontend: {
    label: '01 / Frontend',
    detail: 'Interfaces that make dense operational work feel legible: responsive layouts, considered interaction, and useful state—not decoration for its own sake.',
    tools: [
      { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/white' },
      { name: 'JavaScript (ES6+)', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'Three.js', logo: 'https://cdn.simpleicons.org/threedotjs/white' },
      { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Framer Motion', logo: 'https://cdn.simpleicons.org/framer/white' }
    ],
  },
  backend: {
    label: '02 / Backend',
    detail: 'APIs and data flows built to support the product, with maintainable service boundaries and a practical eye on reliability.',
    tools: [
      { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express', logo: 'https://cdn.simpleicons.org/express/white' },
      { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/json/white' },
      { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'System architecture', logo: 'https://cdn.simpleicons.org/docker/2496ED' }
    ],
  },
  product: {
    label: '03 / Delivery',
    detail: 'I work from the workflow outward—understanding the people, hand-offs, and information each screen needs to support before writing the interface.',
    tools: [
      { name: 'Requirements discovery', logo: 'https://cdn.simpleicons.org/notion/white' },
      { name: 'Workflow design', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Client delivery', logo: 'https://cdn.simpleicons.org/zoom/white' },
      { name: 'QA & testing', logo: 'https://cdn.simpleicons.org/testinglibrary/E33332' },
      { name: 'Iterative delivery', logo: 'https://cdn.simpleicons.org/github/white' }
    ],
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
                {active.tools.map((tool) => (
                  <li key={tool.name}>
                    {tool.logo && <img src={tool.logo} alt="" className="tool-logo" aria-hidden="true" />}
                    {tool.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
