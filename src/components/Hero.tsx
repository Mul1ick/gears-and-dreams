import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Mail, Download } from "lucide-react";
import profile_image from "./profile.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden p-4">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-primary"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-0 shadow-strong">
          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Rehaan Kothari
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Aspiring Mechanical Engineer
                </p>
                <div className="w-20 h-1 bg-gradient-accent rounded-full"></div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Passionate about innovation, design, and solving complex engineering challenges. Seeking admission to a top mechanical engineering program.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Right Column: Image */}
            <div className="flex justify-center items-center">
                <img 
                    src={profile_image}
                    alt="Rehaan Kothari" 
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary/10 shadow-medium"
                />
            </div>
          </div>
        </Card>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;