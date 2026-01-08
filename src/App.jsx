import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder for other sections */}
        <section id="about" style={{ minHeight: '80vh', padding: '4rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '3rem', opacity: 0.1 }}>Sobre (Coming Soon)</h2>
        </section>
        <section id="services" style={{ minHeight: '80vh', padding: '4rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1e293b' }}>
          <h2 style={{ fontSize: '3rem', opacity: 0.1 }}>Serviços (Coming Soon)</h2>
        </section>
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p>© 2026 Suellen Abreu. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
