import { Braces, Database, Layers3, Wrench } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const skillGroups = [
  { icon: Braces, label: 'Languages', description: 'The languages I reach for to make product behavior feel clear and maintainable.', skills: ['JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'] },
  { icon: Layers3, label: 'Frontend', description: 'Component-led interfaces, responsive systems, and motion with a reason to exist.', skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'] },
  { icon: Database, label: 'Backend & data', description: 'APIs and persistence layers shaped around the workflows they need to support.', skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Relational databases'] },
  { icon: Wrench, label: 'Delivery', description: 'The practical habits that turn a feature into something a team can trust.', skills: ['Git & GitHub', 'API testing', 'Responsive QA', 'System design', 'Client collaboration'] },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-frame skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker"><span>04</span> Technology stack</div>
          <h2 id="skills-title">Tools are only useful<br />when the <em>system fits.</em></h2>
        </div>
        <p className="section-aside">No arbitrary proficiency meters—just the tools and working patterns I use to build useful, maintainable software.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map(({ icon: Icon, label, description, skills }, index) => (
          <motion.article
            className="skill-group"
            key={label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.42, delay: index * 0.06 }}
          >
            <div className="skill-icon"><Icon size={20} aria-hidden="true" /></div>
            <h3>{label}</h3>
            <p>{description}</p>
            <ul>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
