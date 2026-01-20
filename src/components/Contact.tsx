import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "aheraareen2409@gmail.com",
      link: "mailto:aheraareen2409@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@codeinfinity249",
      link: "https://github.com/codeinfinity249",
      color: "from-gray-500/20 to-slate-500/20",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/aareen-aher-273841204",
      link: "https://www.linkedin.com/in/aareen-aher-273841204",
      color: "from-blue-700/20 to-blue-500/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, Maharashtra, India",
      link: null,
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
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
              <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">Contact</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Open to full-time opportunities and collaboration. Let's discuss how I can contribute to your team.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="p-8 sm:p-10 h-full bg-card/50 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-3xl mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Feel free to reach out through any of these channels. I typically respond within 24 hours.
                  </p>

                  {/* Contact Methods */}
                  <div className="space-y-4 mb-10">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={method.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        whileHover={{ x: 5 }}
                      >
                        {method.link ? (
                          <a
                            href={method.link}
                            target={method.link.startsWith("http") ? "_blank" : undefined}
                            rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-4 p-5 rounded-xl hover:bg-accent transition-all duration-300 border-2 border-transparent hover:border-primary/20 group"
                          >
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                              <method.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-0.5">{method.title}</p>
                              <p className="group-hover:text-primary transition-colors">{method.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 p-5 rounded-xl border-2 border-transparent">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color}`}>
                              <method.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-0.5">{method.title}</p>
                              <p>{method.value}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="p-5 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl border-2 border-primary/20 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-sm">Available for Full-Time Positions</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Starting immediately • Open to remote and hybrid opportunities
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card className="p-8 sm:p-10 h-full bg-card/50 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-3xl mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="border-2 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="border-2 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="border-2 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your opportunity or project..."
                        rows={6}
                        className="border-2 focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2 shadow-lg hover:shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      By submitting this form, you agree to be contacted regarding your inquiry.
                    </p>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}