import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "SQL(Basic)",
      provider: "HackerRank",
      date: "05 Sept 2023",
      link: "https://www.hackerrank.com/certificates/c1ce90ded69a",
    },
    {
      title: "DSA with Java",
      provider: "Apna College",
      date: "2024",
      link: "https://www.apnacollege.in/certificate_v2/660d6c57055763cc32088fe6/user/63cea4162993c8cf5605c3a9",
    },
    {
    title: "Full Stack Development",
    provider: "Pankaj Sir Academy",
    date: "2025",
    link: "/PSA.jpg", // place the image in public folder
    image: "PSA.jpg", // ✅ add image path here
  },
  ];

  return (
    <section
      id="certificates"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Certificates
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                {cert.provider}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
