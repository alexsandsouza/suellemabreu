import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Column 1: Logo, Description, Socials */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            SUELLEN <span className="text-gold">ABREU</span>
                        </div>
                        <p className="footer-desc">
                            Consultoria especializada em encontrar o talento certo para a sua empresa.
                            Conectando pessoas e negócios com propósito e estratégia.
                        </p>
                        <div className="footer-socials">
                            <a href="https://wa.me/5592982513236" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/suellen-abreu-47a9505a/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col links-col">
                        <h4>Links Rápidos</h4>
                        <ul className="footer-links">
                            <li><a href="/#home">Home</a></li>
                            <li><a href="/#about">Quem Somos</a></li>
                            <li><a href="/#services">Serviços</a></li>
                            <li><a href="/#differentials">Método</a></li>
                            <li><a href="/#contact">Contatos</a></li>
                            <li className="separator"></li>
                            <li><Link to="/politica-de-privacidade">Privacidade</Link></li>
                            <li><Link to="/politica-de-cookies">Cookies</Link></li>
                            <li><Link to="/termos-de-uso">Termos de Uso</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="footer-col contact-col">
                        <h4>Contato</h4>
                        <address>
                            <p>Av. João Valério, 753 Quadra 51, Conj Vieiralves Coworking - Manaus / Amazonas</p>
                            <p><a href="mailto:contato@suellenabreu.com.br">contato@suellenabreu.com.br</a></p>
                            <p><a href="tel:+5592982513236">(92) 98251-3236</a></p>
                        </address>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Suellen Abreu - Consultoria de RH. Todos os direitos reservados.</p>
                    <div className="dev-credit-simple">
                        <span>Desenvolvido por: </span>
                        <a href="https://wa.me/5592981425690" target="_blank" rel="noopener noreferrer">
                            Alexsander Farias
                        </a>
                        <span> - Dev Full Stack</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
