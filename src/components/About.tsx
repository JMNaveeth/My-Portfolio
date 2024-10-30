import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaRocket } from 'react-icons/fa';

function About() {
  const highlights = [
    {
      icon: <FaLightbulb className="text-yellow-400" />,
      title: "Problem Solver",
      description: "Passionate about finding elegant solutions to complex challenges"
    },
    {
      icon: <FaCode className="text-blue-400" />,
      title: "Clean Code Advocate",
      description: "Committed to writing maintainable, efficient, and scalable code"
    },
    {
      icon: <FaRocket className="text-purple-400" />,
      title: "Innovation Driver",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              As a seasoned Full Stack Developer with a passion for creating innovative digital solutions,
              I bring a unique blend of technical expertise and creative problem-solving to every project.
              My journey in software development has been driven by a constant desire to learn and evolve
              with the ever-changing technology landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                  className="text-3xl mb-4 flex justify-center"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-6 bg-blue-600/10 rounded-xl border border-blue-500/20"
          >
            <h3 className="text-xl font-semibold mb-4">Professional Philosophy</h3>
            <p className="text-gray-300">
              "I believe in creating software that not only meets technical requirements but also
              delivers exceptional user experiences. Every line of code is an opportunity to make
              a positive impact."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;