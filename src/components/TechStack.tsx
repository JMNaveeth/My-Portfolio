import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
}

const techStack: TechItem[] = [
  {
    name: "React",
    icon: "⚛️",
    description: "Building modern, scalable user interfaces",
    proficiency: 90
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "Server-side JavaScript runtime",
    proficiency: 85
  },
  {
    name: "TypeScript",
    icon: "📘",
    description: "Type-safe JavaScript development",
    proficiency: 88
  },
  {
    name: "Three.js",
    icon: "🎮",
    description: "3D graphics and animations",
    proficiency: 75
  }
];

function TechStack() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{tech.icon}</span>
            <h3 className="text-xl font-bold">{tech.name}</h3>
          </div>
          <p className="text-gray-300 mb-4">{tech.description}</p>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600">
                  Proficiency
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {tech.proficiency}%
                </span>
              </div>
            </div>
            <motion.div
              className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div
                style={{ width: `${tech.proficiency}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
              ></div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default TechStack;