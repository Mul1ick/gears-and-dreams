import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "RehaanKothari@email.com",
      href: "mailto:rehaankothari@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Chicago, IL",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-800"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Resume",
      href: "#",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss engineering opportunities, share ideas, or connect with 
            fellow STEM enthusiasts. Let's start a conversation!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8 shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-medium mb-4 text-primary">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`w-12 h-12 border-2 border-border rounded-full flex items-center justify-center hover:border-primary transition-all duration-200 ${link.color}`}
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Message Card */}
            <Card className="p-8 shadow-soft bg-gradient-subtle">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-card/80 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-3">College Admissions Officers</h4>
                  <p className="text-sm text-foreground/80 mb-4">
                    Thank you for considering my application. I would be happy to discuss my 
                    passion for mechanical engineering and how I can contribute to your program.
                  </p>
                  <Button className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact for Admissions
                  </Button>
                </div>

                <div className="p-6 bg-card/80 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-primary mb-3">Industry Professionals</h4>
                  <p className="text-sm text-foreground/80 mb-4">
                    I'm always eager to learn from experienced engineers and explore 
                    internship or mentorship opportunities.
                  </p>
                  <Button variant="outline" className="w-full border-accent/30 hover:bg-accent/10 transition-all duration-300">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </div>

                <div className="p-6 bg-card/80 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-3">Fellow Students</h4>
                  <p className="text-sm text-foreground/80 mb-4">
                    Let's collaborate on projects, share resources, or discuss our engineering journeys!
                  </p>
                  <Button variant="outline" className="w-full hover:bg-secondary/50 transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    View Projects on GitHub
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-8 p-8 text-center shadow-medium bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
            <p className="mb-6 opacity-90">
              Whether you're an admissions officer, industry professional, or fellow student, 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;