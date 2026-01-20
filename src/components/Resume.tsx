import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FileDown, ExternalLink, FileText, Download } from "lucide-react";

export function Resume() {
  const resumeSections = [
    {
      title: "Education",
      content: "B.Tech & M.Tech in Environmental Science and Engineering, IIT Bombay (2020 - 2025)",
    },
    {
      title: "Core Competencies",
      content: "Machine Learning • Deep Learning • MLOps • Generative AI • Production ML Systems",
    },
    {
      title: "Technical Expertise",
      content: "PyTorch, TensorFlow, MLflow, DVC, Docker, GitHub Actions, AWS, Python, SQL",
    },
  ];

  return (
    <section id="resume" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">Resume</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl mb-4">Resume</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Comprehensive overview of qualifications and experience
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Resume Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="p-8 sm:p-10 mb-10 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl shadow-lg">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl mb-3">Aareen Aher</h3>
                    <p className="text-xl text-primary mb-3">AI / ML Engineer</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Engineer focused on designing and delivering end-to-end machine learning solutions, 
                      from problem formulation and experimentation to reliable real-world deployment. 
                      Experienced in translating complex research ideas into practical systems with measurable impact.
                    </p>
                  </div>
                </div>

                {/* Quick Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {resumeSections.map((section, index) => (
                    <motion.div 
                      key={index} 
                      className="p-5 bg-background/60 backdrop-blur-sm rounded-xl border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-sm mb-2 text-primary">{section.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/*
                  <Button size="lg" className="gap-2 flex-1 sm:flex-initial shadow-lg hover:shadow-xl">
                    <Download className="w-5 h-5" />
                    Download Resume (PDF)
                  </Button>*/}
                  <Button size="lg" className="gap-2 flex-1 sm:flex-initial shadow-lg hover:shadow-xl" asChild >
                    <a
                      href="/resume/Aareen_Tech_Draft.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-5 h-5" />
                      View Resume (PDF)
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 flex-1 sm:flex-initial border-2 shadow-md hover:shadow-lg" asChild>
                    <a
                      href="https://www.linkedin.com/in/aareen-aher-273841204"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="p-8 sm:p-10 bg-card/50 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl mb-8">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                      <h4 className="text-lg text-primary">Technical Depth</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Strong Python-based problem solving & ML workflows</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Deep understanding of neural network & GenAI architectures</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Experience deploying, monitoring & maintaining ML systems</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Practical knowledge of cloud platforms & containerized systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                      <h4 className="text-lg text-primary">Professional Skills</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Cross-functional collaboration and communication</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Research-to-production translation experience</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Code review and engineering best practices</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>Mentoring and clear technical documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 text-center"
            >
              <div className="inline-block px-6 py-3 bg-primary/10 border-2 border-primary/20 rounded-full">
                <p className="text-sm">
                  Resume last updated: January 2026 • Available for full-time opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
