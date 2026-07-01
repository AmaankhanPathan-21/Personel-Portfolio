import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";


import bmw from "./images/projects/bmw.png";
import leads from "./images/projects/leads.png";
import enjay from "./images/projects/enjay.png";
import blinkit from "./images/projects/blinkit.png";
import nyc from "./images/projects/nyc.png";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Lead Source Analysis Dashboard",
    category: "POWER BI · LEADS ANALYTICS",
    year: "2026",
    image: leads,
    challenge: "Kamat Hotels' sales leadership had no centralized view of lead performance across 7 sales teams and dozens of sources (Corporate, Travel Agents, FIT, MICE, and more), making it impossible to identify which channels and teams were converting versus bleeding leads.",
    process: "Consolidated multi-year lead data (2019-2026) into a unified Power BI model with drill-through filtering by CRM owner, region, and hotel. Built a leads flow timeline tracking status from New through TA Related Query to Converted or Dead, alongside an aging analysis to flag stale leads.",
    solution: "A Leads Source Analysis dashboard tracking total leads, conversion rate, and active pipeline in real time, with channel-level breakdowns by sales team, source, and individual rep, plus a dead-leads root-cause view segmented by FIT, MICE, and Travel Agents.",
    insights: "Corporate leads converted at 68.72% versus Email Marketing's 0.04%, despite Email Marketing generating 5,515 leads, exposing a major source-quality mismatch. MICE leads also averaged 131.68 days to close versus 14.6 for FIT, revealing where the sales cycle was bottlenecked.",
    results: ["Tracked 51,417 leads at a 49.79% conversion rate", "Surfaced 5,996 dead leads (11.17%) tied to specific loss reasons for retargeting", "Flagged 2,604 leads aging past 31 days for sales team follow-up"],
    github: "https://github.com/AmaankhanPathan-21/Data-Analysis-Projects/tree/main/Lead%20Source%20Analysis",
  },
  {
    id: 2,
    number: "02",
    title: "Sales & Operations Dashboard",
    category: "POWER BI · OPERATIONS",
    year: "2026",
    image: enjay,
    challenge: "Enjay IT Solutions had no unified view of employee productivity across tasks and calls, making it difficult to identify high performers, bottlenecked modules, or call-handling gaps across a large support and project team.",
    process: "Built a 4-page Power BI report (Overview, Employee Performance, Task Analysis, Call Analysis) tracking 24,969 tasks and 30,000 calls per employee, with breakdowns by module, status, and call direction.",
    solution: "An interactive dashboard surfacing total activity time, productivity percentage, task status by employee, and call direction ratios, with drill-through to individual employee task and call logs.",
    insights: "Outbound calls accounted for 62.31% of total call volume versus 37.68% inbound, and task completion skewed heavily toward Project-module work (11,591 of all tasks), revealing where team effort was concentrated.",
    results: ["Tracked 90.38% productivity across 22,568 completed tasks", "Surfaced top performer Taufik Patel at 769.6 hrs logged", "Logged 590.7 hours of call time across 30,000 calls"],
    github: "https://github.com/AmaankhanPathan-21/Data-Analysis-Projects/tree/main/Internship%20Project",
  },
  {
    id: 3,
    number: "03",
    title: "BMW Sales Analysis",
    category: "POWER BI · Sales Analysis",
    year: "2025",
    image: bmw,
    challenge: "BMW's global sales data spanning multiple models, regions, and fuel types was scattered across disconnected views, making it hard for leadership to spot trends across markets, model performance, and shifting consumer preferences like the EV transition.",
    process: "Consolidated 50K rows across 11 columns into a unified Power BI data model. Built three interconnected dashboard views: Sales Summary, Model Insights, and Market Insights, linked through global filters for region, fuel type, and transmission.",
    solution: "An interactive three-page dashboard tracking total revenue, units sold, average selling price, and average car age, broken down by model, fuel type, transmission, region, and year, with drill-through filtering across every view.",
    insights: "Identified a near-even split across fuel types (Petrol, Diesel, Hybrid, Electric each ~25%), revealing the EV transition is still in its early stages, and surfaced North America and Europe as the strongest-performing regions by sales volume.",
    results: ["Tracked $253M in total revenue across 19T units sold", "Surfaced model-level pricing trends across 11 BMW models", "Reduced multi-source reporting into a single filterable view"],

    github: "https://github.com/AmaankhanPathan-21/Data-Analysis-Projects/tree/main/BMW",
  },
  {
    id: 4,
    number: "04",
    title: "NewYork City Air BNB Sales Analysis",
    category: "Python · Sales ANALYTICS",
    year: "2025",
    image: nyc,
    typescriptreactchallenge: "NYC Airbnb hosts and analysts lacked clarity on which room types and neighbourhoods commanded the strongest pricing and demand, making it hard to benchmark listings or spot underserved boroughs.",
    process: "Cleaned and analyzed 48K NYC Airbnb listings using Python (pandas, matplotlib, seaborn) in Jupyter, converting review timestamps to monthly periods and grouping listings by room type, price, and neighbourhood group for trend analysis.",
    solution: "A multi-chart exploratory analysis covering room type distribution, average price by room type, monthly review trends, and room type breakdown by NYC borough (Brooklyn, Manhattan, Queens, Bronx, Staten Island).",
    insights: "Entire homes/apartments averaged $211.79 per night versus just $70.13 for shared rooms, nearly 3x the price, while Manhattan and Brooklyn together accounted for the vast majority of listings, with Manhattan skewing heavily toward entire-home rentals over private rooms.",
    results: ["Analyzed 48K listings across 16 columns", "Found a 3x price gap between entire homes and shared rooms", "Surfaced a sharp 2018-2019 spike in monthly review volume signaling demand growth"],
    github: "https://github.com/amaankhanpathan",
  },
  {
    id: 5,
    number: "05",
    title: "Blinkit Sales Analysis",
    category: "EXCEL · SALES ANALYTICS",
    year: "2025",
    image: blinkit,
    typescriptreactchallenge: "Blinkit's retail operations team had no consolidated view of how sales performed across outlet types, sizes, and locations, making it hard to identify which store formats and product categories were driving revenue versus underperforming.",
    process: "Built a single-page Power BI dashboard analyzing 8,523 items sold across multiple outlet tiers, sizes, and locations, with interactive filters for outlet size, location type, and item category.",
    solution: "An interactive retail analytics dashboard tracking total sales, average sales, items sold, and customer ratings, broken down by item type, fat content, outlet establishment year, and outlet size and location.",
    insights: "Regular fat-content items generated 65% of sales (₹776.3K) versus only 35% for low-fat items (₹425.4K), and medium-sized outlets outperformed both high and small formats at 42% of total sales, revealing where Blinkit's strongest format-category fit was.",
    results: ["Tracked ₹1.20M in total sales across 8,523 items sold", "Identified Fruits and Vegetables as the top category at ₹178.1K", "Surfaced Tier 3 outlets as the highest-revenue location at ₹472.1K"],
    github: "https://github.com/AmaankhanPathan-21/Data-Analysis-Projects/tree/main/Blinkit",
  },
  // {
  //   id: 6,
  //   number: "06",
  //   title: "Football Tournament Analytics",
  //   category: "PYTHON · DATA VISUALIZATION",
  //   year: "2023",
  //   image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop&auto=format",
  //   challenge: "Local tournament organizers had no way to track team performance, player statistics, or generate meaningful post-tournament insights.",
  //   process: "Built data collection pipeline in Python. Designed statistical models for player ratings. Created visualization suite using matplotlib and plotly.",
  //   solution: "End-to-end tournament analytics platform tracking match results, player statistics, team form, head-to-head records, and performance trends throughout the season.",
  //   insights: "Statistical analysis revealed that teams scoring in the first 20 minutes won 78% of their matches.",
  //   results: ["Tracked 24 teams across 96 matches", "Generated 150+ statistical visualizations", "Adopted by 3 local leagues"],
  //   github: "https://github.com/amaankhanpathan",
  // },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: "rgba(17,17,17,0.92)",
        backdropFilter: "blur(8px)",
        overflowY: "auto",
        padding: "clamp(24px, 5vw, 80px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FAF8F4",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ position: "relative" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "440px",
              objectFit: "cover",
              filter: "grayscale(50%)",
              display: "block",
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "#bb1111",
              border: "none",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={18} color="#ffffff" />
          </button>
        </div>

        <div style={{ padding: "clamp(32px, 5vw, 64px)" }}>
  {/* Top Row */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "32px",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        letterSpacing: "0.25em",
        color: "#6B6560",
        margin: 0,
      }}
    >
      {project.category} — {project.year}
    </p>

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: "0.2em",
        color: "#FAF8F4",
        background: "#111111",
        padding: "14px 28px",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        transition: "0.2s ease",
        marginLeft: "auto",
      }}
    >
      <Github size={14} />
      VIEW ON GITHUB
    </a>
  </div>

  {/* Title */}
  <h2
    style={{
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(28px, 4vw, 48px)",
      fontWeight: 400,
      color: "#111111",
      margin: "0 0 48px 0",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    }}
  >
    {project.title}
  </h2>

  {/* Sections */}
  {[
    { label: "THE CHALLENGE", text: project.challenge },
    { label: "THE PROCESS", text: project.process },
    { label: "THE SOLUTION", text: project.solution },
    { label: "KEY INSIGHT", text: project.insights },
  ].map(({ label, text }) => (
    <div key={label} style={{ marginBottom: "36px" }}>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.2em",
          color: "#5a5551",
          marginBottom: "12px",
        }}
      >
        {label}
      </p>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 300,
          fontStyle:"italic",
          color: "#111010",
          lineHeight: 1.75,
        }}
      >
        {text}
      </p>
    </div>
  ))}

  {/* Results */}
  <div style={{ marginBottom: "40px" }}>
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        letterSpacing: "0.2em",
        color: "#201f1d",
        marginBottom: "16px",
      }}
    >
      RESULTS
    </p>

    {project.results.map((r) => (
      <div
        key={r}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "1px",
            background: "#1C1C1C",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 400,
            color: "#111111",
            margin: 0,
          }}
        >
          {r}
        </p>
      </div>
    ))}
  </div>
