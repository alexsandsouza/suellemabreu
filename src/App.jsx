import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Recruitment from './components/Recruitment'
import Services from './components/Services'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Recruitment />
        <Services />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  )
}

export default App
