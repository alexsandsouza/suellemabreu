import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem' }}>
        <p>© 2026 Suellen Abreu Consultoria. Todos os direitos reservados.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '0.5rem' }}>Desenvolvido por Alexandre Souza</p>
      </footer>
    </div>
  )
}

export default App
