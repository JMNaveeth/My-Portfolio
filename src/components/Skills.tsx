import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaMobile, FaTools } from 'react-icons/fa';

const skills = [
  {
    category: "Frontend",
    icon: <FaReact className="text-4xl text-blue-500" />,
    technologies: ["React", "Dart", "Next.js", "HTML", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    technologies: ["Node.js", "Express", "Python"]
  },
  {
    category: "Database",
    icon: <FaDatabase className="text-4xl text-yellow-500" />,
    technologies: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Cloud",
    icon: <FaCloud className="text-4xl text-purple-500" />,
    technologies: ["AWS", "Azure", "Docker"]
  },
  {
    category: "Mobile",
    icon: <FaMobile className="text-4xl text-pink-500" />,
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    category: "Tools",
    icon: <FaTools className="text-4xl text-orange-500" />,
    technologies: ["Git", "CI/CD", "Webpack", "Vite"]
  }
];

function Skills() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-blue-900/20 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 backdrop-blur-lg shadow-xl border border-gray-700/30"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center mb-4"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold ml-3">{skill.category}</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-900/30 rounded-full text-sm hover:bg-blue-800/50 transition-colors cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;