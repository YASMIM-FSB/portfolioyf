import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "seu@email.com",
      href: "mailto:seu@email.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="gradient-card border-border hover:shadow-glow transition-smooth group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <a 
                    href={item.href}
                    className="font-medium hover:text-primary transition-smooth"
                  >
                    {item.value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
            <div className="flex gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-card transition-smooth hover:shadow-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <Button size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-smooth">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
