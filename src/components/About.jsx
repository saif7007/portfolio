import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const capabilities = {
  frontend: {
    label: '01 / Frontend systems',
    detail: 'Interfaces that make dense operational work feel legible: responsive layouts, considered interaction, and useful state—not decoration for its own sake.',
    tools: ['React', 'Next.js', 'JavaScript (ES6+)', 'Three.js', 'Tailwind CSS', 'CSS animation'],
  },
  backend: {
    label: '02 / Backend foundations',
    detail: 'APIs and data flows built to support the product, with maintainable service boundaries and a practical eye on reliability.',
    tools: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL', 'System architecture'],
  },
  product: {
    label: '03 / Product delivery',
    detail: 'I work from the workflow outward—understanding the people, hand-offs, and information each screen needs to support before writing the interface.',
    tools: ['Requirements discovery', 'Workflow design', 'Client delivery', 'QA & testing', 'Iterative delivery', 'Technical communication'],
  },
};

export default function About() {
  const [activeCapability, setActiveCapability] = useState('frontend');
  const active = capabilities[activeCapability];

  return (
    <section className="section-frame about-section" id="about" aria-labelledby="about-title">
      <div className="section-kicker"><span>01</span> A practical engineering lens</div>
      <div className="about-layout">
        <div className="section-intro">
          <h2 id="about-title">I build the connective tissue behind good operations.</h2>
          <p>
            At RCS Tech LLP, I work on applications where clarity and reliability matter. I enjoy the point where a complicated business process becomes a product people can actually navigate with confidence.
          </p>
          <p>
            The goal is simple: ship interfaces that feel intentional and services that stay understandable as the system grows.
          </p>
        </div>

        <div className="capability-panel">
          <div className="capability-tabs" role="tablist" aria-label="Engineering capabilities">
            {Object.entries(capabilities).map(([key, capability]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeCapability === key}
                className={activeCapability === key ? 'capability-tab is-active' : 'capability-tab'}
                onClick={() => setActiveCapability(key)}
              >
                {capability.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className="capability-content"
              key={activeCapability}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              role="tabpanel"
            >
              <p>{active.detail}</p>
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
