import { CheckCircle, Users, TrendingUp } from 'lucide-react'; // Assuming we'll add lucide-react later or replace with SVGs

export default function Services() {
    const services = [
        {
            title: "Consultoria Corporativa",
            description: "Diagnóstico completo do seu RH para reduzir turnover e aumentar produtividade.",
            icon: "🏢"
        },
        {
            title: "Análise Comportamental DISC",
            description: "Mapeamento de perfis para colocar a pessoa certa no lugar certo.",
            icon: "📊"
        },
        {
            title: "Palestras & Treinamentos",
            description: "Capacitação de líderes e equipes para alta performance.",
            icon: "🎤"
        }
    ];

    return (
        <section id="services" className="section services-section">
            <div className="section-header text-center">
                <h2>Soluções Estratégicas</h2>
                <p className="section-subtitle">Como podemos elevar o nível da sua empresa hoje?</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href="#contact" className="text-link">Saiba mais →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
