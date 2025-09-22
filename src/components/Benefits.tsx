import { Card, CardContent } from "@/components/ui/card";
import efficiencyImage from "@/assets/benefit-efficiency.jpg";
import qualityImage from "@/assets/benefit-quality.jpg";
import costImage from "@/assets/benefit-cost.jpg";
import flexibilityImage from "@/assets/benefit-flexibility.jpg";
import safetyImage from "@/assets/benefit-safety.jpg";

const Benefits = () => {
  const benefits = [
    {
      image: efficiencyImage,
      title: "Aumento da eficiência",
      description: "Os robôs podem trabalhar de forma contínua e consistente, sem cansaço, reduzindo o tempo de ciclo e aumentando a produtividade."
    },
    {
      image: qualityImage,
      title: "Melhoria da qualidade",
      description: "A precisão dos robôs garante uma qualidade consistente do produto final, reduzindo erros e retrabalho."
    },
    {
      image: costImage,
      title: "Redução de custos",
      description: "Embora o investimento inicial em automação possa ser significativo, a longo prazo, a redução de custos com mão de obra e a diminuição dos custos de produção podem compensar esse investimento."
    },
    {
      image: flexibilityImage,
      title: "Flexibilidade",
      description: "Os robôs podem ser programados para realizar uma variedade de tarefas e reconfigurados rapidamente para se adaptar a mudanças na demanda do mercado ou nos produtos."
    },
    {
      image: safetyImage,
      title: "Segurança",
      description: "Ao transferir tarefas perigosas ou repetitivas para os robôs, as empresas podem melhorar a segurança dos trabalhadores, reduzindo o risco de acidentes e lesões."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            A automação com robôs oferece uma série de benefícios para as empresas, incluindo:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;