import Footer from "./components/footer";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
        <Hero />
      </div>
      <About />
      <Work />
      <Skills />
      <Projects />
      <div className="relative z-0">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
