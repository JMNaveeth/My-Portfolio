import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Award, Filter, X, Calendar, CheckCircle, Search, Trophy, ChevronDown } from 'lucide-react';

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
    verifyLink: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
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
    title: "Machine Learning with Python",
    issuer: "European Open University",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    verifyLink: "#",
    skills: ["Machine Learning", "Python", "Algorithms", "Data Analysis"],
    category: "AI/ML"
  },
  {
    id: "5",
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
    id: "6",
    title: "Introduction to HTML",
    issuer: "Sololearn",
    date: "Nov 2023",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=600&fit=crop",
    verifyLink: "#",
    skills: ["HTML", "Web Development", "Frontend"],
    category: "Web Development",
    certificateCode: "CC-S2ACYHZY"
  },
  {
    id: "7",
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
    id: "8",
    title: "Best Programming Practices",
    issuer: "TutorialsPoint",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop",
    verifyLink: "https://verify.tutorialspoint.com",
    skills: ["Clean Code", "Best Practices", "Software Engineering"],
    category: "Programming",
    certificateCode: "TP-NOPW2OZN"
  },
  {
    id: "9",
    title: "Free Blender Crash Course",
    issuer: "TutorialsPoint",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&h=600&fit=crop",
    verifyLink: "https://verify.tutorialspoint.com",
    skills: ["Blender", "3D Modeling", "Animation", "Graphics"],
    category: "Design",
    certificateCode: "TP-JE0VWD0N"
  },
  {
    id: "10",
    title: "Data Science - Fundamentals of Statistics",
    issuer: "TutorialsPoint",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    verifyLink: "https://verify.tutorialspoint.com",
    skills: ["Statistics", "Data Science", "Data Analysis", "Mathematics"],
    category: "Data Science",
    certificateCode: "TP-7KQBN5Q5"
  },
  {
    id: "11",
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
    id: "12",
    title: "Python for Beginners",
    issuer: "SkillUp",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?w=800&h=600&fit=crop",
    verifyLink: "#",
    skills: ["Python", "Programming Basics", "Syntax"],
    category: "Programming",
    certificateCode: "4511908"
  },
  {
    id: "13",
    title: "DevOps 101: What is DevOps?",
    issuer: "Great Learning",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    verifyLink: "https://verify.mygreatlearning.com/CCPETNRI",
    skills: ["DevOps", "CI/CD", "Cloud", "Automation"],
    category: "DevOps",
    certificateCode: "CCPETNRI"
  },
  {
    id: "14",
    title: "CI/CD for Beginners",
    issuer: "Great Learning",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    verifyLink: "https://verify.mygreatlearning.com/PRGKITEP",
    skills: ["CI/CD", "DevOps", "Automation", "Deployment"],
    category: "DevOps",
    certificateCode: "PRGKITEP"
  },
  {
    id: "15",
    title: "Java Programming",
    issuer: "Great Learning",
    date: "2023",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    verifyLink: "https://verify.mygreatlearning.com/ABSITBOT",
    skills: ["Java", "OOP", "Programming", "Backend"],
    category: "Programming",
    certificateCode: "ABSITBOT"
  },
  {
    id: "16",
    title: "Advanced Course 1",
    issuer: "Great Learning",
    date: "2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    verifyLink: "https://verify.mygreatlearning.com/KDQXNFRD",
    skills: ["Advanced Topics", "Professional Development"],
    category: "Programming",
    certificateCode: "KDQXNFRD"
  },
  {
    id: "17",
    title: "Advanced Course 2",
    issuer: "Great Learning",
    date: "2023",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
    verifyLink: "https://verify.mygreatlearning.com/CWMDIZSL",
    skills: ["Advanced Topics", "Professional Development"],
    category: "Programming",
    certificateCode: "CWMDIZSL"
  },
  {
    id: "18",
    title: "C Course in Tamil - Jawaharlal Nattanmai",
    issuer: "TutorialsPoint",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
    verifyLink: "https://verify.tutorialspoint.com",
    skills: ["C Programming", "Tamil Language Course"],
    category: "Programming",
    certificateCode: "TP-FFRXIKFS"
  },
  {
    id: "19",
    title: "AutoCAD Comprehensive Training Lectures",
    issuer: "TutorialsPoint",
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    verifyLink: "https://verify.tutorialspoint.com",
    skills: ["AutoCAD", "CAD Design", "Technical Drawing", "3D Modeling"],
    category: "Design",
    certificateCode: "TP-ETULXZO6"
  },
  {
    id: "20",
    title: "Mastering Project Management Fundamentals (Expert Edition)",
    issuer: "Udemy",
    date: "Oct 2023",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    verifyLink: "https://ude.my/UC-9a64826b-7f89-4f07-bce4-49fe056da4b7",
    skills: ["Project Management", "Leadership", "Planning", "Team Management"],
    category: "Management",
    certificateCode: "UC-9a64826b-7f89-4f07-bce4-49fe056da4b7"
  },
  {
    id: "21",
    title: "React - Complete Developer Course with Hands-On Projects",
    issuer: "Udemy",
    date: "Oct 2023",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    verifyLink: "https://ude.my/UC-f3963f9e-5dd7-49d8-9f92-5426f0a912cc",
    skills: ["React", "JavaScript", "Frontend Development", "Web Development"],
    category: "Web Development",
    certificateCode: "UC-f3963f9e-5dd7-49d8-9f92-5426f0a912cc"
  }
];

