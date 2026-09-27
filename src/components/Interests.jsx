const interests = [
  {
    icon: '🌐',
    title: 'Geomatics Engineering',
    desc: 'Exploring modern approaches to surveying and geospatial engineering, bridging traditional methods with cutting-edge technology.',
  },
  {
    icon: '🗺️',
    title: 'GIS & Geospatial',
    desc: 'Working with geographic information systems and exploring their applications in engineering and public-sector work.',
  },
  {
    icon: '📡',
    title: 'Surveying',
    desc: 'Developing practical and technical expertise through hands-on field experience and academic study.',
  },
  {
    icon: '⚙️',
    title: 'Engineering & Technology',
    desc: 'Keeping pace with technological advancements and their applications in engineering workflows.',
  },
  {
    icon: '💻',
    title: 'Programming',
    desc: 'Learning to code and exploring how software can streamline technical and engineering workflows.',
  },
  {
    icon: '🛰️',
    title: 'Remote Sensing',
    desc: 'Interested in satellite imagery, UAV technology and emerging geospatial data collection methods.',
  },
];

const hobbies = [
  { icon: '🎵', label: 'Music' },
  { icon: '✈️', label: 'Travel' },
  { icon: '📸', label: 'Photography' },
  { icon: '✍️', label: 'Writing' },
  { icon: '🎬', label: 'Movies' },
  { icon: '🏍️', label: 'Motorcycles' },
];

export default function Interests() {
  return (
    <section className="section-alt" id="interests">
      <div className="container">
        <h2 className="section-title">Areas of <span>Interest</span></h2>
        <p className="section-subtitle">Professional and academic passions that drive my growth</p>

        <div className="interests-grid">
          {interests.map(item => (
            <div key={item.title} className="interest-card">
              <span className="interest-icon">{item.icon}</span>
              <div className="interest-title">{item.title}</div>
              <div className="interest-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Beyond Work */}
        <h2 className="section-title" style={{ marginTop: '80px' }}>Beyond <span>Work</span></h2>
        <p className="section-subtitle">Professional life is only one part of who I am</p>

        <div className="hobbies-grid">
          {hobbies.map(h => (
            <div key={h.label} className="hobby-card">
              <span className="hobby-icon">{h.icon}</span>
              <div className="hobby-label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
