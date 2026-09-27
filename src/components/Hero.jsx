import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-mountains"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">Amrit Khamcha</h1>
          <p className="hero-role">
            And I'm a <span>Geomatics Surveyor</span>
          </p>
          <p className="hero-org">📍 Survey Department, Government of Nepal &nbsp;|&nbsp; Dhulikhel, Nepal</p>
          <p className="hero-desc">
            Non-Gazetted First Class Surveyor (Level 5) with 7+ years of professional experience
            in surveying, GIS & geospatial technologies. Currently pursuing a Bachelor's in
            Geomatics Engineering at Kathmandu University.
          </p>

          <div className="hero-socials">
            <a href="mailto:amritkhamcha@gmail.com" className="hero-social-icon" title="Email">✉</a>
            <a href="tel:+9779844774732" className="hero-social-icon" title="Phone">📞</a>
            <a href="https://www.facebook.com/AmritKhamcha" target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="Facebook" id="hero-fb-link" style={{fontWeight:700,fontSize:'1rem'}}>f</a>
            <a href="https://www.instagram.com/ajax_ak/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="Instagram" id="hero-ig-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">📄 Download CV</a>
            <a href="#about" className="btn btn-outline">View Portfolio</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">7+</div>
              <div className="hero-stat-label">Years Exp.</div>
            </div>
            <div className="hero-stat" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}>
              <div className="hero-stat-num">L5</div>
              <div className="hero-stat-label">Gov. Level</div>
            </div>
            <div className="hero-stat" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}>
              <div className="hero-stat-num">GIS</div>
              <div className="hero-stat-label">Specialist</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-hex-wrap">
            <div className="hero-hex-glow"></div>
            <img
              src={heroImg}
              alt="Amrit Khamcha — Surveyor"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}