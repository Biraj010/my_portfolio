import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient gradient blobs — fixed so they composite on GPU and don't repaint on scroll */}
      <div className="pointer-events-none fixed inset-0 -z-[1] opacity-70">
        <div className="absolute left-[-6rem] top-24 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-[28rem] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
        <Hero />
      </div>

      <div className="relative z-10">
        <About />
        <div className="section-divider" />
        <Work />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
