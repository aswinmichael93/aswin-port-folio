import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award, Terminal, BookOpen, Network } from "lucide-react";

const certs = [
  {
    icon: Award,
    title: "Cybersecurity Fundamentals: Practitioner",
    org: "Palo Alto Networks • 2025",
    text: "Core security principles, threat landscape, and defensive strategies.",
  },
  {
    icon: Award,
    title: "Security Operations (SOC) Fundamentals",
    org: "Palo Alto Networks • 2025",
    text: "Incident detection, SIEM basics, and SOC workflows.",
  },
  {
    icon: Network,
    title: "Network Security Fundamentals",
    org: "Palo Alto Networks • 2025",
    text: "Network defense, protocols, and traffic analysis.",
  },
  {
    icon: Network,
    title: "Cloud Security Fundamentals",
    org: "Palo Alto Networks • 2025",
    text: "Cloud threats, IAM, and secure cloud architecture basics.",
  },
  {
    icon: BookOpen,
    title: "AWS Cloud Practitioner Essentials",
    org: "AWS • 2025",
    text: "Cloud concepts, AWS services, pricing, and architecture.",
  },
  {
    icon: Terminal,
    title: "Python Essentials 1",
    org: "Cisco Networking Academy • 2024",
    text: "Core Python programming for automation and scripting.",
  },
  {
    icon: Award,
    title: "AI Fundamentals",
    org: "IBM SkillsBuild • 2025",
    text: "Machine learning basics and AI applications in security.",
  },
  {
    icon: Network,
    title: "Introduction to IoT (Elite)",
    org: "NPTEL • 2025",
    text: "IoT architecture, protocols, and connected systems.",
  },
];
export const Certifications = () => {
  return (
    <section id="certifications" className="section-py relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 — Achievements"
          title="Certifications, labs, and learning milestones."
          description="An evolving list of focused learning — practical work that complements my coursework."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card rounded-2xl p-6 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <div className="text-xs text-mono text-muted-foreground mb-3">
                {c.org}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
