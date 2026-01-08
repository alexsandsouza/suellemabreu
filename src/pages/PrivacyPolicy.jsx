import React, { useEffect } from 'react';
import './LegalPages.css';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="legal-page">
            <Link to="/" className="legal-back-link">← Voltar para a Home</Link>
            <h1>Política de Privacidade</h1>
            <p>Última atualização: Janeiro de 2026</p>

            <p>
                A <strong>Suellen Abreu - Consultoria de RH</strong> valoriza a sua privacidade e está comprometida com a proteção dos seus dados pessoais.
                Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
            </p>

            <h2>1. Coleta de Dados</h2>
            <p>Coletamos dados pessoais estritamente necessários para a prestação de nossos serviços, como:</p>
            <ul>
                <li><strong>Identificação:</strong> Nome, e-mail, telefone (coletados via formulários de contato ou WhatsApp).</li>
                <li><strong>Dados Profissionais:</strong> Curriculuns, históricos profissionais e informações fornecidas em processos seletivos.</li>
                <li><strong>Navegação:</strong> Cookies e dados de uso do site (ver Política de Cookies).</li>
            </ul>

            <h2>2. Finalidade do Uso dos Dados</h2>
            <p>Utilizamos seus dados para:</p>
            <ul>
                <li>Realizar processos de recrutamento e seleção.</li>
                <li>Entrar em contato para agendamento de entrevistas ou devolutivas.</li>
                <li>Melhorar a experiência de navegação em nosso site.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2>3. Compartilhamento de Dados</h2>
            <p>
                Seus dados podem ser compartilhados com empresas clientes contratantes (no caso de candidatos) estritamente para fins de processo seletivo.
                Não vendemos ou comercializamos seus dados pessoais para terceiros.
            </p>

            <h2>4. Segurança dos Dados</h2>
            <p>
                Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas
                de destruição, perda, alteração, comunicação ou difusão.
            </p>

            <h2>5. Seus Direitos (Titular dos Dados)</h2>
            <p>Você tem direito a:</p>
            <ul>
                <li>Confirmar a existência de tratamento de dados.</li>
                <li>Acessar seus dados.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar a eliminação de dados (salvo obrigações legais de retenção).</li>
            </ul>
            <p>
                Para exercer seus direitos, entre em contato conosco através do e-mail ou WhatsApp oficial disponibilizado neste site.
            </p>
        </section>
    );
}
