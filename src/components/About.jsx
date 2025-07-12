// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition duration-300"
    >
      <div className="max-w-5xl mx-auto text-center group">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 group-hover:scale-105 transition-transform duration-300">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed group-hover:scale-[1.01] transition-all duration-300">
  Hello! I'm{" "}
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    Suraj Maurya
  </span>
  , a highly motivated and detail-oriented{" "}
  <span className="font-semibold">Java Backend Developer</span> with a Master's degree in Computer Applications and hands-on experience building scalable and efficient backend systems.
  <br />
  <br />
  I specialize in{" "}
  <strong className="text-blue-700 dark:text-blue-400">
    Java, Spring Boot, MySQL
  </strong>{" "}
  and have worked with technologies like Hibernate, JDBC, REST APIs, Docker, and Postman. I'm passionate about crafting clean, maintainable code and integrating secure, high-performing services using MVC and microservice architecture.
  <br />
  <br />
  One of my proudest projects was building an{" "}
  <strong className="text-blue-700 dark:text-blue-400">
    Internal Project Management Tool
  </strong>{" "}
  where I developed REST APIs for resource tracking and budget control using Spring Boot and MySQL. I’ve also tested and documented endpoints with Postman and maintained the codebase using Git.
  <br />
  <br />
  I'm known for my{" "}
  <strong className="text-blue-700 dark:text-blue-400">
    problem-solving, communication, and team collaboration
  </strong>{" "}
  skills. I enjoy contributing to team goals, learning new technologies, and constantly improving my backend development expertise.
  <br />
  <br />
  Whether it's database optimization, service integration, or debugging a tricky endpoint — I approach each challenge with focus and drive to deliver clean, reliable solutions.
</p>


        {/* Education Section */}
        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
            🎓 Education
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-md max-w-3xl mx-auto">
            <li className="hover:scale-105 transition-transform duration-200">
              <strong>MCA</strong> – Master of Computer Applications <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Maharana Pratap Engineering College, 2023
              </span>
            </li>
            <li className="hover:scale-105 transition-transform duration-200">
              <strong>BCA</strong> - Bachelor of Computer Applications <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Naraina College of Management, 2020
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
