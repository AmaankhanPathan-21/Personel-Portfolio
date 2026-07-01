import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Linkedin, Github, Instagram, Mail, ChevronDown,  MessageCircle, Briefcase, } from "lucide-react";
import bgImage from "./images/bg.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/amaankhan-pathan-084804274/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/AmaankhanPathan-21", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/amaankhan_pathan21/", label: "Instagram" },
  { icon: Mail, href: "mailto:amaankhanpathan10@gmail.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/7383718623", label: "Whatsapp" },
  { icon: Briefcase, href: "https://www.fiverr.com/amaanpathan_21/", label: "Fiverr" },
];

const heroLetters = "AMAANKHAN\nPATHAN".split("");

import resumePDF from "./CV/Amaan Pathan DA CV.pdf";

const handleResume = () => {
  window.open(resumePDF, "_blank");

  const link = document.createElement("a");
  link.href = resumePDF;
  link.download = "Amaan Pathan Data Analyst Resume.pdf";
  link.click();
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        background: "#111111",
      }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-15%",
          y: imageY,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "grayscale(100%)",
            opacity: 0.40,
          }}
        />
      </motion.div>

      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.5) 50%, rgba(17,17,17,0.9) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(40px, 6vw, 80px)",
          y: textY,
          opacity,
        }}
      >
        {/* Main headline */}
        <div style={{ marginBottom: "32px" }}>
          {["AMAANKHAN", "PATHAN"].map((word, wi) => (
            <div key={word} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.6 + wi * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(52px, 10vw, 120px)",
                  fontWeight: 700,
                  color: "#FAF8F4",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  margin: 0,
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {["DATA ANALYST", "POWER BI", "Python", "SQL"].map(
              (role, i) => (
                <span
                  key={role}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "0.25em",
                    color: "#D8D0C4",
                  }}
                >
                  {i > 0 && (
                    <span style={{ marginRight: "24px", opacity: 0.4 }}>—</span>
                  )}
                  {role}
                </span>
              )
            )}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              fontWeight: 300,
              color: "rgba(250,248,244,0.6)",
              maxWidth: "480px",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            Transforming Complex Data Into Meaningful Business Decisions.
          </motion.p>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  color: "#111111",
                  background: "#FAF8F4",
                  border: "none",
                  padding: "14px 28px",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E9E2D8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FAF8F4";
                }}
              >
                VIEW WORK
              </button>

              <a
                onClick={handleResume}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  color: "#FAF8F4",
                  background: "transparent",
                  border: "1px solid rgba(250,248,244,0.3)",
                  padding: "14px 28px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,248,244,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(250,248,244,0.3)";
                }}
              >
                DOWNLOAD RESUME
              </a>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  color: "rgba(250,248,244,0.6)",
                  background: "transparent",
                  border: "none",
                  padding: "14px 0",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FAF8F4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(250,248,244,0.6)";
                }}
              >
                CONTACT →
              </button>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: "rgba(250,248,244,0.5)",
                    transition: "color 0.2s",
                    display: "flex",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0dd360")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(250,248,244,0.5)")
                  }
                >
                  <Icon size={28} strokeWidth={1.5} />
                </a>
              ))}
              
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "40px",
          right: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={14} color="rgba(250,248,244,0.4)" strokeWidth={1} />
        </motion.div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: "rgba(250,248,244,0.3)",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            marginTop: "8px",
          }}
        >
          SCROLL
        </p>
      </motion.div>
    </section>
  );
}
