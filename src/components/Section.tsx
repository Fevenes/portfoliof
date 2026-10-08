import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-20">
      <div className="mx-auto w-[min(1080px,100%-2.5rem)]">
        <Reveal>
          <h2 className="mb-10 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
