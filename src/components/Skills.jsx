// src/components/Skills.jsx
import {
  FaJava, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaAws
} from "react-icons/fa";

import {
  SiSpringboot, SiMysql, SiPostgresql, SiDocker,
  SiJavascript, SiTailwindcss, SiBootstrap,
  SiHibernate, SiPostman, SiApachemaven,
  SiJira, SiIntellijidea, SiVisualstudiocode
} from "react-icons/si";

export default function Skills() {

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "Spring MVC", icon: <SiSpringboot className="text-green-400" /> },
        { name: "Hibernate", icon: <SiHibernate className="text-yellow-600" /> },
        { name: "REST APIs", icon: "🔗" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "Responsive Design", icon: "📱" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Maven", icon: <SiApachemaven className="text-purple-600" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
        { name: "IntelliJ", icon: <SiIntellijidea /> },
        { name: "JIRA", icon: <SiJira className="text-blue-600" /> },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
        { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP", icon: "🧠" },
        { name: "Microservices", icon: "⚙️" },
        { name: "MVC", icon: "🏗️" },
        { name: "CRUD", icon: "🔄" },
        { name: "Agile", icon: "📊" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Technical Skills
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}