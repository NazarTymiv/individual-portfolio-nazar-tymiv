import React, { useEffect, useRef } from "react";
import { useLocalStorage } from "utils/useLocalStorage";
import "./style.css";

import sun from "assets/img/icons/sun.svg";
import moon from "assets/img/icons/moon.svg";

export const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            btnRef.current.classList.add("dark-mode-btn--active");
        } else {
            document.body.classList.remove("dark");
            btnRef.current.classList.remove("dark-mode-btn--active");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
};
