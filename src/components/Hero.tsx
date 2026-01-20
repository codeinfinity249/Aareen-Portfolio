import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, FileDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const profileImage = "https://images.unsplash.com/photo-1562228802-4b1052d0f845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzM5MjA5M3ww&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0))]"></div>
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm">Available for Full-Time Opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl mb-4 tracking-tight"
              >
                Aareen Aher
              </motion.h1>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6"
              >
                <p className="text-xl sm:text-2xl text-muted-foreground mb-3">
                  AI / ML Engineer
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1 rounded-md bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-sm">
                    Deep Learning
                  </span>
                  <span className="px-3 py-1 rounded-md bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-sm">
                    MLOps
                  </span>
                  <span className="px-3 py-1 rounded-md bg-gradient-to-r from-primary/10 to-green-500/10 border border-primary/20 text-sm">
                    Computer Vision
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Building production-ready AI systems with a focus on reproducibility, 
                scalability, and real-world impact. Passionate about translating cutting-edge 
                research into deployable solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Button 
                  size="lg" 
                  className="gap-2 shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                  <ArrowDown className="w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 shadow-sm hover:shadow-md transition-all border-2"
                  onClick={() => scrollToSection("resume")}
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex gap-3 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/codeinfinity249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aareen-aher-273841204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:aheraareen2409@gmail.com"
                  className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 transform rotate-6"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                    <ImageWithFallback
                      src={profileImage}
                      alt="Aareen Aher - AI/ML Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute -bottom-4 -right-4 bg-card border-2 border-primary/30 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-sm"
                  >
                    <p className="text-sm text-muted-foreground">Based in</p>
                    <p className="text-foreground">Mumbai, India</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer p-2 rounded-full hover:bg-accent/50 transition-colors"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.button>
      </motion.div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}