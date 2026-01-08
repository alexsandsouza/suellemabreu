import './Differentials.css';

export default function Differentials() {
    const differentials = [
        {
            title: "Experiência Comprovada",
            description: "Mais de 13 anos dedicados ao recrutamento e seleção, entregando resultados comprovados.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
            )
        },
        {
            title: "Metodologia 100% Digital",
            description: "O nosso processo é online, e atendemos todos os setores a nível nacional, independente da sua localização.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        },
        {
            title: "Personalização Real",
            description: "Soluções sob medida, entendendo profundamente suas necessidades e cultura.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
            )
        },
        {
            title: "Flexibilidade e Discrição",
            description: "Processos confidenciais, adaptação ao seu ritmo, sigilo profissional especialmente para cargos de liderança.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            )
        },
        {
            title: "Impacto mensurável",
            description: "Redução de turnover, aumento da satisfação dos times, melhora no engajamento, cada projeto pensado para gerar retorno real.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                </svg>
            )
        },
        {
            title: "Transparência e Parceria Contínua",
            description: "Comunicação clara e relatórios detalhados, construindo confiança.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="differentials-section" id="differentials">
            <div className="differentials-container">
                <div className="differentials-header">
                    <span className="differentials-eyebrow">Nossos Diferenciais</span>
                    <h2 className="differentials-title">
                        A Parceria Estratégica que Sua Empresa Merece para Atrair os Melhores Talentos
                    </h2>
                </div>

                <div className="differentials-grid">
                    {differentials.map((item, index) => (
                        <div key={index} className="differential-card">
                            <div className="differential-icon">
                                {item.icon}
                            </div>
                            <h3 className="differential-card-title">{item.title}</h3>
                            <p className="differential-card-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
