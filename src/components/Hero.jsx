import './Hero.css';

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content-container">
                <h4 className="hero-eyebrow">Acreditamos que as empresas</h4>
                <h1 className="hero-title">
                    só crescem com as <br />
                    pessoas certas <br />
                    no lugar certo
                </h1>
                <p className="hero-description">
                    Consultoria estratégica de RH e Gestão de Pessoas para negócios que buscam alta performance.
                </p>
                <div className="hero-buttons">
                    <a href="#about" className="btn btn-primary">Sobre Nós</a>
                    <a href="#contact" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Fale Conosco</a>
                </div>
            </div>
        </section>
    );
}
