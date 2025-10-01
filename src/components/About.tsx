import { Card } from "@/components/ui/card";

const About = () => {
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

        {/* Centered and wider "My Journey" card */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                My fascination with mechanical engineering began when I disassembled my first 
                mechanical clock at age 9, captivated by the precision of gears, springs, and 
                mechanisms working in perfect harmony.
              </p>
              <p>
                This curiosity evolved into a deep passion for understanding and designing mechanical systems. 
                Throughout high school, I've excelled in advanced physics, calculus, and 
                engineering courses while leading hands-on projects in robotics and mechanical 
                design. My goal is to pursue mechanical engineering at a top-tier university, 
                specializing in areas like thermodynamics, fluid mechanics, and advanced 
                manufacturing technologies.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;