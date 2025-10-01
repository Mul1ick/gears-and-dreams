import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FlaskConical, Wrench, Wind } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Research: Lean Manufacturing",
      institution: "Supreme Gems (Diamond Unit), Mumbai",
      description: "Implemented lean manufacturing principles by conducting time studies, waste analysis, VSM, and improving process flows.", // [cite: 4, 5]
      tags: ["Time Studies", "Waste Analysis", "VSM", "Process Flow"], // [cite: 5]
      icon: <Wrench className="h-5 w-5" />,
      duration: "12 hr/wk, 20 wk/yr" // [cite: 3]
    },
    {
      title: "Internship: Valves Production",
      institution: "Larsen & Toubro, Chennai",
      description: "Gained hands-on experience in the design, sizing, materials, testing, and operations for various valve systems.", // [cite: 8, 9]
      tags: ["Design", "Sizing", "Materials", "Testing", "Operations"], // [cite: 9]
      icon: <Briefcase className="h-5 w-5" />,
      duration: "30 hr/wk, 7 wk/yr (Grade 12 break)" // [cite: 7]
    },
    {
      title: "Internship: Robotic Cleaning Systems",
      institution: "Solar-LIT, Khavda Renewable Energy Park, Kutch",
      description: "Worked on an automatic robotic cleaning system for solar panels, focusing on AI-based dirt detection and eco-friendly efficiency improvements.", // [cite: 20, 21]
      tags: ["AI", "Robotics", "Solar Energy", "Eco-friendly"], // [cite: 20, 21]
      icon: <Wind className="h-5 w-5" />,
      duration: "3 hr/wk, 25 wk/yr (Grades 11-12)" // [cite: 19]
    },
    {
      title: "Research: Precious Metal Manufacturing",
      institution: "Metal Craft Engineering, Mumbai",
      description: "Conducted a detailed study of precious metal manufacturing, analyzing materials, design, production processes, and industrial applications.", // [cite: 16, 17]
      tags: ["Materials", "Design", "Production", "Industrial Applications"], // [cite: 17]
      icon: <FlaskConical className="h-5 w-5" />,
      duration: "" 
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience gained from internships and research projects in real-world engineering environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm flex flex-col"
            >
              <div className="flex-grow space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-mechanical rounded-full flex items-center justify-center text-primary-foreground shadow-glow shrink-0">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">{exp.institution}</p>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="px-2 py-1 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {exp.duration && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-right font-semibold">{exp.duration}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;