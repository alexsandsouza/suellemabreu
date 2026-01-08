export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="about-container">
                <div className="about-image">
                    {/* Placeholder for Profile Pic */}
                    <img src="/suellen-profile.png" alt="Suellen Abreu" className="profile-image" />
                </div>
                <div className="about-content">
                    <span className="badge">SOBRE A SUELLEN</span>
                    <h2>Muito mais que RH. Uma parceira estratégica.</h2>
                    <p className="highlight-text">COMPROMETIDA. ESTRATÉGICA. HUMANA.</p>
                    <p>
                        Minha trajetória não é apenas sobre preencher vagas, é sobre conectar propósitos.
                        Como especialista em Análise Comportamental DISC e Consultora de RH, descobri que
                        o sucesso de qualquer negócio começa nas pessoas.
                    </p>
                    <p>
                        Fundei a <strong>SW Abreu Consultoria</strong> com uma missão clara: levar para empresas
                        e profissionais as mesmas ferramentas usadas por grandes corporações para identificar
                        e desenvolver talentos.
                    </p>
                    <button className="secondary-btn" style={{ marginTop: '1.5rem' }}>Conheça o LinkedIn</button>
                </div>
            </div>
        </section>
    );
}
