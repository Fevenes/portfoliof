import { motion } from "framer-motion";
import { projects } from "../data";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <ul>
        {projects.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover="hover"
            className="group relative grid items-baseline gap-2 overflow-hidden border-b border-line py-8 md:grid-cols-[7rem_1fr_auto] md:gap-6"
          >
            <motion.span
              aria-hidden
              variants={{ hover: { scaleY: 1 } }}
              initial={{ scaleY: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 -z-10 origin-bottom bg-panel"
            />
            <span className="px-2 font-medium text-muted">{p.year}</span>
            <div className="px-2">
              <h3 className="mb-2 font-display text-[1.7rem] font-bold">{p.title}</h3>
              <p className="mb-3 max-w-[40rem] text-muted">{p.description}</p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-accent">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 px-2 font-semibold">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Live ↗
                </a>
              )}
              <a href={p.code} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Code ↗
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
