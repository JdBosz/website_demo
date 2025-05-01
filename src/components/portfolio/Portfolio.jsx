import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curlElem) => {
            return curlElem.category === categoryItem;
        });
        setItems(updatedItems);
    };

    const openModal = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentVideo(null);
        setIsModalOpen(false);
    };

    return (
        <section className="work container section" id="work">
            <h2 className="section__title">Recent works</h2>
            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work__item" onClick={() => filterItem("Automation")}>Automation</span>
                <span className="work__item" onClick={() => filterItem("Games")}>Games</span>
                <span className="work__item" onClick={() => filterItem("Creative")}>Creative</span>
                <span className="work__item" onClick={() => filterItem("Something else")}>Something else</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const { id, image, title, category, videoUrl } = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>
                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <button
                                className="work__button"
                                onClick={() => openModal(videoUrl)}
                            >
                                <i className="icon-link work__button-icon"></i>
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <iframe
                            src={currentVideo}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="YouTube Video"
                            className="modal-video"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
