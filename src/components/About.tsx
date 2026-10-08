import { about, facts } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="space-y-4 text-lg">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid gap-5">
            {facts.map((f) => (
              <div key={f.label} className="border-l-2 border-accent pl-4">
                <dt className="font-semibold">{f.label}</dt>
                <dd className="text-muted">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
