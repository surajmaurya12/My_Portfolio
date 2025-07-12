import React from "react";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-10 md:px-20 bg-white dark:bg-gray-900 transition duration-300"
    >
      {/* Text Content */}
      <motion.div
        className="md:w-2/3 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            <Typewriter
              words={["Suraj Maurya", "Java Backend Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl">
          I craft scalable, secure, and maintainable web applications using{" "}
          <strong className="text-blue-700 dark:text-blue-400">Java</strong>,{" "}
          <strong className="text-blue-700 dark:text-blue-400">Spring Boot</strong>, and{" "}
          <strong className="text-blue-700 dark:text-blue-400">MySQL</strong>. 
          With a strong foundation in backend development, I bring clean code practices,
          RESTful API design, and system architecture thinking to every project I work on.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#projects">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 shadow-md hover:shadow-lg transition">
              View My Work
            </button>
          </a>
          <a href="#contact">
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition">
              Get In Touch
            </button>
          </a>
          <a href="/Suraj_Maurya_Resume.pdf" download>
            <button className="bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transition">
              Download CV
            </button>
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="md:w-1/3 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <img
          src={profile}
          alt="Suraj Maurya - Profile"
          className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full shadow-2xl border-4 border-blue-100 dark:border-blue-400 hover:scale-105 transition duration-300"
        />
      </motion.div>
    </section>
  );
}
