import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Entre em contato para mais informações</h2>

                <div className="contact-content-wrapper">
                    {/* Left Column: Image & Socials */}
                    <div className="contact-visual">
                        <div className="contact-image-circle">
                            {/* Using one of the photos from public as requested */}
                            <img src="/foto3.jpeg" alt="Suellen Abreu Contato" className="contact-img" />
                        </div>

                        <div className="contact-socials">
                            <a href="#" className="social-icon whatsapp" aria-label="WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </a>
                            <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" className="social-icon instagram" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-form-card">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" placeholder="Digite seu nome completo aqui" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-mail de contato*</label>
                                <input type="email" id="email" placeholder="Digite seu e-mail aqui" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensagem</label>
                                <textarea id="message" rows="4" placeholder="Digite sua mensagem aqui"></textarea>
                            </div>

                            <button type="button" className="btn-submit">Enviar mensagem</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
