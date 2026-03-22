import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
      <Routes  > 
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

      </Routes>

       <Footer />
    </div>
  )
}

export default App
