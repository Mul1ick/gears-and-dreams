import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Zap, Lightbulb, Users, Wrench, Gauge } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Systems Thinker",
      description: "I analyze complex mechanical systems and optimize their performance through systematic engineering."
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Precision Engineer",
      description: "Every measurement matters - I apply rigorous engineering principles to ensure optimal results."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation Driver",
      description: "I leverage cutting-edge mechanical engineering to create breakthrough solutions."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Hands-On Builder",
      description: "From CAD design to physical prototyping - I bring mechanical concepts to life."
    }
  ];

  const interests = [
    "Mechanical Design", "Thermodynamics", "Fluid Mechanics", "CAD/CAM Systems", 
    "Robotics Engineering", "Materials Science", "Manufacturing Processes", "Control Systems",
    "Heat Transfer", "Machine Design", "Finite Element Analysis", "Mechatronics"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a high school senior with a deep passion for mechanical engineering and innovation. 
            My goal is to contribute to solutions that make the world more efficient and sustainable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  My fascination with mechanical engineering began when I disassembled my first 
                  mechanical clock at age 9, captivated by the precision of gears, springs, and 
                  mechanisms working in perfect harmony. This curiosity evolved into a deep passion 
                  for understanding and designing mechanical systems.
                </p>
                <p>
                  Throughout high school, I've excelled in advanced physics, calculus, and 
                  engineering courses while leading hands-on projects in robotics and mechanical 
                  design. My goal is to pursue mechanical engineering at a top-tier university, 
                  specializing in areas like thermodynamics, fluid mechanics, and advanced 
                  manufacturing technologies.
                </p>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-accent/20 transition-colors duration-200"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
              <div className="w-14 h-14 bg-gradient-mechanical rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground shadow-glow">
                {value.icon}
              </div>
                <h4 className="text-lg font-semibold mb-2 text-primary">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;