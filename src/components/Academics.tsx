import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Star, Brain } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Martial Arts",
      description: "Continuing martial arts and karate training since Grade 9.  Earned a Black Belt (1st-3rd Dan) in Go Ju Ryu Karate and currently training for 4th Dan.  Won multiple medals in Kumite, Kata, and Kicks at Mumbai Interschool competitions."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community Service",
      description: "As Director of the Interact Club at Rotary Club of Mumbai GenX, I led donation drives for books and e-waste collection.  I also serve as a martial arts teacher for underprivileged girls, focusing on self-defense and confidence-building. "
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "EUMIND Exchange Program",
      description: "Participated in the Europe Meets India (EUMIND) program and was recognized with a Certificate of Excellence.  Awarded 'Best Article on Healthy Life' and 'Best Creative Entrepreneur for Innovation'." 
    },
  ];

  const skills = [
    "Mechanical Design", "CAD/CAM Systems", "Lean Manufacturing", "Robotics", 
    "Process Flow Improvement", "Materials Science", "AI Dirt Detection", "Problem Solving"
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Activities & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A commitment to personal growth, community service, and developing key technical skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-mechanical rounded-full flex items-center justify-center mr-4 text-primary-foreground shadow-glow">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{activity.title}</h3>
              </div>
              <p className="text-sm text-foreground/80">{activity.description}</p>
            </Card>
          ))}
        </div>
        
        {/* <Card className="p-8 shadow-medium bg-card/50 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center justify-center">
              <Brain className="mr-3 h-6 w-6" /> Key Skills
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card> */}
      </div>
    </section>
  );
};

export default Activities;