import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground antialiased">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}
