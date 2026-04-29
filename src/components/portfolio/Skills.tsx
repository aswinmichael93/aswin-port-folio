import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Code2, Shield, Layers, Wrench } from "lucide-react";

const groups = [
  {
    icon: Shield,
    label: "Cybersecurity",
    items: [
      "Network Security",
      "SOC Operations",
      "Threat Analysis",
      "OWASP Top 10",
      "Cloud Security Basics",
    ],
  },
  {
    icon: Code2,
    label: "Programming",
    items: [
      "Python",
      "JavaScript (Node.js, Express)",
      "C++",
      "HTML, CSS",
    ],
  },
  {
    icon: Layers,
    label: "Cloud & DevOps",
    items: [
      "AWS (Cloud Practitioner)",
      "AWS IoT",
      "Docker",
      "REST APIs",
    ],
  },
  {
    icon: Wrench,
    label: "Tools & Systems",
    items: [
      "Linux",
      "Git & GitHub",
      "Wireshark",
      "MongoDB",
      "MySQL",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-py relative bg-surface/30">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title="A focused toolkit for building and securing systems."
          description="The technologies I use day-to-day — chosen for clarity, reliability, and depth over breadth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card rounded-2xl p-6 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center transition-transform group-hover:scale-110">
                  <g.icon className="w-5 h-5" />
                </div>
                <span className="text-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-semibold mb-4">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-hairline hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
