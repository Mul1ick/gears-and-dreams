import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Trophy, Calculator, Cog, Wrench, Zap } from "lucide-react";

const Academics = () => {
  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      items: [
        "Cumulative GPA: 4.0/4.0",
        "Class Rank: Top 5%",
        "Honor Roll: All semesters",
        "National Honor Society Member"
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Engineering Coursework",
      items: [
        "AP Physics C: Mechanics & E&M (5, 5)",
        "AP Calculus BC (5)",
        "Engineering Design & Analysis",
        "Thermodynamics Fundamentals"
      ]
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Engineering Competitions",
      items: [
        "1st Place - State Engineering Design Challenge",
        "Regional Champion - Robotics Competition",
        "National Qualifier - Science Olympiad",
        "Outstanding Technical Project - STEM Fair"
      ]
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Engineering Leadership",
      items: [
        "Robotics Team Lead Engineer",
        "Engineering Club President",
        "Peer Tutor - Physics & Math (120+ hours)",
        "Summer Engineering Camp Instructor"
      ]
    }
  ];

  const courses = [
    { name: "Advanced Engineering Design", grade: "A+", credits: 4 },
    { name: "Physics C: Mechanics", grade: "A", credits: 4 },
    { name: "Calculus BC", grade: "A+", credits: 4 },
    { name: "Chemistry Advanced", grade: "A", credits: 4 },
    { name: "Computer Science Principles", grade: "A+", credits: 3 },
    { name: "Statistics", grade: "A", credits: 3 }
  ];

  return (
    <section id="academics" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Academic Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A record of academic excellence and commitment to STEM education throughout high school.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {achievements.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-mechanical rounded-full flex items-center justify-center mr-4 text-primary-foreground shadow-glow">
                {category.icon}
              </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-foreground/80">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-medium bg-card/50 backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary text-center">
              Key STEM Coursework
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Relevant courses that have prepared me for mechanical engineering studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="p-4 bg-background/50 border-primary/10 hover:shadow-soft transition-all duration-200">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary text-sm">{course.name}</h4>
                  <div className="flex justify-between items-center">
                    <Badge variant={course.grade.includes('+') ? 'default' : 'secondary'} className="text-xs">
                      {course.grade}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{course.credits} credits</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Card className="inline-block p-4 bg-gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-2xl font-bold">4.0</div>
                  <div className="text-xs opacity-90">Cumulative GPA</div>
                </div>
                <div className="w-px h-8 bg-primary-foreground/20"></div>
                <div>
                  <div className="text-2xl font-bold">1540</div>
                  <div className="text-xs opacity-90">SAT Score</div>
                </div>
                <div className="w-px h-8 bg-primary-foreground/20"></div>
                <div>
                  <div className="text-2xl font-bold">Top 5%</div>
                  <div className="text-xs opacity-90">Class Rank</div>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Academics;