import React from "react";

import { Project } from "components/project/Project";

import { projects } from "helpers/projectsList";

export const ProjectsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((item, index) => (
                        <Project item={item} key={index} />
                    ))}
                </ul>
            </div>
        </main>
    );
};
