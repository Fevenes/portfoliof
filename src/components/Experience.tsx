import { motion } from "framer-motion";
import { experience } from "../data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="ml-2 border-l-2 border-line pl-8">
        {experience.map((e, i) => (
          <motion.li
            key={e.role + e.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-10 last:pb-0"
          >
            <span
              className={`absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-accent ${e.current ? "bg-accent" : "bg-paper"}`}
            >
              {e.current && <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />}
            </span>
            <h3 className="font-display text-2xl font-bold">{e.role}</h3>
            <p className="mb-2 text-sm text-muted">
              {e.company} · {e.period}
            </p>
            <ul className="list-disc space-y-1 pl-5 text-muted">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
