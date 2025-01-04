import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow, FaDev, FaMedium, FaTwitter, FaCodepen } from 'react-icons/fa';
import { useEffect } from 'react';

interface SocialLink {
  icon: JSX.Element;
  url: string;
  label: string;
  color: string;
  hoverBg: string;
  delay: number;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub className="text-2xl" />,
    url: "https://github.com",
    label: "GitHub",
    color: "hover:text-white group-hover:bg-gray-900",
    hoverBg: "group-hover:shadow-gray-500/50",
    delay: 0.1
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    url: "https://linkedin.com",
    label: "LinkedIn",
    color: "hover:text-blue-500 group-hover:bg-blue-50",
    hoverBg: "group-hover:shadow-blue-500/50",
    delay: 0.2
  },
  {
    icon: <FaStackOverflow className="text-2xl" />,
    url: "https://stackoverflow.com",
    label: "Stack Overflow",
    color: "hover:text-orange-500 group-hover:bg-orange-50",
    hoverBg: "group-hover:shadow-orange-500/50",
    delay: 0.3
  },
  {
    icon: <FaDev className="text-2xl" />,
    url: "https://dev.to",
    label: "Dev.to",
    color: "hover:text-gray-900 group-hover:bg-gray-50",
    hoverBg: "group-hover:shadow-gray-500/50",
    delay: 0.4
  },
  {
    icon: <FaMedium className="text-2xl" />,
    url: "https://medium.com",
    label: "Medium",
    color: "hover:text-gray-900 group-hover:bg-white",
    hoverBg: "group-hover:shadow-gray-500/50",
    delay: 0.5
  },
  {
    icon: <FaTwitter className="text-2xl" />,
    url: "https://twitter.com",
    label: "Twitter",
    color: "hover:text-blue-400 group-hover:bg-blue-50",
    hoverBg: "group-hover:shadow-blue-500/50",
    delay: 0.6
  },
  {
    icon: <FaCodepen className="text-2xl" />,
    url: "https://codepen.io",
    label: "CodePen",
    color: "hover:text-gray-900 group-hover:bg-white",
    hoverBg: "group-hover:shadow-gray-500/50",
    delay: 0.7
  }
];

function SocialMediaLinks() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  }, [controls]);

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 120
      }
    })
  };

  const text = "Connect with Me";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-12 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 80%, rgba(139,92,246,0.15) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 80%, rgba(236,72,153,0.15) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15) 0%, transparent 70%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h3 className="text-4xl font-bold text-center mb-16 flex justify-center gap-[0.5rem] flex-wrap">
          {text.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              className="group relative"
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }
              }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block w-16 h-16 rounded-2xl bg-gray-800/80 backdrop-blur-lg ${social.color} transition-all duration-500`}
                whileHover={{
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${social.hoverBg}`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                  {social.icon}
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800/90 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-sm whitespace-nowrap">{social.label}</span>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45" />
                </motion.div>
              </motion.a>

              {/* Particle Effects */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${
                      i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: [0, (i % 2 ? 40 : -40) * Math.random()],
                      y: [0, (i < 6 ? -40 : 40) * Math.random()],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SocialMediaLinks;