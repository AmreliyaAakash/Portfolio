import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Hero from './sections/Hero.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import Navbar from './components/NavBar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import RectLoader from './components/RectLoader.jsx'
import { loadCachedModel } from './utils/modelCache.js'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
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

    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 4000));
    const modelsToPreload = [
      "/models/optimized-room.glb",
      "/models/computer-optimized-transformed.glb",
      "/models/react_logo-transformed.glb",
      "/models/tailwindcss-logo.glb",
      "/models/node-transformed.glb",
      "/models/three.js-transformed.glb",
      "/models/git-svg-transformed.glb"
    ];

    const preloadPromise = Promise.all(
       modelsToPreload.map(url => loadCachedModel(url).catch((err) => console.warn(err)))
    );

    let isMounted = true;
    Promise.all([minLoadingTime, preloadPromise]).then(() => {
       if (isMounted) setIsLoading(false);
    });

    return () => {
      isMounted = false;
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (isLoading) {
    return <RectLoader />;
  }

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

      <Footer />
    </>
  )
}

export default App