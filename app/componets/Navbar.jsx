import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true to confirm the component is mounted on the client-side
    setIsClient(true);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = '/sixtus-Resume.pdf'; // Replace with your resume URL
    if (typeof window !== 'undefined') {
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {isClient && (
              <ScrollLink
                to="landing"
                smooth={true}
                duration={500}
                className="text-4xl font-bold text-teal-600 cursor-pointer"
              >
                CEEXTUS
              </ScrollLink>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {isClient && (
              <>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-teal-600 font-semibold transition duration-300 ease-in-out cursor-pointer"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-teal-600 font-semibold transition duration-300 ease-in-out cursor-pointer"
                >
                  Experience
                </ScrollLink>
                <ScrollLink
                  to="works"
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-teal-600 font-semibold transition duration-300 ease-in-out cursor-pointer"
                >
                  Works
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-teal-600 font-semibold transition duration-300 ease-in-out cursor-pointer"
                >
                  Contact Me
                </ScrollLink>
              </>
            )}
            <button
              onClick={handleResumeDownload}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 font-bold transition duration-300 ease-in-out"
            >
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-teal-600 transition duration-300 ease-in-out"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <button onClick={() => setIsOpen(false)} className="text-black hover:text-teal-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="mt-6">
            {isClient && (
              <>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block text-black hover:text-teal-600 font-semibold mb-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="block text-black hover:text-teal-600 font-semibold mb-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </ScrollLink>
                <ScrollLink
                  to="works"
                  smooth={true}
                  duration={500}
                  className="block text-black hover:text-teal-600 font-semibold mb-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Works
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block text-black hover:text-teal-600 font-semibold mb-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </ScrollLink>
              </>
            )}
            <button
              onClick={handleResumeDownload}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 font-bold w-full"
            >
              Download Resume
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay for background when menu is open */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default NavBar;
