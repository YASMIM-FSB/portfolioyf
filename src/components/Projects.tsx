import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e painel administrativo.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados em tempo real com gráficos e métricas personalizáveis.",
      technologies: ["React", "TypeScript", "D3.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Social Media App",
      description: "Rede social com feed em tempo real, sistema de mensagens e compartilhamento de conteúdo multimídia.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management Tool",
      description: "Ferramenta de gestão de tarefas com colaboração em equipe, calendário e notificações inteligentes.",
      technologies: ["Vue.js", "Express", "Redis", "WebSocket"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projetos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border overflow-hidden group hover:shadow-glow transition-smooth"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/20 text-primary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </a>
                </Button>
                <Button className="flex-1 gradient-primary" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
