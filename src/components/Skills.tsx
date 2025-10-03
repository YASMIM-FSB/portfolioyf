import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python","MySQL"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub"]
    },
    {
      title: "Outros",
      skills: ["UI/UX Design", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Tecnologias</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo no dia a dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-border hover:shadow-glow transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
