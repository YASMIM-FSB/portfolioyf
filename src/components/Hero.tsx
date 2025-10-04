import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";


const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-accent text-lg font-medium">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Yasmim Freire
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Desenvolvedora Web
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Criando experiências digitais incríveis através de código limpo e design intuitivo.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button
        size="lg"
         className="gradient-primary shadow-glow transition-smooth hover:scale-105"
         onClick={() => {
        const section = document.querySelector("#projects");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Ver Projetos
</Button>

            <Button size="lg" variant="outline" className="transition-smooth hover:scale-105">
              <a href="https://wa.me/5511992085032?text=Ol%C3%A1%20Yasmim%2C%20vim%20pelo%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA..." target="_blank">Entrar em Contato</a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-6">
            <a 
              href="https://github.com/YASMIM-FSB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary transition-smooth hover:shadow-glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yasmim-freire-9951ab29b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary transition-smooth hover:shadow-glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:freirey46@email.com"
              className="p-3 rounded-full bg-card hover:bg-primary transition-smooth hover:shadow-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => {
          const section = document.querySelector("#about");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
