import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Problem Solver",
      description: "I approach every challenge with analytical thinking and creative solutions."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Detail-Oriented",
      description: "Precision and accuracy are crucial in engineering - I never compromise on quality."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovative",
      description: "I'm passionate about pushing boundaries and exploring new technologies."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Player",
      description: "Great engineering happens through collaboration and effective communication."
    }
  ];

  const interests = [
    "Robotics", "Sustainable Energy", "3D Printing", "CAD Design", 
    "Materials Science", "Automation", "Renewable Energy", "Biomechanics"
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
                  From taking apart my first toy robot at age 8 to designing my own mechanical 
                  systems today, engineering has always been my passion. I've spent countless 
                  hours learning about how things work and how to make them better.
                </p>
                <p>
                  Throughout high school, I've maintained a 4.0 GPA while actively participating 
                  in STEM clubs, robotics competitions, and engineering summer programs. My goal 
                  is to pursue mechanical engineering at a top university and eventually work on 
                  cutting-edge technologies that solve real-world problems.
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
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
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