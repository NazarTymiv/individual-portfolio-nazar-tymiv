import React from "react";
import { Header } from "components/header/Header";

export const HomePage = () => {
    return (
        <>
            <Header />

            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-1">About me</h2>
                            <p>
                                Hello, I'm Nazar, born on August 31, 2005. I
                                began coding at age 9, starting with JavaScript.
                                I found tutorials on YouTube, creating small
                                projects using Windows Notepad. Despite the
                                simplicity, it laid the foundation for my coding
                                journey.
                                <br />
                                <br />
                                Later, I joined IT classes in my school,
                                exploring Scratch, a kid-friendly programming
                                language. Self-learning Python, HTML & CSS, and
                                JavaScript a bit later React and started learn
                                backend as well including node.js, MongoDB etc.
                                followed, with Google and YouTube as my guides.
                                A course on advanced HTML & CSS polished my
                                skills, enhancing not only my technical
                                abilities but also my communication and teamwork
                                skills. Now, I bring valuable experience to
                                collaborative projects, adept at problem-solving
                                both individually and within a team.
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-1">My Tech Stack</h2>
                            <h2 className="title-2">Frontend</h2>
                            <p>
                                JavaScript, TypeScript, ReactJS, Redux, HTML,
                                CSS, NPM, BootStrap, MaterialUI, Yarn,
                                ReactNative, GulpJS
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, expressJS</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Additional</h2>
                            <p>
                                Adobe Photoshop, Adobe After Effects, Adobe
                                Premiere Pro, Figma
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};
