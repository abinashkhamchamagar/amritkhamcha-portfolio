// The same "Title <accent/> subtitle" block opens every section, so it lives
// in one place instead of being copy-pasted seven times.
export default function SectionHeading({ title, accent, subtitle, className = '' }) {
  return (
    <div className={`mb-12 text-center ${className}`} data-reveal>
      <h2 className="mb-[0.8rem] text-[2.2rem] font-bold text-ink">
        {title} <span className="text-accent">{accent}</span>
      </h2>
      {subtitle && <p className="text-[0.95rem] text-muted">{subtitle}</p>}
    </div>
  );
}
