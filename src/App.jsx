import logoRaca from './assets/logo-raca.svg'

const categorias = [
  { titulo: 'Vestuário', descricao: 'Camisetas, bonés e muito mais' },
  { titulo: 'Acessórios', descricao: 'Copos, adesivos e utilitários' },
  { titulo: 'Off-Road', descricao: 'Acessórios para seu 4x4' },
  { titulo: 'Equipamentos', descricao: 'Itens essenciais para trilha e aventura' },
]

const produtos = [
  {
    nome: 'Camiseta Raca Off-Road',
    preco: 'R$ 79,90',
    descricao: 'Conforto e estilo para o dia a dia na trilha.',
    destaque: 'Mais vendido',
  },
  {
    nome: 'Boné Raca Off-Road',
    preco: 'R$ 69,90',
    descricao: 'Design exclusivo com logo da marca.',
    destaque: 'Lançamento',
  },
  {
    nome: 'Copo Térmico',
    preco: 'R$ 59,90',
    descricao: 'Mantém sua bebida na temperatura ideal.',
    destaque: 'Frete rápido',
  },
  {
    nome: 'Adesivo Raca Off-Road',
    preco: 'R$ 19,90',
    descricao: 'Personalize seu 4x4 com atitude.',
    destaque: 'Acessório',
  },
]

function App() {
  return (
    <div className="page-shell">
      <div className="site-topbar">FRETE GRÁTIS PARA TODO O BRASIL | ACIMA DE R$199,90</div>
      <header className="site-header">
        <div className="brand-nav">
          <div className="brand-logo">
            <img src={logoRaca} alt="Logo Raca Offroad" />
            <div>
              <strong>RAÇA</strong>
              <span>OFF-ROAD 4x4</span>
            </div>
          </div>
          <nav className="menu-nav">
            <a href="#inicio" className="active">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#categorias">Categorias</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
        <div className="menu-actions">
          <button type="button">Buscar</button>
          <button type="button">Minha conta</button>
          <button type="button" className="cart-btn">Carrinho (0)</button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">RAÇA OFF-ROAD 4x4</span>
            <h1>Onde o asfalto termina e a força bruta começa</h1>
            <p>Produtos de qualidade para quem vive e respira o espírito Off-Road. Loja oficial com itens preparados para trilhas, aventura e resistência.</p>
            <div className="hero-actions">
              <a href="#produtos" className="btn primary">Ver produtos</a>
              <a href="#categorias" className="btn outline">Ver categorias</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-badge">RAÇA FEITO PARA RESISTIR 4x4</div>
            <div className="hero-panel">
              <div className="hero-panel-title">Força bruta para sua trilha</div>
              <p>Equipamentos e acessórios com visual e potência que combinam com sua 4x4.</p>
            </div>
          </div>
        </section>

        <section className="category-strip" id="categorias">
          {categorias.map((item) => (
            <div className="category-card" key={item.titulo}>
              <div className="category-icon">→</div>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          ))}
        </section>

        <section className="products-section" id="produtos">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Produtos em destaque</span>
              <h2>Itens premium para quem nasceu para o off-road.</h2>
            </div>
            <a href="#" className="view-all">Ver todos</a>
          </div>
          <div className="product-grid">
            {produtos.map((produto) => (
              <article className="product-card" key={produto.nome}>
                <div className="product-card-header">
                  <span>{produto.destaque}</span>
                </div>
                <div className="product-preview" />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <div className="product-footer">
                  <strong>{produto.preco}</strong>
                  <button type="button">Comprar</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-row">
          <div>
            <strong>COMPRA 100% SEGURA</strong>
            <p>Seus dados protegidos.</p>
          </div>
          <div>
            <strong>FRETE RÁPIDO</strong>
            <p>Para todo o Brasil.</p>
          </div>
          <div>
            <strong>PRODUTOS DE QUALIDADE</strong>
            <p>Feitos para quem é Raça.</p>
          </div>
          <div>
            <strong>ATENDIMENTO</strong>
            <p>Suporte dedicado.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
