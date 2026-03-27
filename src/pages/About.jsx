import React from 'react'
import HeroSection from '../components/core/AboutPage/HeroSection'
import EveryDay from '../components/core/AboutPage/EveryDay'
import AboutSection from '../components/core/AboutPage/AboutSection'
import AboutDifference from '../components/core/AboutPage/AboutDifference'
import Leadership from '../components/core/AboutPage/Leadership'
import Legacy from '../components/core/AboutPage/Legacy'
import InvestorSection from '../components/core/AboutPage/InvestorSection'
import Ourteam from '../components/core/HomePage/Ourteam'

const About = () => {
  return (
    <div>
      <HeroSection/>
       <AboutSection />
       <EveryDay />
       <Legacy />
       <Leadership />
       <AboutDifference />
       {/* <InvestorSection /> */}
       {/* < Ourteam /> */}
    </div>
  )
}

export default About