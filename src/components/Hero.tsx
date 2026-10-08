import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-grid h-[1.4em] overflow-hidden align-bottom">
      {profile.roles.map((r, idx) => (
        <motion.span
          key={r}
          className="col-start-1 row-start-1 text-accent"
          initial={false}
          animate={{
            y:
              idx === i
                ? "0%"
                : idx === (i + profile.roles.length - 1) % profile.roles.length
                ? "-110%"
                : "110%",
            opacity: idx === i ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {r}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const mx = useMotionValue(300);
  const my = useMotionValue(200);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)`;
  const letters = profile.name.split("");

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative overflow-hidden pt-16"
    >
      <motion.div aria-hidden style={{ background: glow }} className="pointer-events-none absolute inset-0" />
      <div className="relative mx-auto w-[min(1080px,100%-2.5rem)] py-24 md:py-36">
        <div>
          <h1
            className="font-display text-[clamp(2.8rem,7.5vw,5.6rem)] font-extrabold leading-[1.02] tracking-tight"
            aria-label={profile.name}
          >
            {letters.map((c, idx) => (
              <motion.span
                key={idx}
                aria-hidden
                className="inline-block"
                initial={{ opacity: 0, y: 40, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.15 + idx * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-5 font-display text-[clamp(1.2rem,2.6vw,1.7rem)] font-medium"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="mt-4 max-w-[34rem] text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href={profile.cv}
              download
              className="rounded-xl border-[1.5px] border-ink px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}