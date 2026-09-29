import { useEffect, useRef, useState } from 'react';
import { BookOpen, Brain, ClipboardList, Code, Globe, Handshake, Map, MessageSquare, Radio, Ruler, Satellite, Target } from 'lucide-react';
import SectionHeading from './SectionHeading';

const technicalSkills = [
  { name: 'GIS & Geospatial Technology', pct: 85, Icon: Map },
  { name: 'AutoCAD & Technical Drawing', pct: 80, Icon: Ruler },
  { name: 'Field Surveying', pct: 90, Icon: Radio },
  { name: 'Remote Sensing', pct: 70, Icon: Satellite },
  { name: 'Geomatics Engineering', pct: 85, Icon: Globe },
  { name: 'Programming & Digital Tools', pct: 65, Icon: Code },
];

const skillCategories = [
  {
    Icon: Map,
    title: 'GIS & Geospatial',
    tags: ['GIS • Geospatial Technology', 'Surveying • Remote Sensing', 'Cartography'],
  },
  {
    Icon: Ruler,
    title: 'Engineering & Design',
    tags: ['AutoCAD • Technical Drawing', 'Engineering Applications', 'Geomatics Tools'],
  },
  {
    Icon: Code,
    title: 'Programming & Tech',
    tags: ['Programming • Digital Tools', 'Data Management', 'Software Applications'],
  },
];

const softSkills = [
  {
    Icon: MessageSquare,
    title: 'Communication',
    desc: 'Clear communication with colleagues, supervisors and stakeholders in field and office settings.',
  },
  { Icon: Target, title: 'Leadership', desc: 'Taking ownership of assigned tasks and seeing them through to completion.' },
  { Icon: Handshake, title: 'Teamwork', desc: 'Working alongside survey teams on government assignments day to day.' },
  {
    Icon: Brain,
    title: 'Problem Solving',
    desc: 'Finding practical solutions to field challenges and technical issues as they arise.',
  },
  {
    Icon: ClipboardList,
    title: 'Project Management',
    desc: 'Keeping assignments organized and on track within a government work environment.',
  },
  {
    Icon: BookOpen,
    title: 'Continuous Learning',
    desc: "Currently studying for a Bachelor's while working full time, which says a lot about the drive to keep improving.",
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Bars fill once when the section scrolls into view.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-[90px] max-[600px]:py-[60px]">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading title="My" accent="Skills" subtitle="Built through 7+ years of hands-on surveying work" />

        <div className="grid gap-x-16 gap-y-7 grid-cols-2 max-[900px]:grid-cols-1">
          {technicalSkills.map(({ name, pct, Icon }) => (
            <div key={name} className="flex items-center gap-4">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-accent/10 text-[1.4rem]">
                <Icon className="size-6" />
              </span>
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-[0.93rem] font-semibold text-ink">{name}</span>
                  <span className="text-[0.8rem] font-semibold text-accent">{pct}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-hairline-soft">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-accent to-accent-end transition-[width] duration-1000 ease-linear"
                    style={{ width: revealed ? `${pct}%` : '0%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 grid-cols-3 max-[900px]:grid-cols-1">
          {skillCategories.map(({ Icon, title, tags }) => (
            <div
              key={title}
              className="rounded-[16px] border border-line bg-surface px-[22px] py-7 text-center transition hover:-translate-y-1 hover:border-line-strong hover:shadow-card"
            >
              <Icon className="mx-auto mb-3.5 size-9 text-accent" />
              <h3 className="mb-2 font-display text-[0.98rem] font-bold text-accent">{title}</h3>
              <p className="text-[0.82rem] leading-[1.8] text-faint">
                {tags.map(line => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <SectionHeading
          title="Professional"
          accent="Skills"
          subtitle="How I work with people, not just with instruments"
          className="mt-20"
        />

        <div className="grid gap-5 grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {softSkills.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-[16px] border border-line bg-surface px-[22px] py-7 text-center transition hover:-translate-y-1.5 hover:border-line-strong hover:shadow-accent after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100"
            >
              <Icon className="mx-auto mb-3.5 size-9 text-accent" />
              <h3 className="mb-2.5 font-display text-[1rem] font-bold">{title}</h3>
              <p className="text-[0.83rem] leading-[1.7] text-faint">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
