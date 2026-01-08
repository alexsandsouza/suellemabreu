import './Recruitment.css';

export default function Recruitment() {
    return (
        <section className="recruitment-section">
            <div className="container recruitment-grid">
                <div className="recruitment-content">
                    <h2 className="section-title">Recrutamento e Seleção Estratégico</h2>

                    <div className="recruitment-item">
                        <h3>Recrutamento e Seleção</h3>
                        <p>
                            Diagnóstico profundo + busca ativa + cultura organizacional = candidatos alinhados de verdade.
                            Aqui, não é só contratar, é construir time.
                        </p>
                    </div>

                    <div className="recruitment-item">
                        <h3>Seleção por Competências & Perfil Comportamental</h3>
                        <p>
                            Avaliamos além do CV: perfil comportamental, fit cultural, soft skills e técnica.
                            Ferramentas de avaliação que revelam o verdadeiro potencial dos profissionais,
                            ajudando a tomar decisões embasadas e estratégicas.
                        </p>
                    </div>

                    <a href="#contact" className="btn btn-green">Falar com um Especialista</a>
                </div>

                <div className="recruitment-image">
                    {/* Using one of the public available photos */}
                    <img src="/varias.png" alt="Equipe Corporativa" />
                    <div className="shape-bg"></div>
                </div>
            </div>
        </section>
    );
}
