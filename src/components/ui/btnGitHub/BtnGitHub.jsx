import React from "react";
import "./style.css";

import gitHub from "assets/img/icons/gitHub-black.svg";

export const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHub} alt="Git Hub" />
            GitHub repo
        </a>
    );
};
