import React, { useEffect } from 'react';
import './LegalPages.css';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="legal-page">
            <Link to="/" className="legal-back-link">← Voltar para a Home</Link>
            <h1>Política de Cookies</h1>

            <p>
                Este site utiliza cookies para garantir que você tenha a melhor experiência de navegação.
                Ao continuar, você concorda com o uso de cookies de acordo com esta política.
            </p>

            <h2>1. O que são Cookies?</h2>
            <p>
                Cookies são pequenos arquivos de texto que um site, quando visitado, coloca no computador do usuário ou no seu dispositivo móvel, através do navegador de internet (browser).
                A colocação de cookies ajudará o site a reconhecer o seu dispositivo numa próxima visita.
            </p>

            <h2>2. Tipos de Cookies que utilizamos</h2>
            <ul>
                <li><strong>Cookies Essenciais:</strong> Necessários para permitir a movimentação no site e utilização dos seus serviços. Sem estes cookies, serviços solicitados não podem ser prestados.</li>
                <li><strong>Cookies de Desempenho e Análise:</strong> Coletam informações sobre como o site é utilizado (plataformas como Google Analytics), permitindo a melhoria do seu funcionamento.</li>
                <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site relembre as escolhas que você faz (como seu nome de usuário, idioma ou região).</li>
            </ul>

            <h2>3. Como gerenciar os Cookies</h2>
            <p>
                A qualquer momento você pode instruir seu navegador a recusar todos os cookies ou indicar quando um cookie está sendo enviado.
                No entanto, se você não aceitar cookies, pode não conseguir usar algumas partes de nosso serviço.
            </p>
        </section>
    );
}
