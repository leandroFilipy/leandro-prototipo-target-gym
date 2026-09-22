import { ArrowRight, ArrowUpRight, Check, Plus } from 'lucide-react';
import { MobileMenu } from '../components/mobile-menu';
import { FigAgachamento, FigCorrida, FigHalter, FigKettlebell, TargetMark } from '../components/pictograms';
import { IconArmario, IconBanco, IconChuveiro, IconEspelho } from '../components/vestiario-icons';
import { InstagramIcon, WhatsAppIcon } from '../components/social-icons';

// Trocar pelos contatos reais da academia.
const WHATSAPP = 'https://wa.me/5500000000000';
const INSTAGRAM = 'https://instagram.com/targetgym';
const INSTAGRAM_USER = '@targetgym';

const modalidades = [
  { Fig: FigAgachamento, nome: 'Musculação', texto: 'Treino de força com ficha montada para o seu objetivo e progressão acompanhada de perto.' },
  { Fig: FigKettlebell, nome: 'Funcional', texto: 'Potência, mobilidade e condicionamento em circuitos curtos e intensos.' },
  { Fig: FigCorrida, nome: 'Cardio', texto: 'Esteiras, bikes e treinos intervalados para queimar gordura e ganhar fôlego.' },
  { Fig: FigHalter, nome: 'Aulas coletivas', texto: 'Turmas com horário marcado, professor na frente e energia de grupo.' },
];

// Equipe de exemplo — trocar pelos professores reais.
const equipe = [
  { nome: 'Nome do professor', area: 'Musculação e hipertrofia', horario: 'Manhã e tarde', Fig: FigAgachamento },
  { nome: 'Nome da professora', area: 'Funcional e condicionamento', horario: 'Manhã e noite', Fig: FigKettlebell },
  { nome: 'Nome do professor', area: 'Avaliação física', horario: 'Tarde', Fig: FigCorrida },
];

const vestiario = [
  { Icon: IconChuveiro, titulo: 'Chuveiros quentes', texto: 'Cabines individuais com água quente o dia todo — dá para treinar antes do trabalho.' },
  { Icon: IconArmario, titulo: 'Armários com chave', texto: 'Espaço para mochila, notebook e roupa de treino enquanto você está na área.' },
  { Icon: IconBanco, titulo: 'Área de troca', texto: 'Bancos e espaço para se trocar sem aperto, separado da circulação.' },
  { Icon: IconEspelho, titulo: 'Bancada e espelhos', texto: 'Pia, espelho e tomadas para você sair pronto da academia.' },
];

const estrutura = [
  'Pesos livres, racks e plataforma',
  'Máquinas por grupo muscular',
  'Sala exclusiva de aulas coletivas',
  'Área de cardio com esteiras e bikes',
  'Espaço aberto para treino funcional',
  'Bebedouros e ar-condicionado',
];

// Valores de exemplo — trocar pelos preços reais.
const planos = [
  { nome: 'Mira', preco: '89,90', desc: 'Musculação no seu tempo', itens: ['Musculação', 'Ficha de treino', 'Vestiário completo'] },
  { nome: 'Alvo', preco: '139,90', desc: 'Acesso livre a tudo', itens: ['Tudo do Mira', 'Aulas coletivas', 'Funcional e cardio', 'Reavaliação a cada 3 meses'], destaque: true },
  { nome: 'Preciso', preco: '199,90', desc: 'Acompanhamento de perto', itens: ['Tudo do Alvo', 'Treino individualizado', 'Avaliação física completa'] },
];

const horarios = [
  ['Segunda a sexta', '05h30 às 23h00'],
  ['Sábado', '08h00 às 16h00'],
  ['Domingo e feriados', '08h00 às 12h00'],
];

