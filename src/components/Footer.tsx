import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {currentYear} Seu Nome. Todos os direitos reservados.
          </p>
          
          <p className="flex items-center gap-2 text-muted-foreground">
            Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> usando React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