// Special Achievement Certificate
const researchCertificate: Certificate = {
  id: "research-1",
  title: "ITUM International Research Conference 2024 - Poster Presentation",
  issuer: "Institute of Technology University of Moratuwa",
  date: "Dec 2024",
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  verifyLink: "https://imgur.com/a/F53K5GS",
  skills: ["Research", "Innovation", "Sustainable Engineering", "Mobile Solutions", "Entrepreneurship"],
  category: "Research",
  certificateCode: "ITUM-IRC-2024"
};

// Combine all certificates with research first
const allCertificates = [researchCertificate, ...certificates];

const categories = ["All", "Research", "AI/ML", "Design", "Programming", "Web Development", "Mobile Development", "DevOps", "Data Science", "Management"];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCertificates = allCertificates.filter(cert => {
    const matchesCategory = activeCategory === "All" || cert.category === activeCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 6);

  return (
    <section id="certificates" className="py-16 bg-gradient-to-b from-black to-blue-900/20 relative overflow-hidden">
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
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Professional Certificates
          </h2>
          <p className="text-gray-400">Continuous learning journey</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Award className="text-yellow-500 w-6 h-6" />
            <span className="text-xl font-bold text-white">{allCertificates.length}</span>
            <span className="text-gray-400 text-sm">Total Certificates</span>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-lg"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/30'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {displayedCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`${
                  cert.id === 'research-1'
                    ? 'bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-2 border-yellow-500/50 shadow-yellow-500/20'
                    : 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/30'
                } rounded-xl overflow-hidden backdrop-blur-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer relative`}
                onClick={() => setSelectedCert(cert)}
              >
                {cert.id === 'research-1' && (
                  <div className="absolute top-2 left-2 z-10">
                    <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Trophy className="w-3 h-3" />
                      RESEARCH
                    </div>
                  </div>
                )}
                
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 backdrop-blur-sm text-white text-xs font-semibold rounded-full ${
                      cert.id === 'research-1' ? 'bg-yellow-600/90' : 'bg-blue-600/90'
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    {cert.id === 'research-1' ? (
                      <Trophy className="text-yellow-500 w-4 h-4 mt-1 flex-shrink-0" />
                    ) : (
                      <Award className="text-yellow-500 w-4 h-4 mt-1 flex-shrink-0" />
                    )}
                    <h3 className={`text-sm font-bold leading-tight line-clamp-2 transition-colors ${
                      cert.id === 'research-1'
                        ? 'text-yellow-100 group-hover:text-yellow-300'
                        : 'text-white group-hover:text-blue-400'
                    }`}>
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 rounded-full text-xs ${
                          cert.id === 'research-1'
                            ? 'bg-yellow-900/30 border border-yellow-700/30 text-yellow-300'
                            : 'bg-blue-900/30 border border-blue-700/30 text-blue-300'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-0.5 bg-purple-900/30 border border-purple-700/30 rounded-full text-xs text-purple-300">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More/Less Button */}
        {filteredCertificates.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? 'Show Less' : `View All ${filteredCertificates.length} Certificates`}
              <ChevronDown className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No certificates found.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-3 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors text-sm"
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
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl max-w-3xl w-full border border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
              />

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {selectedCert.id === 'research-1' ? (
                      <Trophy className="text-yellow-500 w-7 h-7" />
                    ) : (
                      <Award className="text-yellow-500 w-7 h-7" />
                    )}
                    <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <span className="font-medium">{selectedCert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedCert.date}</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {selectedCert.category}
                </span>
              </div>

              {selectedCert.certificateCode && (
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Certificate Code</p>
                  <p className="text-sm font-mono text-blue-400 font-semibold">{selectedCert.certificateCode}</p>
                </div>
              )}

              {selectedCert.id === 'research-1' && (
                <div className="mb-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                  <p className="text-xs text-gray-400 mb-1">Research Project</p>
                  <p className="text-sm text-white">
                    "A unified service delivery platform for micro-entrepreneur one-stop mobile solution to improve economic sustainability"
                  </p>
                </div>
              )}

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-white flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  Skills & Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 rounded-full text-sm text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <a
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    selectedCert.id === 'research-1'
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  } text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <ExternalLink className="w-4 h-4" />
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