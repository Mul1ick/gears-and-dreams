import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Engineering blueprint background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      </div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/10 rotate-45"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-accent/20 rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/5 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <Card className="max-w-4xl mx-auto p-12 bg-card/80 backdrop-blur-sm border-0 shadow-strong">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Alex Johnson
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Aspiring Mechanical Engineer
              </p>
              <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Passionate about innovation, design, and solving complex engineering challenges. 
              Currently pursuing admission to top mechanical engineering programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5 hover:shadow-soft transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </Card>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;