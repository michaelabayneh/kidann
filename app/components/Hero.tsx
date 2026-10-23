import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center",
      padding: "6rem 2rem 4rem",
      background: "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.12) 0%, transparent 70%)",
    }}>
      <div style={{ maxWidth: 750 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.3)",
          color: "var(--accent)", padding: "0.4rem 1rem", borderRadius: 999,
          fontSize: "0.85rem", marginBottom: "1.5rem",
        }}>🩺 BSc Nursing · Class of 2026</div>

        <h1 style={{
          fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 800,
          lineHeight: 1.15, marginBottom: "1rem",
        }}>
          Hello, I am{" "}
          <span style={{ color: "var(--primary)" }}>Kidanemariam Sisay</span>
        </h1>

        <p style={{ fontSize: "1.1rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
          BSc Nursing Graduate · Woldia University · Compassionate &amp; Skilled Healthcare Professional
        </p>
        <p style={{
          fontSize: "1rem", color: "var(--muted)", marginBottom: "2rem",
          maxWidth: 600, marginInline: "auto",
        }}>
          Passionate about patient-centered care, evidence-based practice, and making a meaningful
          difference in healthcare systems across Ethiopia and beyond.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{
            padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600,
            fontSize: "0.95rem", background: "var(--primary)", color: "#fff",
            textDecoration: "none", transition: "all 0.2s",
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary-dark)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >Get In Touch</a>

          <a href="/Kidane-CV-Resume.pdf" download style={{
            padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600,
            fontSize: "0.95rem", background: "transparent", color: "var(--text)",
            border: "1px solid var(--border)", textDecoration: "none", transition: "all 0.2s",
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
          >⬇ Download CV & Resume</a>
        </div>
      </div>
    </section>
  );
}
