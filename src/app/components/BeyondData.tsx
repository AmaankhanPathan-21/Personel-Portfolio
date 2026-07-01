import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

import bgImage from "./images/behind data.png";

const values = [
  {
  title: "Leadership",
  description: "I enjoy taking initiative, collaborating with others, and creating an environment where ideas and accountability lead to better results.",
},
{
  title: "Problem Solving",
  description: "I enjoy breaking down complex challenges into clear, practical solutions through logical thinking and structured analysis.",
},
{
  title: "Communication",
  description: "Presenting insights clearly is just as important as finding them. I focus on making data understandable for every audience.",
},
{
  title: "Continuous Learning",
  description: "I'm always exploring new technologies, analytical techniques, and industry trends to continuously improve my skills.",
},
{
  title: "Creative Design",
  description: "From designing sports kits to crafting dashboard interfaces, I enjoy combining creativity with functionality to build engaging experiences.",
},
];

export function BeyondData() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="beyond"
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
        007 — BEYOND DATA
      </motion.p>

      {/* Hero statement */}
      <div style={{ overflow: "hidden", marginBottom: "80px" }}>
        <motion.h2
          initial={{ y: "100%" }}
          animate={inView ? { y: "0%" } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 6vw, 80px)",
            fontWeight: 400,
            color: "#111111",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          The Person Behind<br />
          <em>The Data.</em>
        </motion.h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 100px)",
          alignItems: "start",
        }}
        className="beyond-grid"
      >
        {/* Left: image */}
        <div>
          <div
            ref={imgRef}
            style={{ overflow: "hidden", background: "#E9E2D8", position: "relative" }}
          >
            <motion.img
              style={{ y: imgY }}
              src={bgImage} 
              alt="Football — sport and leadership"
              width={700}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>

        {/* Right: values */}
        <div style={{ paddingTop: "8px" }}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              style={{
                paddingBottom: "40px",
                marginBottom: "40px",
                borderBottom: i < values.length - 1 ? "1px solid rgba(28,28,28,0.1)" : "none",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 2.5vw, 30px)",
                  fontWeight: 400,
                  color: "#111111",
                  margin: "0 0 16px 0",
                  lineHeight: 1.1,
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(15px, 1.2vw, 15px)",
                  fontWeight: 300,
                  color: "#1C1C1C",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .beyond-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
