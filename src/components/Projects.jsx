import { useState } from 'react';
import { ArrowUpRight, Code2, ExternalLink, Layers3 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [selectedProject, setSelectedProject] = useState(projects[0].id);
  const project = projects.find((item) => item.id === selectedProject) ?? projects[0];

  return (
    <section className="section-frame work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker"><span>02</span> Selected work</div>
          <h2 id="work-title">Show the system,<br /><em>not just the stack.</em></h2>
        </div>
        <p className="section-aside">Each project begins with the workflow it needs to improve, then earns its complexity through the product experience.</p>
      </div>

      <div className="project-explorer">
        <div className="project-selector" role="tablist" aria-label="Selected projects">
          {projects.map((item) => (
            <button
              className={item.id === selectedProject ? 'project-choice is-active' : 'project-choice'}
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === selectedProject}
              onClick={() => setSelectedProject(item.id)}
            >
              <span>{item.number}</span>
              <strong>{item.name}</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            className="project-detail"
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
            role="tabpanel"
          >
            <div className="project-detail-topline">
              <span className="project-type">{project.type}</span>
              <Layers3 size={20} aria-hidden="true" />
            </div>
            <h3>{project.name}</h3>
            <p className="project-summary">{project.summary}</p>
            <div className="project-story-grid">
              <div><span>THE PROBLEM</span><p>{project.challenge}</p></div>
              <div><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div>
            </div>
            <ul className="project-tags" aria-label="Technologies and strengths">
              {project.signals.map((signal) => <li key={signal}>{signal}</li>)}
            </ul>
            <div className="project-actions">
              {project.repo && <a href={project.repo} target="_blank" rel="noreferrer"><Code2 size={17} /> View source</a>}
              {project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Open live app</a>}
              {!project.repo && <span className="confidential-note">Internal product · details available in conversation</span>}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
