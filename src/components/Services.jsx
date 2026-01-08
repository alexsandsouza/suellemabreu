import './Services.css';

export default function Services() {
    const solutions = [
        {
            id: "01.",
            title: "Recrutamento e Seleção",
            desc: "Diagnóstico profundo + busca ativa + cultura organizacional = candidatos alinhados de verdade. Aqui, não é só contratar, é construir time."
        },
        {
            id: "02.",
            title: "Seleção por Competências & Perfil Comportamental",
            desc: "Avaliamos além do CV: perfil comportamental, fit cultural, soft skills e técnica. Ferramentas de avaliação que revelam o verdadeiro potencial dos profissionais, ajudando a tomar decisões embasadas e estratégicas."
        },
        {
            id: "03.",
            title: "Treinamentos & Desenvolvimento",
            desc: "Capacitação de líderes e equipes para aumentar engajamento e produtividade. Transformamos potencial em performance."
        },
        {
            id: "04.",
            title: "Consultoria de RH",
            desc: "Estruturação completa do setor de RH, desde a integração até a avaliação de desempenho, alinhado à estratégia do negócio."
        }
    ];

    return (
        <section id="services" className="solutions-section">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-line"></span>
                    <h2>Soluções</h2>
                </div>

                <p className="solutions-intro">
                    Todo processo é desenvolvido por profissionais formados na área da Psicologia com
                    Pós Graduação na área e RH e Gestão de Negócios.
                </p>

                <div className="solutions-grid">
                    {solutions.map((item) => (
                        <div key={item.id} className="solution-card">
                            <span className="card-number">{item.id}</span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
