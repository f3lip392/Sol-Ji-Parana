import Link from "next/link";

const services = [
  {
    icon: "◉",
    title: "Consultas oftalmológicas",
    text: "Avaliação especializada da saúde ocular, acompanhamento e orientação individualizada.",
  },
  {
    icon: "⌁",
    title: "Diagnóstico em oftalmologia",
    text: "Atendimento voltado à investigação e acompanhamento das condições que afetam a visão.",
  },
  {
    icon: "✦",
    title: "Tratamento clínico",
    text: "Acompanhamento médico para diferentes condições oftalmológicas, conforme indicação profissional.",
  },
  {
    icon: "＋",
    title: "Procedimentos e cirurgia",
    text: "Estrutura para atendimento de procedimentos e tratamentos cirúrgicos do aparelho da visão.",
  },
];

export default function Home() {
  return (
    <main className="site">
      <header className="nav">
        <a className="brand" href="#inicio" aria-label="SOL Oftalmologia - início">
          <span className="brand-mark">SOL</span>
          <span className="brand-text">
            <strong>OFTALMOLOGIA</strong>
            <small>Ji-Paraná • RO</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#sobre">A clínica</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <a className="nav-cta" href="tel:+556932298039">Ligar agora</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Cuidado especializado com a sua visão</div>
          <h1>Saúde ocular com cuidado, precisão e acolhimento.</h1>
          <p>
            A SOL Oftalmologia oferece atendimento especializado em Ji-Paraná,
            com consultas, diagnóstico, acompanhamento clínico e procedimentos
            oftalmológicos.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+556932298039">Agende seu atendimento</a>
            <a className="button secondary" href="#servicos">Conheça nossos serviços</a>
          </div>
          <div className="hero-note">
            Atendimento de segunda a sexta, das 8h às 18h.
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="eye-card">
            <div className="eye-ring">
              <div className="eye-iris">SOL</div>
            </div>
            <span>VISÃO • CUIDADO • SAÚDE</span>
          </div>
        </div>
      </section>

      <section id="sobre" className="section about">
        <div className="section-heading">
          <div className="eyebrow">Sobre a SOL</div>
          <h2>Um espaço dedicado ao cuidado da visão.</h2>
        </div>
        <div className="about-grid">
          <p>
            A <strong>SOL Serviços de Oftalmologia</strong> atua em Ji-Paraná,
            Rondônia, como clínica e centro de especialidade, oferecendo
            atendimento em oftalmologia e serviços relacionados ao cuidado da
            saúde.
          </p>
          <p>
            Nosso propósito é proporcionar uma jornada de atendimento clara,
            organizada e acolhedora, desde a avaliação inicial até o
            acompanhamento indicado pelo profissional de saúde.
          </p>
        </div>
      </section>

      <section id="servicos" className="section services">
        <div className="section-heading centered">
          <div className="eyebrow">Atendimento</div>
          <h2>Serviços para cuidar da sua visão.</h2>
          <p>
            Conheça algumas das frentes de atendimento da unidade SOL
            Oftalmologia em Ji-Paraná.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience">
        <div className="experience-card">
          <div>
            <div className="eyebrow">Atendimento em Ji-Paraná</div>
            <h2>Seu cuidado começa com informação e atendimento adequado.</h2>
            <p>
              Para saber sobre disponibilidade, consultas, exames ou
              procedimentos, entre em contato com a equipe da SOL.
            </p>
          </div>
          <a className="button light" href="tel:+556932298039">Falar com a SOL</a>
        </div>
      </section>

      <section id="contato" className="section contact">
        <div className="section-heading">
          <div className="eyebrow">Contato</div>
          <h2>Estamos em Ji-Paraná.</h2>
          <p>Entre em contato para informações e agendamento.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-label">Endereço</span>
            <strong>Avenida Aracaju, 1682, Sala 04</strong>
            <span>São Pedro • Ji-Paraná/RO • CEP 76913-602</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida%20Aracaju%2C%201682%2C%20Ji-Paran%C3%A1%20RO"
              target="_blank"
              rel="noreferrer"
            >
              Ver localização →
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-label">Telefone</span>
            <strong>(69) 3229-8039</strong>
            <span>Segunda a sexta • 8h às 18h</span>
            <a href="tel:+556932298039">Ligar para a clínica →</a>
          </div>

          <div className="contact-card">
            <span className="contact-label">E-mail</span>
            <strong>administracao@soloftalmologia.com</strong>
            <span>Canal institucional</span>
            <a href="mailto:administracao@soloftalmologia.com">Enviar e-mail →</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <div className="footer-brand">SOL <span>OFTALMOLOGIA</span></div>
            <p>SOL SERVIÇOS DE OFTALMOLOGIA LTDA</p>
            <small>CNPJ 00.898.428/0008-70 • Ji-Paraná/RO</small>
          </div>
          <div className="footer-links">
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/termos-de-servico">Termos de Serviço</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SOL Oftalmologia. Todos os direitos reservados.</span>
          <span>Este site apresenta informações institucionais da unidade.</span>
        </div>
      </footer>
    </main>
  );
}
