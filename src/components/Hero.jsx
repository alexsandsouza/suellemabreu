export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <span className="badge">TURMAS ABERTAS</span>
                <h1 className="hero-title">
                    Gestão de Pessoas de <br />
                    <span className="highlight">Alta Performance</span>
                </h1>
                <p className="hero-subtitle">
                    Transforme o potencial da sua empresa com o <strong>Método SW Abreu</strong>.
                    Una a precisão da Análise DISC com estratégias humanizadas para construir times que geram lucro e harmonia.
                </p>
                <div className="hero-actions">
                    <button className="cta-button primary-btn">Quero uma Consultoria</button>
                    <button className="secondary-btn">Conheça o Método</button>
                </div>
                <div className="trust-indicators">
                    <p>+ de 20 Empresas Atendidas</p>
                </div>
            </div>
            <div className="hero-visual">
                {/* Placeholder for Client Photo inspired by reference site */}
                <div className="image-placeholder-container">
                    <div className="gradient-sphere"></div>
                    <div className="glass-card absolute-card">
                        <span>⭐ Especialista DISC</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
