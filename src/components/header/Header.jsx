import React from "react";
import "./style.css";

import CV from "assets/MyCV.pdf";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Hi, my name is <em>Nazar</em>
                    </strong>
                    <br />a Software Engineer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href={CV} download="MyCV.pdf" className="btn">
                    Download CV
                </a>
            </div>
        </header>
    );
};
