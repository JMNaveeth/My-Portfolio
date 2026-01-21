import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Award,
  X,
  Calendar,
  CheckCircle,
  Search,
  Trophy,
  ChevronDown
} from "lucide-react";

// 🔹 IMPORT YOUR REAL CERTIFICATE IMAGE
import itumResearchCert from "../../assets/certificates/itum-research-2024.jpg";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
  category: string;
  certificateCode?: string;
}

/* =======================
   ⭐ RESEARCH CERTIFICATE
======================= */
const researchCertificate: Certificate = {
  id: "research-itum-2024",
  title: "Poster Presentation – ITUM International Research Conference 2024",
  issuer: "Institute of Technology, University of Moratuwa (ITUM)",
  date: "18 Dec 2024",
  image: itumResearchCert,
  skills: [
    "Research & Innovation",
    "Mobile App Development",
    "Sustainable Engineering",
    "Entrepreneurship",
    "Team Collaboration"
  ],
  category: "Research",
  certificateCode: "ITUM-IRC-2024"
};

/* =======================
   OTHER CERTIFICATES
======================= */
const certificates: Certificate[] = [
  {
    id: "1",
    title: "UI/UX Design Masterclass with Adobe XD",
    issuer: "Udemy",
    date: "Jan 2025",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    skills: ["UI/UX Design", "Adobe XD", "Prototyping"],
    category: "Design"
  },
  {
    id: "2",
    title: "Python Deep Learning",
    issuer: "European Open University",
    date: "Dec 2023",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    skills: ["Python", "Deep Learning", "Neural Networks"],
    category: "AI/ML"
  }
];

/* =======================
   COMBINED LIST
======================= */
const allCertificates = [researchCertificate, ...certificates];

const categories = [
  "All",
  "Research",
  "AI/ML",
  "Design",
  "Programming",
  "Web Development",
  "Mobile Development",
  "DevOps",
  "Data Science",
  "Management"
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCertificates = allCertificates.filter((cert) => {
    const matchesCategory =
      activeCategory === "All" || cert.category === activeCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((s) =>
        s.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const displayedCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, 6);

  return (
    <section id="certificates" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-2">
            Certificates & Research
          </h2>
          <p className="text-gray-400">Academic & professional achievements</p>
        </div>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-full text-white"
            />
          </div>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(cert)}
              className={`cursor-pointer rounded-xl overflow-hidden border ${
                cert.category === "Research"
                  ? "border-yellow-500 bg-yellow-900/20"
                  : "border-gray-700 bg-gray-900"
              }`}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex items-start gap-2">
                  {cert.category === "Research" ? (
                    <Trophy className="text-yellow-500 w-4 h-4 mt-1" />
                  ) : (
                    <Award className="text-yellow-500 w-4 h-4 mt-1" />
                  )}
                  <h3 className="text-white font-semibold text-sm">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SHOW MORE */}
        {filteredCertificates.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 mx-auto"
            >
              {showAll ? "Show Less" : "View All"}
              <ChevronDown
                className={`w-4 h-4 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

        {/* MODAL */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-xl p-6 max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400"
                  onClick={() => setSelectedCert(null)}
                >
                  <X />
                </button>

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />

                <h3 className="text-2xl font-bold text-white mb-1">
                  {selectedCert.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {selectedCert.issuer} • {selectedCert.date}
                </div>

                {selectedCert.category === "Research" && (
                  <div className="mb-4 p-3 bg-yellow-900/30 rounded-lg">
                    <p className="text-sm text-white">
                      “A unified service delivery platform for micro-entrepreneur
                      one-stop mobile solution to improve economic sustainability”
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    Skills & Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-blue-900/40 text-white rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-center text-gray-400 text-sm mt-6">
                  Official certificate issued by the Institute of Technology,
                  University of Moratuwa (ITUM)
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Certificates;
