import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Database, Cpu, Cloud, Settings, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/20",
      skills: ["Python", "SQL", "C++"],
    },
    {
      category: "Libraries & Frameworks",
      icon: Cpu,
      color: "from-purple-500/20 to-pink-500/20",
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "LangChain",
        "ChromaDB",
        "LSTM",
        "Matplotlib",
      ],
    },
    {
      category: "MLOps & Platforms",
      icon: Settings,
      color: "from-green-500/20 to-emerald-500/20",
      skills: [
        "Docker",
        "DVC",
        "MLflow",
        "Git",
        "GitHub Actions",
        "Flask",
        "n8n",
        "Dagshub",
        "Kubernetes",
        "VS Code",
      ],
    },
    {
      category: "Cloud & Systems",
      icon: Cloud,
      color: "from-indigo-500/20 to-blue-500/20",
      skills: [
        "AWS EC2",
        "AWS ECR",
        "REST APIs",
      ],
    },
    {
      category: "Domain Tools",
      icon: Wrench,
      color: "from-orange-500/20 to-red-500/20",
      skills: [
        "MATLAB",
        "ArcGIS",
        "EPANET",
        "CloudCompare",
        "OpenLCA",
        "Google Earth Pro",
        "BioWin",
        "Unity Engine",
        "Visual MINTEQ",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
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
              <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">Skills</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Comprehensive expertise across the ML engineering stack, from research to production deployment
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 group">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                      <div className={`p-2.5 bg-gradient-to-br ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base leading-tight">
                        {category.category}
                      </h3>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-primary/5 border-2 border-primary/20 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-primary/10"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-6 py-3 bg-primary/10 border-2 border-primary/20 rounded-full">
              <p className="text-sm text-muted-foreground">
                Continuously learning and expanding technical expertise across emerging AI/ML technologies
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
