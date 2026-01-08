import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="hero-category">Consultoria de RH - Manaus / Amazonas | Suellen Abreu</span>
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

                <div className="hero-features">
                    <div className="feature-item">
                        <span className="check-icon">✔</span>
                        <p>Agilidade e eficiência no recrutamento</p>
                    </div>
                    <div className="feature-item">
                        <span className="check-icon">✔</span>
                        <p>Redução de custos com contratações erradas</p>
                    </div>
                    <div className="feature-item">
                        <span className="check-icon">✔</span>
                        <p>Acesso a talentos alinhados à cultura</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
