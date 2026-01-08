import { useEffect, useState, useRef } from 'react';
import './Stats.css';

export default function Stats() {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <span className="stat-number">+13</span>
                    <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat-separator"></div>
                <div className="stat-item">
                    <span className="stat-number">+500</span>
                    <span className="stat-label">Vagas Fechadas</span>
                </div>
                <div className="stat-separator"></div>
                <div className="stat-item">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Taxa de Retenção</span>
                </div>
                <div className="stat-separator"></div>
                <div className="stat-item">
                    <span className="stat-number">Nacional</span>
                    <span className="stat-label">Atendimento Remoto</span>
                </div>
            </div>
        </section>
    );
}
