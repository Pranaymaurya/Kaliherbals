import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSecction'
import Scroller from './Components/Scoller'
import AboutUs from './Components/AboutUs'
import CompanyInfo from './Components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      <HeroSection/>
      <Scroller/>
      <AboutUs/>
      <CompanyInfo/>
      </div>
    </>
  )
}

export default App
