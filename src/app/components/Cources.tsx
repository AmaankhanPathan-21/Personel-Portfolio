import { useRef } from "react";
import { motion, useInView } from "motion/react";

const courses = [
  {
    period: "2024",
    role: "Data Analyst",
    company: "TuteDude",
    type: "TudeDude",
    description:
    "Specialized in transforming raw datasets into meaningful insights using Advanced Excel. Built dynamic dashboards using Pivot Tables, advanced formulas, Power Query, and VBA Macros while applying data cleaning, automation, and reporting techniques to solve real-world business problems.",
    tags: ["Advanced Excel","VBA Macros","Power Query","Pivot Tables","Dashboard Development","Data Analysis","Data Cleaning","Excel Automation","Business Intelligence"],
  },
  // more cources
];

export function Courses() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="courses"
      ref={ref}
      style={{
        background: "#E9E2D8",
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
          marginBottom: "80px",
        }}
      >
        005 — Courses
      </motion.p>

      <div style={{ maxWidth: "900px" }}>
        {courses.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: "clamp(24px, 5vw, 64px)",
              paddingBottom: "72px",
              borderBottom: i < courses.length - 1 ? "1px solid rgba(28,28,28,0.12)" : "none",
              marginBottom: i < courses.length - 1 ? "72px" : 0,
            }}
            className="exp-row"
          >
            {/* Left */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "0.15em",
                  color: "#6B6560",
                  marginBottom: "8px",
                }}
              >
                {exp.period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "16px",
                  letterSpacing: "0.2em",
                  color: "#504b44",
                  border: "1px solid rgba(28,28,28,0.15)",
                  display: "inline-block",
                  padding: "4px 8px",
                  marginTop: "12px",
                }}
              >
                {exp.type}
              </p>
            </div>

            {/* Right */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(22px, 3vw, 38px)",
                  fontWeight: 400,
                  color: "#111111",
                  margin: "0 0 4px 0",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                {exp.role}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#6B6560",
                  marginBottom: "24px",
                  letterSpacing: "0.05em",
                }}
              >
                {exp.company}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(14px, 1.3vw, 16px)",
                  fontWeight: 300,
                  color: "#1C1C1C",
                  lineHeight: 1.75,
                  marginBottom: "28px",
                }}
              >
                {exp.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      color: "#6B6560",
                      background: "rgba(28,28,28,0.06)",
                      padding: "5px 10px",
                    }}
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .exp-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
