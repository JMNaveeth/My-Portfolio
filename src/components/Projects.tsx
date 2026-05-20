import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "TapOn App",
    description: " Developed a mobile app connecting service providers with customers.",
    image: "/logo.png",
    technologies: ["Flutter", "Dart", "Node.js", "Twilio", "MongoDB"],
    liveUrl: "https://project1.demo",
    githubUrl: "https://github.com/JMNaveeth/TapOn",
    features: ["AI Chat Integration", "3D Animations", "Dynamic Content", "Responsive Design"]
  },
  {
    title: "Luxe Bite",
    description: "Built a full-stack restaurant web app with online ordering, table booking, AI chatbot recommendations, and a flying cart animation for a premium experience.",
    image: "/luxebite.png",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase (PostgreSQL)", "Framer Motion"],
    liveUrl: "https://luxebite.demo",
    githubUrl: "https://github.com/JMNaveeth",
    features: ["Online Ordering & Table Booking", "AI Chatbot Recommendations", "Secure Admin Dashboard", "Real-time Revenue Monitor", "Flying Cart Animation"]
  },
  {
    title: "Grilli Restaurant Website",
    description: "Created a responsive restaurant website show-casing menu items and chef specials",
    image: "/event-1.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://project3.demo",
    githubUrl: "https://github.com/JMNaveeth/Grilli-",
    features: ["Real-time Analytics", "Multi-platform Integration", "Automated Reports", "Custom Widgets"]
  }
];
function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/30"
            >
              {/* Project Image */}
              <div 
                className="relative overflow-hidden h-48 cursor-pointer group-hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(project.image)}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.image.includes('logo') ? 'object-contain p-6 bg-gray-950/80' : 'object-cover'}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 text-xs bg-blue-500/20 rounded-full text-blue-400"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <FaCode className="mr-2 text-blue-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaGithub /> Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={false}
                whileHover={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl bg-gray-900 border border-gray-800 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/85 transition-colors border border-gray-700/50"
              >
                <FaTimes className="text-xl" />
              </button>
              <img
                src={selectedImage}
                alt="Project Preview"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;