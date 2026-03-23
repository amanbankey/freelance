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
import Products from './pages/Products'
 
function App() {
  const [count, setCount] = useState(0)

  // https://imgs.search.brave.com/gXL5erZctcjsf-sOkMPPy5cYsnzI-ASaDBOhb6WR_v0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMy/MzUxMzI2L3Bob3Rv/L3dvcmxkLW1hcC1j/cmVhdGl2ZS1hYnN0/cmFjdC1kZXNpZ24t/YmFja2dyb3VuZC1w/aG90by5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9X1dON1px/MnFvM20zYnhxUEVU/bzFCSWJrUXlGcHp6/RmMyNnJQS0FHenpB/Zz0

  return (
    <div>
 
        <Navbar />
       <Routes  > 
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />

      </Routes>

       <Footer />
    </div>
  )
}

export default App
