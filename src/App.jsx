import './styles.css';
import logoSymbol from '../assets/logo-symbol-clean.png';
import {
  BarChart3,
  BrainCircuit,
  CircuitBoard,
  MonitorCog,
  Network,
  Workflow,
} from 'lucide-react';
import { useState } from 'react';

const solutionIcons = {
  system: MonitorCog,
  automation: Workflow,
  integration: Network,
  ai: BrainCircuit,
  iot: CircuitBoard,
  data: BarChart3,
};

const painCards = [
  {
    title: 'Processos manuais demais',
    text: 'Rotinas repetitivas, planilhas soltas e retrabalho consomem tempo que poderia estar gerando resultado.',
  },
  {
    title: 'Sistemas que não conversam',
    text: 'Dados ficam espalhados, equipes perdem contexto e a gestão não enxerga a operação em tempo real.',
  },
  {
    title: 'Ideias travadas por falta técnica',
    text: 'A empresa sabe o que precisa melhorar, mas precisa de quem transforme a necessidade em produto funcional.',
  },
  {
    title: 'IA sem aplicacao pratica',
    text: 'Existe vontade de usar inteligência artificial, mas falta clareza sobre onde ela gera ganho real no negócio.',
  },
];

const solutionCards = [
  {
    icon: 'system',
    title: 'Sistema sob medida',
    micro: 'Organize sua rotina do seu jeito',
    text: 'Criamos sistemas web, plataformas internas e painéis para organizar sua rotina.',
    result: 'Resultado: menos improviso, mais controle e operação pronta para crescer.',
  },
  {
    icon: 'automation',
    title: 'Automação inteligente',
    micro: 'Menos repetição, mais produtividade',
    text: 'Automatizamos processos, planilhas e etapas repetitivas que tomam tempo.',
    result: 'Resultado: menos retrabalho, mais velocidade e produtividade real.',
  },
  {
    icon: 'integration',
    title: 'Integração de sistemas',
    micro: 'Dados circulando sem retrabalho',
    text: 'Conectamos APIs, bancos de dados, plataformas e equipamentos para a informação circular melhor.',
    result: 'Resultado: dados integrados, menos erro manual e decisões mais rápidas.',
  },
  {
    icon: 'ai',
    title: 'IA aplicada',
    micro: 'Inteligência para operação real',
    text: 'Aplicamos IA em atendimento, triagem, análise, relatórios, classificação e apoio operacional.',
    result: 'Resultado: IA gerando ganho real, não só discurso bonito.',
  },
  {
    icon: 'iot',
    title: 'Hardware e IoT',
    micro: 'Controle além da tela',
    text: 'Desenvolvemos hardware, sensores, IoT, firmware e comunicação com sistemas digitais.',
    result: 'Resultado: monitoramento, controle e automação fora da tela.',
  },
  {
    icon: 'data',
    title: 'Dados e dashboards',
    micro: 'Decisão com clareza',
    text: 'Criamos dashboards, indicadores e relatórios para transformar informações espalhadas em visão clara.',
    result: 'Resultado: você entende o que está acontecendo e decide com mais segurança.',
  },
];

const useCases = [
  'Sistema de gestão personalizado para operações específicas',
  'Painel de indicadores para acompanhar vendas, produção ou atendimento',
  'Automação de tarefas repetitivas entre planilhas, sistemas e equipes',
  'Integração com APIs, bancos de dados, ERPs, CRMs ou plataformas externas',
  'Controle e monitoramento com sensores, dispositivos e microcontroladores',
  'IA para atendimento, triagem, classificação, análise e relatórios',
];

const workSteps = [
  ['01', 'Diagnóstico', 'Entendemos o problema, a rotina da empresa e o resultado esperado.'],
  ['02', 'Desenho da solução', 'Definimos escopo, prioridades, arquitetura e melhor caminho técnico.'],
  ['03', 'Desenvolvimento', 'Construímos software, automação, integração, IA ou hardware conforme o projeto.'],
  ['04', 'Entrega e evolução', 'Testamos, publicamos, ajustamos e acompanhamos as próximas melhorias.'],
];

