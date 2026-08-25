import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

const email = 'saif112340@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="section-frame contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <div>
          <div className="section-kicker"><span>04</span> Contact</div>
          <h2 id="contact-title">Let&apos;s build something<br /><em>that earns its place.</em></h2>
          <p>Have a role, project, or interesting systems problem in mind? I&apos;m always happy to compare notes.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-email" href={`mailto:${email}`}>
            <Mail size={19} aria-hidden="true" />
            <span><small>EMAIL</small>{email}</span>
            <Send size={17} aria-hidden="true" />
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Email copied' : 'Copy email'}
          </button>
          <a className="phone-link" href="tel:+917007999321"><Phone size={16} aria-hidden="true" /> +91 70079 99321</a>
          <div className="contact-socials">
            <a href="https://github.com/saif7007" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/saif-khan-63b0802a6/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </div>
      <footer><span>© {new Date().getFullYear()} Saif Khan</span><span>Designed around real engineering work.</span></footer>
    </section>
  );
}
