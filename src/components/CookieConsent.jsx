import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Delay showing to make it less aggressive
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <h3>Utilizamos Cookies</h3>
                <p>
                    Utilizamos cookies para oferecer melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar conteúdo.
                    Ao utilizar este site, você concorda com o uso de cookies. Leia nossa <Link to="/politica-de-cookies">Política de Cookies</Link> e <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
                </p>
                <div className="cookie-actions">
                    <button onClick={handleReject} className="btn-cookie btn-reject">Continuar sem aceitar</button>
                    <button onClick={handleAccept} className="btn-cookie btn-accept">Aceitar todos</button>
                </div>
            </div>
        </div>
    );
}
