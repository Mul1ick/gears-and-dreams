import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Cog, Zap, Thermometer, Settings } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated CNC Mill Controller",
      description: "Designed and programmed a precision CNC milling machine controller using servo motors and feedback systems. Achieved 0.01mm positioning accuracy with custom PID control algorithms.",
      technologies: ["CNC Programming", "Servo Control", "G-Code", "Precision Machining"],
      status: "Completed",
      achievements: ["1st Place - Regional Engineering Fair", "Featured in Local Tech Magazine"],
      icon: <Settings className="h-5 w-5" />
    },
    {
      title: "Thermodynamic Heat Engine Prototype",
      description: "Built a working Stirling engine prototype with efficiency analysis and thermal optimization. Conducted comprehensive performance testing and heat transfer calculations.",
      technologies: ["Thermodynamics", "Heat Transfer", "CAD Design", "Materials Analysis"],
      status: "In Progress",
      achievements: ["Science Fair State Qualifier", "Thermal Efficiency Award"],
      icon: <Thermometer className="h-5 w-5" />
    },
    {
      title: "Robotic Assembly Line System",
      description: "Developed a multi-axis robotic system for automated assembly with pneumatic actuators and programmable logic controllers (PLCs). Integrated vision systems for quality control.",
      technologies: ["Robotics", "PLC Programming", "Pneumatics", "Vision Systems"],
      status: "Completed",
      achievements: ["Best Engineering Design - STEM Expo", "Industry Mentorship Award"],
      icon: <Cog className="h-5 w-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the engineering projects I've worked on that demonstrate my 
            passion for innovation and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-mechanical rounded-full flex items-center justify-center text-primary-foreground shadow-glow">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="ml-2 shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-foreground/80 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs text-accent font-medium">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 shadow-soft">
            <p className="text-muted-foreground mb-4">
              More projects and detailed documentation available upon request
            </p>
            <Button className="bg-gradient-accent hover:shadow-medium transition-all duration-300">
              View Full Portfolio
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;