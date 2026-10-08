import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const links = [
  { label: "GitHub", sub: "See my code", href: profile.github, icon: <GithubIcon /> },
  { label: "LinkedIn", sub: "Connect with me", href: profile.linkedin, icon: <LinkedinIcon /> },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="mx-auto grid w-[min(1080px,100%-2.5rem)] gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Available for work
          </p>
          <h2 className="font-display text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight">
            Let's build something reliable
          </h2>
          <p className="mt-5 max-w-[32rem] text-lg text-muted">
            I'm open to software engineering roles (full-stack, frontend and QA) and to collaborations. Send me a message and tell me what you're working on.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              Send an email
            </a>
            <button
              onClick={copy}
              aria-live="polite"
              className="min-w-[8.5rem] cursor-pointer rounded-xl border-[1.5px] border-ink px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "c" : "n"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="block"
                >
                  {copied ? "Copied!" : "Copy email"}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
          <p className="mt-4 text-sm text-muted">{profile.email}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="overflow-hidden rounded-3xl border border-line bg-panel">
            {links.map((l, i) => (
              <li key={l.label} className={i > 0 ? "border-t border-line" : ""}>
                <motion.a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  className="flex items-center gap-4 px-6 py-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-paper text-accent">{l.icon}</span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-bold">{l.label}</span>
                    <span className="block text-sm text-muted">{l.sub}</span>
                  </span>
                  <motion.span
                    aria-hidden
                    variants={{ hover: { x: 6 } }}
                    className="text-xl text-muted"
                  >
                    ↗
                  </motion.span>
                </motion.a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}