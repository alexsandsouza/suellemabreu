export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Suellen <span className="highlight">Abreu</span>
                </h1>
                <p className="hero-subtitle">
                    Especialista em transformar potencial em performance.
                    Consultoria estratégica e gestão para alavancar seus resultados.
                </p>
                <div className="hero-actions">
                    <button className="primary-btn">Agendar Consultoria</button>
                    <button className="secondary-btn">Conheça meu trabalho</button>
                </div>
            </div>
            <div className="hero-visual">
                {/* Placeholder for a nice image or abstract shape */}
                <div className="gradient-sphere"></div>
            </div>
        </section>
    );
}
