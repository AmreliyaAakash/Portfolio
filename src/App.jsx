import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Hero from './sections/Hero.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import Navbar from './components/Navbar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      // If the URL has #projects, switch to the separate projects page
      if (window.location.hash === '#projects') {
        setCurrentPage('projects');
        window.scrollTo(0, 0);
      } else {
        // Otherwise, stay on the home page
        setCurrentPage('home');
      }
    };

    // Listen for hash changes from clicking Navbar links
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <ShowCaseSection />
          <LogoSection />
          <FeatureCards />
          <Experience />
          <TechStack />
          <Contact />
        </>
      ) : (
        <ProjectsPage />
      )}
      
      <Footer/>
    </>
  )
}

export default App