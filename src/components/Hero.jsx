import { MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";
import heroImg from "../assets/hero.jpg";
import { PROFILE } from "../config";

const stats = [
  { num: "7+", label: "Years Exp." },
  { num: "L5", label: "Gov. Level" },
  { num: "GIS", label: "Specialist" },
];

const DESKTOP = "min-[901px]:";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-[90px] pt-[68px] max-[600px]:pb-[60px]"
    >
      <div
        className="hero-veil pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="horizon-fade pointer-events-none absolute inset-x-0 bottom-0 h-[200px]"
        aria-hidden="true"
      />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center gap-[34px] px-6 text-center ${DESKTOP}flex-row ${DESKTOP}justify-center ${DESKTOP}gap-12`}
      >
        <div
          className={`w-full ${DESKTOP}basis-0 ${DESKTOP}flex-1 ${DESKTOP}max-w-[640px]`}
        >
          <p className="mb-3 flex items-center justify-center gap-3 text-[0.9rem] font-semibold uppercase tracking-[3px] text-accent before:h-0.5 before:w-9 before:bg-accent before:content-['']">
            Hello, I&rsquo;m
          </p>

          <h1 className="mb-2.5 text-[clamp(2.4rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
            {PROFILE.name}
          </h1>

          <p className="mb-2 text-[1.25rem] font-medium text-muted">
            And I&rsquo;m a{" "}
            <span className="font-semibold text-accent">
              Geomatics Engineer / Land Surveyor
            </span>
          </p>

          <p className="mb-6 flex items-center justify-center gap-1.5 text-[0.88rem] text-faint">
            <MapPin className="size-3.5 shrink-0" />
            <span>
              {PROFILE.organization} | {PROFILE.city}
            </span>
          </p>

          <p className="mx-auto mb-8 max-w-[480px] text-[0.96rem] leading-[1.8] text-muted">
            Non-Gazetted First Class Surveyor (Level 5) with 7+ years of
            experience in field surveying, GIS and geospatial work. Currently
            pursuing a Bachelor&rsquo;s in Geomatics Engineering at Kathmandu
            University.
          </p>

          <div className="mb-8 flex justify-center">
            <SocialLinks />
          </div>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#about" className="btn btn-outline">
              Know More
            </a>
          </div>

          <dl className="mt-9 flex justify-center gap-6">
            {stats.map(({ num, label }, index) => (
              <div
                key={label}
                className={`text-center ${index > 0 ? "border-l border-white/10 pl-6" : ""}`}
              >
                <dd className="font-display text-[1.8rem] font-extrabold leading-none text-accent">
                  {num}
                </dd>
                <dt className="mt-1 text-[0.75rem] uppercase tracking-[1px] text-faint">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={`relative w-full ${DESKTOP}basis-0 ${DESKTOP}flex-1 ${DESKTOP}max-w-[640px]`}
        >
          <div
            className={`flex h-[354px] w-full items-center justify-center ${DESKTOP}h-[800px]`}
          >
            <div
              className="animate-breathe absolute -inset-5 rounded-full bg-[radial-gradient(ellipse,rgb(212_167_44/0.2)_0%,transparent_65%)]"
              aria-hidden="true"
            />

            <img
              src={heroImg}
              alt={PROFILE.name}
              width="640"
              height="800"
              className={`animate-float h-[320px] w-[320px] ronded-full object-cover drop-shadow-[0_0_28px_rgb(212_167_44/0.5)] ${DESKTOP}h-[520px] ${DESKTOP}w-[520px]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
