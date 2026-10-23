"use client";
import { useState } from "react";
import Link from "next/link";

const links = ["About", "Academics", "Skills", "Clinical", "Credentials", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      background: "rgba(15,23,42,0.88)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      padding: "1rem 2rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--primary)" }}>KS</span>

      {/* Desktop */}
      <ul style={{ listStyle: "none", display: "flex", gap: "2rem", margin: 0, padding: 0 }}
        className="hidden-mobile">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s"
            }}
              onMouseOver={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l}</a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", color: "var(--text)", fontSize: "1.4rem", cursor: "pointer", display: "none" }}
        className="show-mobile">☰</button>

      {open && (
        <div style={{
          position: "fixed", top: "60px", left: 0, right: 0,
          background: "var(--bg2)", borderBottom: "1px solid var(--border)",
          padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem"
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "1rem" }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
