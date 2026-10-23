const creds = [
  { icon: "🎓", title: "BSc in Nursing", sub: "Woldia University · College of Health Sciences", year: "2026" },
  { icon: "📋", title: "Exit Exam Certificate", sub: "Ethiopian Higher Education", year: "2026" },
  { icon: "🏥", title: "Clinical Practicum Certificate", sub: "Multi-department hospital rotations", year: "2023 – 2026" },
  { icon: "🩺", title: "BLS / First Aid Training", sub: "Basic Life Support Competency", year: "2025" },
  { icon: "🌍", title: "Community Health Outreach", sub: "Preventive care & health education", year: "2024 – 2026" },
  { icon: "⭐", title: "Academic Excellence", sub: "Consistent top performance · 4 years", year: "2022 – 2026" },
];

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Awards & <span style={{ color: "var(--primary)" }}>Credentials</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>
          Certifications, licenses, and achievements
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1.5rem" }}>
          {creds.map(c => (
            <div key={c.title} style={{
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "1.5rem", textAlign: "center",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
              <h4 style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{c.title}</h4>
              <p style={{ color: "var(--muted)", fontSize: "0.82rem" }}>{c.sub}</p>
              <p style={{ color: "var(--primary)", fontSize: "0.8rem", fontWeight: 600, marginTop: "0.4rem" }}>{c.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
