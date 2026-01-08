import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container footer-grid">
                <div className="footer-col">
                    <h3>SUELLEN <span className="text-gold">ABREU</span></h3>
                    <p>Talentos de Alta Performance para Sua Empresa.</p>
                </div>

                <div className="footer-col">
                    <h4>Fale com um Especialista</h4>
                    <ul className="footer-links">
                        <li><a href="mailto:contato@suellenabreu.com.br">contato@suellenabreu.com.br</a></li>
                        {/* Specific address from request, assuming it's placeholdered or we use the São Paulo one as reference but adapted */}
                        <li>Rua Beira Rio, 57 – Vila Olímpia, São Paulo – SP (Ref)</li>
                        <li>Atendemos em todo o território brasileiro.</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© Todos os direitos reservados – Suellen Abreu RH</p>
                <p className="dev-credit">Desenvolvido por Alexandre Souza</p>
            </div>
        </footer>
    );
}
