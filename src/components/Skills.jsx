// src/components/Skills.jsx
import { FaJava, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiDocker, SiApachemaven, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Maven", icon: <SiApachemaven className="text-purple-600" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
