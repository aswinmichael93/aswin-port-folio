import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, Github, Linkedin, Send, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser"; // ✅ IMPORTANT

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0gajne8", // ✅ your service ID
        "template_ykodtk7", // 🔁 replace this
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "gOthJVO1bzswqR0Qg" // 🔁 replace this
      )
      .then(() => {
        toast({
          title: "Message sent ✅",
          description: "I’ll get back to you soon.",
        });

        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        toast({
          title: "Error ❌",
          description: "Failed to send message.",
        });

        setLoading(false);
      });
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

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "aswinmichael93@gmail.com",
                href: "mailto:aswinmichael93@gmail.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/aswinmichael93",
                href: "https://www.linkedin.com/in/aswin-p-j-820043312/",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/aswinmichael93",
                href: "https://github.com/aswinmichael93",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
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

            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download="Aswin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 surface-card rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-hairline py-2 focus:outline-none focus:border-primary"
                placeholder="Your name"
              />

              <input
                required
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-hairline py-2 focus:outline-none focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-hairline py-2 focus:outline-none focus:border-primary resize-none"
              placeholder="Tell me a bit about your idea or opportunity…"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-soft hover:shadow-glow transition-all disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send message"}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};