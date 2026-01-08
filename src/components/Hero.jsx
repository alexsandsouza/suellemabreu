import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
    const images = [
        '/hero-bg.png',
        '/foto1.png',
        '/foto2.png'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            {/* Background Slider */}
            <div className="hero-slider">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <span className="hero-category">
                    CONSULTORIA EM RH <span className="highlight-separator">|</span> SUELLEN ABREU
                </span>
                <h1 className="hero-title">
                    Talentos de Alta Performance <br />
                    para Sua Empresa
                </h1>
                <p className="hero-description">
                    Conectamos sua empresa a executivos, gestores e profissionais sênior altamente qualificados.
                    Processos confidenciais, avaliação profunda DISC e seleção criteriosa.
                </p>

                <div className="hero-actions">
                    <a href="#contact" className="btn btn-primary">Falar com um Especialista</a>
                    <a href="#about" className="btn btn-text">Saiba mais →</a>
                </div>

                {/* Features moved to separate component */}
            </div>
        </section>
    );
}
