"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component from next/image

const RecentWorks = () => {
  const projects = [
    {
      title: "Real Estate",
      imageUrl: "/three.png", // Replace with the actual image path
      link: "https://realtor-eight-mu.vercel.app"
    },
    {
      title: "First-Portfolio",
      imageUrl: "/one.png", // Replace with the actual image path
      link: "https://portfolio-six-zeta-48.vercel.app/"
    },
    {
      title: "First To-Do App",
      imageUrl: "/two.png", // Replace with the actual image path
      link: "https://final1-tau.vercel.app"
    }
  ];

  return (
    <div className="bg-teal-600 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white text-center">Recent Works</h2>
        <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6"> {/* Reduced gap for smaller screens */}
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
              initial={{ opacity: 0, y: 100 }} // Slide from bottom
              animate={{ opacity: 1, y: 0 }} // Slide to original position
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect for project items
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500} // Set width (adjust as necessary)
                height={400} // Set height (adjust as necessary)
                className="w-full h-96 object-contain rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 max-md:h-64"
              />
              <div className="absolute inset-0 flex items-center justify-end bg-black bg-opacity-10 rounded-lg">
                <span className="text-white bg-white/20 backdrop-blur-md py-2 px-4 rounded-md text-6xl max-md:text-lg font-semibold">
                  {project.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
