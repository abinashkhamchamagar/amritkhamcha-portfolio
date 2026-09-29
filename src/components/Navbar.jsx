import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Interests', id: 'interests' },
  { label: 'Profile', id: 'highlights' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the highlighted link in sync with the section actually on screen,
  // so it still matches after a scroll or a browser hash jump.
  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return;

    const spy = new IntersectionObserver(
      entries => {
        const top = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(section => spy.observe(section));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = event => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const goTo = id => {
    setActive(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[68px] border-b border-line bg-[rgb(22_27_34/0.92)] backdrop-blur-lg transition-shadow ${
        scrolled ? 'shadow-lift' : ''
      }`}
    >
      <nav className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-5 min-[901px]:px-10">
        <a
          href="#home"
          onClick={event => {
            event.preventDefault();
            goTo('home');
          }}
          className="font-display text-[1.4rem] font-extrabold tracking-tight text-ink"
        >
          AK<span className="text-accent">.</span>
        </a>

        <ul
          id="nav-menu"
          className={`flex-col gap-4 max-[900px]:absolute max-[900px]:inset-x-0 max-[900px]:top-[68px] max-[900px]:border-b max-[900px]:border-line max-[900px]:bg-bg-alt max-[900px]:px-5 max-[900px]:py-5 min-[901px]:static min-[901px]:flex-row min-[901px]:items-center min-[901px]:gap-9 min-[901px]:border-0 min-[901px]:bg-transparent min-[901px]:p-0 ${
            open ? 'flex' : 'hidden min-[901px]:flex'
          }`}
        >
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={event => {
                  event.preventDefault();
                  goTo(item.id);
                }}
                className={`relative pb-1 font-display text-[0.92rem] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full ${
                  active === item.id ? 'text-accent after:w-full' : 'text-muted'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(current => !current)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          className="flex size-10 items-center justify-center text-ink min-[901px]:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
    </header>
  );
}
