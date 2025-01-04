/*import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarker } from 'react-icons/fa';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of cloud-native applications using microservices architecture",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 40%"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    location: "New York, NY",
    period: "2020 - 2022",
    description: [
      "Developed scalable web applications using modern JavaScript frameworks",
      "Optimized database queries improving application performance by 50%",
      "Collaborated with UX team to implement responsive designs"
    ],
    technologies: ["Vue.js", "Express", "PostgreSQL", "Redis", "TypeScript"]
  }
];

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500" />
              
              <div className="ml-8 relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute -left-10 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <FaBriefcase />
                </motion.div>

                <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                  <div className="flex flex-wrap gap-4 items-center mb-4">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <span className="text-blue-400">@{exp.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <FaCalendar className="text-blue-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarker className="text-blue-500" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {exp.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-gray-300"
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400 hover:bg-blue-600/30 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;

*/