import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute right-[-8rem] top-[32rem] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/3 top-[70rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
        <Hero />
      </div>
      <div className="relative z-10 space-y-2 pb-8">
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
