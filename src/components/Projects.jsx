import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Weather Now",
      description:
        "A responsive weather app where users can search for cities worldwide and view real-time weather details. Powered by React, Tailwind CSS, and the Open-Meteo API.",
      link: "https://wondrous-florentine-055ebc.netlify.app/",
    },
    {
      title: "honeybrick-cafe",
      description:
        "Honeybrick Café is a modern, responsive, and SEO-friendly website for a café business, showcasing the menu, offers, and allowing smooth interaction with customers. The website features a dynamic reviews section, where customer testimonials are fetched and displayed in real-time, enhancing credibility and user engagement.",
      link: "https://honeybrick-cafe.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal developer portfolio showcasing projects, skills, and achievements. Built with React and Tailwind CSS, it’s fully responsive and includes a dark mode for a modern user experience.",
      link: "https://surajmaurya7071.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition duration-300"
    >
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
