import './About.css';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container about-grid">
                <div className="about-image-wrapper">
                    {/* Using the uploaded profile image */}
                    <img src="/suellen-profile.png" alt="Suellen Abreu" className="about-img_main" />
                    <div className="about-experience-card">
                        <span className="exp-number">+10</span>
                        <span className="exp-text">Anos de <br />Experiência</span>
                    </div>
                </div>

                <div className="about-content">
                    <h4 className="section-eyebrow">QUEM SOMOS</h4>
                    <h2 className="section-title">Construindo Equipes de Sucesso</h2>

                    <p className="about-intro">
                        Desde 2011, atuamos redesenhando a forma como empresas constroem seus times.
                        O Recrutamento e Seleção é o início de tudo.
                    </p>

                    <p className="about-desc">
                        Somos uma consultoria especializada em <strong>Recrutamento e Seleção</strong> e <strong>Análise Comportamental DISC</strong>,
                        localizada em Manaus/AM com atendimento em todo o Brasil. Atuação pautada em proximidade, precisão e propósito.
                    </p>

                    <p className="about-desc">
                        Entendemos que cada organização tem uma identidade única. Por isso, criamos conexões autênticas
                        entre talentos e empresas.
                    </p>

                    <blockquote className="about-quote">
                        "Encontrar o talento certo é mais do que uma busca, é uma construção conjunta."
                    </blockquote>

                    <a href="#contact" className="btn btn-primary">Conheça nossos diferenciais</a>
                </div>
            </div>
        </section>
    );
}
