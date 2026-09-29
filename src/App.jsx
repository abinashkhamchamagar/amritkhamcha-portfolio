import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Highlights from './components/Highlights';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Interests />
        <Highlights />
        <Contact />
      </main>

      <footer className="flex items-center justify-between border-t border-line bg-bg px-10 py-6 text-[0.84rem] text-faint max-[900px]:flex-col max-[900px]:gap-4 max-[900px]:text-center">
        <span>
          © {new Date().getFullYear()} All Rights Reserved — <strong className="text-muted">Amrit Khamcha</strong>
        </span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="flex size-[42px] items-center justify-center rounded-[10px] border-2 border-accent bg-transparent text-accent transition hover:bg-accent-ink hover:text-bg hover:shadow-accent"
        >
          ↑
        </button>
      </footer>
    </>
  );
}
