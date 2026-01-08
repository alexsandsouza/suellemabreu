export default function Navbar() {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="#" onClick={(e) => scrollToSection(e, '#home')}>SA</a>
                </div>
                <ul className="nav-links">
                    <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>Sobre</a></li>
                    <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Serviços</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contato</a></li>
                </ul>
                <button className="cta-button">Fale Comigo</button>
            </div>
        </nav>
    );
}
