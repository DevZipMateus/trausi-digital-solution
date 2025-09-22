import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logo-trausi.png" 
              alt="Trausi Consultoria" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4">
              Automação sem limites para sua empresa
            </p>
            <p className="text-sm text-primary-foreground/60">
              CNPJ: 38.830.251/0001-76
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Automação industrial</li>
              <li>Integração de sistemas</li>
              <li>Automatização de linhas</li>
              <li>Programação de robôs</li>
              <li>Migração de aplicações</li>
              <li>Assistência técnica</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 95340-6886</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@trausiconsultoria.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua Padre Aparecido Nieto, 180</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Horário</h3>
            <div className="flex items-start space-x-2 text-sm text-primary-foreground/80">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Segunda a Sexta<br />das 08h00 às 17h00</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Trausi Consultoria Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;