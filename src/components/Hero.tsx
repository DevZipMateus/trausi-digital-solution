import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Zap, Shield } from 'lucide-react';

const Hero = () => {
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
    <section id="inicio" className="pt-20 min-h-screen industrial-gradient flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Trausi Consultoria
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Soluções personalizadas em automação industrial com foco na excelência, 
              utilizando tecnologias avançadas para otimizar processos e promover a 
              transformação digital nas indústrias.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                onClick={() => scrollToSection('servicos')}
              >
                Nossos serviços
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://wa.me/5511953406886', '_blank')}
              >
                Fale conosco
              </Button>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-accent mb-2">
                Automação sem limites
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 gap-6 max-w-md">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Settings className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Automação industrial</h3>
                <p className="text-muted-foreground">Sistemas inteligentes para otimização de processos</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Integração de sistemas</h3>
                <p className="text-muted-foreground">Conectividade total entre seus equipamentos</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Assistência técnica</h3>
                <p className="text-muted-foreground">Suporte especializado e confiável</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;