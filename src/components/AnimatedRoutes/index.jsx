import { AnimatePresence } from 'framer-motion'
import Contacts from 'pages/Contacts'
import HomePage from 'pages/HomePage'
import ProjectPage from 'pages/ProjectPage'
import ProjectsPage from 'pages/ProjectsPage'
import { Routes, Route, useLocation } from 'react-router-dom'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
