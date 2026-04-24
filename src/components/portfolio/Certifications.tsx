import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award, Terminal, BookOpen, Network } from "lucide-react";

const certs = [
  {
    icon: Network,
    title: "Networking Fundamentals",
    org: "Self-paced lab work",
    text: "TCP/IP, subnetting, packet analysis with Wireshark.",
  },
  {
    icon: Terminal,
    title: "Linux for Security",
    org: "Hands-on practice",
    text: "Shell, permissions, hardening, log inspection.",
  },
  {
    icon: BookOpen,
    title: "Security Basics",
    org: "Continuous learning",
    text: "OWASP Top 10, secure coding patterns, threat modelling.",
  },
  {
    icon: Award,
    title: "AI for Security",
    org: "Project-based",
    text: "Applying ML to phishing detection and anomaly spotting.",
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
