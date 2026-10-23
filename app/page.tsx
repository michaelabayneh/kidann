import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Clinical from "./components/Clinical";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Clinical />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <footer style={{
        textAlign: "center", padding: "2rem",
        color: "var(--muted)", fontSize: "0.82rem",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}>
        © 2026 Kidanemariam Sisay · BSc Nursing Graduate · Woldia University · All rights reserved
      </footer>
    </>
  );
}
