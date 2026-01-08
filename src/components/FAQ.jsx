import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Como funciona o processo de Recrutamento e Seleção?",
            answer: "Nosso processo é consultivo e personalizado. Iniciamos com um diagnóstico profundo da vaga e da cultura da empresa, seguido por mapeamento de mercado, triagem criteriosa, entrevistas por competência e avaliação comportamental antes de apresentar os finalistas."
        },
        {
            question: "Quais tipos de vagas vocês trabalham?",
            answer: "Somos especialistas em posições estratégicas, táticas e especialistas. Atuamos com foco em cargos de Liderança (Gerência, Diretoria), Administrativos, Técnicos e Comerciais de alta performance."
        },
        {
            question: "O que é a Análise Comportamental DISC?",
            answer: "É uma metodologia que mapeia o perfil comportamental do profissional, identificando tendências de liderança, comunicação e tomada de decisão. Utilizamos para garantir que o candidato não só entregue resultados, mas se adapte à cultura da sua empresa."
        },
        {
            question: "Vocês atendem empresas de fora de Manaus?",
            answer: "Sim! Embora nossa sede seja em Manaus/AM, possuímos estrutura e metodologia 100% digital para atender clientes em todo o Brasil com a mesma qualidade e proximidade."
        },
        {
            question: "Qual o prazo médio para fechar uma vaga?",
            answer: "O prazo varia conforme a complexidade da posição, mas trabalhamos com agilidade. Em média, apresentamos o shortlist de candidatos qualificados entre 7 a 15 dias úteis após o alinhamento do perfil."
        }
    ];

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <span className="faq-badge">PERGUNTAS FREQUENTES</span>
                    <h2 className="faq-title">Tudo o que você precisa saber sobre a nossa Consultoria</h2>
                </div>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <span className="faq-number">{index + 1}.</span>
                                <h3>{item.question}</h3>
                                <span className="faq-toggle-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
