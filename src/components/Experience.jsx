import { CheckCircle2, Globe2, ShieldCheck } from 'lucide-react';

const contributions = [
  ['From zero to useful', 'Took ownership of an asset management application from early foundations through to a product shaped by enterprise needs.'],
  ['Client-facing delivery', 'Built and tested solutions for DLH, RBL, Wells Fargo, and Traxx in environments where dependable execution matters.'],
  ['Product + platform thinking', 'Connects frontend behavior with secure API integrations so workflows stay coherent from screen to data layer.'],
];

const contributionIcons = [CheckCircle2, Globe2, ShieldCheck];

export default function Experience() {
  return (
    <section className="section-frame experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-intro">
        <div className="section-kicker"><span>03</span> Experience</div>
        <h2 id="experience-title">Building for the reality<br />behind the <em>requirement.</em></h2>
      </div>
      <div className="experience-card">
        <div className="experience-role">
          <p className="role-overline">CURRENT ROLE</p>
          <h3>Full-stack Developer <span>@ RCS Tech LLP</span></h3>
          <p>Bangalore · remote</p>
        </div>
        <div className="contribution-list">
          {contributions.map(([title, description], index) => {
            const Icon = contributionIcons[index];
            return (
              <article className="contribution" key={title}>
                <div className="contribution-icon" aria-hidden="true"><Icon size={19} /></div>
                <div><h4>{title}</h4><p>{description}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
