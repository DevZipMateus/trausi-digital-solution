import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Settings, 
  Network, 
  Factory, 
  Bot, 
  RefreshCw, 
  Wrench,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Automação industrial',
      description: 'Desenvolvimento e implementação de sistemas de automação personalizados para otimizar processos industriais e aumentar a produtividade.'
    },
    {
      icon: Network,
      title: 'Integração de sistemas',
      description: 'Conectividade total entre equipamentos, sistemas e plataformas para operações integradas e eficientes.'
    },
    {
      icon: Factory,
      title: 'Automatização de linhas',
      description: 'Modernização completa de linhas de produção com tecnologia de ponta para máxima eficiência operacional.'
    },
    {
      icon: Bot,
      title: 'Programação de robôs',
      description: 'Programação especializada de robôs industriais para automação de processos complexos e repetitivos.'
    },
    {
      icon: RefreshCw,
      title: 'Migração de aplicações',
      description: 'Modernização de sistemas legados com migração segura para plataformas mais modernas e eficientes.'
    },
    {
      icon: Wrench,
      title: 'Assistência técnica',
      description: 'Suporte técnico especializado e manutenção preventiva para garantir operação contínua dos seus sistemas.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Nossos serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em automação industrial, desde o planejamento até a 
            implementação e manutenção, sempre com foco na excelência e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Precisa de uma solução personalizada?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada empresa tem necessidades únicas. Nossa equipe está pronta para desenvolver 
            soluções sob medida que atendam exatamente às suas demandas específicas.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            onClick={() => window.open('https://wa.me/5511953406886', '_blank')}
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;