import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3 from "@/assets/depoimento-3.png";
import depoimento4 from "@/assets/depoimento-4.png";
import depoimento5 from "@/assets/depoimento-5.png";
import depoimento6 from "@/assets/depoimento-6.png";

const testimonials = [
  {
    id: 1,
    image: depoimento1,
    name: "Rodrigo Rocha Menezes",
    position: "Técnico Eletroeletrônico Sr na Corbion",
    date: "16 de junho de 2018",
    text: "É raro encontrar talentos como o Kleber Martins, poucas pessoas têm a oportunidade de se reportar a um gerente que também é um ótimo mentor, e eu tive essa oportunidade quando trabalhei com o Kleber. Tive o prazer de trabalhar com o Kleber por três anos e meio na Solazyme Bunge, colaborando na equipe em vários projetos. Fiquei impressionado com a habilidade do Kleber para lidar com seus subordinados sem esforços, essa habilidade, muitas vezes leva anos para se desenvolver entre os profissionais, mas parecia que ele tinha isso naturalmente. Eu sempre fiquei admirado com a habilidade do Kleber de comandar sua equipe. A capacidade do Kleber de resolver os problemas na planta industrial é diferente de qualquer outro profissional que eu já vi, e fez uma diferença grande no nível de produtividade da nossa equipe. Como um membro ou um líder, Kleber Martins ganha a minha recomendação mais forte."
  },
  {
    id: 2,
    image: depoimento2,
    name: "Marcos Silva",
    position: "Instrutor de Formação Profissional III – Instrumentação na Senai São Paulo",
    date: "16 de junho de 2018",
    text: "Trabalhei com Kleber em diversos projetos e posso afirmar que além de ter qualidades pessoais como disciplina, respeito, tolerância, organização e empatia, também possui profundo conhecimento de automação e instrumentação. É profundo conhecedor de programação de CLP's, SCADA, DCS, Redes e Robótica. Também demonstrou domínio em Sistemas Elétricos e Processos Industriais Complexos. Como Coordenador de Equipes Kleber demonstrou habilidades de liderança, organização, planejamento e controle. Recomendo Kleber como profissional e o tenho em alta estima, pelos inúmeros desafios compartilhados."
  },
  {
    id: 3,
    image: depoimento3,
    name: "Clayton Oliveira dos Santos",
    position: "Engenheiro de Controle e Automação especialista em redes industriais | WESTCON Instrumentação Industrial",
    date: "10 de setembro de 2012",
    text: "O Profissional Kleber Cristiano, foi uma das pessoas em que me espelhei muitas vezes na hora de realizar um projeto, pois o mesmo na minha opinião é um profissional focado, organizado e muito completo pois domina as disciplinas de programação, (PLC, Robot, IHM, SDCD e etc) organizado e plenamente preparado para reuniões para definição de escopo de projeto e paras medições diárias do andamento da obra. Tive o prazer de trabalhar com este profissional e espero poder trabalhar novamente no futuro, recomendo o trabalho dele sem duvidas nenhuma."
  },
  {
    id: 4,
    image: depoimento4,
    name: "Fabiano J. B. Cruz",
    position: "Eletricista de manutenção na Hutchinson Brasil Automotive Ltda.",
    date: "21 de abril de 2013",
    text: "Kleber é um excelente profissional, muito bom, dedicado ao extremo, conhecedor de diversas habilidades profissionais, muito bom programador e coordenador de pessoas e sistemas."
  },
  {
    id: 5,
    image: depoimento5,
    name: "Baltazar G. Costa",
    position: "Owner, KTSA",
    date: "10 de junho de 2018",
    text: "Kleber é um excelente profissional, competente, comprometido e disciplinado, qualidades cada vez mais raras nos dias de hoje. O conhecimento técnico na programação e manutenção nas principais marcas de PLC's, IHM's e Supervisórios como, por exemplo, Rockwell e Siemens fazem do Kleber um profissional diferenciado e acima da média do mercado. Vale a pena tê-lo em sua equipe!"
  },
  {
    id: 6,
    image: depoimento6,
    name: "André Furushima",
    position: "Especialista Técnico Pleno na Moto Honda da Amazônia",
    date: "28 de agosto de 2013",
    text: "Kleber é sempre atencioso e não deixa passar nenhum detalhe do projeto. Tudo sempre está sobre controle e ocorre dentro do prazo previsto."
  }
];

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const autoPlay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [api]);

  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os depoimentos de profissionais que já trabalharam com Kleber Martins e a Trausi Consultoria
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-0">
                            <img
                              src={testimonial.image}
                              alt={`Depoimento de ${testimonial.name}`}
                              className="w-full h-auto rounded-lg"
                            />
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <div className="space-y-4">
                          <img
                            src={testimonial.image}
                            alt={`Depoimento completo de ${testimonial.name}`}
                            className="w-full h-auto rounded-lg"
                          />
                          <div className="p-4">
                            <h3 className="text-xl font-bold text-foreground mb-2">
                              {testimonial.name}
                            </h3>
                            <p className="text-muted-foreground mb-2">
                              {testimonial.position}
                            </p>
                            <p className="text-sm text-muted-foreground mb-4">
                              {testimonial.date}
                            </p>
                            <p className="text-foreground leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;