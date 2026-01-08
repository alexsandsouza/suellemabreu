import './ExecutiveSearch.css';

export default function ExecutiveSearch() {
    return (
        <section className="executive-section" id="executive-search">
            <div className="container executive-grid">

                {/* Image Side with Shapes */}
                <div className="executive-image-wrapper">
                    <img src="/executive_photo.png" alt="Executive Search Professional" className="executive-img" />
                </div>

                {/* Content Side */}
                <div className="executive-content">
                    <h2 className="executive-title">Executive Search</h2>

                    <div className="executive-item">
                        <h3>• Executive Search Sob Medida</h3>
                        <p>
                            Para lideranças que inspiram, que fazem diferença. Confidencialidade,
                            rede exclusiva, seleção criteriosa.
                        </p>
                    </div>

                    <div className="executive-item">
                        <h3>• Avaliações & Insights</h3>
                        <p>
                            Relatórios claros sobre perfil, pontos fortes e de melhoria, cultura,
                            potencial de liderança. Decisão mais segura e alinhada com seus objetivos.
                        </p>
                    </div>

                    <a href="https://wa.me/5592981425690" target="_blank" rel="noopener noreferrer" className="btn btn-green">
                        Falar com um Especialista
                    </a>
                </div>
            </div>
        </section>
    );
}
