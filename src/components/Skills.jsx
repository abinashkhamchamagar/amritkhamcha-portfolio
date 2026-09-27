import { useEffect, useRef } from 'react';

const technicalSkills = [
  { name: 'GIS & Geospatial Technology', pct: 85, icon: '🗺️', bg: 'rgba(0,212,255,0.12)' },
  { name: 'AutoCAD & Technical Drawing', pct: 80, icon: '📐', bg: 'rgba(0,170,200,0.12)' },
  { name: 'Field Surveying', pct: 90, icon: '📡', bg: 'rgba(0,150,180,0.12)' },
  { name: 'Remote Sensing', pct: 70, icon: '🛰️', bg: 'rgba(0,130,160,0.12)' },
  { name: 'Geomatics Engineering', pct: 85, icon: '🌐', bg: 'rgba(0,212,255,0.12)' },
  { name: 'Programming & Digital Tools', pct: 65, icon: '💻', bg: 'rgba(0,190,220,0.12)' },
];

const skillCategories = [
  {
    icon: '🗺️',
    title: 'GIS & Geospatial',
    tags: 'GIS • Geospatial Technology\nSurveying • Remote Sensing\nCartography',
  },
  {
    icon: '📐',
    title: 'Engineering & Design',
    tags: 'AutoCAD • Technical Drawing\nEngineering Applications\nGeomatics Tools',
  },
  {
    icon: '💻',
    title: 'Programming & Tech',
    tags: 'Programming • Digital Tools\nData Management\nSoftware Applications',
  },
];

const softSkills = [
  { icon: '🗣️', title: 'Communication', desc: 'Effective professional communication and coordination with colleagues and stakeholders.' },
  { icon: '🎯', title: 'Leadership', desc: 'Taking responsibility and guiding tasks toward successful completion.' },
  { icon: '🤝', title: 'Teamwork', desc: 'Collaborating with colleagues to accomplish professional objectives efficiently.' },
  { icon: '🧠', title: 'Problem Solving', desc: 'Systematic approach to technical and practical challenges in surveying work.' },
  { icon: '📋', title: 'Project Management', desc: 'Organizing tasks and coordinating activities for successful assignment completion.' },
  { icon: '📚', title: 'Continuous Learning', desc: 'Strong drive for ongoing education and expanding technical knowledge.' },
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-fill');
            fills.forEach(fill => {
              fill.style.width = fill.dataset.pct + '%';
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">Technical expertise developed through field experience and academic study</p>

        <div className="skills-grid">
          {technicalSkills.map(skill => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon-wrap" style={{ background: skill.bg }}>
                <span>{skill.icon}</span>
              </div>
              <div className="skill-info">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-pct={skill.pct}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Cards */}
        <div className="skills-cats">
          {skillCategories.map(cat => (
            <div key={cat.title} className="skill-cat-card">
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-cat-tags" style={{ whiteSpace: 'pre-line' }}>{cat.tags}</div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h2 className="section-title" style={{ marginTop: '80px' }}>Professional <span>Skills</span></h2>
        <p className="section-subtitle">Personal competencies that complement technical expertise</p>
        <div className="soft-skills-grid">
          {softSkills.map(s => (
            <div key={s.title} className="soft-card">
              <div className="soft-icon">{s.icon}</div>
              <div className="soft-title">{s.title}</div>
              <div className="soft-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
