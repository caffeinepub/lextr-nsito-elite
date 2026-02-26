import React, { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5500000000000";

const NAVY = "#0D1B2A";
const NAVY_CARD = "#112236";
const NAVY_SECTION = "#0A1520";
const NAVY_LIGHT = "#152840";
const GOLD = "#C6A84A";
const GOLD_LIGHT = "#D4B962";
const TEXT_LIGHT = "#E8E8E8";
const TEXT_MUTED = "#9BAFC4";

// ─── Floating WhatsApp Button ──────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="sr-only">Fale conosco no WhatsApp</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13, 27, 42, 0.97)" : "rgba(13, 27, 42, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? `1px solid rgba(198, 168, 74, 0.15)` : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick("#inicio")}
          >
      <img
          src="/assets/generated/shield-logo-transparent.dim_200x200.png"
          alt="Escudo LexTrânsito Elite"
          className="w-8 h-8 object-contain opacity-90"
        />
            <span
              className="font-serif text-lg font-semibold tracking-wide leading-tight"
              style={{ color: GOLD }}
            >
              LexTrânsito<br />
              <span className="text-xs font-body tracking-widest uppercase" style={{ color: GOLD_LIGHT, fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                Elite
              </span>
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-body font-medium tracking-wider uppercase transition-colors duration-200"
                style={{
                  color: TEXT_MUTED,
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MUTED)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-200"
              style={{
                border: `1px solid ${GOLD}`,
                color: GOLD,
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(198, 168, 74, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: GOLD,
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: GOLD,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: GOLD,
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "320px" : "0",
          backgroundColor: "rgba(13, 27, 42, 0.98)",
          borderTop: menuOpen ? `1px solid rgba(198, 168, 74, 0.15)` : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm font-medium tracking-widest uppercase py-2"
              style={{
                color: TEXT_MUTED,
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                borderBottom: `1px solid rgba(198, 168, 74, 0.08)`,
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 text-center text-xs font-medium tracking-widest uppercase"
            style={{
              border: `1px solid ${GOLD}`,
              color: GOLD,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      {/* Background texture/gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(21, 40, 64, 0.8) 0%, ${NAVY} 70%)`,
        }}
      />

      {/* Shield watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/assets/generated/shield-logo-transparent.dim_200x200.png"
          alt=""
          aria-hidden="true"
          className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] object-contain"
          style={{ opacity: 0.06 }}
        />
      </div>

      {/* Decorative diagonal lines */}
      <div
        className="absolute top-0 right-0 w-[40%] h-full pointer-events-none opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, ${GOLD} 0, ${GOLD} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Top tag */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span
            className="block h-px w-8"
            style={{ backgroundColor: GOLD, opacity: 0.6 }}
          />
          <span
            className="text-xs font-medium tracking-[0.3em] uppercase"
            style={{ color: GOLD, fontFamily: "Montserrat, sans-serif" }}
          >
            Defesa Estratégica em Trânsito
          </span>
          <span
            className="block h-px w-8"
            style={{ backgroundColor: GOLD, opacity: 0.6 }}
          />
        </div>

        {/* Main heading */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6"
          style={{ color: TEXT_LIGHT }}
        >
          Defesa Especializada
          <br />
          <span style={{ color: GOLD }}>para Multas de</span>
          <br />
          Alto Impacto
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10"
          style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
        >
          Lei Seca, Suspensão, Cassação e Multas acima de 50% da velocidade exigem
          estratégia técnica. Atuamos exclusivamente na defesa de autuações gravíssimas
          que colocam sua CNH em risco.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: GOLD,
              color: NAVY,
              fontFamily: "Montserrat, sans-serif",
              boxShadow: "0 4px 24px rgba(198, 168, 74, 0.35)",
              minWidth: "240px",
              textAlign: "center",
            }}
          >
            Falar com um Especialista
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              border: `1px solid ${GOLD}`,
              color: GOLD,
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "transparent",
              minWidth: "240px",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(198, 168, 74, 0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            Solicitar Análise do Caso
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-10"
            style={{
              background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
            }}
          />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: GOLD, fontFamily: "Montserrat, sans-serif" }}
          >
            Scroll
          </span>
        </div>
      </div>

      {/* Gold bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${GOLD} 50%, transparent 100%)`,
          opacity: 0.4,
        }}
      />
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
  const infractions = [
    "Lei Seca",
    "Velocidade acima de 50%",
    "Direção perigosa",
    "Recusa ao bafômetro",
  ];

  const consequences = [
    "Suspensão da CNH",
    "Cassação",
    "Multas acima de R$ 2.000",
    "Processo administrativo complexo",
  ];

  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: NAVY_SECTION }}
    >
      {/* Section accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.2,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2
          className="font-serif text-3xl md:text-5xl font-semibold text-center mb-16 leading-tight"
          style={{ color: TEXT_LIGHT }}
        >
          Uma multa pode custar{" "}
          <span style={{ color: GOLD }}>muito mais</span> que dinheiro.
        </h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Infractions */}
          <div
            className="p-8"
            style={{
              backgroundColor: NAVY_CARD,
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <h3
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ color: GOLD, fontFamily: "Montserrat, sans-serif" }}
            >
              Infrações de alto impacto
            </h3>
            <ul className="space-y-4">
              {infractions.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                  <span
                    className="text-base font-medium"
                    style={{ color: TEXT_LIGHT, fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Consequences */}
          <div
            className="p-8"
            style={{
              backgroundColor: NAVY_CARD,
              borderLeft: `3px solid rgba(198, 168, 74, 0.3)`,
            }}
          >
            <h3
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif" }}
            >
              Consequências
            </h3>
            <ul className="space-y-4">
              {consequences.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span
                    className="flex-shrink-0 text-sm font-medium"
                    style={{ color: GOLD }}
                  >
                    —
                  </span>
                  <span
                    className="text-base font-medium"
                    style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-14 text-center">
          <p
            className="text-lg md:text-xl font-serif italic font-medium"
            style={{ color: GOLD }}
          >
            "Você não deve enfrentar isso sozinho."
          </p>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.15,
        }}
      />
    </section>
  );
}

// ─── Solution Section ──────────────────────────────────────────────────────
function SolutionSection() {
  const cards = [
    {
      number: "01",
      title: "Análise Técnica Completa",
      desc: "Estudo detalhado do auto de infração e identificação de irregularidades que podem ser utilizadas na defesa.",
    },
    {
      number: "02",
      title: "Defesa Administrativa Estratégica",
      desc: "Elaboração de defesa técnica fundamentada em todas as fases do processo administrativo.",
    },
    {
      number: "03",
      title: "Acompanhamento Integral do Processo",
      desc: "Monitoramento contínuo de cada etapa até a decisão final do recurso ou arquivamento.",
    },
    {
      number: "04",
      title: "Atendimento Personalizado",
      desc: "Suporte dedicado com comunicação clara e objetiva durante todo o processo.",
    },
  ];

  return (
    <section
      className="relative py-24 md:py-32"
      style={{ backgroundColor: NAVY }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Tag */}
        <div className="text-center mb-4">
          <span
            className="text-xs font-semibold tracking-[0.35em] uppercase"
            style={{ color: GOLD, fontFamily: "Montserrat, sans-serif" }}
          >
            Nossa Abordagem
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-serif text-3xl md:text-5xl font-semibold text-center mb-6 leading-tight"
          style={{ color: TEXT_LIGHT }}
        >
          Estratégia Jurídica{" "}
          <span style={{ color: GOLD }}>Especializada</span>
        </h2>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-center text-base leading-relaxed mb-16"
          style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
        >
          Na LexTrânsito Elite realizamos análise técnica detalhada do auto de infração,
          identificamos falhas processuais e estruturamos defesa estratégica em todas as
          fases do processo administrativo.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {cards.map((card) => (
            <article
              key={card.number}
              className="solution-card p-8 transition-all duration-300"
              style={{
                backgroundColor: NAVY_CARD,
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <span
                className="block font-serif text-4xl font-bold mb-4 leading-none"
                style={{ color: "rgba(198, 168, 74, 0.2)" }}
              >
                {card.number}
              </span>
              <h3
                className="font-serif text-xl font-semibold mb-3"
                style={{ color: TEXT_LIGHT }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: TEXT_MUTED,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                }}
              >
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: GOLD,
              color: NAVY,
              fontFamily: "Montserrat, sans-serif",
              boxShadow: "0 4px 24px rgba(198, 168, 74, 0.3)",
            }}
          >
            Solicitar Análise do Caso
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works Section ──────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Envie sua notificação",
      desc: "Envie a foto ou documento da sua notificação pelo WhatsApp para análise imediata.",
    },
    {
      num: "02",
      title: "Análise técnica especializada",
      desc: "Nossa equipe examina cada detalhe do auto de infração em busca de falhas processuais.",
    },
    {
      num: "03",
      title: "Elaboração da defesa",
      desc: "Estruturamos a estratégia de defesa mais adequada e eficaz para o seu caso.",
    },
    {
      num: "04",
      title: "Acompanhamento até decisão final",
      desc: "Monitoramos o processo em todas as etapas até a resolução definitiva.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: NAVY_SECTION }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.15,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Tag */}
        <div className="text-center mb-4">
          <span
            className="text-xs font-semibold tracking-[0.35em] uppercase"
            style={{ color: GOLD, fontFamily: "Montserrat, sans-serif" }}
          >
            Passo a Passo
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-serif text-3xl md:text-5xl font-semibold text-center mb-20 leading-tight"
          style={{ color: TEXT_LIGHT }}
        >
          Como <span style={{ color: GOLD }}>Funciona</span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{
              background: `linear-gradient(90deg, ${GOLD}, rgba(198, 168, 74, 0.15), ${GOLD}, rgba(198, 168, 74, 0.15), ${GOLD})`,
              opacity: 0.4,
            }}
          />

          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col items-center text-center px-4">
              {/* Number circle */}
              <div
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-serif text-xl font-bold"
                style={{
                  backgroundColor: NAVY,
                  border: `2px solid ${GOLD}`,
                  color: GOLD,
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                {step.num}
              </div>

              {/* Content */}
              <h3
                className="font-serif text-lg font-semibold mb-3"
                style={{ color: TEXT_LIGHT }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: TEXT_MUTED,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                }}
              >
                {step.desc}
              </p>

              {/* Mobile vertical connector */}
              {idx < steps.length - 1 && (
                <div
                  className="md:hidden mt-8 w-px h-10"
                  style={{
                    background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
                    opacity: 0.4,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.15,
        }}
      />
    </section>
  );
}

// ─── Authority Section ─────────────────────────────────────────────────────
function AuthoritySection() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{ backgroundColor: NAVY_LIGHT }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className="p-10 md:p-14 relative"
          style={{
            borderLeft: `4px solid ${GOLD}`,
            backgroundColor: "rgba(13, 27, 42, 0.6)",
          }}
        >
          {/* Large decorative quote mark */}
          <div
            className="absolute -top-6 -left-2 font-serif text-9xl leading-none pointer-events-none select-none"
            style={{ color: GOLD, opacity: 0.08 }}
          >
            "
          </div>

          <h2
            className="font-serif text-3xl md:text-4xl font-semibold mb-8 leading-tight"
            style={{ color: TEXT_LIGHT }}
          >
            Multas de alto valor exigem{" "}
            <span style={{ color: GOLD }}>defesa técnica.</span>
          </h2>

          <p
            className="text-base leading-relaxed mb-5"
            style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
          >
            Nem toda multa é definitiva. Muitas autuações apresentam inconsistências
            formais ou falhas processuais que podem ser utilizadas estrategicamente
            na defesa. Nossa atuação é baseada em estratégia, análise e conhecimento
            técnico aprofundado.
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
          >
            Cada caso é único e merece uma análise individualizada. A identificação
            de um vício formal ou erro processual pode determinar a diferença entre
            a manutenção e o cancelamento de uma autuação gravíssima.
          </p>

          {/* Decorative horizontal line */}
          <div
            className="mt-10 h-px w-24"
            style={{ backgroundColor: GOLD, opacity: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA Section ─────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section
      id="contato"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      {/* Background shield watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/assets/generated/shield-logo-transparent.dim_200x200.png"
          alt=""
          aria-hidden="true"
          className="w-[500px] h-[500px] object-contain"
          style={{ opacity: 0.04 }}
        />
      </div>

      {/* Decorative diagonal pattern on left */}
      <div
        className="absolute top-0 left-0 w-[30%] h-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${GOLD} 0, ${GOLD} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.25,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span
          className="text-xs font-semibold tracking-[0.35em] uppercase mb-6 block"
          style={{ color: GOLD, fontFamily: "Montserrat, sans-serif" }}
        >
          Atendimento Especializado
        </span>

        <h2
          className="font-serif text-4xl md:text-6xl font-semibold mb-6 leading-tight"
          style={{ color: TEXT_LIGHT }}
        >
          Sua <span style={{ color: GOLD }}>CNH</span> está em risco?
        </h2>

        <p
          className="text-base md:text-lg mb-12 leading-relaxed"
          style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
        >
          Fale agora com um especialista e receba uma análise inicial do seu caso.
          Atendimento estratégico e personalizado em todo o Brasil.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-12 py-5 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: GOLD,
            color: NAVY,
            fontFamily: "Montserrat, sans-serif",
            boxShadow: "0 8px 40px rgba(198, 168, 74, 0.4)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp Agora
        </a>
      </div>
    </section>
  );
}

// ─── Differentials Section ─────────────────────────────────────────────────
function DifferentialsSection() {
  const items = [
    {
      icon: "◈",
      text: "Atendimento estratégico e personalizado",
    },
    {
      icon: "◈",
      text: "Especialização em multas de alto impacto",
    },
    {
      icon: "◈",
      text: "Comunicação clara e objetiva",
    },
    {
      icon: "◈",
      text: "Atuação em todo o Brasil",
    },
    {
      icon: "◈",
      text: "Agilidade na análise do caso",
    },
  ];

  return (
    <section
      className="relative py-24 md:py-28"
      style={{ backgroundColor: NAVY_CARD }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.2,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-4 block"
            style={{ color: GOLD, fontFamily: "Montserrat, sans-serif" }}
          >
            Nossos Diferenciais
          </span>
          <h2
            className="font-serif text-3xl md:text-5xl font-semibold leading-tight"
            style={{ color: TEXT_LIGHT }}
          >
            Por que escolher a{" "}
            <span style={{ color: GOLD }}>LexTrânsito Elite?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 transition-all duration-200"
              style={{
                backgroundColor: "rgba(13, 27, 42, 0.5)",
                border: `1px solid rgba(198, 168, 74, 0.12)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(198, 168, 74, 0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(198, 168, 74, 0.12)";
              }}
            >
              <span
                className="text-xl flex-shrink-0 mt-0.5"
                style={{ color: GOLD }}
              >
                {item.icon}
              </span>
              <span
                className="text-sm font-medium leading-relaxed"
                style={{ color: TEXT_LIGHT, fontFamily: "Montserrat, sans-serif" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.15,
        }}
      />
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="relative py-12 md:py-16"
      style={{
        backgroundColor: "#070F18",
        borderTop: `1px solid rgba(198, 168, 74, 0.12)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Logo + Info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/shield-logo-transparent.dim_200x200.png"
                alt="LexTrânsito Elite"
                className="w-8 h-8 object-contain opacity-80"
              />
              <div>
                <p
                  className="font-serif text-base font-semibold"
                  style={{ color: GOLD }}
                >
                  LexTrânsito Elite
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif" }}
                >
                  Defesa Estratégica em Trânsito
                </p>
              </div>
            </div>
            <p
              className="text-xs mt-2"
              style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif" }}
            >
              Atendimento em todo o Brasil
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-6">
              <a
                href="#contato"
                className="text-xs font-medium tracking-wider uppercase transition-colors duration-200"
                style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MUTED)}
              >
                Contato
              </a>
              <span style={{ color: "rgba(198, 168, 74, 0.3)" }}>|</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-wider uppercase transition-colors duration-200"
                style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MUTED)}
              >
                WhatsApp
              </a>
              <span style={{ color: "rgba(198, 168, 74, 0.3)" }}>|</span>
              <a
                href="#"
                className="text-xs font-medium tracking-wider uppercase transition-colors duration-200"
                style={{ color: TEXT_MUTED, fontFamily: "Montserrat, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MUTED)}
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(198, 168, 74, 0.2), transparent)`,
          }}
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: "rgba(155, 175, 196, 0.5)", fontFamily: "Montserrat, sans-serif" }}
          >
            © 2026 LexTrânsito Elite. Todos os direitos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(155, 175, 196, 0.4)", fontFamily: "Montserrat, sans-serif" }}
          >
            Construído com{" "}
            <span style={{ color: GOLD }}>♥</span>{" "}
            usando{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "rgba(155, 175, 196, 0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(155, 175, 196, 0.4)")}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Mobile Floating CTA ───────────────────────────────────────────────────
function MobileFloatingCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4"
      style={{
        backgroundColor: "rgba(13, 27, 42, 0.95)",
        borderTop: `1px solid rgba(198, 168, 74, 0.2)`,
        backdropFilter: "blur(12px)",
      }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-4 text-xs font-semibold tracking-widest uppercase"
        style={{
          backgroundColor: GOLD,
          color: NAVY,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Fale com um Especialista
      </a>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: NAVY, fontFamily: "Montserrat, sans-serif" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <AuthoritySection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileFloatingCTA />
    </div>
  );
}
