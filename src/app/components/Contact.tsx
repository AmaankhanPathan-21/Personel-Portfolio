import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Linkedin, Github, Instagram, Mail, Send } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "13px",
    fontWeight: 300,
    color: "#111111",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(28,28,28,0.2)",
    padding: "14px 0",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "#FAF8F4",
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          letterSpacing: "0.3em",
          color: "#6B6560",
          marginBottom: "64px",
        }}
      >
        010 — CONTACT
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 120px)",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <div style={{ overflow: "hidden", marginBottom: "32px" }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 400,
                color: "#111111",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Let's Create Something<br />
              <em>Meaningful</em><br />
              Together.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.3vw, 16px)",
              fontWeight: 300,
              color: "#6B6560",
              lineHeight: 1.75,
              marginBottom: "48px",
              maxWidth: "360px",
            }}
          >
            Whether you need a Power BI dashboard, a full BI solution, or strategic data consulting — reach out and let's start a conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[
              { icon: Mail, label: "amaankhanpathan10@gmail,com", href: "mailto:amaankhanpathan10@gmail,com" },
              { icon: Linkedin, label: "linkedin.com/in/amaankhan-pathan", href: "https://www.linkedin.com/in/amaankhan-pathan-084804274/" },
              { icon: Github, label: "github.com/AmaankhanPathan-21", href: "https://github.com/AmaankhanPathan-21" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  color: "#6B6560",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6560")}
              >
                <Icon size={18} strokeWidth={1.5} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "15px", letterSpacing: "0.05em" }}>
                  {label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <div style={{ paddingTop: "40px" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#111111",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Message received.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#6B6560",
                  lineHeight: 1.75,
                }}
              >
                Thank you for reaching out. I'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "0.2em",
                    color: "#6B6560",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Firstname Lastname"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#111111")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28,28,28,0.2)")}
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "0.2em",
                    color: "#6B6560",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#111111")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28,28,28,0.2)")}
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "0.2em",
                    color: "#6B6560",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  style={{
                    ...inputStyle,
                    resize: "none",
                    fontFamily: "var(--font-sans)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#111111")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28,28,28,0.2)")}
                />
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  color: "#FAF8F4",
                  background: "#111111",
                  border: "none",
                  padding: "18px 36px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "flex-start",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1C1C1C")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#111111")}
              >
                SEND MESSAGE
                <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
