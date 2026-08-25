import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Mail, Phone, Send } from 'lucide-react';

const email = 'saif112340@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState({ name: '', email: '', body: '' });
  const [isReady, setIsReady] = useState(false);

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
    <section className="section-frame contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <div>
          <div className="section-kicker"><span>06</span> Contact</div>
          <h2 id="contact-title">Let&apos;s build something<br /><em>that earns its place.</em></h2>
          <p>Have a role, project, or interesting systems problem in mind? I&apos;m always happy to compare notes.</p>
          <div className="contact-direct-links">
            <a href={`mailto:${email}`}><Mail size={17} aria-hidden="true" /> {email}</a>
            <a href="tel:+917007999321"><Phone size={17} aria-hidden="true" /> +91 70079 99321</a>
          </div>
        </div>

        <div className="contact-actions">
          <form className="contact-form" onSubmit={prepareMessage}>
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" value={message.name} onChange={(event) => setMessage({ ...message, name: event.target.value })} required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" type="email" value={message.email} onChange={(event) => setMessage({ ...message, email: event.target.value })} required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">What are you building?</label>
              <textarea id="contact-message" rows="4" value={message.body} onChange={(event) => setMessage({ ...message, body: event.target.value })} required />
            </div>
            <button className="form-submit" type="submit"><Send size={17} aria-hidden="true" /> Prepare email</button>
            {isReady && (
              <p className="form-confirmation" role="status">
                <Check size={17} aria-hidden="true" /> Your message is ready. <a href={mailto}>Open your email app <ArrowUpRight size={14} aria-hidden="true" /></a>
              </p>
            )}
          </form>

          <div className="contact-utility">
            <button className="copy-button" type="button" onClick={copyEmail}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Email copied' : 'Copy email address'}
            </button>
            <a className="cv-link" href="mailto:saif112340@gmail.com?subject=CV%20request">Request CV <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/saif7007" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/saif-khan-63b0802a6/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn</a>
          </div>
        </div>
      </div>
      <footer><span>© {new Date().getFullYear()} Saif Khan</span><span>Designed around real engineering work.</span></footer>
    </section>
  );
}