</div>
      </motion.div>
    </motion.div>
  );
}

export function Work() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
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
          marginBottom: "80px",
        }}
      >
        004 — SELECTED WORK
      </motion.p>

      <div>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            onClick={() => setSelected(project)}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "32px",
              alignItems: "center",
              padding: "28px 0",
              borderTop: "1px solid rgba(28,28,28,0.1)",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "#F2EDE6";
              (e.currentTarget as HTMLDivElement).style.marginLeft = "-24px";
              (e.currentTarget as HTMLDivElement).style.paddingLeft = "24px";
              (e.currentTarget as HTMLDivElement).style.marginRight = "-24px";
              (e.currentTarget as HTMLDivElement).style.paddingRight = "24px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "transparent";
              (e.currentTarget as HTMLDivElement).style.marginLeft = "0";
              (e.currentTarget as HTMLDivElement).style.paddingLeft = "0";
              (e.currentTarget as HTMLDivElement).style.marginRight = "0";
              (e.currentTarget as HTMLDivElement).style.paddingRight = "0";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "0.1em",
                color: "#b1aaa1",
              }}
            >
              {project.number}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(18px, 2.5vw, 28px)",
                  fontWeight: 400,
                  color: "#111111",
                  margin: "0 0 4px 0",
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  color: "#a59b92",
                }}
              >
                {project.category}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  color: "#cec0ad",
                }}
              >
                {project.year}
              </span>
              <ExternalLink size={20} color="#756c5f" />
            </div>
          </motion.div>
        ))}
        <div style={{ borderTop: "1px solid rgba(28,28,28,0.1)" }} />
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
