import { useRef } from "react";
import { motion, useInView } from "motion/react";

const services = [
  {
    number: "01",
    title: "Power BI Dashboard Development",
    description:
      "Bespoke, interactive dashboards engineered for clarity and decision velocity. From data source connection to final presentation layer.",
  },
  {
    number: "02",
    title: "SQL Analytics & Data Engineering",
    description:
      "Complex query optimization, stored procedures, views, and data warehouse design across PostgreSQL, MySQL, and SQL Server environments.",
  },
  {
    number: "03",
    title: "Data Cleaning & Transformation",
    description:
      "Systematic data quality remediation — deduplication, normalization, enrichment, and validation pipelines built for repeatability.",
  },
  {
    number: "04",
    title: "KPI Design & Reporting",
    description:
      "Metric frameworks aligned to business objectives. Custom calculated measures in DAX, automated report distribution, and executive summaries.",
  },
  {
    number: "05",
    title: "Dashboard Automation",
    description:
      "Scheduled data refreshes, automated alerts, email subscriptions, and integration with Power Automate for fully self-maintaining reporting systems.",
  },
  {
    number: "06",
    title: "Data Modeling",
    description:
      "Star schema and snowflake design, relationship optimization, calculated columns vs measures strategy, and performance tuning for large datasets.",
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        background: "#1C1C1C",
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "80px",
          flexWrap: "wrap",
          gap: "24px",
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
            color: "#afa79f",
          }}
        >
          006 — SERVICES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#FAF8F4",
            margin: 0,
            maxWidth: "600px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Boutique Intelligence. Precision Delivered.
        </motion.h2>
      </div>

      <div>
        {services.map((svc, i) => (
          <motion.div
            key={svc.number}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 1fr",
              gap: "32px",
              alignItems: "start",
              padding: "32px 0",
              borderTop: "1px solid rgba(250,248,244,0.08)",
              transition: "background 0.3s",
            }}
            className="svc-row"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(250,248,244,0.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "transparent";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "18px",
                letterSpacing: "0.1em",
                color: "#6B6560",
                paddingTop: "4px",
              }}
            >
              {svc.number}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 400,
                color: "#FAF8F4",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {svc.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                fontWeight: 300,
                color: "rgba(250,248,244,0.5)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {svc.description}
            </p>
          </motion.div>
        ))}
        <div style={{ borderTop: "1px solid rgba(250,248,244,0.08)" }} />
      </div>

      <style>{`
        @media (max-width: 700px) {
          .svc-row { grid-template-columns: 40px 1fr !important; }
          .svc-row p { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}
