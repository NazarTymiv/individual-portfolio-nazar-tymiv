import React from "react";

import { BtnGitHub } from "components/ui/btnGitHub/BtnGitHub";

import { useParams } from "react-router-dom";

import { projects } from "helpers/projectsList";
import { BtnWebsite } from "components/ui/btnWebsite/BtnWebsite";

export const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((item) => item.id === id);

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img
                        src={project.imgBig}
                        alt=""
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    <BtnGitHub link={project.gitHubLink} />

                    <BtnWebsite link={project.linkWebsite} />
                </div>
            </div>
        </main>
    );
};
