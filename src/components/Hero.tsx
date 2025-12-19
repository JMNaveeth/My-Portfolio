import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

interface HeroProps {
  name: string;
  title: string;
  photoUrl: string;
}

function Hero({ name, title, photoUrl }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50" />
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-2xl mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              {name}
            </h1>
            <div className="text-xl md:text-2xl mb-8 h-12">
              <Typewriter
                options={{
                  strings: [title, 'Full Stack Developer', 'Tech Enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-x-4"
            >
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors inline-block"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1oYMDcNlK136nFT3X0fuKplMaDPwJsqtB/view?usp=sharing"
                className="bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 text-white px-8 py-3 rounded-full transition-colors inline-block"
              >
                View CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
              scale={1.1}
              transitionSpeed={1500}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse blur-xl opacity-50" />
              <img
                src={photoUrl}
                alt={name}
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10"
              />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;