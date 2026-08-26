import { ArrowUpRight, Code2, ExternalLink, Layers3 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const projects = [
  {
    id: 'hotel',
    number: '01',
    name: 'Hotel Management System',
    type: 'Public product · Full-stack',
    summary: 'A management dashboard designed to bring booking operations, availability, staff coordination, and reporting into one understandable workspace.',
    challenge: 'Hotel operations produce a lot of moving information. The product needed to make day-to-day status easy to scan without losing the detail needed for follow-up.',
    contribution: 'Built the full-stack application with a React interface, Node/Express services, MongoDB persistence, and REST API integrations.',
    signals: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    repo: 'https://github.com/saif7007/Hotel-management',
    live: 'https://hotel-management-uvvw.onrender.com/',
  },
  {
    id: 'assets',
    number: '02',
    name: 'Asset Management Application',
    type: 'Enterprise product · Internal',
    summary: 'A scalable application for teams that need a clearer way to keep track of business assets and the work attached to them.',
    challenge: 'The system needed to support enterprise workflows while keeping the interface direct for people who work with asset information every day.',
    contribution: 'Spearheaded the application from the ground up, connecting complex frontend logic to secure backend APIs and iterating against real client needs.',
    signals: ['Enterprise workflows', 'Secure APIs', 'Data management', 'Frontend logic', 'QA'],
    repo: null,
    live: null,
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-frame work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker"><span>01</span> // Selected Work</div>
          <h2 id="work-title">Show the system,<br />not just the stack.</h2>
        </div>
      </div>

      <div>
        {projects.map((project, index) => (
          <motion.article
            className="project-card bento-card"
            key={project.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
          >
            <div className="project-content">
              <span className="project-type">{project.type}</span>
              <h3>{project.name}</h3>
              <p className="project-summary">{project.summary}</p>
              
              <ul className="project-tags" aria-label="Technologies and strengths">
                {project.signals.map((signal) => <li key={signal}>{signal}</li>)}
              </ul>
              
              <div className="project-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                {project.repo && <a className="button button-primary" href={project.repo} target="_blank" rel="noreferrer"><Code2 size={17} /> Source</a>}
                {project.live && <a className="button button-secondary" href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Live</a>}
                {!project.repo && <span className="confidential-note" style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Internal product</span>}
              </div>
            </div>
            
            <div className="project-visual">
              <div className="project-visual-placeholder"></div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
