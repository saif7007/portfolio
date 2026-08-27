import { CheckCircle2, Server, Monitor, ShieldCheck, Briefcase, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import rcsLogo from '../assets/logos/rcs.jpg';
import dhlLogo from '../assets/logos/DHL.png';
import rblLogo from '../assets/logos/RBL.png';
import aptechLogo from '../assets/logos/Aptech.png';
import dashamlavLogo from '../assets/logos/dashamlav.jpg';

const experiences = [
  {
    period: 'JAN 2026 - PRESENT',
    role: 'Full-stack Developer',
    company: 'RCS Tech LLP',
    location: 'Delhi, India',
    type: 'ENTERPRISE SOFTWARE',
    icon: Briefcase,
    companyLogo: rcsLogo,
    contributions: [
      { 
        title: 'TRAXX & DHL – Enterprise Asset Management', 
        description: 'Architected and developed scalable enterprise web applications for TRAXX and DHL, focusing on real-time asset tracking. Engineered complex frontend logic and secure backend APIs to support rigorous enterprise workflows.',
        tech: ['Node.js', 'React', 'REST APIs', 'Data Security'],
        logos: [dhlLogo, rcsLogo]
      },
      { 
        title: 'RBL Bank – Client Operations & Development', 
        description: 'Led end-to-end development initiatives for RBL Bank. Managed technical operations (OPS) and client handling, ensuring system stability, rapid bug resolution, and secure data pipelines.',
        tech: ['Full-stack Dev', 'DevOps/OPS', 'Compliance'],
        logos: [rblLogo]
      },
    ]
  },
  {
    period: 'MARCH 2024 - JAN 2026',
    role: 'Full-stack Development Instructor',
    company: 'Aptech Learning & Cyber Zone',
    location: 'New Delhi, India',
    type: 'TECHNICAL EDUCATION',
    icon: GraduationCap,
    companyLogo: aptechLogo,
    contributions: [
      { title: 'Mentorship & Training', description: 'Taught and mentored students in full-stack development, covering frontend frameworks, backend architecture, and database management.' },
      { title: 'Curriculum Design', description: 'Designed practical, project-based curriculums that bridge the gap between theoretical concepts and industry-standard engineering practices.' }
    ]
  },
  {
    period: 'AUG 2022 - MARCH 2024',
    role: 'IT Expert',
    company: 'Dashamlav',
    location: 'Noida, India',
    type: 'E-COMMERCE SOLUTIONS',
    icon: Server,
    companyLogo: dashamlavLogo,
    contributions: [
      { title: 'Platform Development', description: 'Developed and maintained custom e-commerce business solutions, optimizing platform performance and overall user experience.' },
      { title: 'Technical Operations', description: 'Handled technical operations, troubleshooting complex system issues, and ensuring maximum uptime for critical business workflows.' }
    ]
  }
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-frame experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-intro">
        <div className="section-kicker"><span>03</span> // Experience</div>
        <h2 id="experience-title">Building for the reality<br />behind the requirement.</h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp, expIndex) => (
          <motion.div
            className="experience-list bento-card"
            key={exp.company}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: expIndex * 0.1 }}
          >
            <div className="experience-role" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '2rem', marginBottom: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              {exp.companyLogo && (
                <img src={exp.companyLogo} alt={`${exp.company} logo`} style={{ height: '80px', maxWidth: '140px', objectFit: 'contain', borderRadius: '12px' }} />
              )}
              <div>
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'block' }}>{exp.period} · {exp.type}</span>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.25rem 0' }}>
                  {exp.role}
                </h3>
                <h4 style={{ margin: '0 0 0.25rem 0' }}>{exp.company}</h4>
                <p style={{ margin: '0', color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{exp.location}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {exp.contributions.map((contribution, index) => {
                return (
                  <div className="experience-item" key={contribution.title}>
                    <div className="timeline">
                      <div className="timeline-dot"></div>
                      {index !== exp.contributions.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    <div style={{ width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', margin: 0 }}>
                          {contribution.title}
                        </h4>
                        {contribution.logos && (
                          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            {contribution.logos.map(logo => (
                              <img key={logo} src={logo} alt="Client logo" style={{ height: '64px', maxWidth: '120px', borderRadius: '12px', objectFit: 'contain' }} />
                            ))}
                          </div>
                        )}
                      </div>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: contribution.tech ? '1rem' : '0' }}>{contribution.description}</p>
                      
                      {contribution.tech && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {contribution.tech.map(t => (
                            <span key={t} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--card-border)', color: 'var(--accent-color)' }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
