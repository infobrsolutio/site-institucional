import './styles.css';

const solutionCards = [
  {
    title: 'Software sob medida',
    text: 'Sistemas web, aplicações desktop, APIs, plataformas digitais, SaaS, painéis administrativos e sistemas internos para operações reais.',
  },
  {
    title: 'Hardware e eletrônica',
    text: 'Projetos eletrônicos, sensores, instrumentação, controle de relés, motores e integração entre dispositivos físicos e sistemas digitais.',
  },
  {
    title: 'Automação de processos',
    text: 'Fluxos inteligentes para reduzir tarefas manuais, conectar equipamentos e transformar rotinas repetitivas em processos controlados.',
  },
  {
    title: 'IA aplicada',
    text: 'Inteligência artificial para análise de dados, apoio operacional, automação, classificação, relatórios e tomada de decisão.',
  },
  {
    title: 'Sistemas embarcados e IoT',
    text: 'ESP32, ESP8266, STM32, Arduino, firmware, MQTT, TCP/IP, comunicação serial, interfaces locais e monitoramento em tempo real.',
  },
  {
    title: 'Dados e dashboards',
    text: 'Bancos de dados, processamento de informações, indicadores, dashboards e relatórios para transformar dados espalhados em visão útil.',
  },
  {
    title: 'Infraestrutura e VPS',
    text: 'Hospedagem em VPS, DNS, SSL, Docker, Cloudflare, deploy, backups e monitoramento para manter sistemas publicados com segurança.',
  },
  {
    title: 'Consultoria tecnológica',
    text: 'Diagnóstico, arquitetura, prototipagem e orientação técnica para sair da ideia e chegar a uma solução funcional.',
  },
];

const serviceGroups = [
  'Desenvolvimento de sistemas web e desktop',
  'APIs, integrações e banco de dados',
  'Dashboards e painéis administrativos',
  'Firmware, ESP32, STM32, Arduino e sensores',
  'Automação de processos, máquinas e equipamentos',
  'IA aplicada a negócios, dados e operação',
  'Prototipagem e desenvolvimento de produtos',
  'VPS, DNS, SSL, deploy, Docker, backups e monitoramento',
];

const audienceCards = [
  'Empresas',
  'Comércio',
  'Indústria',
  'Educação',
  'Logística',
  'Automação',
  'Tecnologia',
  'Projetos especiais',
];

const workSteps = [
  ['01', 'NEED', 'Entendimento', 'Mapeamos a necessidade, o contexto do negócio e o resultado esperado.'],
  ['02', 'SCAN', 'Diagnóstico técnico', 'Avaliamos sistemas, equipamentos, dados, infraestrutura, riscos e possibilidades.'],
  ['03', 'MAP', 'Planejamento', 'Desenhamos uma solução proporcional, segura e preparada para evoluir.'],
  ['04', 'DEV', 'Construção', 'Criamos software, hardware, automação, integrações ou protótipos conforme o projeto.'],
  ['05', 'TEST', 'Testes', 'Validamos comportamento, dados, comunicação, segurança, operação e usabilidade.'],
  ['06', 'SHIP', 'Entrega', 'Publicamos, documentamos e entregamos a solução pronta para uso.'],
  ['07', 'UP', 'Evolução', 'Acompanhamos ajustes, melhorias, suporte e novas etapas do produto.'],
];

const differentials = [
  'Visão completa: software + hardware',
  'Soluções sob medida para problemas reais',
  'Técnica aplicada ao mundo real',
  'Integração ponta a ponta',
  'Experiência prática em sistemas, automação e embarcados',
  'Clareza técnica para decisões melhores',
  'Foco em resultado funcional',
  'Tecnologia feita para operar, manter e evoluir',
];

