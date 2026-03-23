import React from 'react';
import ShowCaseSection from '../sections/ShowCaseSection.jsx';

const ProjectsPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-dvh flex flex-col justify-start">
      <div className="text-center px-5 mb-10 pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
        </h1>
        <p className="text-white-50 max-w-2xl mx-auto md:text-lg">
          A dedicated showcase of my applications, built with modern web technologies, seamless animations, and clean architectures.
        </p>
      </div>
      
      <div className="-mt-16">
        <ShowCaseSection />
      </div>
    </div>
  );
};

export default ProjectsPage;
