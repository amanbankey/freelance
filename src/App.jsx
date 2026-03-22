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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='bg-red-300 border border-2'> 
           aman
      </div>
      <Routes  > 
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>


    </div>
  )
}

export default App
