import { motion } from "motion/react";
import { Brain, Code, Lightbulb, Rocket } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const values = [
    {
      icon: Brain,
      title: "Research-Driven",
      description: "Staying at the forefront of AI/ML research and applying cutting-edge techniques to solve real problems",
    },
    {
      icon: Code,
      title: "Engineering Excellence",
      description: "Writing clean, maintainable, and production-ready code with a focus on best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Approaching complex challenges with analytical thinking and creative solutions",
    },
    {
      icon: Rocket,
      title: "Impact-Focused",
      description: "Building systems that deliver measurable value and scale in production environments",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">About</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <Card className="p-8 sm:p-10 bg-card/50 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I'm an AI/ML Engineer focused on building reliable, production-grade machine learning and 
                Generative AI systems that operate effectively in real-world environments. My work spans the 
                complete ML lifecycle, from problem formulation and experimentation to deployment, monitoring, 
                and iteration in production.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I emphasize <span className="text-foreground font-medium">engineering rigor, reproducibility, 
                and system scalability</span>, ensuring that models are not only accurate but also maintainable, 
                observable, and robust under real usage conditions. I approach ML systems as long-lived products 
                rather than one-off experiments. I am driven to work on technically challenging problems where 
                strong software engineering,applied machine learning, and thoughtful system design come 
                together to create measurable, high-impact AI solutions.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl text-center mb-10">Engineering Mindset</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-2">{value.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Interests */}
          <div className="text-center">
            <h3 className="text-3xl mb-8">Core Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Deep Learning",
                "Generative AI & LLM Systems",
                "Natural Language Processing",
                "MLOps & ML Engineering",
                "Model Optimization",
                "Scalable ML Infrastructure",
                "Production ML Systems",
                "Applied AI Engineering"
              ].map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary/20 rounded-full cursor-default shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}