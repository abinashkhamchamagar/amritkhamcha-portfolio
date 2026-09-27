import { useState, useEffect } from 'react';

const navItems = ['Home', 'About', 'Skills', 'Interests', 'Highlights', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (item) => {
    setActive(item);
    setOpen(false);
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="nav-logo">
        AK<span>.</span>
      </a>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {navItems.map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={active === item ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNav(item); }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
