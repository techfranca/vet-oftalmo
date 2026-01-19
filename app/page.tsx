import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Eye, Clock, Phone, CheckCircle, AlertTriangle, Droplets, Search } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const whatsappNumber = "5521998122301"
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=5521998122301&text=Ol%C3%A1%21%20Sou%20o%20respons%C3%A1vel%20do%20meu%20pet%20e%20ele%20est%C3%A1%20com%20um%20problema%20oftalmol%C3%B4gico.%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consulta.&type=phone_number&app_absent=0"

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Header with doctor's name */}
      <header className="py-3 sm:py-4" style={{ backgroundColor: "#395757" }}>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-xl font-bold text-white sm:text-2xl md:text-3xl px-4">Oftalmologia Veterinária</h1>
          <p className="text-sm text-white/90 sm:text-base px-4">Dra. Carolina Neumann</p>
        </div>
      </header>

      {/* Hero Section with two-column layout and mobile-first approach */}
      <section className="relative py-8 sm:py-12 md:py-20" style={{ backgroundColor: "#f0f4f4" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center px-4">
            {/* Text Content - Left Column (First on Mobile) */}
            <div className="order-1 md:order-1 text-center md:text-left">
              <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 text-balance break-words">
                <span style={{ color: "#CAB272" }}>Problemas oculares</span> em pets podem se agravar rapidamente. Não
                espere os <span style={{ color: "#CAB272" }}>sintomas avançarem</span>.
              </h1>

              <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-700 md:text-xl text-pretty leading-relaxed break-words">
                Agende uma avaliação com a <span style={{ color: "#CAB272" }}>Dra. Carolina Neumann</span>,
                Médica-Veterinária especializada em <span style={{ color: "#CAB272" }}>Oftalmologia</span>, e garanta o
                diagnóstico correto antes que a condição evolua.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mb-4 h-14 sm:h-16 w-full px-3 sm:px-4 text-sm sm:text-base font-bold text-white md:w-auto md:px-12 rounded-md transition-colors hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="break-words text-center leading-tight">Agendar consulta imediata no WhatsApp 🐶</span>
              </a>

              <div className="space-y-2 text-sm sm:text-base justify-center md:justify-start pt-3">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-medium flex-shrink-0 mt-0.5">1️⃣</span>
                  <p className="text-gray-700 leading-relaxed break-words">
                    Clique no botão acima para falar com a nossa equipe de atendimento no WhatsApp.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-medium flex-shrink-0 mt-0.5">2️⃣</span>
                  <p className="text-gray-700 leading-relaxed break-words">
                    Agende um horário para a avaliação oftalmológica do seu pet.
                  </p>
                </div>
              </div>
            </div>

            {/* Image - Right Column (Second on Mobile) */}
            <div className="order-2 md:order-2 flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg w-full mx-auto max-w-md md:max-w-none h-64 sm:h-72 md:h-96 lg:h-[500px]">
                <Image
                  src="/images/carol3.jpeg"
                  alt="Dra. Carolina Neumann realizando exame oftalmológico em pet com equipamento especializado"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 384px, 50vw"
                  quality={75}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Dor + Urgência */}
      <section className="py-12 sm:py-16">
        <div className="px-4 mx-auto max-w-4xl">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
              Reconheça os Sinais de Alerta
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Droplets,
                title: "Lacrimejamento excessivo",
                desc: "Olhos constantemente úmidos ou com lágrimas",
              },
              { icon: Eye, title: "Vermelhidão intensa", desc: "Olhos avermelhados ou irritados" },
              { icon: Droplets, title: "Secreção anormal", desc: "Pus, muco ou secreção amarelada/esverdeada" },
              { icon: AlertTriangle, title: "Coceira constante", desc: "Pet coça os olhos frequentemente" },
              { icon: Search, title: "Olhos turvos", desc: "Perda de transparência ou opacidade" },
              {
                icon: Eye,
                title: "Dificuldade para enxergar",
                desc: "Pet esbarra em móveis ou parece perdido",
              },
            ].map((symptom, index) => (
              <Card key={index} className="border-l-4" style={{ borderLeftColor: "#CAB272" }}>
                <CardContent className="p-4 sm:p-6">
                  <symptom.icon className="mb-2 sm:mb-3 h-6 w-6 sm:h-8 sm:w-8" style={{ color: "#CAB272" }} />
                  <h3 className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold text-foreground">{symptom.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{symptom.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 sm:mt-8 border-destructive bg-destructive/5">
            <CardContent className="p-4 sm:p-6 text-center">
              <AlertTriangle className="mx-auto mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 text-destructive" />
              <h3 className="mb-2 text-lg sm:text-xl font-bold text-destructive leading-tight">
                Sem o tratamento correto, esses problemas podem evoluir para dor intensa e até cegueira irreversível.
              </h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-3 sm:mt-4 w-full sm:w-auto px-4 py-2 bg-destructive text-white rounded-md font-medium transition-colors hover:bg-destructive/90"
              >
                Falar no WhatsApp
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits of the Consultation */}
      <section className="bg-card py-12 sm:py-16">
        <div className="px-4 mx-auto max-w-4xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
            <div className="order-1 md:order-1">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                O que você terá na consulta:
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Avaliação completa dos olhos do seu pet",
                  "Diagnóstico rápido e preciso",
                  "Orientação sobre tratamento imediato",
                  "Acompanhamento com foco em preservar a visão",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle
                      className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                      style={{ color: "#CAB272" }}
                    />
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-6 sm:mt-8 text-white w-full sm:w-auto px-6 py-3 rounded-md font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: "#395757" }}
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Agendar agora pelo WhatsApp
              </a>
            </div>

            <div className="order-2 md:order-2 relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/carol1.jpeg"
                alt="Dra. Carolina Neumann examinando os olhos de um pet"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
                quality={70}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Doctor */}
      <section className="py-12 sm:py-16">
        <div className="px-4 mx-auto max-w-4xl">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
              Sobre a Dra. Carolina Neumann
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">Especializada em Oftalmologia Veterinária</p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/carol2.jpeg"
                alt="Dra. Carolina Neumann"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
                quality={70}
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
              {[
                {
                  iconSrc: "/images/xp.png",
                  title: "+5 anos de experiência",
                  desc: "Especialização exclusiva em oftalmologia veterinária",
                },
                {
                  iconSrc: "/images/oftalmo.png",
                  title: "Foco exclusivo em oftalmologia",
                  desc: "Dedicação total aos cuidados oculares de pets",
                },
                {
                  iconSrc: "/images/consultorio.png",
                  title: "Consultório equipado",
                  desc: "Aparelhos modernos para diagnóstico preciso",
                },
                {
                  iconSrc: "/images/doutor.png",
                  title: "Atendimento humanizado",
                  desc: "Cuidado individualizado para cada pet",
                },
              ].map((differential, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 rounded-full p-2 sm:p-3 bg-gray-100">
                    <img
                      src={differential.iconSrc || "/placeholder.svg"}
                      alt=""
                      className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm sm:text-base font-semibold text-foreground">{differential.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{differential.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social - Depoimentos */}
      <section className="bg-card py-12 sm:py-16">
        <div className="px-4 mx-auto max-w-4xl">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
              O que os tutores dizem
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <span className="text-lg font-bold" style={{ color: "#395757" }}>4.9</span>
              <span className="text-sm text-muted-foreground">com 121 avaliações no Google</span>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* Felipe Gandra */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image
                      src="/images/depoimento1.png"
                      alt="Felipe Gandra"
                      fill
                      loading="lazy"
                      sizes="48px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-foreground">Felipe Gandra</h4>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      "Excelente atendimento! A Dra. Carolina cuidou do meu neném Luck com muito carinho e
                      profissionalismo. Só tenho a agradecer pelo cuidado e dedicação."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bruno Fernandes */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image
                      src="/images/depoimento2.png"
                      alt="Bruno Fernandes"
                      fill
                      loading="lazy"
                      sizes="48px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-foreground">Bruno Fernandes</h4>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      "Chamei a Dra. Carolina em casa, pois meu gatinho estava com o olho vermelho. Descobrimos que era
                      uma úlcera e, graças a Deus, tratamos a tempo! Eu e o Bolinha agradecemos muito!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mariana Oliveira */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image
                      src="/images/depoimento3.png"
                      alt="Mariana Oliveira"
                      fill
                      loading="lazy"
                      sizes="48px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-foreground">Mariana Oliveira</h4>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      "Levei meu cachorro para a Dra. Carolina e fomos muito bem atendidos. Ela é atenciosa, explica
                      tudo de forma clara e cuidadosa. Além disso, o consultório é impecável e muito bem cuidado."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arleu de Souza */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image
                      src="/images/depoimento4.png"
                      alt="Arleu de Souza"
                      fill
                      loading="lazy"
                      sizes="48px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-foreground">Arleu de Souza</h4>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      "Gostaria de parabenizar a Dra. Carolina pelo excelente trabalho na área de oftalmologia
                      veterinária. Sua dedicação, competência e carinho com os animais são notáveis. Minha cachorrinha
                      chegou com uma úlcera de córnea e, graças ao tratamento, hoje está ótima."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="px-4 mx-auto max-w-3xl">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
              Ainda tem dúvidas? Isso é normal.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Reunimos abaixo as perguntas mais comuns de tutores que chegam até nós preocupados com a visão de seus pets.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                O atendimento oftalmológico dói no pet?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm leading-relaxed">
                Não. Os exames são rápidos, indolores e feitos com equipamentos específicos para garantir o máximo conforto do animal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Por que levar meu pet direto a um oftalmologista veterinário?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm leading-relaxed">
                O oftalmologista veterinário é especializado em doenças oculares e possui equipamentos e conhecimento específicos para diagnóstico preciso e tratamento adequado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Qual é o valor da consulta oftalmológica veterinária?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm leading-relaxed">
                O valor depende da avaliação clínica e dos exames necessários. Todas as informações são explicadas com transparência antes de qualquer procedimento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                O tratamento costuma ser longo?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm leading-relaxed">
                Depende do diagnóstico. Alguns casos são resolvidos rapidamente, enquanto outros exigem acompanhamento contínuo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Atende cães e gatos?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm leading-relaxed">
                Sim, a clínica atende cães e gatos de todas as raças e idades.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-sm sm:text-base">
                Como faço para agendar a consulta?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm leading-relaxed">
                Basta clicar no botão de WhatsApp nesta página e falar diretamente com nossa equipe.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 sm:mt-8 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white w-full sm:w-auto h-12 sm:h-auto px-6 py-3 rounded-md font-medium transition-colors hover:opacity-90"
              style={{ backgroundColor: "#395757" }}
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Agende agora pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Fechamento - Urgência + CTA Final */}
      <section
        className="py-12 sm:py-16 text-center"
        style={{ background: `linear-gradient(to right, #395757, #395757cc)` }}
      >
        <div className="px-4 mx-auto max-w-4xl">
          <Clock className="mx-auto mb-4 sm:mb-6 h-12 w-12 sm:h-16 sm:w-16 text-white" />

          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white md:text-4xl text-balance leading-tight">
            Não espere os sintomas piorarem. Cada hora pode fazer a diferença entre enxergar e perder a visão.
          </h2>

          <p className="mb-6 sm:mb-8 text-sm sm:text-lg text-white/90 text-pretty leading-relaxed">
            A visão do seu pet é preciosa e irreversível quando perdida. Agende agora mesmo uma consulta especializada.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 sm:h-16 px-6 sm:px-8 text-base sm:text-lg font-bold text-white border border-white/30 w-full sm:w-auto rounded-md transition-colors hover:opacity-90"
            style={{ backgroundColor: "#CAB272", color: "white" }}
          >
            <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
            Agendar agora pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-white">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
            {/* Contact Information */}
            <div className="text-gray-800">
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold" style={{ color: "#395757" }}>
                Dra. Carolina Neumann
              </h3>
              <p className="mb-4 text-sm sm:text-base font-medium" style={{ color: "#CAB272" }}>
                Especializada em Oftalmologia Veterinária
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-gray-700 mb-4">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>
                    Av. das Américas, 7907 - Bloco 2 Loja 119
                    <br />
                    Barra da Tijuca, Rio de Janeiro - RJ
                  </span>
                </p>
                <p>📱 WhatsApp: (21) 99812-2301</p>
                <p>📧 Instagram: @carolinaneumann_oftalmovet</p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-2 text-white w-full sm:w-auto px-6 py-3 rounded-md font-semibold transition-all hover:opacity-90 hover:scale-105 shadow-md"
                style={{ backgroundColor: "#CAB272" }}
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5" />
                Agendar pelo WhatsApp
              </a>

              <div className="mt-6 sm:mt-8 h-48 sm:h-56 overflow-hidden rounded-lg shadow-lg max-w-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0234567890123!2d-43.3654321!3d-23.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20das%20Am%C3%A9ricas%2C%207907%20-%20Bloco%202%20Loja%20119%2C%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Dra. Carolina Neumann"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg max-w-md mx-auto lg:mx-0 h-64 sm:h-80 md:h-96">
              <Image
                src="/images/coftalmo.png"
                alt="Clínica Dra. Carolina Neumann - Oftalmologia Veterinária"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
                quality={70}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="py-4 text-center text-sm text-white" style={{ backgroundColor: "#395757" }}>
        <p>Dra. Carolina Neumann</p>
      </div>
    </div>
  )
}
