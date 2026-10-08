import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Nav({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <motion.div style={{ scaleX }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-sun" />
      <nav className="mx-auto flex h-16 w-[min(1080px,100%-2.5rem)] items-center justify-between" aria-label="Main">
        <a href="#top" className="font-display text-xl font-extrabold">Feven</a>
        <ul className="flex items-center gap-6">
          {links.map(([label, href]) => (
            <li key={href} className="hidden md:block">
              <a href={href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-line text-ink transition-transform hover:rotate-180"
            >
              ◐
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
