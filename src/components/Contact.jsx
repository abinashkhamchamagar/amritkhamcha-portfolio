import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', subject: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: '', lastName: '', phone: '', subject: '', email: '', message: '' });
  };

  return (
    <section className="section-alt" id="contact">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        <p className="section-subtitle">Open to connecting with professionals in Geomatics, GIS, and Engineering</p>

        <div className="contact-layout">
          {/* Info Side */}
          <div className="contact-info-side">
            <div>
              <div className="contact-logo">AK<span>.</span></div>
              <div className="contact-tagline">
                I am a Geomatics Surveyor and GIS professional working under the Survey Department,
                Government of Nepal. I am open to connecting with professionals interested in
                Geomatics Engineering, Surveying, GIS, and related fields.
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <span>9844774732</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <span>amritkhamcha@gmail.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <span>Dhulikhel, Nepal</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">🏛️</div>
              <span>Survey Department, Government of Nepal</span>
            </div>

            <div className="contact-socials">
              <a href="tel:+9779844774732" className="contact-social" title="Call: 9844774732">📞</a>
              <a href="mailto:amritkhamcha@gmail.com" className="contact-social" title="Email: amritkhamcha@gmail.com">✉</a>
              <a href="https://www.facebook.com/AmritKhamcha" target="_blank" rel="noopener noreferrer" className="contact-social" title="Facebook" style={{fontWeight:700}}>f</a>
              <a href="https://www.instagram.com/ajax_ak/" target="_blank" rel="noopener noreferrer" className="contact-social" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                className="form-input"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="form-input"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                className="form-input"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                className="form-input"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <input
              className="form-input"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary form-submit">
              {sent ? '✓ Message Sent!' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
