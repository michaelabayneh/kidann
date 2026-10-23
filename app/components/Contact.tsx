const contacts = [
  {
    icon: "📧",
    label: "Email",
    display: "kidanemariamsisay19@gmail.com",
    href: "mailto:kidanemariamsisay19@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    display: "+251 902 126 536",
    href: "tel:+251902126536",
  },
  {
    icon: "✈️",
    label: "Telegram",
    display: "@kidanemariam",
    href: "https://t.me/kidanemariam",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "5rem 2rem", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Let&apos;s <span style={{ color: "var(--primary)" }}>Connect</span>
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto 1rem", fontSize: "0.95rem" }}>
          Ready to contribute from day one. Open to hospital positions, NGO health programs,
          community health roles, and any opportunity to grow as a nursing professional.
        </p>

        {/* CV Download Banner */}
        <div style={{
          background: "linear-gradient(135deg,rgba(14,165,233,0.12),rgba(56,189,248,0.06))",
          border: "1px solid rgba(14,165,233,0.3)", borderRadius: 16,
          padding: "1.5rem 2rem", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap",
          maxWidth: 650, margin: "2rem auto",
        }}>
          <div style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.3rem" }}>📄 CV &amp; Resume</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Download Kidanemariam&apos;s full CV and Resume</p>
          </div>
          <a href="/Kidane-CV-Resume.pdf" download style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "var(--primary)", color: "#fff",
            padding: "0.75rem 1.5rem", borderRadius: 8,
            fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
            transition: "background 0.2s, transform 0.2s", whiteSpace: "nowrap",
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary-dark)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >⬇ Download PDF</a>
        </div>

        {/* Contact Cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
          {contacts.map(c => (
            <div key={c.label} style={{
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "1.25rem 2rem", textAlign: "center",
              minWidth: 180, transition: "border-color 0.2s",
            }}
              onMouseOver={e => (e.currentTarget.style.borderColor = "var(--primary)")}
              onMouseOut={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>{c.icon}</div>
              <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: "0.3rem" }}>{c.label}</p>
              <a href={c.href} target={c.label === "Telegram" ? "_blank" : undefined}
                rel="noreferrer"
                style={{ color: "var(--text)", fontSize: "0.88rem", fontWeight: 500, textDecoration: "none", wordBreak: "break-all" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--primary)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--text)")}
              >{c.display}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
