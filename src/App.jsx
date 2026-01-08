import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Suellen Abreu</h2>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Suellen Abreu</h1>
          <p>Transformando ideias em realidade.</p>
          <div style={{ marginTop: '2rem' }}>
            <button style={{ marginRight: '1rem', background: '#fff', color: '#000' }}>Fale Comigo</button>
            <button>Ver Portfolio</button>
          </div>
        </section>

        <section id="about" className="section">
          <h2>Sobre</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            Olá! Sou Suellen Abreu. (Conteúdo em desenvolvimento...)
          </p>
        </section>

        <section id="services" className="section">
          <h2>Serviços</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '1rem' }}>
              <h3>Consultoria</h3>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Soluções estratégicas para o seu negócio.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '1rem' }}>
              <h3>Gestão</h3>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Otimização de processos e resultados.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} Suellen Abreu. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
