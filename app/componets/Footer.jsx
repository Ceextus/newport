"use client"; // if you are using Next.js 13 with app directory

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Responsive navigation links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/about" className="hover:text-teal-600 transition font-semibold">
            About
          </Link>
          <Link href="/experience" className="hover:text-teal-600 transition font-semibold">
            Experience
          </Link>
          <Link href="/works" className="hover:text-teal-600 transition font-semibold">
            Works
          </Link>
          <Link href="/contact-me" className="hover:text-teal-600 transition font-semibold">
            Contact Me
          </Link>
          <Link href="/resume" className="hover:text-teal-600 transition font-semibold">
            Resume
          </Link>
        </div>

        {/* Responsive copyright text */}
        <p className="text-sm mt-2 sm:mt-0">
          © {new Date().getFullYear()} Sixtus <span className="text-teal-600">Ojochegbe</span> Joseph. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
