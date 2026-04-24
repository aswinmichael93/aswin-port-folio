import { motion } from "framer-motion";
import { ArrowRight, Download, Shield, Cpu } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background grid + radial glow */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />

      <div className="container-px mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 text-xs text-mono px-3 py-1.5 rounded-full border border-hairline bg-surface-elevated/50 text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Available for internships & collaborations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          Aswin
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Building secure and intelligent systems — at the intersection of
          <span className="text-foreground"> defensive security</span>,
          <span className="text-foreground"> backend engineering</span>, and
          <span className="text-foreground"> applied AI</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-soft hover:shadow-glow transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-hairline hover:border-primary px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-hairline"
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
              <div className="mt-1 text-foreground font-medium">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
