import { useRef } from "react";
import { motion, useInView } from "motion/react";

import bgImage from "./images/da desk.png";

const skills = [
  "Power BI", "SQL", "DAX", "Power Query",
  "PostgreSQL", "MySQL", "Python", "Data Modeling", "Excel", 
  "Business Intelligence", "ETL Pipelines", "KPI Design", "Analytics",
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#FAF8F4",
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
      }}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          letterSpacing: "0.3em",
          color: "#6B6560",
          marginBottom: "80px",
        }}
      >
        002 — ABOUT
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 120px)",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left — headline */}
        <div>
          <div style={{ overflow: "hidden", marginBottom: "24px" }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4.5vw, 64px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#111111",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              From Building Applications to Building Business Intelligence.
            </motion.h2>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{
              marginTop: "48px",
              position: "relative",
              overflow: "hidden",
              background: "#E9E2D8",
            }}
          >
            <img
              src={bgImage} 
              alt="Desk Mockup"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                filter: "grayscale(100%)",
                display: "block",
                mixBlendMode: "multiply",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                right: "24px",
              }}
            />
          </motion.div>
        </div>

        {/* Right — story */}
        <div style={{ paddingTop: "8px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                fontWeight: 300,
                color: "#1C1C1C",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              My journey began in full-stack development — building web applications, architecting
              systems, writing code that powered products. But something kept pulling me deeper.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                fontWeight: 300,
                color: "#1C1C1C",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              It wasn't the systems themselves — it was the stories hidden inside the data they
              generated. The patterns that revealed why businesses succeeded or struggled. The
              decisions that could be transformed with the right visual insight.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                fontWeight: 300,
                color: "#1C1C1C",
                lineHeight: 1.75,
                marginBottom: "56px",
              }}
            >
              Today I specialize in turning complex datasets into clear, actionable intelligence —
              dashboards that don't just display numbers but shape strategy. Every visual is a
              decision waiting to happen.
            </p>

            {/* Skills grid */}
            <div style={{ marginBottom: "48px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "0.25em",
                  color: "#6B6560",
                  marginBottom: "20px",
                }}
              >
                EXPERTISE
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      letterSpacing: "0.15em",
                      color: "#1C1C1C",
                      border: "1px solid rgba(28,28,28,0.2)",
                      padding: "6px 12px",
                    }}
                  >
                    {skill.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat line */}
            <div
              style={{
                display: "flex",
                gap: "48px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(28,28,28,0.1)",
              }}
            >
              {[
                { num: "8+", label: "Projects Delivered" },
                { num: "2+", label: "Years Experience" },
                { num: "∞", label: "Insights Created" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 400,
                      color: "#111111",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      letterSpacing: "0.15em",
                      color: "#6B6560",
                      marginTop: "8px",
                    }}
                  >
                    {label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
