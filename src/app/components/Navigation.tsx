import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = ["Work", "About", "Services", "Beyond", "Contact"];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "24px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s ease, padding 0.4s ease",
          background: scrolled ? "rgba(250,248,244,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(28,28,28,0.08)" : "none",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "15px",
            letterSpacing: "0.25em",
            color: scrolled ? "#111111" : "#FAF8F4",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Pathan-21
        </button>

        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "0.2em",
                color: scrolled ? "#1C1C1C" : "#FAF8F4",
                background: "none",
                border: "none",
                cursor: "pointer",
                opacity: 0.7,
                transition: "opacity 0.2s",
                display: window.innerWidth < 768 ? "none" : "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              {link.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              letterSpacing: "0.2em",
              color: scrolled ? "#1C1C1C" : "#FAF8F4",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "#111111",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                onClick={() => scrollTo(link)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(60px, 10vw, 120px)",
                  fontWeight: 400,
                  color: "#FAF8F4",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "-0.02em",
                  opacity: 0.85,
                  lineHeight: 1.1,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
