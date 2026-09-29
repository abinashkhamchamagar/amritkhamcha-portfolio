import { useState } from 'react';
import { Briefcase, GraduationCap, Landmark, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import heroImg from '../assets/hero.jpg';
import { PROFILE } from '../config';

const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'details', label: 'Details' },
];

const cardInfo = [
  { Icon: MapPin, value: 'Dhulikhel, Nepal' },
  { Icon: Phone, value: '9844774732' },
  { Icon: Landmark, value: 'Govt. of Nepal' },
  { Icon: GraduationCap, value: 'B.E. Geomatics — KU' },
  { Icon: Briefcase, value: '2019 — Present' },
];

const education = [
  {
    degree: "Bachelor's in Geomatics Engineering",
    institute: 'Kathmandu University',
    meta: ['Session: 2025 — Present', 'Status: Running'],
  },
  { degree: 'Diploma in Geomatics Engineering', institute: 'LMTC, Dulikhel', meta: ['Completed: 2018'] },
  { degree: 'Plus Two (+2)', institute: 'Higher Secondary Level', meta: ['Completed: 2072 B.S.'] },
  { degree: 'SLC (School Leaving Certificate)', institute: 'Secondary Level', meta: ['Completed: 2069 B.S.'] },
];

const experience = [
  {
    title: 'Surveyor — Level 5',
    badge: '2019 — Present',
    org: 'Survey Department, Government of Nepal',
    body: 'Working as a Non-Gazetted First Class Surveyor contributing to government surveying and geospatial activities. Combining 7+ years of practical field experience with continued academic development in Geomatics Engineering.',
    tags: ['GIS & Geospatial', 'Field Surveying', 'AutoCAD', 'Technical Mapping', 'Coordination', 'Data Management'],
  },
];

const details = [
  { label: 'Full Name', value: 'Amrit Khamcha' },
  { label: 'Profession', value: 'Surveyor / Geomatics Engineer' },
  { label: 'Position', value: 'Non-Gazetted First Class Surveyor Level 5' },
  { label: 'Organization', value: 'Survey Department, Government of Nepal' },
  { label: 'Experience', value: '7+ Years (2019-Present)' },
  { label: 'Location', value: 'Dhulikhel, Nepal' },
  { label: 'Phone', value: '9844774732' },
  { label: 'Languages', value: 'Nepali, English' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="about" className="bg-bg-alt py-[90px] max-[600px]:py-[60px]">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading title="About" accent="Me" subtitle="A dedicated geomatics professional from Nepal" />

        <div className="grid items-start gap-14 grid-cols-[300px_1fr] max-[900px]:grid-cols-1">
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-surface p-8 text-center sticky top-20 max-[900px]:static">
            <span
              className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,var(--color-accent),transparent)]"
              aria-hidden="true"
            />
            <img
              src={heroImg}
              alt={PROFILE.name}
              width="120"
              height="120"
              className="mx-auto mb-5 block size-[120px] rounded-full border-[3px] border-accent object-cover shadow-[0_0_20px_rgb(212_167_44/0.3)]"
            />
            <p className="mb-1 text-[1.15rem] font-bold">{PROFILE.name}</p>
            <p className="mb-1 text-[0.85rem] font-medium text-accent">Non-Gazetted First Class Surveyor — Level 5</p>
            <p className="mb-4 text-[0.8rem] text-faint">Survey Department, Government of Nepal</p>

            <div className="my-3.5 h-px bg-line" />

            <ul className="flex flex-col gap-2.5 text-left">
              {cardInfo.map(({ Icon, value }) => (
                <li key={value} className="flex items-center gap-2.5 text-[0.82rem] text-muted">
                  <Icon className="size-4 shrink-0 text-accent" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div role="tablist" aria-label="About Amrit Khamcha" className="mb-7 flex gap-1 border-b border-line">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`-mb-px border-b-2 px-[18px] py-2.5 font-display text-[0.88rem] font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-faint hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id="panel-education"
              aria-labelledby="tab-education"
              hidden={activeTab !== 'education'}
              className="animate-rise"
            >
              {education.map(item => (
                <div key={item.degree} className="relative border-b border-line py-5 pl-5 last:border-0">
                  <span
                    className="absolute left-0 top-7 size-2 rounded-full bg-accent shadow-[0_0_8px_rgb(212_167_44/0.6)]"
                    aria-hidden="true"
                  />
                  <p className="mb-1 font-display text-[0.98rem] font-semibold text-accent">{item.degree}</p>
                  <p className="mb-1 text-[0.88rem] text-ink">{item.institute}</p>
                  <p className="flex gap-4 text-[0.8rem] text-faint">
                    {item.meta.map(entry => (
                      <span key={entry}>{entry}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <div
              role="tabpanel"
              id="panel-experience"
              aria-labelledby="tab-experience"
              hidden={activeTab !== 'experience'}
              className="animate-rise"
            >
              {experience.map(item => (
                <article
                  key={item.title}
                  className="mb-4 rounded-[14px] border border-line bg-surface p-6 transition hover:border-line-strong hover:shadow-[0_4px_20px_rgb(212_167_44/0.1)]"
                >
                  <header className="mb-1.5 flex items-start justify-between gap-3">
                    <h3 className="text-[1rem] font-semibold text-ink">{item.title}</h3>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-accent/10 px-3 py-[3px] text-[0.76rem] font-semibold text-accent">
                      {item.badge}
                    </span>
                  </header>
                  <p className="mb-3 text-[0.86rem] text-accent">{item.org}</p>
                  <p className="mb-3.5 text-[0.88rem] leading-[1.7] text-muted">{item.body}</p>
                  <ul className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-accent/10 px-3 py-[3px] text-[0.76rem] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div
              role="tabpanel"
              id="panel-details"
              aria-labelledby="tab-details"
              hidden={activeTab !== 'details'}
              className="animate-rise"
            >
              <div className="mb-5 rounded-[16px] border border-line bg-[linear-gradient(135deg,rgb(212_167_44/0.08),rgb(212_167_44/0.02))] p-7">
                <p className="border-l-[3px] border-accent pl-5 text-[1.05rem] italic leading-[1.7] text-ink">
                  &ldquo;Keep learning, keep exploring, and turn knowledge into practical experience.&rdquo;
                </p>
              </div>

              <dl className="flex flex-col gap-3">
                {details.map(row => (
                  <div key={row.label} className="flex gap-3.5 text-[0.88rem]">
                    <dt className="min-w-[140px] shrink-0 font-medium text-faint">{row.label}</dt>
                    <dd className="text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
