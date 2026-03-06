import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap, Award, Users } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "research",
      title: "LiDAR Data Analytics Intern",
      organization: "University of Alberta | UARE Program",
      location: "Edmonton, Canada",
      duration: "May 2023 - Jul 2023",
      description: "Selected as the sole representative from IIT Bombay and one of only 3 applicants nationwide for the prestigious UARE research program.",
      achievements: [
        "Optimized road-geometry impact assessment workflows by analysing large-scale traffic flow data using the VISTA simulator",
        "Improved data extraction accuracy by 15% by developing a pipeline isolating pavement from 500+ LiDAR road sections",
        "Processed LiDAR point cloud datasets from 100+ scans using CloudCompare to derive reliable road surface-level insights",
        "Presented research on LiDAR applications in transport engineering to an audience of 150+ scholars, faculty and researchers"
      ],
      technologies: ["VISTA Simulator", "LiDAR", "CloudCompare", "Python", "Data Analysis"],
    },
    {
      type: "industry",
      title: "ESG & Sustainability Analyst (Summer Associate)",
      organization: "KPMG",
      location: "India",
      duration: "May 2024 - Jul 2024",
      description:
        "Worked on ESG and sustainability strategy engagements for the construction sector, contributing to impact assessment, materiality analysis, and performance improvement initiatives.",
      
      achievements: [
        "Spearheaded sustainability strategy initiatives in the construction sector, improving key ESG performance metrics by 15%",
        "Led assessment of 30+ ESG impact areas across operations, driving a 20% improvement in overall ESG performance scores",
        "Mapped 30+ environmental indicators for materiality assessment, strengthening sustainability evaluation frameworks by 15%",
        "Analyzed 10+ industry peers to benchmark sustainability practices, contributing to a 10% reduction in environmental impact",
        "Received Letter of Recommendation from Director, ESG Operations for strong analytical thinking and problem-solving skills"
      ],
     
      technologies: [
        "ESG Frameworks",
        "Materiality Assessment",
        "Sustainability Strategy",
        "Environmental Metrics",
        "Industry Benchmarking",
      ],
    },
    {
      type: "research",
      title: "Master's Thesis Research",
      organization: "ANT Lab, IIT Bombay",
      location: "Mumbai, India",
      duration: "Mar 2024 - May 2025",
      description: "Conducted advanced research on machine learning models for urban particulate matter pollution forecasting under Prof. Manoranjan Sahu.",
      achievements:[
        <>Designed end-to-end PM<sub>2.5</sub>/PM<sub>10</sub> time-series forecasting pipeline across 3 monitoring stations for 24–72 hour prediction horizons</>,

        <>Implemented baseline models (XGBoost, ANN, LSTM) achieving R<sup>2</sup> up to 0.94 under robust out-of-sample validation testing</>,

        <>Developed 5 hybrid ensemble frameworks reducing forecast RMSE by 18–30% while lowering prediction error variance by 20–35%</>,

        <>Applied Bayesian Model Averaging (XGBoost + LSTM) achieving PM<sub>2.5</sub> RMSE of 1.43 µg/m<sup>3</sup> and PM<sub>10</sub> RMSE of 4.71 µg/m<sup>3</sup></>,
      ],
      technologies: ["XGBoost", "LSTM", "ANN", "Python", "Time Series", "Bayesian Modeling"],
    },
    {
      type: "leadership",
      title: "Events Manager",
      organization: "Tatva - ESED Department Inaugural Fest",
      location: "IIT Bombay",
      duration: "2024",
      description: "Led the inaugural fest of Environmental Science & Engineering Department with 500+ footfall and 10+ events/workshops.",
      achievements: [
        "Managed INR 0.25M+ budget while leading end-to-end strategy planning, execution, and delivery of multiple flagship events",
        "Boosted attendance by 40% and revenue by 10% by launching and managing a campus-wide ambassador outreach program",
        "Coordinated 10+ technical events and workshops by leading cross-functional teams and collaborating with sponsors and speakers",
      ],
      technologies: ["Event Management", "Budget Planning", "Team Leadership", "Strategic Planning"],
    },
    {
      type: "leadership",
      title: "Department Placement Coordinator",
      organization: "Placement Team, IIT Bombay",
      location: "IIT Bombay",
      duration: "2024 - 2025",
      description: "Assisted placements of 1800+ students as part of a 64+ member placement team, serving as liaison between the placement cell, recruiters, and department students.",
      achievements: [
        "Reviewed and optimized 30+ student resumes through structured feedback sessions to improve recruitment readiness",
        "Conducted strategic company pitching and engagement sessions to strengthen recruiter relations and placement opportunities",
        "Served as key department council member representing and resolving academic and placement concerns for 45+ students",
      ],
      technologies: ["Strategic Communication", "Resume Optimization", "Stakeholder Management"],
    },
  ];

  const certifications = [
    "Machine Learning by Stanford University (Online)",
    "Introduction to Artificial Intelligence (AI) | IBM",
    "Computer Vision and ML using OpenCV (Online)",
    "Python for Data Science, AI & Development | IBM",
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "research":
        return GraduationCap;
      case "leadership":
        return Users;
      default:
        return Briefcase;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "research":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
      case "leadership":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      default:
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
    }
  };

  return (
    <section id="experience" className="py-24">
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
              <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">Experience</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl mb-4">Experience & Leadership</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Research experience and leadership roles demonstrating technical depth and real-world impact
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = getIcon(exp.type);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/30">
                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className={`p-4 rounded-2xl ${getIconColor(exp.type)} flex-shrink-0 shadow-lg`}>
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                            <div>
                              <h3 className="text-xl sm:text-2xl mb-1">{exp.title}</h3>
                              <p className="text-muted-foreground">
                                {exp.organization} • {exp.location}
                              </p>
                            </div>
                            <Badge variant="outline" className="self-start border-2 shadow-sm">
                              {exp.duration}
                            </Badge>
                          </div>

                          <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                          {/* Achievements */}
                          <ul className="space-y-2 mb-5">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm flex items-start leading-relaxed">
                                <span className="text-primary mr-2 flex-shrink-0 mt-0.5">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs shadow-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications & Conferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Certifications */}
              <Card className="p-8 sm:p-10 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent border-2 border-primary/30 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      <span className="text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Conferences & Activities */}
              <Card className="p-8 sm:p-10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-2 border-blue-500/30 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl">Conferences & Activities</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">•</span>
                    <span className="text-sm">Keynote Speaker - LiDAR Applications in Transport Engineering | University of Alberta | 150+ Scholars</span>
                  </li>
                  <li className="flex items-start p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">•</span>
                    <span className="text-sm">Participant - AI & ML Applications | Amii Conference, Edmonton | Insights from Richard Sutton | 1k+ Attendees</span>
                  </li>
                  <li className="flex items-start p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">•</span>
                    <span className="text-sm">Participant - State-level Aquathlon Competition | 50+ Competitors</span>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
