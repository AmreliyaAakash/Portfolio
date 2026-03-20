import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import Navbar from './components/Navbar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'

const App = () => {
  return (
  <>
    <Navbar/>
    <Hero/>
    <ShowCaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <Experience/>
    <TechStack/>
  </>
  )
}

export default App