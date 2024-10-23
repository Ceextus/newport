"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';
import Contact from '../componets/Contact';
import Recent from '../componets/Recent';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true to confirm the component is mounted on the client-side
    setIsClient(true);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = './sixtus-Resume.pdf'; 
    if (typeof window !== 'undefined') {
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <main>
      {/* Landing Section */}
      <motion.div
        id="landing"
        className="flex flex-col items-start justify-center min-h-screen text-left bg-teal-100 px-4 max-md:ml-0 md:px-8"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          <Typewriter
            text="Hey, I'm Sixtus Ojochegbe Joseph"
            typeSpeed={100}
            cursorColor="#000"
          />
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl">
          <Typewriter
            text="I'm a frontend developer dedicated to crafting visually stunning websites that deliver exceptional user experiences."
            typeSpeed={50}
            cursorColor="#000"
          />
        </p>
        <button
          onClick={handleResumeDownload}
          className="mt-6 bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
        >
          Download Resume
        </button>
      </motion.div>

      {/* Experience Section */}
      <AnimatedSection id="experience" initialDirection="bottom">
        <h2 className="text-3xl font-bold text-teal-600">Why Work with Me</h2>
        <p className="mt-4 text-lg text-gray-700">
          I'm passionate about translating your business needs into <span className="text-teal-600 font-bold">clean</span>, <span className="text-teal-600 font-bold">responsive</span>, and <span className="text-teal-600 font-bold">SEO-friendly</span> code. 
          I prioritize clear communication, ensuring we're always aligned on how to best solve your challenges.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          I stay up-to-date with the latest industry trends to deliver efficient, cutting-edge solutions that look great on any device and work seamlessly across all browsers.
        </p>
      </AnimatedSection>

      {/* Recent Works Section */}
      <AnimatedSection id="works" initialDirection="bottom">
        <Recent />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" initialDirection="left">
        <Contact />
      </AnimatedSection>
    </main>
  );
};

const AnimatedSection = ({ id, initialDirection, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemVariants = {
    hiddenLeft: { opacity: 0, x: -200 },
    hiddenRight: { opacity: 0, x: 200 },
    hiddenBottom: { opacity: 0, y: 200 },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <section
      id={id}
      ref={ref}
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={itemVariants}
        initial={
          initialDirection === 'left'
            ? 'hiddenLeft'
            : initialDirection === 'right'
            ? 'hiddenRight'
            : 'hiddenBottom'
        }
        animate={isInView ? 'show' : ''}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default HomePage;
