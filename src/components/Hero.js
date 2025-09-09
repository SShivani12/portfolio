import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute w-72 h-72 bg-purple-700 rounded-full opacity-30 top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-pink-600 rounded-full opacity-20 bottom-10 right-10 animate-pulse-slow"></div>
      </motion.div>

      <motion.div
        className="text-center z-10 px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Shivani Singh
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          I build AI-driven solutions that solve real-world problems.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-md shadow-lg hover:bg-gray-200 transition"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-white rounded-md flex items-center gap-2 hover:bg-white hover:text-purple-900 transition"
          >
            See My Work <BsArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
