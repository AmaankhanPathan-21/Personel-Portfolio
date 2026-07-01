import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Linkedin, Github, Instagram, Mail, ArrowUpRight } from "lucide-react";

const platforms = [
  {
    name: "Fiverr",
    handle: "@amaanpathan_21",
    href: "https://www.fiverr.com/amaanpathan_21/",
    description: "Power BI dashboards, SQL analytics, data modeling — delivered with precision.",
    monogram: "FV",
  },
  {
    name: "LinkedIn",
    handle: "Amaankhan Pathan",
    href: "https://www.linkedin.com/in/amaankhan-pathan-084804274/",
    description: "Professional network, recommendations, and project endorsements.",
    monogram: "LI",
  },
  {
    name: "GitHub",
    handle: "@amaankhanpathan",
    href: "https://github.com/AmaankhanPathan-21",
    description: "Open source projects, scripts, and public analytics repositories.",
    monogram: "GH",
  },
];

export function Freelance() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="freelance"
      ref={ref}
      style={{
        background: "#111111",
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
        009 — FREELANCE
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 100px)",
          alignItems: "start",
        }}
        className="freelance-grid"
      >
        {/* Left: statement */}
        <div>
          <div style={{ overflow: "hidden", marginBottom: "40px" }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(38px, 5vw, 72px)",
                fontWeight: 400,
                color: "#FAF8F4",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Available For<br />
              <em>Selected</em><br />
              Projects.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.3vw, 16px)",
              fontWeight: 300,
              color: "rgba(250,248,244,0.5)",
              lineHeight: 1.75,
              marginBottom: "48px",
              maxWidth: "400px",
            }}
          >
            I work with a select number of clients who value clarity, precision, and data that
            actually moves their business forward. If that sounds like you, let's talk.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              letterSpacing: "0.25em",
              color: "#111111",
              background: "#FAF8F4",
              padding: "18px 36px",
              textDecoration: "none",
              transition: "background 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E9E2D8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FAF8F4")}
          >
            HIRE ME →
          </motion.a>
        </div>

        {/* Right: platforms */}
        <div>
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: "20px",
                alignItems: "start",
                padding: "24px 0",
                borderTop: "1px solid rgba(250,248,244,0.08)",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(250,248,244,0.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid rgba(250,248,244,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "#6B6560",
                  }}
                >
                  {p.monogram}
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#FAF8F4",
                    margin: "0 0 4px 0",
                  }}
                >
                  {p.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                    color: "#6B6560",
                    margin: "0 0 8px 0",
                  }}
                >
                  {p.handle}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "rgba(250,248,244,0.4)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {p.description}
                </p>
              </div>
              <ArrowUpRight size={20} color="rgba(250,248,244,0.3)" />
            </motion.a>
          ))}
          <div style={{ borderTop: "1px solid rgba(250,248,244,0.08)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .freelance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
