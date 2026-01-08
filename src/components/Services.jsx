import './Services.css';

export default function Services() {
    const solutions = [
        {
            id: "01.",
            title: "Recrutamento & Seleção",
            desc: "Reunião de alinhamento de Perfil, divulgação estratégica e hunting para encontrar o talento ideal."
        },
        {
            id: "02.",
            title: "Análise DISC",
            desc: "Mapeamento comportamental profundo para alinhar soft skills com a cultura da sua empresa."
        },
        {
            id: "03.",
            title: "Treinamentos",
            desc: "Capacitação de líderes e equipes para aumentar engajamento e produtividade."
        },
        {
            id: "04.",
            title: "Consultoria de RH",
            desc: "Estruturação completa do setor de RH, desde a integração até a avaliação de desempenho."
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
