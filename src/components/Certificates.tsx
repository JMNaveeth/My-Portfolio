import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaMedal } from 'react-icons/fa';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    skills: ["AWS", "Cloud Architecture", "Security"]
  },
  {
    id: "2",
    title: "Full Stack Development",
    issuer: "Meta",
    date: "2023",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    skills: ["React", "Node.js", "MongoDB"]
  },
  // Add more certificates as needed
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-black to-blue-900/20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Professional Certificates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-lg border border-gray-700/30"
            >
              <div className="relative group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform"
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaMedal className="text-yellow-500" />
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{cert.issuer} • {cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-900/30 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-gray-900 p-6 rounded-xl max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
            <p className="text-gray-400 mb-4">{selectedCert.issuer} • {selectedCert.date}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-900/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2"
              >
                Verify <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Certificates;