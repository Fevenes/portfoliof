import { motion } from "framer-motion";
import { skillGroups } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items);
  const loop = [...all, ...all];

  return (
    <Section id="skills" title="Skills">
      <Reveal>
        <div className="marquee relative mb-12 overflow-hidden border-y border-line py-5" aria-hidden>
          <div className="marquee-track flex w-max gap-10 font-display text-3xl font-extrabold text-muted/70">
            {loop.map((s, i) => (
              <span key={i} className="whitespace-nowrap">
                {s} <span className="text-sun">✦</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.1}>
            <h3 className="mb-3 font-display text-xl font-bold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <motion.li
                  key={s}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="rounded-full border border-line bg-panel px-3.5 py-1 text-sm font-medium"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
