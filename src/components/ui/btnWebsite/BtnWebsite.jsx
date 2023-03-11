import React from "react";
import "./style.css";

export const BtnWebsite = ({ link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="project__link"
        >
            Visit website
        </a>
    );
};
