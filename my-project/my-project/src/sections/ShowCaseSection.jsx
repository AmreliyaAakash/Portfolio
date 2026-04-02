import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
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

        {/* Mobile See More Button */}
        <div className="mt-10 flex justify-center md:hidden px-5">
          <a 
            href="#projects" 
            className="w-full py-4 bg-white text-black rounded-xl font-bold text-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform"
          >
            See More Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;