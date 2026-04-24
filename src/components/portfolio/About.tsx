import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, ShieldCheck, Cpu, Server } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Engineering Student",
    text: "Currently studying at Chennai Institute of Technology, focused on building strong fundamentals in computer systems and networks.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    text: "Hands-on with networking, Linux, and security basics — exploring how systems break and how to defend them.",
  },
  {
    icon: Cpu,
    title: "Applied AI",
    text: "Interested in practical AI: building tools that make security workflows smarter and more efficient.",
  },
  {
    icon: Server,
    title: "Backend Mindset",
    text: "Comfortable designing scalable backends with Flask and Django — clean APIs, secure auth, and reliable deployments.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-py relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 — About"
          title="Engineering student with a focus on secure, intelligent systems."
          description="I'm passionate about cybersecurity, AI, and backend engineering. My goal is to build software that's not only intelligent — but also secure, scalable, and worth trusting."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card rounded-2xl p-6 md:p-7"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-4">
                <h.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
