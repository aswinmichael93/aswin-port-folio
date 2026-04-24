import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, Github, Linkedin, Send, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message ready",
      description: "Thanks! I'll get back to you shortly.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-py relative bg-surface/30">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something secure together."
          description="Open to internships, collaborations, and conversations about security or AI. The fastest way to reach me is below."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {[
              { icon: Mail, label: "Email", value: "aswin@example.com", href: "mailto:aswin@example.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aswin", href: "#" },
              { icon: Github, label: "GitHub", value: "github.com/aswin", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="surface-card rounded-xl p-5 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
                  <c.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-mono text-muted-foreground uppercase tracking-wider">
                    {c.label}
                  </div>
                  <div className="truncate group-hover:text-primary transition-colors">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}

            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 surface-card rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-mono text-muted-foreground uppercase tracking-wider">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-hairline py-2 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-mono text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-hairline py-2 focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-mono text-muted-foreground uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-hairline py-2 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me a bit about your idea or opportunity…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-soft hover:shadow-glow transition-all"
            >
              Send message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
