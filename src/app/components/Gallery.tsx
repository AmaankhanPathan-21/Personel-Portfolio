import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import MasonryDefault, { ResponsiveMasonry } from "react-responsive-masonry";
const Masonry = MasonryDefault;
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import bgImage from "./images/behind data.png";
import firstTrophy from "./images/winner.png";
import pantherJerseys from "./images/Panther kit.jpeg";
import khelMahakumbh from "./images/Khelmahakumbh.jpg";
import ballonDor from "./images/bg ballon.png";
import myShoes from "./images/shoes.png";
import myCollection from "./images/jerseycollection.jpeg";
import myDesk from "./images/My Desk.jpeg";
import myTrophy from "./images/selfie.jpeg";
import me from "./images/me.png";
import Argentina from "./images/Messi.jpeg";
import messiWc from "./images/messiwc.jpg";
import myBooks from "./images/books.jpeg";


const galleryItems = [
  {
    id: 1,
    src: myDesk,
    caption: "Championship Victory",
    category: "TROPHY",
  },
  {
    id: 2,
    src: me,
    caption: "On The Training Pitch",
    category: "FOOTBALL",
  },
  {
    id: 3,
    src: Argentina,
    caption: "Team Jersey Designing",
    category: "Design",
  },
  {
    id: 4,
    src: bgImage,
    caption: "Data Analytics Certification",
    category: "CERTIFICATION",
  },
  {
    id: 5,
    src: myShoes,
    caption: "Jersey Collection — 2023",
    category: "Team",
  },
  {
    id: 6,
    src: myTrophy,
    caption: "Power BI Certification",
    category: "CERTIFICATION",
  },
  {
    id: 7,
    src: ballonDor,
    caption: "Tournament Finals — Red Card FC",
    category: "TOURNAMENT",
  },
  {
    id: 8,
    src: khelMahakumbh,
    caption: "Academy Memories",
    category: "ACADEMY",
  },
  {
    id: 9,
    src: pantherJerseys,
    caption: "Jersey",
    category: "Pink Panthers FC",
  },
  {
    id: 10,
    src: myCollection,
    caption: "Ballon D'or",
    category: "Football",
  },
  {
    id: 11,
    src: myBooks,
    caption: "League Champions Trophy",
    category: "Pink Panthers FC",
  },
  {
    id: 12,
    src: firstTrophy,
    caption: "First Trophy",
    category: "Pink Panthers FC",
  },
  {
    id: 13,
    src: messiWc,
    caption: "The Goat",
    category: "Idol",
  },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };
  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        background: "#E9E2D8",
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
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
            color: "#6B6560",
          }}
        >
          008 — MOMENTS & MEMORIES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(30px, 3.5vw, 48px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#111111",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          A Life Beyond Dashboards.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 4 }}>
          <Masonry gutter="12px">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                onClick={() => setLightboxIndex(i)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#D8D0C4",
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  style={{
                    width: "100%",
                    display: "block",
                    filter: "grayscale(100%)",
                    transition: "transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), filter 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                    e.currentTarget.style.filter = "grayscale(40%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "grayscale(100%)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "12px 16px",
                    background: "linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="gallery-caption"
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.15em",
                      color: "#FAF8F4",
                      margin: 0,
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 600,
              background: "rgba(17,17,17,0.96)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{
                position: "absolute",
                left: "24px",
                background: "rgba(250,248,244,0.1)",
                border: "none",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <ChevronLeft size={20} color="#FAF8F4" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "80vw", maxHeight: "85vh", position: "relative" }}
            >
              <img
                src={galleryItems[lightboxIndex].src.replace("w=600", "w=1200")}
                alt={galleryItems[lightboxIndex].caption}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  filter: "grayscale(00%)",
                  display: "block",
                }}
              />
              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#6B6560" }}>
                  {galleryItems[lightboxIndex].category}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#FAF8F4", marginTop: "4px" }}>
                  {galleryItems[lightboxIndex].caption}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              style={{
                position: "absolute",
                right: "24px",
                background: "rgba(250,248,244,0.1)",
                border: "none",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ChevronRight size={20} color="#FAF8F4" />
            </button>

            <button
              onClick={() => setLightboxIndex(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(250,248,244,0.1)",
                border: "none",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} color="#FAF8F4" />
            </button>

            <p
              style={{
                position: "absolute",
                bottom: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.15em",
                color: "rgba(250,248,244,0.3)",
              }}
            >
              {lightboxIndex + 1} / {galleryItems.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