const faq = [
  ['Preciso ter experiência para começar?', 'Não. Todo aluno novo passa por uma avaliação e recebe uma ficha montada para o seu nível, com professor acompanhando a execução.'],
  ['Tem vestiário com chuveiro?', 'Tem. São cabines individuais com água quente, armários com chave, bancada com espelho e área de troca — dá para treinar antes ou depois do trabalho.'],
  ['Como funciona a aula experimental?', 'Você fala com a equipe no WhatsApp, escolhe um horário e treina com a gente para conhecer a estrutura antes de fechar qualquer plano.'],
  ['Quanto custam os planos?', 'O Mira sai por R$ 89,90/mês, o Alvo por R$ 139,90/mês e o Preciso por R$ 199,90/mês. A equipe apresenta as condições atuais no atendimento.'],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="shell nav-inner">
          <a className="logo" href="#inicio" aria-label="Target Gym — início">
            <TargetMark className="logo-mark" />
            <span>TARGET<b>GYM</b></span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#modalidades">Modalidades</a>
            <a href="#equipe">Equipe</a>
            <a href="#estrutura">Estrutura</a>
            <a href="#planos">Planos</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="btn btn-red btn-sm nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Aula experimental</a>
          <MobileMenu whatsapp={WHATSAPP} />
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Academia · Musculação, funcional e aulas coletivas</p>
            <h1>Mire.<br />Treine.<br /><span>Acerte.</span></h1>
            <p className="lead">Na Target Gym todo treino tem alvo: ficha montada para o seu objetivo, professor acompanhando e estrutura para você não parar no meio do caminho.</p>
            <div className="hero-actions">
              <a className="btn btn-red" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar aula experimental <ArrowRight /></a>
              <a className="btn btn-line" href="#planos">Ver planos</a>
            </div>
          </div>
          <div className="hero-fig" aria-hidden="true">
            <div className="rings"><span /><span /><span /></div>
            <FigAgachamento className="hero-silhueta" />
          </div>
        </div>
        <div className="faixa">
          <div className="shell faixa-inner">
            <span>Treino com alvo</span><i /><span>Resultado com acompanhamento</span><i /><span>Vestiário completo</span>
          </div>
        </div>
      </section>

      <section className="section shell" id="modalidades">
        <div className="head">
          <p className="eyebrow">Modalidades</p>
          <h2>Escolha seu <span>alvo</span></h2>
        </div>
        <div className="mod-grid">
          {modalidades.map(({ Fig, nome, texto }) => (
            <article className="mod" key={nome}>
              <Fig className="mod-fig" />
              <h3>{nome}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="equipe">
        <div className="head head-split">
          <div>
            <p className="eyebrow">Equipe</p>
            <h2>Quem treina <span>com você</span></h2>
          </div>
          <p className="head-text">Professores na área de treino o tempo todo, corrigindo execução e ajustando carga — não só montando ficha no balcão.</p>
        </div>
        <div className="equipe-grid">
          {equipe.map(({ nome, area, horario, Fig }, i) => (
            <article className="pro" key={i}>
              <div className="pro-fig"><Fig className="pro-silhueta" /></div>
              <h3>{nome}</h3>
              <p className="pro-area">{area}</p>
              <p className="pro-horario">Atende: {horario}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vestiario" id="estrutura">
        <div className="shell">
          <div className="head">
            <p className="eyebrow">Estrutura</p>
            <h2>Vestiário <span>de verdade</span></h2>
            <p className="head-text">Chuveiro quente, armário com chave e espaço para se trocar. A academia funciona para quem treina antes do trabalho, no almoço ou depois do expediente.</p>
          </div>
          <div className="vest-grid">
            {vestiario.map(({ Icon, titulo, texto }) => (
              <article className="vest" key={titulo}>
                <Icon className="vest-icon" />
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </article>
            ))}
          </div>
          <div className="estrutura-lista">
            <h3>E na área de treino</h3>
            <ul>{estrutura.map((e) => <li key={e}><Check />{e}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section shell" id="planos">
        <div className="head head-split">
          <div>
            <p className="eyebrow">Planos</p>
            <h2>Planos <span>mensais</span></h2>
          </div>
          <p className="head-text">Sem pegadinha: você conhece a academia na aula experimental e escolhe depois.</p>
        </div>
        <div className="planos-grid">
          {planos.map((p) => (
            <article className={`plano${p.destaque ? ' plano-destaque' : ''}`} key={p.nome}>
              {p.destaque && <span className="tag">Mais completo</span>}
              <p className="plano-kicker">Plano</p>
              <h3>{p.nome}</h3>
              <p className="plano-desc">{p.desc}</p>
              <p className="preco"><em>R$</em>{p.preco}<i>/mês</i></p>
              <ul>{p.itens.map((i) => <li key={i}><Check />{i}</li>)}</ul>
              <a className={`btn ${p.destaque ? 'btn-red' : 'btn-line'}`} href={WHATSAPP} target="_blank" rel="noreferrer">Quero este plano</a>
            </article>
          ))}
        </div>
      </section>

      <section className="horarios">
        <div className="shell horarios-inner">
          <h2>Horário de <span>funcionamento</span></h2>
          <dl>
            {horarios.map(([dia, hora]) => (
              <div key={dia}><dt>{dia}</dt><dd>{hora}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="cta">
        <div className="shell cta-inner">
          <TargetMark className="cta-mark" />
          <div>
            <h2>Seu objetivo já tem <span>endereço.</span></h2>
            <p>Fale com a equipe, tire suas dúvidas e marque sua aula experimental.</p>
          </div>
          <a className="btn btn-red btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon className="btn-icon" /> Falar no WhatsApp</a>
        </div>
      </section>

      <section className="section shell" id="duvidas">
        <div className="head"><p className="eyebrow">Dúvidas</p><h2>Perguntas <span>frequentes</span></h2></div>
        <div className="faq">
          {faq.map(([q, a]) => (
            <details key={q}>
              <summary>{q}<Plus /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="redes shell">
        <div>
          <p className="eyebrow">Redes sociais</p>
          <h2>Acompanhe a <span>Target</span></h2>
          <p className="head-text">Treinos, bastidores, novidades da grade de aulas e dicas dos professores.</p>
        </div>
        <div className="redes-links">
          <a className="rede" href={INSTAGRAM} target="_blank" rel="noreferrer">
            <InstagramIcon className="rede-icon" />
            <span><strong>Instagram</strong><small>{INSTAGRAM_USER}</small></span>
            <ArrowUpRight className="rede-seta" />
          </a>
          <a className="rede" href={WHATSAPP} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="rede-icon" />
            <span><strong>WhatsApp</strong><small>Atendimento e agendamento</small></span>
            <ArrowUpRight className="rede-seta" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#inicio"><TargetMark className="logo-mark" /><span>TARGET<b>GYM</b></span></a>
            <p>Mire. Treine. Acerte.</p>
          </div>
          <div>
            <h4>Navegação</h4>
            <a href="#modalidades">Modalidades</a><a href="#equipe">Equipe</a><a href="#estrutura">Estrutura</a><a href="#planos">Planos</a><a href="#duvidas">Dúvidas</a>
          </div>
          <div>
            <h4>Atendimento</h4>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram {INSTAGRAM_USER}</a>
            <p>Endereço e horários direto com a equipe</p>
          </div>
        </div>
        <div className="shell footer-line"><span>© 2026 Target Gym</span><a href="#inicio">Voltar ao topo</a></div>
      </footer>
    </main>
  );
}
