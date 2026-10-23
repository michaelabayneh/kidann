const highlights = [
  { icon: "❤️", title: "Empathetic Caregiver", desc: "Patient-first approach with strong interpersonal and communication skills" },
  { icon: "🔬", title: "Evidence-Based Practice", desc: "Clinically trained to apply current research and protocols at the bedside" },
  { icon: "🤝", title: "Team Player", desc: "Proven ability to collaborate with physicians, nurses, and support staff" },
  { icon: "📋", title: "Detail-Oriented", desc: "Accurate documentation, medication administration, and care planning" },
];

const openTo = ["Hospital Nursing", "Community Health", "MCH / Maternal Care", "Emergency & ICU", "NGO / Health Programs", "Public Health"];

export default function About() {
  return (
    <section id="about" style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          About <span style={{ color: "var(--primary)" }}>Me</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>Who I am and what drives me</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}
          className="about-grid">

          <div>
            <p style={{ color: "var(--muted)", marginBottom: "1rem", lineHeight: 1.8 }}>
              I am a BSc Nursing graduate from Woldia University with a strong clinical and academic foundation,
              dedicated to delivering high-quality, compassionate patient care. My training has equipped me with
              hands-on skills in a wide range of clinical settings — from emergency care to maternal health and
              community nursing.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "1rem", lineHeight: 1.8 }}>
              I am detail-oriented, highly empathetic, and driven by a genuine commitment to improving health
              outcomes. I thrive in fast-paced environments and work effectively both independently and as part
              of multidisciplinary teams.
            </p>
            <blockquote style={{
              borderLeft: "3px solid var(--primary)", paddingLeft: "1rem",
              color: "var(--accent)", fontStyle: "italic", margin: "1.5rem 0", fontSize: "0.95rem",
            }}>
              &ldquo;My mission is to provide safe, evidence-based, and compassionate care to every patient —
              and to contribute to a stronger, more accessible healthcare system.&rdquo;
            </blockquote>

            <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "0.75rem" }}>Open to opportunities in:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {openTo.map(o => (
                <span key={o} style={{
                  background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)",
                  color: "#86efac", padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.85rem", fontWeight: 500,
                }}>{o}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {highlights.map(h => (
              <div key={h.title} style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 12, padding: "1.25rem",
                display: "flex", gap: "1rem", alignItems: "flex-start",
                transition: "border-color 0.2s",
              }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "var(--primary)")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <span style={{ fontSize: "1.5rem" }}>{h.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.2rem" }}>{h.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
