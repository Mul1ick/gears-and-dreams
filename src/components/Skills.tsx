import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Technical Skills",
      color: "bg-gradient-primary",
      skills: [
        { name: "SolidWorks/CAD", level: 85 },
        { name: "3D Printing", level: 90 },
        { name: "Electronics", level: 75 },
        { name: "Machining", level: 70 }
      ]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming",
      color: "bg-gradient-accent",
      skills: [
        { name: "Python", level: 80 },
        { name: "C++/Arduino", level: 85 },
        { name: "MATLAB", level: 65 },
        { name: "JavaScript", level: 60 }
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Engineering Concepts",
      color: "bg-gradient-primary",
      skills: [
        { name: "Thermodynamics", level: 80 },
        { name: "Mechanics", level: 85 },
        { name: "Materials Science", level: 75 },
        { name: "Control Systems", level: 70 }
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Soft Skills",
      color: "bg-gradient-accent",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 85 },
        { name: "Teamwork", level: 90 }
      ]
    }
  ];

  const certifications = [
    "SolidWorks Certified Associate (CSWA)",
    "Arduino Programming Certificate",
    "OSHA Safety Training",
    "First Aid/CPR Certified"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through 
            coursework, projects, and hands-on experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mr-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-soft bg-gradient-subtle">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Certifications & Training
            </h3>
            <p className="text-muted-foreground">
              Additional qualifications that demonstrate my commitment to continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="p-3 text-center justify-center hover:bg-accent/20 transition-colors duration-200"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;