import { useState } from 'react';
import heroImg from '../assets/hero.jpg';

const tabs = ['Education', 'Experience', 'Details'];

export default function About() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <section className="section-alt" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">A dedicated geomatics professional from Nepal</p>

        <div className="about-grid">
          {/* Left Card */}
          <div className="about-card">
            <img src={heroImg} alt="Amrit Khamcha" className="about-avatar" />
            <div className="about-card-name">Amrit Khamcha</div>
            <div className="about-card-role">Non-Gazetted First Class Surveyor — Level 5</div>
            <div className="about-card-org">Survey Department, Government of Nepal</div>

            <div className="about-card-divider"></div>

            <div className="about-card-info">
              <div className="about-info-item">
                <span className="about-info-icon">📍</span>
                <span>Dhulikhel, Nepal</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-icon">📞</span>
                <span>9844774732</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-icon">🏛️</span>
                <span>Govt. of Nepal</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-icon">🎓</span>
                <span>B.E. Geomatics — KU</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-icon">💼</span>
                <span>2019 — Present</span>
              </div>
            </div>
          </div>

          {/* Right Tabs */}
          <div>
            <div className="about-tabs">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`tab-btn${activeTab === tab ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Education Tab */}
            <div className={`tab-panel${activeTab === 'Education' ? ' active' : ''}`}>
              <div className="edu-item">
                <div className="edu-degree">Bachelor's in Geomatics Engineering</div>
                <div className="edu-institute">Kathmandu University</div>
                <div className="edu-meta">
                  <span>Session: 2025 — Present</span>
                  <span>Status: Running</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Diploma in Geomatics Engineering</div>
                <div className="edu-institute">LMTC, Dulikhel</div>
                <div className="edu-meta">
                  <span>Completed: 2018</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Plus Two (+2)</div>
                <div className="edu-institute">Higher Secondary Level</div>
                <div className="edu-meta">
                  <span>Completed: 2072 B.S.</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">SLC (School Leaving Certificate)</div>
                <div className="edu-institute">Secondary Level</div>
                <div className="edu-meta">
                  <span>Completed: 2069 B.S.</span>
                </div>
              </div>
            </div>

            {/* Experience Tab */}
            <div className={`tab-panel${activeTab === 'Experience' ? ' active' : ''}`}>
              <div className="exp-item">
                <div className="exp-header">
                  <div className="exp-title">Surveyor — Level 5</div>
                  <div className="exp-badge">2019 — Present</div>
                </div>
                <div className="exp-org">Survey Department, Government of Nepal</div>
                <div style={{fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '14px'}}>
                  Working as a Non-Gazetted First Class Surveyor contributing to government
                  surveying and geospatial activities. Combining 7+ years of practical field
                  experience with continued academic development in Geomatics Engineering.
                </div>
                <div className="exp-tags">
                  <span className="tag">GIS & Geospatial</span>
                  <span className="tag">Field Surveying</span>
                  <span className="tag">AutoCAD</span>
                  <span className="tag">Technical Mapping</span>
                  <span className="tag">Coordination</span>
                  <span className="tag">Data Management</span>
                </div>
              </div>
            </div>

            {/* Details Tab */}
            <div className={`tab-panel${activeTab === 'Details' ? ' active' : ''}`}>
              <div className="philosophy-box">
                <p className="philosophy-quote">
                  "Keep learning, keep exploring, and turn knowledge into practical experience."
                </p>
              </div>
              <div className="detail-list">
                <div className="detail-row">
                  <span className="detail-label">Full Name</span>
                  <span className="detail-value">Amrit Khamcha</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Profession</span>
                  <span className="detail-value">Surveyor / Geomatics Engineer</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Position</span>
                  <span className="detail-value">Non-Gazetted First Class Surveyor — Level 5</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Organization</span>
                  <span className="detail-value">Survey Department, Government of Nepal</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Experience</span>
                  <span className="detail-value">7+ Years (2019 — Present)</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Dhulikhel, Nepal</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">9844774732</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Languages</span>
                  <span className="detail-value">Nepali, English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
