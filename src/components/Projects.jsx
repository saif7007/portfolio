import { ArrowUpRight, Code2, ExternalLink, Layers3 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import hotel1 from '../assets/Hotel-Management/1.png';
import hotel2 from '../assets/Hotel-Management/2.png';
import hotel3 from '../assets/Hotel-Management/3.png';
import hotel4 from '../assets/Hotel-Management/4.png';
import hotel5 from '../assets/Hotel-Management/5.png';
import traxx1 from '../assets/Traxx/1.png';
import traxx2 from '../assets/Traxx/2.png';
import traxx3 from '../assets/Traxx/3.png';
import traxx4 from '../assets/Traxx/4.png';
import traxx5 from '../assets/Traxx/5.png';
import ProjectGallery from './ProjectGallery';

const projects = [
  {
    id: 'hotel',
    number: '01',
    name: 'Hotel Management Dashboard',
    type: 'Public product · Full-stack',
    summary: 'A comprehensive management dashboard designed to bring booking operations, room availability, staff coordination, and detailed reporting into one understandable workspace.',
    challenge: 'Hotel operations produce a lot of moving information. The product needed to make day-to-day status easy to scan without losing the detail needed for follow-up.',
    contribution: 'Built the full-stack application with a React interface, Node/Express services, MongoDB persistence, and REST API integrations.',
    signals: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    repo: 'https://github.com/saif7007/Hotel-management',
    live: 'https://hotel-management-uvvw.onrender.com/',
    images: [hotel1, hotel2, hotel3, hotel4, hotel5],
  },
  {
    id: 'traxx',
    number: '02',
    name: 'TRAXX & DHL Asset Management',
    type: 'Enterprise product · RCS Tech LLP',
    summary: 'A highly scalable enterprise web application built for TRAXX and DHL, focusing on real-time tracking of business assets and rigorous logistics workflows.',
    challenge: 'The system needed to support complex enterprise data pipelines while keeping the interface direct for operations teams who track physical assets globally every day.',
    contribution: 'Architected complex frontend logic connected to secure backend APIs, ensuring system stability, rapid bug resolution, and client satisfaction (RBL Bank ops included).',
    signals: ['Enterprise workflows', 'Secure APIs', 'Data management', 'Frontend logic', 'System Stability'],
    repo: null,
    live: null,
    images: [traxx1, traxx2, traxx3, traxx4, traxx5],
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
                {!project.repo && <span className="confidential-note" style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', alignSelf: 'center' }}>Enterprise internal system</span>}
              </div>
            </div>
            
            <div className="project-visual">
              <ProjectGallery images={project.images} altPrefix={project.name} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
