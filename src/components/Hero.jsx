import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onExplore }) {
  return (
    <section className="hero-section section-frame" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Sparkles size={14} aria-hidden="true" /> Full-stack engineer · Bangalore, India
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Software for the teams<br />
          that keep work <em>moving.</em>
        </motion.h1>
        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          I&apos;m Saif Khan, a full-stack developer who turns operational complexity into clear, dependable web products—across dashboards, APIs, and business-critical workflows.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <button className="button button-primary" type="button" onClick={onExplore}>
            Explore selected work <ArrowDownRight size={18} aria-hidden="true" />
          </button>
          <a className="button button-secondary" href="mailto:saif112340@gmail.com?subject=Let's%20work%20together">
            Let&apos;s talk <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <motion.aside
        className="hero-terminal"
        initial={{ opacity: 0, scale: 0.96, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2 }}
        aria-label="Professional profile snapshot"
      >
        <div className="terminal-topline">
          <span className="status-dot" aria-hidden="true" />
          <span>PROFILE / 2026</span>
          <span className="terminal-live">AVAILABLE</span>
        </div>
        <div className="terminal-body">
          <p className="terminal-comment">// The quick read</p>
          <dl className="profile-list">
            <div><dt>role</dt><dd>Full-stack developer</dd></div>
            <div><dt>focus</dt><dd>Operations &amp; management software</dd></div>
            <div><dt>stack</dt><dd>React · Node.js · MongoDB · SQL</dd></div>
            <div><dt>based</dt><dd>India / remote-ready</dd></div>
          </dl>
          <div className="terminal-rule" />
          <p className="terminal-comment">// Explore the signals</p>
          <div className="social-links">
            <a href="https://github.com/saif7007" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
            <a href="https://www.linkedin.com/in/saif-khan-63b0802a6/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
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
