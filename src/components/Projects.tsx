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
      status: "production",
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
        "Implemented MLOps workflow with DVC for pipeline versioning & MLflow (via Dagshub) for experiment tracking",
        "Applied generator-based image normalization & structured train/test split for reliable model training",
        "Deployed Dockerized Flask APIs on AWS EC2 with images in AWS ECR and automated GitHub Actions CI/CD",
        "Enabled real-time CT scan inference (<1s per scan) with seamless container-based redeployment",
        "Integrated Grad-CAM to visualize disease-relevant regions with class-wise confidence for clinical decisions",
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
      title: <>Urban PM<sub>2.5</sub> / PM<sub>10</sub> Forecasting using Hybrid ML Models</>,
      featured: false,
      status: "research",
      description: "End-to-end time-series forecasting pipeline for urban PM pollution in Mumbai, developed using data from 3 monitoring stations (Powai, Vile Parle & Borivali) to generate 24–72 hour predictive horizons.",
      problem: "Urban air quality management requires accurate multi-hour forecasting of PM2.5 and PM10 levels across distributed monitoring networks to enable proactive public health interventions.",
      techStack: ["XGBoost", "ANN", "LSTM", "Python", "Scikit-learn", "Pandas", "NumPy"],
      highlights: [
        <>Designed PM<sub>2.5</sub>/PM<sub>10</sub> time-series forecasting pipeline across 3 monitoring stations for 24–72 hour horizons</>,

        <>Implemented baseline models (XGBoost, ANN, LSTM) achieving R<sup>2</sup> up to 0.94 under out-of-sample evaluation</>,

        <>Developed 5 hybrid ensemble methods reducing RMSE by 18–30% and compressing error variance by 20–35%</>,

        <>Bayesian Model Averaging (XGB + LSTM) achieved PM<sub>2.5</sub> RMSE of 1.43 µg/m<sup>3</sup> and PM<sub>10</sub> RMSE of 4.71 µg/m<sup>3</sup></>,
      ],
      metrics: { 
        R2Score: "0.94",
        rmseImprovement: "18-30%",
        pm25RMSE: "1.43 µg/m³",
        stations: "3"
      },
      github: "https://github.com/codeinfinity249",
    },
    {
      title: "Multimodal RAG PDF Assistant",
      featured: false,
      status: "enterprise",
      description: "End-to-end Multimodal Retrieval-Augmented Generation (RAG) system designed to ingest academic PDFs & enable grounded question answering across text, tables, & images with structured retrieval.",
      problem: "Researchers need efficient question-answering systems that can accurately retrieve and reason over complex academic documents containing mixed content types while reducing hallucination.",
      techStack: ["LangChain", "ChromaDB", "OpenAI APIs", "GPT-4o", "Streamlit", "Python", "Unstructured"],
      highlights: [
        "Designed & built end-to-end multimodal RAG pipeline using LangChain, Streamlit, Unstructured & ChromaDB",
        "Ingested 10+ academic PDFs with title-aware chunking enabling structured text, table, and image retrieval",
        "Optimized semantic retrieval by embedding 1k+ docs with OpenAI, improving top-k relevance by 30% via MMR",
        "Implemented grounded QA with GPT-4o using evidence-only prompts, reducing hallucination vs zero-context LLM & deployed Streamlit app with persistent vector store & multimodal evidence achieving <1.5s query latency",
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
      status: "enterprise",
      description: "Production-grade enterprise AI assistant that enables employees to securely retrieve accurate internal policy information through a governed, multi-user RAG-based platform.",
      problem: "Enterprises need a secure and reliable AI assistant that enables employees to quickly retrieve accurate internal policy information, reducing dependency on manual queries & internal support teams.",
      techStack: ["OpenAI Embeddings", "n8n", "React", "REST APIs", "Python", "Vector Store"],
      highlights: [
        "Designed enterprise-grade RAG platform using n8n + OpenAI embeddings indexing 100+ internal policy docs",
        "Delivered HR/IT query resolution with <1.2s latency and reduced hallucination through semantic vector store",
        "Implemented LLM-based intent classification, confidence scoring, and rule-driven access-control gates",
        "Blocked 100% unauthorized queries and improved response prediction to 0.89 F1 score across internal QA",
        "Deployed frontend-backend workflow integrating React, REST webhooks, environment-secured APIs",
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
    {
      title: "XAI-Constrained Model Optimization Pipeline",
      featured: false,
      status: "production",
      description:
        "Explainability-constrained machine learning optimization pipeline for credit risk modeling, enforcing stability-aware model selection through integrated XAI diagnostics.",
      problem:
        "Conventional hyperparameter optimization focuses solely on predictive performance, often ignoring interpretability, stability, and auditability its a key requirements for deploying machine learning models in regulated financial risk environments.",
      techStack: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "SHAP",
        "PDP",
        "ALE",
        "MLflow",
        "DAGsHub",
      ],
      highlights: [
        "Built explainability-constrained ML optimization pipeline for credit risk modeling across 30+ engineered features",
        "Optimized Logistic Regression, RF & XGBoost via XAI-aware tuning achieving 93.5% accuracy, 0.95 ROC-AUC",
        "Enforced model stability using SHAP, PDP & ALE with SHAP variance reduced to 0.002 & ALE spikes <0.41",
        "Productionized experimentation with MLflow + DAGsHub, logging hyperparameters, metrics & XAI artifacts",
      ],
      metrics: {
        accuracy: "93.5%",
        rocAuc: "0.95",
        f1Score: "0.83",
        features: "30+",
      },
      github: "https://github.com/codeinfinity249",
    },
    {
      title: <>Gesture-Controlled Volumetric Shape Visualization System</>,
      featured: false,
      status: "production",
      description:
        "A real-time interactive 3D visualization system enabling gesture-based exploration of complex volumetric shapes using hand tracking, physics-driven motion, and parametric surface modeling.",
      problem:
        "Exploring and understanding complex 3D geometric structures requires intuitive interaction techniques beyond traditional mouse–keyboard interfaces, particularly for immersive visualization and inspection.",
      techStack: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "Pygame",
        "Computer Vision",
        "Real-Time Graphics",
        "HCI"
      ],
      highlights: [
        <>Built a gesture-driven 3D visualization system integrating computer vision, real-time graphics, and HCI concepts</>,

        <>Used MediaPipe hand landmarks for stable rotation, pinch-based zooming, & intuitive real-time camera control</>,

        <>Implemented parametric surface sampling for Superquadrics, Möbius strips, and Torus Knots (2,3) & (5,3)</>,

        <>Designed camera inertia and tweening to smooth rotations, minimize jitter, and improve interaction stability</>,

        <>Developed a custom HUD with glassmorphism UI, elastic scrolling, pulse animations, and glow-based feedback</>,

        <>Optimized real-time rendering of 1000+ particles at 60 FPS using depth-aware scaling and motion trails</>,
      ],
      metrics: {
        frameRate: "60 FPS",
        particles: "1000+",
        interactionLatency: "<20 ms",
        inputModalities: "Hand gestures + Keyboard + Mouse"
      },
      github: "https://github.com/codeinfinity249",
    },
    {
      title: <>Customer Churn Analytics & Prediction System</>,
      featured: true,
      status: "production",
      description:
        "An end-to-end churn analytics and prediction system that integrates SQL-based ETL pipelines, interactive Power BI dashboards, and machine learning models to analyze customer behavior and predict churn risk.",
      
      problem:
        "Customer churn leads to significant revenue loss for subscription-based businesses. Organizations require a scalable data pipeline and predictive framework to analyze churn drivers, identify high-risk customers, and support proactive retention strategies.",
      
      techStack: [
        "Microsoft SQL Server",
        "SQL Server Management Studio",
        "Power BI",
        "Python",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "Machine Learning",
        "Data Analytics"
      ],

      highlights: [
        <>Architected an end-to-end churn analytics pipeline using Microsoft SQL Server ETL workflows to process and structure telecom customer data</>,

        <>Designed staging and production database layers with validation logic and analytical SQL views for reliable downstream analytics</>,

        <>Developed an interactive Power BI dashboard visualizing churn metrics across demographics, services, contracts, and geography</>,

        <>Built a machine learning churn prediction model using XGBoost to identify customers at high risk of churn</>,

        <>Implemented feature encoding, model training, evaluation, and prediction pipelines using Python and Scikit-learn</>,

        <>Enabled data-driven retention strategies by identifying churn drivers such as contract type, tenure, service usage, and payment methods</>,
      ],

      metrics: {
        datasetSize: "6,400+ customers",
        churnRateAnalyzed: "27%",
        dashboards: "3 Interactive Pages",
        mlModel: "XGBoost Classifier"
      },

      github: "https://github.com/codeinfinity249/Customer-Churn-Analytics"
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
                  {/*
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
                  )}*/}

                  {/* Project Badges */}
                  {(project.featured || project.status) && (
                    <div className="flex items-center gap-3 mb-5">

                      {/* Flagship Badge */}
                      {project.featured && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-primary/20 to-purple-500/20 
                          border-2 border-primary/30">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="text-sm">Flagship Project</span>
                        </div>
                      )}

                      {/* Status Badge */}
                      {project.status === "production" && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                          bg-green-500/10 border border-green-500/30">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-xs text-green-600 dark:text-green-400">
                            Production Ready
                          </span>
                        </div>
                      )}

                      {project.status === "research" && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                          bg-yellow-500/10 border border-yellow-500/30">
                          <TrendingUp className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-yellow-700 dark:text-yellow-400">
                            Research – Under Publication
                          </span>
                        </div>
                      )}

                      {project.status === "enterprise" && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                          bg-blue-500/10 border border-blue-500/30">
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                          <span className="text-xs text-blue-700 dark:text-blue-400">
                            Enterprise Deployed
                          </span>
                        </div>
                      )}
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
