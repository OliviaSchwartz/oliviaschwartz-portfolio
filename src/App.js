import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
