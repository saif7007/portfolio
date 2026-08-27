import { Braces, Database, Layers3, Wrench } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const skillGroups = [
  { 
    icon: Braces, 
    label: 'Languages', 
    description: 'The languages I reach for to make product behavior feel clear and maintainable.', 
    skills: [
      { name: 'JavaScript (ES6+)', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS3', logo: 'https://cdn.simpleicons.org/css/1572B6' }
    ] 
  },
  { 
    icon: Layers3, 
    label: 'Frontend', 
    description: 'Component-led interfaces, responsive systems, and motion with a reason to exist.', 
    skills: [
      { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/white' },
      { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Framer Motion', logo: 'https://cdn.simpleicons.org/framer/white' },
      { name: 'Three.js', logo: 'https://cdn.simpleicons.org/threedotjs/white' }
    ] 
  },
  { 
    icon: Database, 
    label: 'Backend & data', 
    description: 'APIs and persistence layers shaped around the workflows they need to support.', 
    skills: [
      { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express', logo: 'https://cdn.simpleicons.org/express/white' },
      { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/json/white' },
      { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'Relational databases', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' }
    ] 
  },
  { 
    icon: Wrench, 
    label: 'Delivery', 
    description: 'The practical habits that turn a feature into something a team can trust.', 
    skills: [
      { name: 'Git & GitHub', logo: 'https://cdn.simpleicons.org/github/white' },
      { name: 'API testing', logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
      { name: 'Responsive QA', logo: 'https://cdn.simpleicons.org/testinglibrary/E33332' },
      { name: 'System design', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Client collaboration', logo: 'https://cdn.simpleicons.org/zoom/white' }
    ] 
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-frame skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker"><span>02</span> // Technology Stack</div>
          <h2 id="skills-title">Tools are only useful<br />when the system fits.</h2>
        </div>
      </div>
      <div className="skills-grid">
        {skillGroups.map(({ icon: Icon, label, description, skills }, index) => (
          <motion.article
            className={`bento-card ${index === 0 || index === 3 ? 'skill-card-wide' : ''}`}
            key={label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.42, delay: index * 0.06 }}
          >
            <div className="skill-icon"><Icon size={24} aria-hidden="true" /></div>
            <h3>{label}</h3>
            <p>{description}</p>
            <ul className="tool-list">
              {skills.map((skill) => (
                <li key={skill.name}>
                  {skill.logo && <img src={skill.logo} alt="" className="tool-logo" aria-hidden="true" />}
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
