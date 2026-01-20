import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t-2 border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">Aareen Aher</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI/ML Engineer passionate about building production-ready AI systems with a focus on 
              reproducibility, scalability, and real-world impact. Open to full-time opportunities 
              at innovative tech companies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/codeinfinity249"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aareen-aher-273841204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:aheraareen2409@gmail.com"
                className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Resume", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:aheraareen2409@gmail.com" className="hover:text-foreground transition-colors">
                  aheraareen2409@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Github className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://github.com/codeinfinity249" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  github.com/codeinfinity249
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Linkedin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://www.linkedin.com/in/aareen-aher-273841204" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  linkedin.com/in/aareen-aher
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Aareen Aher. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                Built with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> using React & Tailwind CSS
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full hover:bg-accent"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}