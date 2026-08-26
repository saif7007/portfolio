import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Mail, Phone, Send } from 'lucide-react';
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
              <a href="https://github.com/saif7007" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid var(--card-border)', borderRadius: '8px' }}><Code2 size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/in/saif-khan-63b0802a6/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid var(--card-border)', borderRadius: '8px' }}><BriefcaseBusiness size={16} /> LinkedIn</a>
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
