import logoRaca from './assets/logo-raca.svg'

const produtos = [
  {
    nome: 'Kit de Ferramentas 4 em 1',
    marca: 'Raca Offroad',
    descricao: 'Ideal para emergências em trilhas e ajustes rápidos.',
    preco: 'R$ 189,90',
    destaque: 'Mais pedido',
    cor: '#ff7a00',
  },
  {
    nome: 'Bota de Trekking',
    marca: 'Trail X',
    descricao: 'Proteção e conforto para longas jornadas off-road.',
    preco: 'R$ 249,90',
    destaque: 'Nova linha',
    cor: '#1f5f3d',
  },
  {
    nome: 'Capacete Enduro',
    marca: 'Storm',
    descricao: 'Visibilidade, proteção e ventilação para aventuras.',
    preco: 'R$ 399,90',
    destaque: 'Premium',
    cor: '#0e3d64',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Loja oficial • Raca Offroad</p>
          <h1>Peças e acessórios para quem leva a aventura a sério.</h1>
          <p className="subtitle">
            Coleção pensada para trilhas, resistência e estilo forte, com a mesma identidade visual da sua marca.
          </p>
          <div className="hero-actions">
            <a href="#produtos" className="btn primary">Ver produtos</a>
            <a href="#contato" className="btn secondary">Fale conosco</a>
          </div>
        </div>
        <div className="hero-card">
          <img src={logoRaca} alt="Logo Raca Offroad" />
          <h2>Força e identidade</h2>
          <p>Visual marcante, acabamento sólido e atendimento próximo.</p>
        </div>
      </header>

      <main>
        <section className="info-strip">
          <div>
            <strong>+500</strong>
            <span>clientes satisfeitos</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>resposta no WhatsApp</span>
          </div>
          <div>
            <strong>Frete</strong>
            <span>para todo o Brasil</span>
          </div>
        </section>

        <section id="produtos" className="products-section">
          <div className="section-heading">
            <p className="eyebrow">Produtos em destaque</p>
            <h2>Itens feitos para quem quer presença e performance.</h2>
          </div>
          <div className="product-grid">
            {produtos.map((produto) => (
              <article className="product-card" key={produto.nome}>
                <div className="product-badge" style={{ background: produto.cor }}>
                  {produto.destaque}
                </div>
                <div className="logo-pill">{produto.marca}</div>
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <div className="card-footer">
                  <span className="price">{produto.preco}</span>
                  <button type="button">Comprar</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div>
            <p className="eyebrow">Atendimento</p>
            <h2>Pronto para montar sua próxima aventura?</h2>
            <p>Fale com a nossa equipe e receba recomendações de produtos de acordo com o seu estilo off-road.</p>
          </div>
          <a href="https://wa.me/5511999999999" className="btn primary wide">
            Falar no WhatsApp
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
