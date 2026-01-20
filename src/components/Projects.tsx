import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Star, TrendingUp, Award } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Chest CT Scan Disease Classification",
      featured: true,
      description: "Production-ready end-to-end MLOps pipeline for automated disease classification from chest CT scans using deep learning with complete model lifecycle management.",
      problem: "Healthcare systems require reliable, reproducible AI models for medical imaging that can be deployed and monitored in production environments with clinical decision support.",
      techStack: [
        "DenseNet121",
        "PyTorch",
        "DVC",
        "MLflow",
        "Docker",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "GitHub Actions",
        "Grad-CAM",
      ],
      highlights: [
        "Built 2-stage DenseNet121-based CT imaging pipeline on 1k+ images achieving 99.64% accuracy & 0.996 F1-score in binary cancer detection",
        "Achieved 71.6% accuracy with 0.72 weighted F1-score for three-class carcinoma subtypes classification",
        "Implemented reproducible MLOps workflow with DVC for dataset/pipeline versioning and MLflow (via Dagshub) for experiment tracking",
        "Applied generator-based image normalization & structured train/test split for reliable model training",
        "Deployed Dockerized Flask APIs on AWS EC2 with images in AWS ECR and automated GitHub Actions CI/CD",
        "Enabled real-time CT scan inference (<1s per scan) with seamless container-based redeployment",
        "Integrated Grad-CAM explainability to visualize disease-relevant regions with class-wise confidence for clinical decisions",
      ],
      metrics: { 
        accuracy: "99.64%", 
        f1Score: "0.996",
        inference: "<1s",
        images: "1k+" 
      },
      github: "https://github.com/codeinfinity249",
    },
    {
      title: "Urban PM2.5 / PM10 Forecasting using Hybrid ML Models",
      featured: false,
      description: "End-to-end time-series forecasting pipeline for urban particulate matter pollution across multiple monitoring stations with 24-72 hour prediction horizons.",
      problem: "Urban air quality management requires accurate multi-hour forecasting of PM2.5 and PM10 levels across distributed monitoring networks to enable proactive public health interventions.",
      techStack: ["XGBoost", "ANN", "LSTM", "Python", "Scikit-learn", "Pandas", "NumPy"],
      highlights: [
        "Designed end-to-end PM2.5/PM10 time series forecasting pipeline across 3 monitoring stations for 24-72 hour horizon forecast",
        "Implemented base models with XGBoost, ANN, LSTM on time series data achieving R² up to 0.94 under out-of-sample evaluation",
        "Implemented 5 hybrid ensemble methods reducing forecast RMSE by 18-30% and compressed error variance by 20-35%",
        "Bayesian Model Averaging (XGB+LSTM) achieved PM2.5 RMSE of 1.43 µg/m³ and PM10 RMSE of 4.71 µg/m³ across Mumbai",
      ],
      metrics: { 
        r2Score: "0.94",
        rmseImprovement: "18-30%",
        pm25RMSE: "1.43 µg/m³",
        stations: "3"
      },
      github: "https://github.com/codeinfinity249",
    },
    {
      title: "Multimodal RAG PDF Assistant",
      featured: false,
      description: "End-to-end multimodal Retrieval-Augmented Generation pipeline enabling structured retrieval from academic PDFs with text, tables, and image understanding.",
      problem: "Researchers need efficient question-answering systems that can accurately retrieve and reason over complex academic documents containing mixed content types while reducing hallucination.",
      techStack: ["LangChain", "ChromaDB", "OpenAI APIs", "GPT-4o", "Streamlit", "Python", "Unstructured"],
      highlights: [
        "Designed & built end-to-end multimodal RAG pipeline using LangChain, Streamlit, Unstructured & ChromaDB",
        "Ingested 10+ academic PDFs with title-aware chunking enabling structured text, table, and image retrieval",
        "Optimized semantic retrieval by embedding 1k+ docs with OpenAI, improving top-k relevance by 30% via MMR",
        "Implemented grounded QA with GPT-4o using evidence-only prompts, reducing hallucination vs zero-context LLM",
        "Deployed Streamlit app with persistent vector store and multimodal evidence achieving <1.5s average query latency",
      ],
      metrics: { 
        relevanceImprovement: "30%",
        queryLatency: "<1.5s",
        documents: "10+",
        embeddings: "1k+"
      },
      github: "https://github.com/codeinfinity249",
    },
    {
      title: "Enterprise Corporate AI Assistant",
      featured: false,
      description: "Production-grade RAG-based enterprise AI platform with intent classification, access control, and multi-user orchestration for internal policy management.",
      problem: "Enterprises need secure, governed AI assistants for internal knowledge bases that prevent unauthorized access, reduce hallucination, and maintain high reliability at scale.",
      techStack: ["OpenAI Embeddings", "n8n", "React", "REST APIs", "Python", "Vector Store"],
      highlights: [
        "Designed & deployed enterprise-grade RAG platform using n8n + OpenAI embeddings indexing 100+ internal policy docs",
        "Delivered HR/IT query resolution with <1.2s latency and reduced hallucination through semantic vector store",
        "Implemented LLM-based intent classification, confidence scoring, and rule-driven access-control gates",
        "Blocked 100% unauthorized queries and improved response prediction to 0.89 F1 score across internal QA predictions",
        "Deployed production-ready frontend-backend workflow integrating React, REST webhooks, environment-secured APIs",
        "Achieved 99.9% workflow reliability with scalable multi-user support & governed AI response",
      ],
      metrics: { 
        latency: "<1.2s",
        reliability: "99.9%",
        f1Score: "0.89",
        documents: "100+"
      },
      github: "https://github.com/codeinfinity249",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
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
              <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">Projects</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Production-ready AI systems demonstrating end-to-end ML engineering expertise and real-world impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card
                  className={`p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm ${
                    project.featured
                      ? "border-2 border-primary/40 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent shadow-xl"
                      : "border-2 hover:border-primary/30"
                  }`}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border-2 border-primary/30">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm">Flagship Project</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-600 dark:text-green-400">Production Ready</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl mb-3">{project.title}</h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                      {/* Problem Statement */}
                      <div className="mb-5 p-5 bg-gradient-to-r from-accent/50 to-accent/30 rounded-xl border-l-4 border-primary shadow-sm">
                        <p className="text-sm leading-relaxed">
                          <span className="text-foreground">Problem:</span> {project.problem}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <p className="text-sm mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          Key Achievements:
                        </p>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 mt-0.5">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <p className="text-sm mb-3">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="bg-background/80 backdrop-blur-sm border-2 shadow-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        <Button variant="default" size="sm" className="gap-2 shadow-md hover:shadow-lg" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Metrics Sidebar */}
                    <div className="lg:col-span-4">
                      <div className="lg:sticky lg:top-24">
                        <div className="p-6 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl border-2 border-primary/20 shadow-lg">
                          <h4 className="text-sm mb-4 text-muted-foreground uppercase tracking-wider">Key Metrics</h4>
                          <div className="space-y-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="p-3 bg-background/60 backdrop-blur-sm rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim().replace(/([0-9]+)/, ' $1')}
                                </p>
                                <p className="text-xl">{value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6 text-lg">
              More projects and contributions available on GitHub
            </p>
            <Button variant="outline" size="lg" className="gap-2 border-2 shadow-lg hover:shadow-xl" asChild>
              <a
                href="https://github.com/codeinfinity249"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View All Repositories
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
