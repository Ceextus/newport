"use client";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaTimes } from "react-icons/fa";
import Link from "next/link";

const ContactMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-teal-600 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white text-center">Get in Touch</h2>
        <p className="text-white text-lg text-center mt-4 max-w-xl mx-auto">
          Open to opportunities to learn, grow as a developer, and add value to your business/product. 
          You can reach out to me via email or through the other links in the footer. 
          I will get back to you as soon as possible.
        </p>

        {/* Message Icon */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleModalToggle}
            className="text-white bg-teal-700 hover:bg-teal-800 p-4 rounded-full shadow-lg transition"
          >
            <FaEnvelope className="text-3xl" />
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-xs w-full text-center">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={handleModalToggle}
              >
                <FaTimes className="text-2xl" />
              </button>
              <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
              <div className="flex justify-around items-center">
                <Link href="mailto:your-email@gmail.com" passHref>
                  <FaEnvelope className="text-teal-600 hover:text-teal-800 text-4xl" />
                </Link>
                <Link href="https://wa.me/your-whatsapp-number" passHref>
                  <FaWhatsapp className="text-teal-600 hover:text-teal-800 text-4xl" />
                </Link>
                <Link href="https://linkedin.com/in/your-linkedin" passHref>
                  <FaLinkedin className="text-teal-600 hover:text-teal-800 text-4xl" />
                </Link>
                <Link href="https://github.com/your-github" passHref>
                  <FaGithub className="text-teal-600 hover:text-teal-800 text-4xl" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
