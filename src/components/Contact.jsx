
import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Phone, Send } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const email = 'saif112340@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState({ name: '', email: '', body: '' });
  const [isReady, setIsReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const prepareMessage = (event) => {
    event.preventDefault();
    setIsReady(true);
  };

  const mailto = `mailto:${email}?subject=${encodeURIComponent(`Portfolio enquiry from ${message.name || 'a visitor'}`)}&body=${encodeURIComponent(`Name: ${message.name}\nEmail: ${message.email}\n\n${message.body}`)}`;

  return (
    <section className="section-frame" id="contact" aria-labelledby="contact-title" style={{ paddingTop: '8rem' }}>
      <motion.div
        className="contact-card bento-card"
        style={{ marginTop: '0', background: 'var(--card-bg)' }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
      >
        <div className="contact-info">
          <div className="section-kicker"><span>04</span> // Contact</div>
          <h2 id="contact-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let&apos;s build something<br />that earns its place.</h2>
          <p>Have a role, project, or interesting systems problem in mind? I&apos;m always happy to compare notes.</p>

          <div style={{ marginTop: '3rem' }}>
            <a href={`mailto:${email}`} className="contact-email">
              <Mail size={24} /> {email}
            </a>

            <div className="contact-socials">
              <button className="button button-secondary" style={{ padding: '0.6rem 1rem', fontSize: '0.8rem', minHeight: 'auto' }} type="button" onClick={copyEmail}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied' : 'Copy Email'}
              </button>
              <a href="https://github.com/saif7007" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid var(--card-border)', borderRadius: '8px' }}>
                <img src="https://cdn.simpleicons.org/github/white" style={{ width: 16, height: 16 }} alt="" aria-hidden="true" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/saif-khan-63b0802a6/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid var(--card-border)', borderRadius: '8px' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div>
          <form className="contact-form" onSubmit={prepareMessage} style={{ background: 'rgba(0,0,0,0.2)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" placeholder="Jane Doe" value={message.name} onChange={(event) => setMessage({ ...message, name: event.target.value })} required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" type="email" placeholder="jane@example.com" value={message.email} onChange={(event) => setMessage({ ...message, email: event.target.value })} required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows="4" placeholder="Tell me a bit about your project..." value={message.body} onChange={(event) => setMessage({ ...message, body: event.target.value })} required />
            </div>
            <button className="button button-primary form-submit" type="submit"><Send size={18} /> Prepare email</button>
            {isReady && (
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} role="status">
                <Check size={16} color="var(--accent-color)" /> Ready. <a href={mailto} style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 600 }}>Send now <ArrowUpRight size={14} /></a>
              </p>
            )}
          </form>
        </div>
      </motion.div>
      <footer>
        <span>© {new Date().getFullYear()} Saif Khan</span>
        <span>Designed around real engineering work.</span>
      </footer>
    </section>
  );
}
