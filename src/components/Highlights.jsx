import SectionHeading from './SectionHeading';

const stats = [
  { num: '7+', label: 'Years of Experience' },
  { num: 'L5', label: 'Government Service Level' },
  { num: '2019', label: 'Started Service' },
  { num: 'KU', label: 'Current University' },
];

const listItems = [
  '7+ years in government surveying service under the Survey Department',
  'Non-Gazetted First Class Surveyor, Level 5',
  'Diploma in Geomatics Engineering from LMTC, Dulikhel (2018)',
  "Currently pursuing Bachelor's in Geomatics Engineering at Kathmandu University",
  'Hands-on experience in field surveying, GIS, and technical mapping',
  'Working and studying at the same time since 2025',
  'Interested in GIS, Remote Sensing, Programming and new technologies',
  'Based in Dhulikhel, Nepal',
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-[90px] max-[600px]:py-[60px]">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading title="Quick" accent="Profile" subtitle="The short version of my professional story" />

        <div className="mb-10 grid gap-5 grid-cols-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {stats.map(({ num, label }) => (
            <div
              key={label}
              className="rounded-[16px] border border-line bg-surface px-5 py-6 text-center transition hover:-translate-y-1 hover:border-line-strong"
            >
              <p className="mb-2 font-display text-[2.2rem] font-extrabold text-accent">{num}</p>
              <p className="text-[0.8rem] leading-[1.5] text-faint">{label}</p>
            </div>
          ))}
        </div>

        <ul className="grid gap-3.5 rounded-[16px] border border-line bg-surface p-8 grid-cols-2 max-[900px]:grid-cols-1">
          {listItems.map(item => (
            <li key={item} className="flex items-center gap-3 text-[0.88rem] text-muted">
              <span
                className="size-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgb(212_167_44/0.5)]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
