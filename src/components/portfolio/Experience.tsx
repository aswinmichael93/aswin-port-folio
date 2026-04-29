import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cybersecurity Intern",
    org: "CIT Cybersecurity Lab",
    period: "Nov 2025",
    text: "Worked on AI-Driven Cloud Security Automation, focusing on threat detection and secure cloud practices.",
  },
  {
    title: "Cybersecurity Virtual Intern",
    org: "Palo Alto Networks + AICTE",
    period: "Apr – Jun 2025",
    text: "Gained hands-on experience in SOC operations, incident response, and threat analysis.",
  },
  {
    title: "IoT Cloud Engineer Virtual Intern",
    org: "AWS Skill Builder + AICTE",
    period: "Jul – Sep 2025",
    text: "Worked with AWS IoT services, cloud architecture, and device connectivity.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-py relative bg-surface/30">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Experience"
          title="Professional journey & work."
        />

        <div className="relative max-w-3xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-hairline" />
          {experiences.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-surface-elevated border border-hairline grid place-items-center">
                <Briefcase className="w-5 h-5 text-primary" />
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