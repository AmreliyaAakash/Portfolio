import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const proj4Ref = useRef(null);
  const proj5Ref = useRef(null);
  const proj6Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      rydeRef.current, 
      libraryRef.current, 
      ycDirectoryRef.current,
      proj4Ref.current,
      proj5Ref.current,
      proj6Ref.current
    ];

    cards.forEach((card, index) => {
      if (!card) return; // safeguard
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
      <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper group">
            <a href="https://aakash27.netlify.app/" target="_blank" rel="noopener noreferrer" className="block image-wrapper bg-gradient-to-br from-[#F5F8FF] to-[#D5E4FF] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]">
              <img src="/images/project1.png" alt="Admin Panel Interface" />
            </a>
            <div className="text-content">
              <h2>
                All-in-One Ecommerce Dashboard to Monitor Sales, Orders, and Performance
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with modern web technologies to deliver fast, responsive, and visually engaging business insights.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project group" ref={libraryRef}>
              <a href="https://github.com/AmreliyaAakash/Movie-Project" target="_blank" rel="noopener noreferrer" className="block image-wrapper bg-gradient-to-br from-[#FFF8F0] to-[#FFE0B2] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </a>
              <h2>The Movie Booking Platform</h2>
            </div>

            <div className="project group" ref={ycDirectoryRef}>
              <a href="https://amreliyaaakash.github.io/html-css-live-project/" target="_blank" rel="noopener noreferrer" className="block image-wrapper bg-gradient-to-br from-[#FFF5F7] to-[#FFC2CD] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]">
                <img src="/images/project3.png" alt="YC Directory App" className="rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.15)]" />
              </a>
              <h2>Modern Restaurant Booking App</h2>
            </div>
          </div>
        </div>

        {/* --- ROW 2 (Mirrored Layout) --- */}
        <div className="showcaselayout mt-20">
          <div className="project-list-wrapper overflow-hidden">
            <div className="project group" ref={proj4Ref}>
              <a href="https://aurumrestaurant.netlify.app/" target="_blank" rel="noopener noreferrer" className="block image-wrapper bg-gradient-to-br from-[#F0F4FF] to-[#D6E4FF] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ">
                <img
                  src="/images/project4.png"
                  alt="Placeholder Project 4"
                />
              </a>
              <h2>AURUM – Luxury Restaurant Website</h2>
            </div>

            {/* <div className="project group" ref={proj5Ref}>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block image-wrapper bg-gradient-to-br from-[#FDF5E6] to-[#FFE4C4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]">
                <img src="/images/project5.png" alt="Placeholder Project 5" className="rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.15)]" />
              </a>
              <h2>Placeholder Project 5</h2>
            </div> */}
          </div>

          {/* <div ref={proj6Ref} className="first-project-wrapper group">
            <a href="#" target="_blank" rel="noopener noreferrer" className="block image-wrapper bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]">
              <img src="/images/project6.png" alt="Placeholder Project 6 Interface" />
            </a>
            <div className="text-content">
              <h2>
                Placeholder Title for Project 6: A Comprehensive Dashboard
              </h2>
              <p className="text-white-50 md:text-xl">
                This is a placeholder description. You can fill this in with details about the project's purpose, technologies used, and key features.
              </p>
            </div>
          </div> */}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectsPage;
