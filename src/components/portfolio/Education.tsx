import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const items = [
  {
    period: "Present",
    title: "B.E. — Engineering",
    org: "Chennai Institute of Technology",
    text: "Pursuing my engineering degree with a self-driven focus on cybersecurity, networking fundamentals, and applied AI. Building projects alongside coursework to translate theory into real systems.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-py relative bg-surface/30">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — Education"
          title="Academic journey & ongoing learning."
        />

        <div className="relative max-w-3xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-hairline" />
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-surface-elevated border border-hairline grid place-items-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-mono text-xs uppercase tracking-wider text-primary mb-2">
                {it.period}
              </div>
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <div className="text-muted-foreground mb-3">{it.org}</div>
              <p className="text-muted-foreground leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
