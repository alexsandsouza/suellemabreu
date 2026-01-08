import React, { useEffect } from 'react';
import './LegalPages.css';
import { Link } from 'react-router-dom';

export default function TermsOfUse() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="legal-page">
            <Link to="/" className="legal-back-link">← Voltar para a Home</Link>
            <h1>Termos de Uso</h1>

            <p>
                Bem-vindo ao site da <strong>Suellen Abreu - Consultoria de RH</strong>. Ao acessar e usar este site, você concorda com os seguintes termos e condições.
            </p>

            <h2>1. Uso do Site</h2>
            <p>
                O conteúdo deste site é para sua informação geral e uso. Está sujeito a alterações sem aviso prévio.
                O uso de qualquer informação ou material neste site é inteiramente por sua conta e risco, pelo qual não seremos responsáveis.
            </p>

            <h2>2. Propriedade Intelectual</h2>
            <p>
                Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não se limita a, design, layout, aparência e gráficos.
                A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais.
            </p>

            <h2>3. Links para Outros Sites</h2>
            <p>
                Nosso site pode conter links para sites de terceiros (como LinkedIn, Instagram, WhatsApp). Esses links são fornecidos para sua conveniência.
                Eles não significam que endossamos o(s) site(s). Não temos responsabilidade pelo conteúdo dos sites vinculados.
            </p>

            <h2>4. Limitação de Responsabilidade</h2>
            <p>
                Em nenhuma circunstância a Suellen Abreu Consultoria será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou da incapacidade de usar este site.
            </p>

            <h2>5. Legislação Aplicável</h2>
            <p>
                O uso deste site e qualquer disputa decorrente desse uso estão sujeitos às leis da República Federativa do Brasil.
            </p>
        </section>
    );
}
