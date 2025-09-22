import benefitsImage from "@/assets/benefits-section.png";

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-6xl mx-auto">
          <img
            src={benefitsImage}
            alt="A automação com robôs oferece uma série de benefícios para as empresas, incluindo: Aumento da eficiência, Melhoria da qualidade, Redução de custos, Flexibilidade e Segurança"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;