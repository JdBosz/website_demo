import React from "react";
import "./about.css";
import Image from "../../assets/avatar-1.svg";
import AboutBox from "./AboutBox";
import CV from "../../assets/CV.pdf";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Hallo! Ik ben Jan-Douwe, en mijn passie ligt bij automatisering, het ontwikkelen van scripts en het creëren van dashboards.</p>
                        <a href={CV} target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Bash scripting</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage bashscripting"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Automation</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage automation"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">React</h3>
                                <span className="skills__number">30%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage react"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About