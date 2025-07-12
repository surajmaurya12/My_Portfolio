import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "SkillSwap",
      description:
        "A full-stack web app where users can exchange skills (like Java for UI design) with others in real time.",
      link: "#",
    },
    {
      title: "E-Commerce App",
      description:
        "A scalable e-commerce platform built with Java Spring Boot and React, featuring secure checkout with Stripe.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal developer portfolio built using React and Tailwind CSS, fully responsive and dark-mode ready.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block mt-auto text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
