import { Button } from '@/components/ui/button';
import { User, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Sobre a Trausi Consultoria</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A Trausi Consultoria surgiu após seu CEO Kleber Martins sentir sede de novos desafios 
            no campo da automação industrial. Com uma visão inovadora e comprometida com a excelência, 
            a empresa foi fundada com o objetivo de oferecer soluções personalizadas e de alta qualidade 
            para otimizar processos industriais, aumentar a eficiência operacional e promover a 
            transformação digital nas indústrias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-fade-in-up">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Experiência</h3>
            <p className="text-muted-foreground">Equipe altamente qualificada com experiência comprovada no setor</p>
          </div>
          
          <div className="text-center animate-fade-in-up">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Precisão</h3>
            <p className="text-muted-foreground">Cada projeto implementado com precisão, segurança e foco nos resultados</p>
          </div>
          
          <div className="text-center animate-fade-in-up">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Excelência</h3>
            <p className="text-muted-foreground">Compromisso com a qualidade e excelência em todos os projetos</p>
          </div>
          
          <div className="text-center animate-fade-in-up">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Inovação</h3>
            <p className="text-muted-foreground">Utilizamos as mais avançadas tecnologias de automação</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Nossa missão</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Trausi Consultoria se destaca por sua capacidade de entender as necessidades específicas 
              de cada cliente, utilizando as mais avançadas tecnologias de automação e sistemas inteligentes 
              para entregar resultados concretos e sustentáveis. Buscamos ser um parceiro estratégico para 
              empresas que buscam crescimento, competitividade e inovação.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso compromisso é garantir que cada projeto seja implementado com precisão, segurança e foco 
              na maximização de resultados, sempre com uma abordagem orientada a soluções práticas e eficientes.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => scrollToSection('contato')}
            >
              Vamos conversar sobre seu projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;