const trustSignals = [
  'Software, hardware e automação no mesmo raciocínio',
  'Soluções sob medida para problemas reais',
  'Projeto pensado para operar, manter e evoluir',
  'Atendimento direto para entender contexto e prioridade',
  'Clareza técnica para a empresa decidir com segurança',
  'Foco em resultado prático, não em tecnologia decorativa',
];

const heroCapabilities = [
  ['</>', 'Software', 'Sistemas criados para a sua operação'],
  ['AUTO', 'Automação', 'Menos tarefas manuais e mais controle'],
  ['AI', 'IA aplicada', 'Inteligencia artificial com uso real'],
  ['API', 'Integração', 'Dados e sistemas trabalhando juntos'],
];

function App() {
  const [contactStatus, setContactStatus] = useState('idle');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome = formData.get('nome')?.toString().trim();
    const empresa = formData.get('empresa')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const tipoProjeto = formData.get('tipo-de-projeto')?.toString().trim();
    const mensagem = formData.get('mensagem')?.toString().trim();

    setContactStatus('sending');
    setContactMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, empresa, email, tipoProjeto, mensagem }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || 'Não foi possível enviar agora.');
      }

      event.currentTarget.reset();
      setContactStatus('success');
      setContactMessage('Pedido enviado com sucesso. Retornaremos em breve.');
    } catch (error) {
      setContactStatus('error');
      setContactMessage(error.message || 'Não foi possível enviar agora. Tente novamente em alguns minutos.');
    }
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="site-header">
        <div className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="INFoBR Solutio">
            <img src={logoSymbol} alt="" />
            <span>INFoBR Solutio</span>
          </a>
          <nav className="nav-links">
            <a href="#dores">Problemas</a>
            <a href="#servicos">Soluções</a>
            <a href="#projetos">Exemplos</a>
            <a href="#metodo">Como funciona</a>
            <a href="#contato" className="nav-cta">Pedir diagnóstico</a>
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
                  <span>Software e IA</span>
                  para você
                  <strong>operar melhor.</strong>
                </h1>
                <p className="lead">
                  Criamos sistemas, integrações, automações e projetos técnicos para reduzir trabalho
                  manual, conectar processos e transformar problemas reais em tecnologia funcionando.
                </p>
                <div className="hero-actions">
                  <a className="button primary" href="#contato">Pedir diagnóstico</a>
                  <a className="button secondary" href="#servicos">Ver soluções</a>
                </div>
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

              <div className="poster-brand" aria-label="Marca INFoBR Solutio">
                <img src={logoSymbol} alt="" />
                <strong>INF<span>o</span>BR</strong>
                <b>SOLUTIO</b>
                <em>Complex made simple.</em>
                <div className="hero-summary">
                  <strong>Da ideia ao sistema em operação</strong>
                  <p>Diagnóstico, desenvolvimento, integração, testes, entrega e evolução.</p>
                </div>
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

          </div>
        </section>

        <section className="pain-section" id="dores">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">O que destrava negócio</p>
              <h2>Se algum destes problemas aparece na sua empresa, tecnologia pode virar dinheiro.</h2>
              <p>
                A INFoBR entra onde a operação perde tempo, dados, controle ou oportunidade. Primeiro entendemos a dor;
                depois criamos a solução proporcional para gerar ganho real.
              </p>
            </div>
            <div className="pain-grid">
              {painCards.map((card) => (
                <article className="pain-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="servicos">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Escolha o que você quer resolver</p>
              <h2>O caminho fica mais claro quando você reconhece o problema.</h2>
              <p>
                Em vez de começar pela tecnologia, começamos pelo que está travando sua rotina. Assim fica mais fácil
                identificar onde a INFoBR pode entrar para gerar resultado.
              </p>
            </div>
            <div className="services-grid">
              {solutionCards.map((card) => (
                <article className="card solution-card" key={card.title} tabIndex="0">
                  <div className="solution-front">
                    <div className={`solution-visual ${card.icon}`} aria-hidden="true">
                      {(() => {
                        const Icon = solutionIcons[card.icon];
                        return <Icon size={40} strokeWidth={1.8} />;
                      })()}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.micro}</p>
                  </div>
                  <div className="solution-details">
                    <p>{card.text}</p>
                    <strong>{card.result}</strong>
                    <a href="#contato">Avaliar meu caso</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Exemplos práticos</p>
              <h2>O cliente precisa visualizar o que pode contratar.</h2>
              <p>
                Mesmo quando o projeto é sob medida, alguns cenários aparecem com frequência. Estes exemplos ajudam a
                identificar onde a INFoBR pode entrar rapidamente.
              </p>
            </div>
            <div className="usecase-grid">
              {useCases.map((item) => (
                <div className="usecase-card" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section" id="metodo">
          <div className="container">
            <div className="section-head light">
              <p className="section-kicker">Como funciona</p>
              <h2>Um caminho simples para sair da conversa e chegar na solução funcionando.</h2>
              <p>
                Empresas compram melhor quando entendem o processo. Por isso, o trabalho é organizado para reduzir
                incerteza, controlar escopo e entregar valor de forma clara.
              </p>
            </div>
            <div className="process-grid">
              {workSteps.map(([number, title, text]) => (
                <article className="step" key={title}>
                  <div className="step-top">
                    <span>{number}</span>
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
              <p className="section-kicker">Por que confiar</p>
              <h2>A INFoBR combina visão técnica com necessidade de negócio.</h2>
              <p>
                O foco é entender o que precisa mudar na operação e construir tecnologia que faça sentido para o
                momento da empresa, com base para crescer depois.
              </p>
              <a className="button primary inline-cta" href="#contato">Quero avaliar meu projeto</a>
            </div>
            <ul className="check-list">
              {trustSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="container split">
            <div className="logo-panel">
              <img src={logoSymbol} alt="" />
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
                A fase INFoBR Solutio preserva a história da marca e reposiciona a empresa para uma atuação mais
                madura, empresarial e estratégica: entender necessidades reais, projetar caminhos práticos e entregar
                soluções funcionais.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-wrap">
            <p className="section-kicker">Próximo passo</p>
            <h2>Tem um processo travando sua empresa?</h2>
            <p>
              Conte o que está acontecendo. A INFoBR avalia o problema e indica um caminho possível para transformar
              isso em sistema, automação, integração, IA ou produto técnico.
            </p>
            <a className="button primary" href="#contato">Pedir diagnóstico do projeto</a>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact-wrap">
            <div className="contact-copy">
              <p className="section-kicker">Contato</p>
              <h2>Fale sobre o que você quer resolver.</h2>
              <p>
                Quanto mais claro for o problema, mais rápido conseguimos indicar o melhor caminho: sistema, automação,
                integração, IA, hardware ou uma combinação entre eles.
              </p>
              <div className="contact-list">
                <a className="contact-link" href="mailto:atendimento@infobrsolutio.com.br">
                  <span>E-mail</span>
                  atendimento@infobrsolutio.com.br
                </a>
                <a className="contact-link" href="https://www.instagram.com/infobrsolutio" target="_blank" rel="noreferrer">
                  <span>Instagram</span>
                  @infobrsolutio
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
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
                <input name="tipo-de-projeto" type="text" placeholder="Ex: sistema, automação, IA, integração..." />
              </label>
              <label className="full">
                Qual problema você quer resolver?
                <textarea name="mensagem" rows="5" />
              </label>
              <button className="button primary full" type="submit" disabled={contactStatus === 'sending'}>
                {contactStatus === 'sending' ? 'Enviando...' : 'Enviar pedido de diagnóstico'}
              </button>
              {contactMessage ? (
                <p className={`form-status full ${contactStatus === 'error' ? 'error' : 'success'}`}>
                  {contactMessage}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-logo">
            <img src={logoSymbol} alt="" />
            <span>INFoBR Solutio</span>
          </div>
          <span>2026 - Complex made simple.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
