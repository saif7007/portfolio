import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Background from './components/Background';
import Contact from './components/Contact';

const navigation = [
  ['About', 'about'],
  ['Work', 'work'],
  ['Experience', 'experience'],
  ['Stack', 'skills'],
  ['Background', 'background'],
  ['Contact', 'contact'],
];

function App() {
  const [activeSection, setActiveSection] = useState('top');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('saif-theme') ?? 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('saif-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header">
        <button className="wordmark" type="button" onClick={() => navigateTo('top')} aria-label="Back to top">
          <span className="wordmark-mark">SK</span>
          <span>SAIF KHAN</span>
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation</span>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>

        <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <button
              className={activeSection === id ? 'nav-link is-active' : 'nav-link'}
              key={id}
              type="button"
              onClick={() => navigateTo(id)}
            >
              {label}
            </button>
          ))}
          <a className="nav-resume" href="mailto:saif112340@gmail.com?subject=Let's%20work%20together">
            Request CV <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <Hero onExplore={() => navigateTo('work')} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Background />
        <Contact />
      </main>
    </div>
  );
}

export default App;
