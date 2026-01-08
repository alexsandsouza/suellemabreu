import './Process.css';

export default function Process() {
    const steps = [
        {
            phase: "DIAGNÓSTICO PROFUNDO E ALINHAMENTO ESTRATÉGICO",
            title: "Imersão & Diagnóstico Personalizado",
            description: "Nos aprofundamos na cultura, nos valores, nos objetivos de negócio para entender não só quem você procura, mas quem faria diferença no seu time.",
            alignment: "right",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 12l5-5m-5 5l5 5" /></svg>
            )
        },
        {
            phase: "Atração Inteligente e Triagem Criteriosa",
            title: "Mapeamento e Busca Exclusiva",
            description: "Combinamos técnicas modernas, networking ativo e avaliação sob medida. Buscamos talentos que talvez ainda nem estejam no mercado ativo.",
            alignment: "left",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            )
        },
        {
            phase: "Entrevistas especializadas e Avaliações Aprofundadas",
            title: "Avaliações de Alto Nível",
            description: "Testes técnicos, perfil comportamental, entrevistas profundas, não apenas para checar habilidades, mas identificar líderes, integradores, inovadores.",
            alignment: "right",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            )
        },
        {
            phase: "Apresentação dos Finalistas e Suporte na Decisão",
            title: "Apresentação Precisa & Acompanhamento Contínuo",
            description: "Fornecemos um shortlist refinado, com insights sobre cada candidato, e continuamos próximos mesmo após contratação para garantir a integração e impacto.",
            alignment: "left",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            )
        }
    ];

    return (
        <section className="process-section" id="process">
            <div className="process-header">
                <span className="process-eyebrow">Nosso Processo</span>
                <h2 className="process-title">
                    Transparência e Eficiência em Cada Jornada do Recrutamento e Seleção
                </h2>
            </div>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                {steps.map((step, index) => (
                    <div key={index} className={`timeline-item ${step.alignment}`}>
                        <div className="timeline-content">
                            <h4 className="step-phase">{step.phase}</h4>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>
                        </div>
                        <div className="timeline-marker">
                            {/* In the image, icons are on the line. We can put simple circles/icons here */}
                            <div className="marker-icon-wrapper">
                                {index + 1}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
