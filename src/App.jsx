import './assets/styles/main.css'

import { BrowserRouter as Router } from 'react-router-dom'

// COMPONENTS
import { NavBar } from 'components/navbar/Navbar'
import { Footer } from 'components/footer/Footer'

import ScrollToTop from 'utils/scrollToTop'
import AnimatedRoutes from 'components/AnimatedRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />

        <AnimatedRoutes />

        <Footer />
      </Router>
    </div>
  )
}

export default App
