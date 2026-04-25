import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Shield, Cpu } from "lucide-react";
import { useRef } from "react";
import portrait from "@/assets/aswin-portrait.jpg";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />

      <div className="container-px mx-auto max-w-6xl relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs text-mono px-3 py-1.5 rounded-full border border-hairline bg-surface-elevated/50 text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for internships & collaborations
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Aswin P J
          </motion.h1>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-base md:text-lg text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Cybersecurity Enthusiast
            </span>
            <span className="text-hairline">|</span>
            <span className="inline-flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              AI Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Building secure and intelligent systems — at the intersection of
            <span className="text-foreground"> defensive security</span>,
            <span className="text-foreground"> backend engineering</span>, and
            <span className="text-foreground"> applied AI</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-soft hover:shadow-glow transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Download Resume (FIXED) */}
            <a
              href="/Aswin P J Resume.pdf"
              download="Aswin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-hairline hover:border-primary px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ opacity: imageOpacity, y: imageY, scale: imageScale }}
          className="relative mx-auto w-full max-w-[220px] lg:max-w-[280px]"
        >
          <img
            src={portrait}
            alt="Portrait of Aswin"
            className="w-full h-auto object-cover select-none pointer-events-none"
            style={{
              maskImage:
                "radial-gradient(ellipse 60% 70% at 50% 45%, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 70% at 50% 45%, black 30%, transparent 80%)",
            }}
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="container-px mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-t border-hairline"
        >
          {[
            { k: "Focus", v: "Security & AI" },
            { k: "Stack", v: "Python · JS" },
            { k: "Status", v: "Engineering Student" },
            { k: "Based in", v: "Chennai, IN" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-xs text-mono text-muted-foreground uppercase tracking-wider">
                {s.k}
              </div>
              <div className="mt-1 text-foreground font-medium text-sm">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};