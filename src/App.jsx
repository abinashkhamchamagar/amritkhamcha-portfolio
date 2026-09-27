import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Highlights from './components/Highlights';
import Contact from './components/Contact';

export default function App() {
  // Fade-up observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Interests />
      <Highlights />
      <Contact />

      <footer>
        <span>© 2025 All Rights Reserved — <strong>Amrit Khamcha</strong></span>
        <button className="scroll-top" onClick={scrollTop} aria-label="Scroll to top">↑</button>
      </footer>
    </>
  );
}
