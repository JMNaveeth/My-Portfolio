import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Award, Filter, X, Calendar, CheckCircle, Search } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyLink: string;
  skills: string[];
  category: string;
  certificateCode?: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "UI/UX Design Masterclass with Adobe XD: From Beginner to Pro",
    issuer: "Udemy",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    verifyLink: "https://ude.my/UC-ed2bb4e5-e3f0-4e3b-89b2-ab778ad25b77",
    skills: ["UI/UX Design", "Adobe XD", "Prototyping", "User Research"],
    category: "Design",
    certificateCode: "UC-ed2bb4e5-e3f0-4e3b-89b2-ab778ad25b77"
  },
  {
    id: "2",
    title: "Python Deep Learning",
    issuer: "European Open University",
    date: "Dec 2023",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    verifyLink: "#",
    skills: ["Python", "Deep Learning", "Neural Networks", "TensorFlow"],
    category: "AI/ML"
  },
  {
    id: "3",
    title: "Artificial Intelligence",
    issuer: "European Open University",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    verifyLink: "#",
    skills: ["AI", "Machine Learning", "Algorithms", "Data Science"],
    category: "AI/ML"
  },
  {
    id: "4",
    title: "Introduction to Python",
    issuer: "Sololearn",
    date: "Nov 2023",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop",
    verifyLink: "#",
    skills: ["Python", "Programming", "Data Structures"],
    category: "Programming",
    certificateCode: "CC-AGF3HW1Y"
  },
  {
    id: "5",
    title: "PHP Course Basics",
    issuer: "TutorialsPoint",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&h=600&fit=crop",
    verifyLink: "https://verify.tutorialspoint.com",
    skills: ["PHP", "Web Development", "Backend"],
    category: "Programming",
    certificateCode: "TP-KZST4FWL"
  },
  {
    id: "6",
    title: "Mobile App Development - Android App Development for Beginners",
    issuer: "SkillUp",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop",
    verifyLink: "#",
    skills: ["Android", "Mobile Development", "Java", "Kotlin"],
    category: "Mobile Development",
    certificateCode: "4512023"
  },
  {
    id: "7",
    title: "DevOps 101: What is DevOps?",
    issuer: "Great Learning",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    verifyLink: "https://verify.mygreatlearning.com/CCPETNRI",
    skills: ["DevOps", "CI/CD", "Cloud", "Automation"],
    category: "DevOps",
    certificateCode: "7669626"
  }
];

const categories = ["All", "AI/ML", "Design", "Programming", "Mobile Development", "DevOps"];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertificates = certificates.filter(cert => {
    const matchesCategory = activeCategory === "All" || cert.category === activeCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-black to-blue-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Professional Certificates
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and professional development
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Award className="text-yellow-500 w-8 h-8" />
            <span className="text-2xl font-bold text-white">{certificates.length}</span>
            <span className="text-gray-400">Certificates Earned</span>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search certificates, skills, or issuers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" /> View Details
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                  </div>

                  {cert.certificateCode && (
                    <div className="mb-4 px-3 py-2 bg-gray-900/50 rounded-lg border border-gray-700/30">
                      <p className="text-xs text-gray-500">Certificate Code</p>
                      <p className="text-sm font-mono text-blue-400">{cert.certificateCode}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-900/30 border border-blue-700/30 rounded-full text-xs text-blue-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 bg-purple-900/30 border border-purple-700/30 rounded-full text-xs text-purple-300 font-medium">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">No certificates found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl max-w-4xl w-full border border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
              />

              {/* Title and Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-yellow-500 w-8 h-8" />
                    <h3 className="text-3xl font-bold text-white">{selectedCert.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 mb-4">
                    <span className="font-medium text-lg">{selectedCert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedCert.date}</span>
                    </div>
                  </div>
                </div>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                  {selectedCert.category}
                </span>
              </div>

              {/* Certificate Code */}
              {selectedCert.certificateCode && (
                <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400 mb-1">Certificate Code</p>
                  <p className="text-lg font-mono text-blue-400 font-semibold">{selectedCert.certificateCode}</p>
                </div>
              )}

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  Skills Acquired
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 rounded-full text-sm text-white font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <div className="flex justify-end">
                <a
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-semibold">Verify Certificate</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;