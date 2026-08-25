import { ArrowUpRight, BookOpenCheck, GraduationCap, MessageSquareQuote } from 'lucide-react';

export default function Background() {
  return (
    <section className="section-frame background-section" id="background" aria-labelledby="background-title">
      <div className="section-kicker"><span>05</span> Background &amp; beyond</div>
      <div className="background-heading">
        <h2 id="background-title">The best internal tools<br />feel almost <em>invisible.</em></h2>
        <p>That is the standard I bring to work: understand the people behind the workflow, remove the unnecessary friction, and make the useful part of the product obvious.</p>
      </div>
      <div className="background-grid">
        <article className="background-card background-card-wide">
          <div className="background-card-icon"><BookOpenCheck size={21} aria-hidden="true" /></div>
          <span>HOW I WORK</span>
          <h3>Curious about the workflow before the component.</h3>
          <p>I like getting close to the real task—where information comes from, where it gets stuck, and what a good outcome looks like—then turning that understanding into a calmer product experience.</p>
        </article>
        <article className="background-card credential-card">
          <div className="background-card-icon"><GraduationCap size={21} aria-hidden="true" /></div>
          <span>EDUCATION &amp; CERTIFICATIONS</span>
          <h3>Credentials available on request.</h3>
          <p>This portfolio prioritizes verifiable project work. Formal education and certification details can be added here once supplied.</p>
        </article>
        <article className="background-card reference-card">
          <div className="background-card-icon"><MessageSquareQuote size={21} aria-hidden="true" /></div>
          <span>REFERENCES</span>
          <h3>Interested in working together?</h3>
          <p>For the clearest picture of my contribution, let&apos;s start with the problem your team needs to solve.</p>
          <a href="mailto:saif112340@gmail.com?subject=Portfolio%20conversation">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a>
        </article>
      </div>
    </section>
  );
}
