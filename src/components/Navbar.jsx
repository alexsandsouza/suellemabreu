import './Navbar.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo">
                    SUELLEN <span className="text-gold">ABREU</span>
                </a>

                <ul className="nav-menu">
                    <li><a href="#about">Quem Somos</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#process">Nosso Processo</a></li>
                    {/* Blog removed as requested to clone structure but adapt content focus */}
                    <li><a href="#contact">Contatos</a></li>
                    <li><a href="#contact" className="nav-cta-btn">Solicitar Orçamento</a></li>
                </ul>
            </div>
        </nav>
    );
}
