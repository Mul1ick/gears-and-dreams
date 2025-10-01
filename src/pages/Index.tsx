import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Projects"; // Note: The filename is still Projects.tsx
import Activities from "@/components/Academics"; // Note: The filename is still Academics.tsx
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Activities />
        <Contact />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-90">
            © 2024 Rehaan Kothari. Built with passion for engineering and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;