import { motion } from "framer-motion";
import { ArrowRight, Download, Shield, Cpu } from "lucide-react";
import portrait from "@/assets/aswin-portrait.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background grid + radial glow */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />

      <div className="container-px mx-auto max-w-6xl relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <div>
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
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Aswin<span className="text-primary">.</span>
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
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
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
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Glow halo */}
          <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" aria-hidden />

          {/* Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-hairline bg-surface-elevated shadow-soft">
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-2xl pointer-events-none z-10" />
            <img
              src={portrait}
              alt="Portrait of Aswin"
              width={896}
              height={1152}
              className="w-full h-auto object-cover aspect-[4/5] grayscale-[15%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-primary/60 z-10" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-primary/60 z-10" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-primary/60 z-10" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-primary/60 z-10" />
          </div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-4 -left-4 md:-left-6 surface-card rounded-xl px-4 py-3 flex items-center gap-3 shadow-soft"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div>
              <div className="text-xs text-mono text-muted-foreground uppercase tracking-wider">
                Status
              </div>
              <div className="text-sm font-medium">Open to work</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
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
              <div className="mt-1 text-foreground font-medium text-sm">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
