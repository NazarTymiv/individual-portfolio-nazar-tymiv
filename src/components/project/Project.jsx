import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Project = ({ item }) => {
    return (
        <li className="project">
            <Link to={`/project/${item.id}`}>
                <img
                    src={item.img}
                    alt="Project img"
                    className="project__img"
                />
                <h3 className="project__title">{item.title}</h3>
            </Link>
        </li>
    );
};
