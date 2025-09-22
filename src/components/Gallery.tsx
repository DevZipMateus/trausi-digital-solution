import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Gallery = () => {
  const robotCategories = [
    {
      title: "Robôs de Carga e Descarga",
      description: "Sistemas automatizados para carregamento e descarregamento de peças em tornos e retíficas.",
      videos: [
        {
          src: "/galeria/Robô Carga e Descarga - Retifica de Eixo .mp4",
          title: "Retifica de Eixo"
        },
        {
          src: "/galeria/Robôs Carga _ Descarga TORNO OKUMA & ROBODRILL FANUC.mp4",
          title: "Torno OKUMA & ROBODRILL FANUC"
        }
      ]
    },
    {
      title: "Robôs de Solda",
      description: "Soluções robóticas para soldagem MIG/MAG com precisão e consistência.",
      videos: [
        {
          src: "/galeria/Robô Solda MIG .mp4",
          title: "Solda MIG"
        }
      ]
    },
    {
      title: "Robôs de Manipulação",
      description: "Sistemas de manipulação e montagem para diversos componentes industriais.",
      videos: [
        {
          src: "/galeria/Robô Manipulação Motor para Moto.mp4",
          title: "Manipulação Motor para Moto"
        }
      ]
    },
    {
      title: "Robôs de Paletização",
      description: "Automação para empilhamento e organização de materiais e produtos.",
      videos: [
        {
          src: "/galeria/Robô de Paletização.mp4",
          title: "Paletização Automatizada"
        }
      ]
    },
    {
      title: "Robôs Agrícolas",
      description: "Tecnologia robótica aplicada ao agronegócio para maior eficiência.",
      videos: [
        {
          src: "/galeria/Robôs p_ Seleção de Mudas .mp4",
          title: "Seleção de Mudas"
        }
      ]
    },
    {
      title: "Outros Modelos",
      description: "Diversas aplicações e configurações personalizadas de robôs industriais.",
      videos: [
        {
          src: "/galeria/Robôs Diversos .mp4",
          title: "Robôs Diversos"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Nossos Modelos de Robôs Industriais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa linha completa de soluções robóticas desenvolvidas para otimizar seus processos industriais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {robotCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className={`${category.videos.length === 1 ? 'pb-6' : 'space-y-4'}`}>
                <div className={`${category.videos.length === 1 ? 'flex justify-center' : 'space-y-4'}`}>
                  {category.videos.map((video, videoIndex) => (
                    <div key={videoIndex} className={`space-y-2 ${category.videos.length === 1 ? 'w-full max-w-md' : ''}`}>
                      <h4 className="font-semibold text-foreground text-center">{video.title}</h4>
                      <div className="aspect-video rounded-lg overflow-hidden border border-border">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          preload="metadata"
                          poster=""
                        >
                          <source src={video.src} type="video/mp4" />
                          Seu navegador não suporta o elemento de vídeo.
                        </video>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;