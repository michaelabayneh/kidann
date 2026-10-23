const clinicalSkills = [
  { name: "Patient Assessment & Care", pct: 92 },
  { name: "Medication Administration", pct: 88 },
  { name: "Wound Care & IV Therapy", pct: 85 },
  { name: "Emergency Response", pct: 82 },
  { name: "Maternal & Child Health", pct: 87 },
];

const softSkills = [
  "Compassionate Care","Critical Thinking","Team Collaboration","Communication",
  "Adaptability","Time Management","Ethical Practice","Patient Education",
  "Attention to Detail","Problem Solving","Stress Management","Cultural Sensitivity",
];

const languages = ["Amharic — Native", "English — Professional"];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 2rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Core <span style={{ color: "var(--primary)" }}>Skills</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>
          Clinical competencies and professional strengths
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="skills-grid">
          {/* Clinical */}
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem", color: "var(--accent)" }}>Clinical Skills</h3>
            {clinicalSkills.map(s => (
              <div key={s.name} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--muted)", marginBottom: "0.4rem" }}>
                  <span>{s.name}</span><span>{s.pct}%</span>
                </div>
                <div style={{ background: "var(--bg3)", borderRadius: 999, height: 6 }}>
                  <div style={{ width: `${s.pct}%`, height: 6, borderRadius: 999, background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
                </div>
              </div>
            ))}
          </div>

          {/* Soft + Languages */}
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem", color: "var(--accent)" }}>Soft Skills</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {softSkills.map(s => (
                <span key={s} style={{ background: "var(--bg3)", color: "var(--text)", padding: "0.3rem 0.85rem", borderRadius: 999, fontSize: "0.8rem" }}>{s}</span>
              ))}
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: "1.5rem 0 0.75rem", color: "var(--accent)" }}>Languages</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {languages.map(l => (
                <span key={l} style={{ background: "var(--bg3)", color: "var(--text)", padding: "0.3rem 0.85rem", borderRadius: 999, fontSize: "0.8rem" }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:700px){.skills-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
