import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

function ExperienceEducation() {
  const experiences = [
    {
      company: 'Sri Lanka Telecom',
      position: 'Mobile App Developer',
      period: 'Mar 2025 - Sep 2025',
      location: 'Sri Lanka',
      description: 'Developed enterprise-level telecommunications applications for telecom subscribers',
      achievements: [
        'Developed cross-platform mobile applications using Flutter and Dart',
        'Implemented responsive UI/UX design with Material Design components',
        'Built scalable mobile solutions with Git version control',
        'Collaborated with teams to deliver enterprise-level applications'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Institute of Technology University of Moratuwa (ITUM)',
      period: '2023 - Present',
      location: 'Moratuwa, Sri Lanka',
      description: 'Pursuing degree in Information Technology with focus on software development',
      highlights: [
        'Mobile app development specialization',
        'Full-stack technologies',
        'Software engineering principles'
      ]
    },
    {
      degree: 'G.C.E Advanced Level - Physical Science',
      institution: 'T/Kin/Kinniya Central College',
      period: '2018 - 2020',
      location: 'Kinniya, Sri Lanka',
      description: 'Completed Advanced Level examination in Physical Science stream',
      highlights: [
        'Analytical thinking',
        'Problem-solving skills',
        'Technology foundation'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Experience Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 mb-20">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/30"
            >
              <div className="p-6">
                {/* Period Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-4"
                >
                  <Calendar size={16} />
                  {job.period}
                </motion.div>

                {/* Job Title and Company */}
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {job.position}
                </motion.h3>
                <p className="text-xl text-blue-400 font-semibold mb-2 flex items-center gap-2">
                  <Briefcase size={18} />
                  {job.company}
                </p>
                <p className="text-gray-400 flex items-center gap-2 mb-4">
                  <MapPin size={16} />
                  {job.location}
                </p>
                <p className="text-gray-400 mb-4">{job.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
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

        {/* Education Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/30"
            >
              <div className="p-6">
                {/* Period Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-4"
                >
                  <Calendar size={16} />
                  {edu.period}
                </motion.div>

                {/* Degree and Institution */}
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {edu.degree}
                </motion.h3>
                <p className="text-lg text-purple-400 font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap size={18} />
                  {edu.institution}
                </p>
                <p className="text-gray-400 flex items-center gap-2 mb-4">
                  <MapPin size={16} />
                  {edu.location}
                </p>
                <p className="text-gray-400 mb-4">{edu.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={false}
                whileHover={{
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceEducation;