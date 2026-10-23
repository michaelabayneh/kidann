const rotations = [
  {
    title: "Medical-Surgical Ward",
    place: "Hospital Rotation · Clinical Practicum",
    desc: "Provided direct patient care including wound management, IV therapy, medication administration, and vital signs monitoring for adult inpatients.",
  },
  {
    title: "Maternal & Child Health Unit",
    place: "MCH Rotation · Clinical Practicum",
    desc: "Assisted in antenatal care, labor and delivery, postpartum care, and neonatal assessment. Supported education for new mothers on breastfeeding and infant care.",
  },
  {
    title: "Pediatric Ward",
    place: "Pediatric Rotation · Clinical Practicum",
    desc: "Cared for infants and children with acute and chronic illnesses. Applied age-appropriate communication and family-centered care approaches.",
  },
  {
    title: "Emergency & Outpatient Department",
    place: "OPD & Emergency Rotation · Clinical Practicum",
    desc: "Gained experience in triage, emergency assessment, first aid, and rapid patient stabilization in high-pressure environments.",
  },
  {
    title: "Community & Public Health",
    place: "Community Health Practicum · Woldia University",
    desc: "Conducted health education sessions, immunization outreach, and home visits. Collaborated with health extension workers to promote preventive care.",
  },
];

export default function Clinical() {
  return (
    <section id="clinical" style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Clinical <span style={{ color: "var(--primary)" }}>Experience</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.95rem" }}>
          Hands-on training across diverse healthcare settings
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {rotations.map(r => (
            <div key={r.title} style={{
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "1.5rem",
              display: "flex", gap: "1.5rem", transition: "border-color 0.2s",
            }}
              onMouseOver={e => (e.currentTarget.style.borderColor = "var(--primary)")}
              onMouseOut={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{
                width: 10, height: 10, background: "var(--primary)",
                borderRadius: "50%", marginTop: "0.35rem", flexShrink: 0,
              }} />
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{r.title}</h4>
                <span style={{ color: "var(--primary)", fontSize: "0.85rem" }}>{r.place}</span>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", marginTop: "0.4rem" }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
