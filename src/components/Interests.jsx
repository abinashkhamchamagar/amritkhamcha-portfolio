import { Code, Cog, Globe, Map, Plane, Bike, Camera, Film, Music, PenLine, Radio, Satellite } from 'lucide-react';
import SectionHeading from './SectionHeading';

const interests = [
  {
    Icon: Globe,
    title: 'Geomatics Engineering',
    desc: 'My core field. I enjoy going deeper into surveying science and how geomatics ties into engineering and land management.',
  },
  {
    Icon: Map,
    title: 'GIS & Geospatial',
    desc: 'Using GIS tools to visualize and analyze spatial data is something I genuinely enjoy, both at work and outside of it.',
  },
  {
    Icon: Radio,
    title: 'Surveying',
    desc: 'Seven years in the field has only made me more curious about the technical side of surveying and how it keeps evolving.',
  },
  {
    Icon: Cog,
    title: 'Engineering & Technology',
    desc: 'I follow new developments in engineering and tech, especially anything that connects to geospatial work.',
  },
  {
    Icon: Code,
    title: 'Programming',
    desc: 'Learning to write code on the side. Interested in how programming can make surveying and GIS workflows faster.',
  },
  {
    Icon: Satellite,
    title: 'Remote Sensing',
    desc: 'Satellite imagery and UAV-based data collection are areas I want to get more hands-on experience with.',
  },
];

const hobbies = [
  { Icon: Music, label: 'Music' },
  { Icon: Plane, label: 'Travel' },
  { Icon: Camera, label: 'Photography' },
  { Icon: PenLine, label: 'Writing' },
  { Icon: Film, label: 'Movies' },
  { Icon: Bike, label: 'Motorcycles' },
];

export default function Interests() {
  return (
    <section id="interests" className="bg-bg-alt py-[90px] max-[600px]:py-[60px]">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading title="Areas of" accent="Interest" subtitle="What I think about beyond the day job" />

        <div className="grid gap-5 grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {interests.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-[16px] border border-line bg-surface px-[22px] py-[30px] text-center transition hover:-translate-y-1.5 hover:border-line-strong hover:shadow-accent"
            >
              <Icon className="mx-auto mb-3.5 size-9 text-accent" />
              <h3 className="mb-2 font-display text-[0.98rem] font-bold text-accent">{title}</h3>
              <p className="text-[0.82rem] leading-[1.7] text-faint">{desc}</p>
            </article>
          ))}
        </div>

        <SectionHeading
          title="Beyond"
          accent="Work"
          subtitle="A few things I enjoy outside the office"
          className="mt-20"
        />

        <div className="grid gap-4 grid-cols-6 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2">
          {hobbies.map(({ Icon, label }) => (
            <div
              key={label}
              className="rounded-[14px] border border-line bg-surface px-3.5 py-6 text-center transition hover:-translate-y-1 hover:border-line-strong hover:shadow-accent"
            >
              <Icon className="mx-auto mb-2.5 size-7 text-accent" />
              <p className="text-[0.78rem] font-medium text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
