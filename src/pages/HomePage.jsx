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
