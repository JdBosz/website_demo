import React, { useState, useEffect } from "react";
import "./about.css"; // Voor de animatie-CSS

const AboutBox = () => {
    const [stats, setStats] = useState({
        projects: 0,
        coffee: 0,
        tools: 0,
        codeLines: 0,
    });

    const [animate, setAnimate] = useState(false); // Voor de animatieklasse

    useEffect(() => {
        const generateRandomStats = () => {
            setAnimate(true); // Start animatie
            setStats({
                projects: Math.floor(Math.random() * 30 + 50), // Random tussen 50 en 350
                coffee: Math.floor(Math.random() * 1000 + 100), // Random tussen 100 en 1100
                tools: Math.floor(Math.random() * 50 + 10), // Random tussen 10 en 60
                codeLines: Math.floor(Math.random() * 10000 + 5000), // Random tussen 5000 en 15000
            });

            setTimeout(() => setAnimate(false), 500); // Stop animatie na 500ms
        };

        generateRandomStats();

        const interval = setInterval(generateRandomStats, 5000); // Verander elke 5 seconden
        return () => clearInterval(interval); // Opruimen bij unmount
    }, []);

    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className={`about__title ${animate ? "animate" : ""}`}>{stats.projects}</h3>
                    <span className="about__subtitle">Projecten afgerond</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className={`about__title ${animate ? "animate" : ""}`}>{stats.coffee}</h3>
                    <span className="about__subtitle">Koppen koffie</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-wrench"></i>
                <div>
                    <h3 className={`about__title ${animate ? "animate" : ""}`}>{stats.tools}</h3>
                    <span className="about__subtitle">Geleerde nieuwe tools</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-screen-desktop"></i>
                <div>
                    <h3 className={`about__title ${animate ? "animate" : ""}`}>{stats.codeLines}</h3>
                    <span className="about__subtitle">Regels code geschreven</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;
