import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Trophy, Flag, Cpu, Shield, Code, Sparkles } from "lucide-react";

const achievements = [
  {
    icon: Shield,
    period: "2026",
    title: "Capture The Flag (CTF)",
    org: "IIT Madras — Shaastra",
    text: "Participated in a national-level cybersecurity CTF, solving challenges in web exploitation, cryptography, and system vulnerabilities.",
  },
  {
    icon: Trophy,
    period: "2026",
    title: "Cybersecurity Hackathon",
    org: "Devbhoomi Cyber Hackathon 3.0",
    text: "Gained exposure to real-world cyber attack and defense scenarios in a national-level hackathon.",
  },
  {
    icon: Cpu,
    period: "2026",
    title: "AI Hackathons (Multiple)",
    org: "IIT Madras — Shaastra",
    text: "Participated in Synaptix Frontier AI Hack and Appian AI Challenge, focusing on AI-driven solutions.",
  },
  {
    icon: Flag,
    period: "2025",
    title: "Adobe India Hackathon",
    org: "Adobe",
    text: "Qualified Round 1 (MCQ + Coding), demonstrating strong problem-solving and coding skills.",
  },
  {
    icon: Code,
    period: "2025 — 2026",
    title: "Major National Hackathons",
    org: "IIIT Allahabad • Anna University • Multi-college Events",
    text: "Participated in OpenCode (IIIT Allahabad), K-Hacks (Anna University), Quasar 4.0, and other competitive hackathons.",
  },
  {
    icon: Sparkles,
    period: "2026",
    title: "Agri-Tech Hackathon",
    org: "K.J. Somaiya School of Engineering",
    text: "Participated in a national-level Agri-Tech Hackathon, working on technology-driven solutions for real-world agricultural challenges.",
  },
  {
    icon: Trophy,
    period: "2025 — 2026",
    title: "IIT & IIM Competitions",
    org: "IIT Kanpur • IIT Guwahati • IIM Rohtak",
    text: "Participated in Policy Hackathon, Introductory Options Hackathon, StratEdge, and Ignitus competitions, gaining diverse problem-solving exposure.",
  },
  {
    icon: Flag,
    period: "2025",
    title: "All India Developers Challenge",
    org: "National Level Coding Competition",
    text: "Participated in a nationwide developer challenge, improving coding, teamwork, and rapid prototyping skills.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="section-py relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 — Achievements"
          title="Milestones, wins, and recognitions."
          description="Moments along the way that reflect curiosity, consistency, and a habit of shipping."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <a.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-mono text-xs uppercase tracking-wider text-primary mb-1">
                    {a.period}
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">
                    {a.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-3">
                    {a.org}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
