import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, FileText, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero({ onExplore }) {
  const shouldReduceMotion = useReducedMotion();
  const enter = (y, delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay },
  });

  return (
    <section className="hero-section section-frame" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          {...enter(14)}
        >
          <Sparkles size={14} aria-hidden="true" /> Full-stack developer · Delhi, India
        </motion.p>
        <p className="hero-name">SAIF KHAN <span>— FULL-STACK DEVELOPER</span></p>
        <motion.h1
          id="hero-title"
          {...enter(24, 0.08)}
        >
          Engineering software<br />
          that holds up in <span>production.</span>
        </motion.h1>
        <motion.p
          className="hero-summary"
          {...enter(18, 0.16)}
        >
          I&apos;m Saif Khan, a full-stack developer based in Delhi who turns operational complexity into clear, dependable web products—across dashboards, APIs, and business-critical workflows.
        </motion.p>
        <motion.div
          className="hero-actions"
          {...enter(18, 0.24)}
        >
          <button className="button button-primary" type="button" onClick={onExplore}>
            Explore selected work <ArrowDownRight size={18} aria-hidden="true" />
          </button>
          <a className="button button-secondary" href="mailto:saif112340@gmail.com?subject=Let's%20work%20together">
            Let&apos;s talk <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="text-action" href="mailto:saif112340@gmail.com?subject=CV%20request">
            <FileText size={17} aria-hidden="true" /> Request CV
          </a>
        </motion.div>
      </div>

      <motion.aside
        className="hero-widget"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.65, delay: 0.2 }}
        aria-label="System status snapshot"
      >
        <div className="widget-header">
          <div className="widget-dots">
            <span className="widget-dot" />
            <span className="widget-dot" />
            <span className="widget-dot" />
          </div>
          <span className="widget-title">sys_status.sh</span>
        </div>
        <div className="widget-body">
          <div className="widget-row">
            <span className="widget-label">Status:</span>
            <span className="widget-value">Online & Available</span>
          </div>
          <div className="widget-row">
            <span className="widget-label">Role:</span>
            <span className="widget-value">Full-stack Developer</span>
          </div>
          <div className="widget-row">
            <span className="widget-label">Core Stack:</span>
            <span className="widget-value">React, Node.js, MongoDB</span>
          </div>
          <div className="widget-row">
            <span className="widget-label">Location:</span>
            <span className="widget-value">Delhi, India</span>
          </div>
          <div className="terminal-rule" style={{ margin: '1.5rem 0', background: 'var(--card-border)', height: '1px' }} />
          <div className="social-links" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <a href="https://github.com/saif7007" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none' }}><Code2 size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/saif-khan-63b0802a6/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none' }}><BriefcaseBusiness size={16} /> LinkedIn</a>
          </div>
        </div>
      </motion.aside>

      <div className="hero-footnote">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" aria-hidden="true" />
      </div>
    </section>
  );
}
