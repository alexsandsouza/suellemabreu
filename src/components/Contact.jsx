export default function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Vamos conversar?</h2>
                    <p>
                        Entre em contato para agendar uma reunião ou solicitar uma proposta personalizada para sua empresa.
                    </p>
                    <div className="contact-methods">
                        <div className="method">
                            <span className="icon">📧</span>
                            <span>contato@suellenabreu.com.br</span>
                        </div>
                        <div className="method">
                            <span className="icon">💼</span>
                            <span>LinkedIn: /suellen-abreu</span>
                        </div>
                        <div className="method">
                            <span className="icon">📱</span>
                            <span>(XX) 9XXXX-XXXX</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" id="name" placeholder="Seu nome ou da sua empresa" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail Corporativo</label>
                        <input type="email" id="email" placeholder="nome@empresa.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Como posso ajudar?</label>
                        <textarea id="message" rows="4" placeholder="Descreva seu desafio atual..."></textarea>
                    </div>
                    <button type="submit" className="cta-button primary-btn full-width">Solicitar Proposta</button>
                </form>
            </div>
        </section>
    );
}
