const tags = [
  "Medical-Surgical Nursing", "Pediatric Nursing", "Maternal & Child Health",
  "Community Nursing", "Emergency Care", "Psychiatric Nursing",
  "Critical Care", "Anatomy & Physiology", "Pharmacology", "Nursing Research",
];

export default function Academics() {
  return (
    <section id="academics" style={{ padding: "5rem 2rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Academic <span style={{ color: "var(--primary)" }}>Record</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>Education and academic achievements</p>

        <div style={{
          background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16,
          padding: "2rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem",
        }} className="edu-card">
          <div>
            <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "1.15rem" }}>BSc in Nursing</p>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.25rem 0" }}>
              Woldia University · College of Health Sciences
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
              2022 – 2026 · Woldia, Ethiopia
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
              {tags.map(t => (
                <span key={t} style={{
                  background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)",
                  color: "var(--accent)", padding: "0.3rem 0.75rem", borderRadius: 999, fontSize: "0.78rem",
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{
            background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)",
            color: "var(--gold)", padding: "0.75rem 1.25rem", borderRadius: 8,
            fontWeight: 700, fontSize: "0.9rem", height: "fit-content", textAlign: "center", lineHeight: 1.6,
          }}>
            BSc<br />2026
          </div>
        </div>
      </div>
      <style>{`@media (max-width:700px){.edu-card{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
