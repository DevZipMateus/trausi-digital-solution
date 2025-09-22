import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 95340-6886',
      link: 'tel:+5511953406886'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@trausiconsultoria.com.br',
      link: 'mailto:contato@trausiconsultoria.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Padre Aparecido Nieto, 180',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Segunda a Sexta das 08h00 às 17h00',
      link: '#'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Entre em contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a alcançar a excelência em automação industrial. 
            Entre em contato conosco e vamos discutir como podemos transformar seus processos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-md transition-shadow border-border bg-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.link.startsWith('#') ? (
                          <p className="text-muted-foreground">{info.content}</p>
                        ) : (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Fale conosco pelo WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Para um atendimento mais rápido e direto, entre em contato conosco pelo WhatsApp. 
                  Estamos sempre disponíveis para esclarecer suas dúvidas e apresentar nossas soluções.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 group"
                  onClick={() => window.open('https://wa.me/5511953406886', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Iniciar conversa no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Envie um e-mail</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Prefere enviar um e-mail? Clique no botão abaixo para abrir seu cliente de e-mail 
                  com nosso endereço já preenchido.
                </p>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('mailto:contato@trausiconsultoria.com.br', '_blank')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar e-mail
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-semibold mb-4">Pronto para transformar sua indústria?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Com a Trausi Consultoria, você tem acesso às mais avançadas tecnologias de automação 
              e uma equipe especializada comprometida com o sucesso do seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                onClick={() => window.open('https://wa.me/5511953406886', '_blank')}
              >
                Solicitar consultoria
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('mailto:contato@trausiconsultoria.com.br', '_blank')}
              >
                Enviar e-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;