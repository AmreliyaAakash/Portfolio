import React, { useState } from 'react';

const Footer = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <footer className="w-full py-8 border-t border-[#1C1C21] bg-black text-white/50 text-sm">
            <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left */}
                <div className="order-2 md:order-1">
                    <p 
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => setIsTermsOpen(true)}
                    >
                        Terms & Conditions
                    </p>
                </div>

                {/* Center - Icons */}
                <div className="flex gap-4 order-1 md:order-2">
                    <a href="https://github.com/AmreliyaAakash" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#131315] border border-[#1C1C21] flex items-center justify-center hover:bg-[#2A2B38] hover:text-white transition-colors text-white/70">
                        {/* GitHub SVG */}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/aakash-amreliya-a903432b6/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#131315] border border-[#1C1C21] flex items-center justify-center hover:bg-[#2A2B38] hover:text-white transition-colors text-white/70">
                        {/* LinkedIn SVG */}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                    </a>
                </div>

                {/* Right */}
                <div className="order-3">
                    <p>© {new Date().getFullYear()} Aakash Amreliya. All rights reserved.</p>
                </div>
            </div>

            {/* Modal for Terms & Conditions */}
            {isTermsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="bg-[#131315] border border-[#1C1C21] p-6 md:p-8 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col relative">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsTermsOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#1C1C21] hover:bg-[#2A2B38] text-white transition-colors"
                        >
                            ✕
                        </button>
                        
                        <h2 className="text-2xl font-bold text-white mb-4">Terms & Conditions</h2>
                        
                        <div className="overflow-y-auto pr-2 text-white/70 space-y-4">
                            <p>
                                Welcome to my portfolio. By accessing or using this website, you agree to be bound by these Terms and Conditions.
                            </p>
                            <h3 className="text-white font-semibold mt-4">1. Acceptance of Terms</h3>
                            <p>
                                By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                            <h3 className="text-white font-semibold mt-4">2. Intellectual Property Rights</h3>
                            <p>
                                The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Website without express written permission.
                            </p>
                            <h3 className="text-white font-semibold mt-4">3. User Conduct</h3>
                            <p>
                                You agree to use the Website only for lawful purposes. You agree not to take any action that might compromise the security of the Website, render the Website inaccessible to others or otherwise cause damage to the Website or the Content.
                            </p>
                            <h3 className="text-white font-semibold mt-4">4. Modifications</h3>
                            <p>
                                We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these pages periodically.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
