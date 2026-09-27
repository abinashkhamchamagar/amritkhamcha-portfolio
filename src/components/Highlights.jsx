const stats = [
  { num: '7+', label: 'Years of Professional Experience' },
  { num: 'L5', label: 'Government Service Level' },
  { num: '2019', label: 'Career Start Year' },
  { num: 'KU', label: 'Current University' },
];

const listItems = [
  '7+ years of professional experience in Nepal Government surveying service',
  'Non-Gazetted First Class Surveyor — Level 5',
  'Working under the Survey Department, Government of Nepal',
  'Diploma in Geomatics Engineering from LMTC, Dulikhel',
  'Currently pursuing Bachelor\'s in Geomatics Engineering at KU',
  'Practical field experience alongside continued academic development',
  'Strong expertise in GIS, Surveying, and Geospatial Technologies',
  'Passion for Engineering, Programming, and emerging technologies',
];

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <h2 className="section-title">Academic & Professional <span>Highlights</span></h2>
        <p className="section-subtitle">Key milestones in my professional journey</p>

        <div className="highlights-grid">
          {stats.map(s => (
            <div key={s.num} className="highlight-card">
              <div className="highlight-num">{s.num}</div>
              <div className="highlight-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="highlights-list">
          {listItems.map(item => (
            <div key={item} className="highlight-list-item">
              <div className="highlight-dot"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