const heroCapabilities = [
  ['</>', 'Software', 'Sistemas sob medida para o seu negócio'],
  ['AI', 'Inteligência artificial', 'IA aplicada para resolver problemas reais'],
  ['CPU', 'Hardware', 'Projetos eletrônicos e sistemas embarcados'],
  ['API', 'Integração', 'Conectamos sistemas, dados e pessoas'],
  ['AUTO', 'Automação', 'Processos inteligentes e eficiência real'],
  ['DATA', 'Dados & IA', 'Dashboards, análises e decisões inteligentes'],
];

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="site-header">
        <div className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="INFoBR Solutio">
            <img src="/assets/logo-symbol-clean.png" alt="" />
            <span>INFoBR Solutio</span>
          </a>
          <nav className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#metodo">Como trabalhamos</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato" className="nav-cta">Fale conosco</a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="container poster-hero">
            <div className="poster-topline">
              <span>INFoBR SOLUTIO</span>
              <i />
              <div className="signal-dots" aria-hidden="true">
                <b />
                <b />
                <b />
              </div>
            </div>

            <div className="poster-layout">
              <div className="poster-copy">
                <h1>
                  <span>Tecnologia</span>
                  que transforma.
                  <strong>Soluções</strong>
                  que conectam.
                </h1>
                <p className="lead">
                  Desenvolvemos soluções completas e inteligentes para impulsionar negócios, automatizar processos e
                  criar o futuro.
                </p>
                <div className="accent-line" aria-hidden="true" />
                <div className="capability-grid">
                  {heroCapabilities.map(([icon, title, text]) => (
                    <div className="capability-item" key={title}>
                      <span>{icon}</span>
                      <div>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="poster-brand">
                <img src="/assets/logo-symbol-clean.png" alt="" />
                <strong>INF<span>o</span>BR</strong>
                <b>SOLUTIO</b>
                <em>Complex made simple.</em>
                <div className="tech-cubes" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="hero-value-bar">
              <div>
                <span>→</span>
                <p>Tecnologia com propósito. Soluções que <strong>geram valor.</strong></p>
              </div>
              <ul>
                <li>Inovação</li>
                <li>Resultados</li>
                <li>Confiança</li>
              </ul>
            </div>

            <div className="hero-actions poster-actions">
              <a className="button primary" href="#contato">Fale sobre seu projeto</a>
              <a className="button secondary" href="#servicos">Conheça nossas soluções</a>
            </div>

            <div className="poster-footerline">
              <span>infobrsolutio.com.br</span>
              <span>@infobrsolutio</span>
              <span>Software, hardware, automação e IA</span>
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="container split">
            <div className="logo-panel">
              <img src="/assets/logo-symbol-clean.png" alt="" />
              <div className="logo-panel-copy">
                <strong>INFoBR Solutio</strong>
                <span>Complex made simple.</span>
              </div>
            </div>
            <div className="text-block">
              <p className="section-kicker">Sobre a INFoBR Solutio</p>
              <h2>Uma história de tecnologia que evoluiu para soluções completas.</h2>
              <p>
                A INFoBR nasceu em 2010, originalmente ligada à informática no Brasil. Com o tempo, essa trajetória
                evoluiu para desenvolvimento de software, projetos eletrônicos, automação, sistemas embarcados,
                integração hardware/software, IA e plataformas sob medida.
              </p>
              <p>
                A nova fase, INFoBR Solutio, preserva a história da marca e a reposiciona para uma atuação mais
                madura, tecnológica, empresarial e estratégica: entender necessidades reais, projetar caminhos práticos
                e entregar soluções funcionais.
              </p>
            </div>
          </div>
        </section>

        <section className="band" id="servicos">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">O que fazemos</p>
              <h2>Software, hardware, automação e IA trabalhando juntos.</h2>
              <p>
                A INFoBR Solutio cria tecnologia sob medida para empresas que precisam resolver problemas técnicos,
                integrar operações e transformar ideias em sistemas úteis.
              </p>
            </div>
            <div className="services-grid">
              {solutionCards.map((card) => (
                <article className="card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container stack">
            <div className="stack-main">
              <p className="section-kicker">Serviços detalhados</p>
              <h2>Soluções completas para operações que precisam sair do improviso.</h2>
              <p>
                Atuamos desde a arquitetura e prototipagem até a publicação, documentação e evolução. O projeto pode
                começar pequeno, mas já nasce com base técnica para crescer com segurança.
              </p>
              <div className="stack-tags" aria-label="Tecnologias e práticas">
                <span className="tag">React</span>
                <span className="tag">Python</span>
                <span className="tag">C/C++</span>
                <span className="tag">ESP32</span>
                <span className="tag">STM32</span>
                <span className="tag">MQTT</span>
                <span className="tag">Docker</span>
                <span className="tag">Linux</span>
                <span className="tag">Cloudflare</span>
              </div>
            </div>
            <div className="service-list">
              {serviceGroups.map((service) => (
                <div className="service-row" key={service}>{service}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <div className="section-head light">
              <p className="section-kicker">Para quem atendemos</p>
              <h2>Empresas e projetos que precisam de tecnologia aplicada de verdade.</h2>
              <p>
                Atendemos diferentes setores com soluções sob medida. Não atuamos em projetos médicos invasivos,
                nucleares, ilegais, perigosos ou com risco humano, ambiental ou jurídico fora de controle.
              </p>
            </div>
            <div className="audience-grid">
              {audienceCards.map((item) => (
                <div className="audience-card" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Como trabalhamos</p>
              <h2>Um caminho claro para transformar necessidade em solução funcional.</h2>
            </div>
            <div className="process-grid">
              {workSteps.map(([number, icon, title, text]) => (
                <article className="step" key={title}>
                  <div className="step-top">
                    <span>{number}</span>
                    <strong>{icon}</strong>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container split reverse">
            <div className="text-block">
              <p className="section-kicker">Diferenciais</p>
              <h2>Técnica, produto e operação no mesmo raciocínio.</h2>
              <p>
                O foco não é vender tecnologia genérica. É entender o problema, escolher a arquitetura correta,
                desenvolver com clareza e entregar algo que a empresa consiga usar, manter e evoluir.
              </p>
            </div>
            <ul className="check-list">
              {differentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projetos">
          <div className="container project-panel">
            <div>
              <p className="section-kicker">Projetos e experiência</p>
              <h2>Experiência prática em plataformas, automação e integração.</h2>
            </div>
            <p>
              A INFoBR Solutio carrega experiência em plataformas digitais, sistemas embarcados, interfaces de controle,
              monitoramento, projetos eletrônicos, automação de observatórios, painéis, comunicação serial, IoT,
              dashboards e soluções personalizadas. O portfólio público será organizado com cuidado, priorizando
              projetos autorizados e descrições seguras.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-wrap">
            <p className="section-kicker">Próximo passo</p>
            <h2>Tem uma ideia, processo ou desafio técnico?</h2>
            <p>A INFoBR Solutio pode ajudar a transformar isso em uma solução real.</p>
            <a className="button primary" href="#contato">Fale com a INFoBR Solutio</a>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact-wrap">
            <div className="contact-copy">
              <p className="section-kicker">Contato</p>
              <h2>Conte sobre o seu projeto.</h2>
              <p>
                Use o formulário ou fale pelo e-mail. Não inserimos telefone enquanto o número oficial da empresa não
                estiver definido.
              </p>
              <div className="contact-list">
                <a className="contact-link" href="mailto:contato@infobrsolutio.com.br">
                  <span>E-mail</span>
                  contato@infobrsolutio.com.br
                </a>
                <a className="contact-link" href="https://www.instagram.com/infobrsolutio" target="_blank" rel="noreferrer">
                  <span>Instagram</span>
                  @infobrsolutio
                </a>
                <a className="contact-link" href="https://infobrsolutio.com.br">
                  <span>Site</span>
                  infobrsolutio.com.br
                </a>
              </div>
            </div>
            <form className="contact-form" action="mailto:contato@infobrsolutio.com.br" method="post" encType="text/plain">
              <label>
                Nome
                <input name="nome" type="text" autoComplete="name" />
              </label>
              <label>
                Empresa
                <input name="empresa" type="text" autoComplete="organization" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label>
                Tipo de projeto
                <input name="tipo-de-projeto" type="text" placeholder="Ex: software, automação, IA, infraestrutura..." />
              </label>
              <label className="full">
                Mensagem
                <textarea name="mensagem" rows="5" />
              </label>
              <button className="button primary full" type="submit">Enviar mensagem</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-logo">
            <img src="/assets/logo-symbol-clean.png" alt="" />
            <span>INFoBR Solutio</span>
          </div>
          <span>2026 - Complex made simple.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
