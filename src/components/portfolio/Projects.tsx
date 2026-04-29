import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Driven Cloud Security Automation",
    description:
      "Monitors cloud environments to detect misconfigurations and security risks using automated analysis and AI-based insights.",
    stack: ["Python", "AWS", "Cloud Security"],
    github: "https://github.com/aswinmichael93/AI_driven_cloud_security_automation",
    tag: "Cloud Security",
  },
  {
    title: "DoS Attack Detection System",
    description:
      "Analyzes network traffic patterns to detect denial-of-service attacks and abnormal request spikes with improved alert accuracy.",
    stack: ["Python", "Machine Learning", "Networking"],
    github: "https://github.com/aswinmichael93/dos-attack---detector",
    tag: "Security",
  },
  {
    title: "LinguaNE – AI Translation Platform",
    description:
      "AI-powered translation system supporting text, speech, and OCR for regional and low-resource languages.",
    stack: ["Python", "NLP", "AI"],
    github: "https://github.com/aswinmichael93/LinguaNE",
    tag: "AI",
  },
  {
    title: "Password Strength Checker",
    description:
      "Evaluates password strength and enforces secure password practices using rule-based validation techniques.",
    stack: ["Python"],
    github: "https://github.com/aswinmichael93/password-checker",
    tag: "Utility",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-py relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Projects at the intersection of security, AI, and backend."
          description="A selection of case studies showing how I think about problems — from threat detection to clean, secure APIs."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card rounded-2xl p-6 md:p-8 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {p.tag}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs text-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-hairline"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-5 border-t border-hairline">
  <a
    href={p.github}
    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
  >
    <Github className="w-4 h-4" /> Code
  </a>
</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
