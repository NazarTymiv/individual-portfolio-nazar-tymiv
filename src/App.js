import "./assets/styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import { NavBar } from "components/navbar/Navbar";
import { Footer } from "components/footer/Footer";
import { HomePage } from "pages/HomePage";
import { ProjectsPage } from "pages/ProjectsPage";
import { Contacts } from "pages/Contacts";
import { ProjectPage } from "pages/ProjectPage";

import ScrollToTop from "utils/scrollToTop";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
