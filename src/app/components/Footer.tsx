import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        background: "#111111",
        padding: "48px clamp(24px, 6vw, 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "24px",
        borderTop: "1px solid rgba(250,248,244,0.06)",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            letterSpacing: "0.2em",
            color: "#778177",
            margin: 0,
          }}
        >
          AMAANKHAN PATHAN
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.1em",
            color: "rgba(133, 127, 123, 0.5)",
            marginTop: "4px",
          }}
        >
          © 2024 — All rights reserved
        </p>
      </div>

      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/amaankhan-pathan-084804274/", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/AmaankhanPathan-21", label: "GitHub" },
          { icon: Instagram, href: "https://www.instagram.com/amaankhan_pathan21/", label: "Instagram" },
          { icon: Mail, href: "mailto:amaankhanpathan10@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: "rgba(156, 147, 140, 0.5)",
              transition: "color 0.2s",
              display: "flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF8F4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(180, 169, 161, 0.7)")}
          >
            <Icon size={18} strokeWidth={1.5} />
          </a>
        ))}
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          letterSpacing: "0.1em",
          color: "rgba(150, 144, 139, 0.4)",
        }}
      >
        DATA ANALYST · POWER BI · PYTHON · SQL · EXCEL
      </p>
    </footer>
  );
}
