import { Code2, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Código limpo e escalável com as melhores práticas"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces intuitivas e experiências memoráveis"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimização e velocidade em cada projeto"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedora apaixonado por transformar ideias em realidade digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Com mais de 3 anos de experiência em desenvolvimento web, tenho dedicado minha carreira 
              a criar soluções digitais que fazem a diferença. Minha jornada começou com curiosidade 
              sobre como as coisas funcionam na web e evoluiu para uma paixão por construir 
              experiências excepcionais para usuários.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Especializo-me em tecnologias modernas como React, TypeScript, Node.js e muito mais. 
              Acredito que a combinação de código elegante com design intuitivo é a chave para 
              criar produtos digitais de sucesso.
            </p>
          </div>
          
          <div className="gradient-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6">Experiência</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Estágiaria</h4>
                <p className="text-accent">Progressão Empresarial • 2024 - Presente</p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border hover:shadow-glow transition-smooth group cursor-pointer"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
