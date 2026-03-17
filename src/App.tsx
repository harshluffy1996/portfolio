import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { SidebarEmail } from "./components/ui/SidebarEmail";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = lazy(() => import("./components/demos/Dashboard"));
const ApiExplorer = lazy(() => import("./components/demos/ApiExplorer"));
const CrudApp = lazy(() => import("./components/demos/CrudApp"));

function PortfolioPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Navbar />
      <SidebarEmail />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const Loading = () => (
  <div className="min-h-screen bg-bg-primary flex items-center justify-center">
    <div className="text-text-muted text-sm uppercase tracking-wider">Loading...</div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route
        path="/demo/dashboard"
        element={
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/demo/api-explorer"
        element={
          <Suspense fallback={<Loading />}>
            <ApiExplorer />
          </Suspense>
        }
      />
      <Route
        path="/demo/crud-app"
        element={
          <Suspense fallback={<Loading />}>
            <CrudApp />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
