import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Zap, ArrowRight, Star, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    if (!formData.email.includes("@")) {
      toast.error("Por favor, insira um email válido");
      return;
    }
    toast.success("Mensagem enviada com sucesso! Entraremos em contacto em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Assistência Candidatura",
      description: "Apoio completo na escolha de programas, universidades e preparação de documentos para Portugal e Espanha."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Alojamento",
      description: "Ajuda na procura e reserva de alojamento seguro e adequado nas principais cidades."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Vistos e Documentação",
      description: "Orientação completa no processo de visto Schengen e documentos necessários."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Apoio Contínuo",
      description: "Suporte durante a estadia, eventos sociais e rede de contactos em ambos os países."
    }
  ];

  const destinations = [
    { 
      name: "Portugal", 
      flag: "🇵🇹", 
      description: "Universidades de excelência em Lisboa, Porto e Covilhã",
      cities: "Lisboa • Porto • Covilhã"
    },
    { 
      name: "Espanha", 
      flag: "🇪🇸", 
      description: "Oportunidades em Madrid, Barcelona e Valência",
      cities: "Madrid • Barcelona • Valência"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      origin: "De Portugal para Espanha",
      year: "2024",
      text: "A MoveEDuo tornou o meu intercâmbio em Espanha possível! O apoio foi excelente desde o início até ao fim.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663040743215/9wgTkRuUpYnf2PNHpgmktC/moveeduо-about-us-mLMBouUsLLnoxjTmakG7P7.webp"
    },
    {
      name: "João Costa",
      origin: "De Espanha para Portugal",
      year: "2024",
      text: "Recomendo vivamente! A equipa foi muito profissional e atenciosa com todas as minhas dúvidas.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663040743215/9wgTkRuUpYnf2PNHpgmktC/moveeduо-what-we-do-UkQQsnE5xccRuqjeFuBsaJ.webp"
    },
    {
      name: "Ana Oliveira",
      origin: "De Portugal para Espanha",
      year: "2023",
      text: "Experiência transformadora! A MoveEDuo fez toda a diferença na minha vida académica.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663040743215/9wgTkRuUpYnf2PNHpgmktC/moveeduо-hero-students-bAmGXZ9VWZAQ3abZYPTPgW.webp"
    }
  ];

  const faqs = [
    {
      question: "Qual é o processo de candidatura?",
      answer: "O processo começa com uma consulta inicial onde analisamos o seu perfil académico e objetivos. Depois, ajudamos na escolha de universidades em Portugal ou Espanha, preparação de documentos e submissão de candidaturas."
    },
    {
      question: "Quanto custa o serviço?",
      answer: "Os nossos preços variam consoante o tipo de programa e destino. Oferecemos pacotes personalizados e consultoria gratuita inicial."
    },
    {
      question: "Qual é o tempo de processamento?",
      answer: "O tempo varia, mas geralmente o processo completo leva entre 3 a 6 meses, dependendo da universidade de destino."
    },
    {
      question: "Oferecem suporte após a chegada?",
      answer: "Sim! Oferecemos assistência completa à chegada, orientação inicial e apoio contínuo durante toda a estadia em Portugal ou Espanha."
    },
    {
      question: "Posso candidatar-me a bolsas Erasmus+?",
      answer: "Sim! Ajudamos na candidatura a programas Erasmus+ e outras bolsas de mobilidade académica entre Portugal e Espanha."
    },
    {
      question: "Qual é a diferença entre estudar em Portugal e Espanha?",
      answer: "Ambos os países oferecem excelente educação superior. Portugal é conhecido pela qualidade de vida e custo acessível, enquanto Espanha oferece maior diversidade de programas e cidades vibrantes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  Estudar no exterior abre o seu mundo.
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Programas de mobilidade estudantil entre Portugal e Espanha
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => scrollToSection("services")}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-base py-6 px-8"
                  >
                    Explorar Programas <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    onClick={() => scrollToSection("about")}
                    variant="outline" 
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-base py-6 px-8"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663040743215/9wgTkRuUpYnf2PNHpgmktC/moveeduо-hero-students-bAmGXZ9VWZAQ3abZYPTPgW.webp"
                  alt="Estudantes internacionais"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-black text-white py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="text-sm text-gray-300">Estudantes Apoiados</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <p className="text-sm text-gray-300">Universidades Parceiras</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
                <p className="text-sm text-gray-300">Países</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <p className="text-sm text-gray-300">Satisfação</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
               {/* <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">Cabeçalho</p>*/}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">O que fazemos</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Oferecemos uma gama completa de serviços para garantir que a sua jornada de mobilidade entre Portugal e Espanha é suave e bem-sucedida. Da candidatura até ao apoio contínuo, estamos com você em cada passo.
                </p>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base py-3 px-6"
                >
                  Começar Agora
                </Button>
              </div>
              <div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663040743215/9wgTkRuUpYnf2PNHpgmktC/moveeduо-what-we-do-UkQQsnE5xccRuqjeFuBsaJ.webp"
                  alt="Consultoria"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-50 rounded-lg">{service.icon}</div>
                      <div>
                        <CardTitle className="text-black text-lg">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-20 md:py-32 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Destinos</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Explore oportunidades em Portugal e Espanha, dois destinos privilegiados para mobilidade estudantil.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {destinations.map((dest, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="text-6xl mb-4">{dest.flag}</div>
                    <h3 className="text-3xl font-bold text-black mb-2">{dest.name}</h3>
                    <p className="text-gray-700 mb-4">{dest.description}</p>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                      <MapPin className="w-4 h-4" />
                      <span>{dest.cities}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-300 opacity-10" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663040743215/9wgTkRuUpYnf2PNHpgmktC/moveeduо-hero-students-bAmGXZ9VWZAQ3abZYPTPgW.webp"
                  alt="Sobre nós"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Sobre nós</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Somos uma empresa dedicada a facilitar a mobilidade estudantil entre Portugal e Espanha, transformando vidas através da educação internacional.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-black mb-2">Missão</h3>
                    <p className="text-gray-700">Facilitar o acesso a oportunidades de mobilidade académica entre Portugal e Espanha, removendo barreiras e criando caminhos para o sucesso.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Visão</h3>
                    <p className="text-gray-700">Ser o parceiro de confiança para estudantes que desejam expandir horizontes entre estes dois países ibéricos.</p>
                  </div>
                </div>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="mt-8 bg-orange-500 hover:bg-orange-600 text-white text-base py-3 px-6"
                >
                  Entre em contacto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Histórias de Sucesso</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Conheça as experiências transformadoras de estudantes que já passaram pela MoveEDuo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <CardContent className="pt-6 flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                  <CardHeader className="pt-0">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-base text-black">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                          {testimonial.origin} • {testimonial.year}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Encontre respostas às perguntas mais comuns sobre mobilidade estudantil.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-black text-lg">{faq.question}</CardTitle>
                      <span className="text-orange-500 font-bold text-xl">
                        {expandedFaq === index ? "−" : "+"}
                      </span>
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500" />
          <div className="relative z-10 container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para Começar?</h2>
            <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Contacte-nos hoje para uma consulta gratuita e descubra como podemos ajudá-lo a alcançar os seus objetivos académicos internacionais.
            </p>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-white text-orange-500 hover:bg-gray-100 text-base py-6 px-8 font-semibold"
            >
              Agende uma Consulta <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Contacte-nos</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Tem dúvidas? A nossa equipa está aqui para ajudar.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                />
                <textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  rows={5}
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none bg-white"
                />
                <Button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base py-3"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
