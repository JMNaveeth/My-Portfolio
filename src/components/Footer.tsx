import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaEnvelope />, url: "mailto:contact@example.com", label: "Email" }
  ];

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Experience", to: "experience" },
        { name: "Certificates", to: "certificates" },
        { name: "Contact", to: "contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Resume", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Projects", url: "#" }
      ]
    }
  ];

  const quotes = [
    "Innovation distinguishes between a leader and a follower.",
    "Code is like humor. When you have to explain it, it's bad.",
    "The best way to predict the future is to create it."
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-blue-900/20 pt-20 relative">
      <div className="container mx-auto px-4">
        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <FaQuoteLeft className="text-4xl text-blue-500 mx-auto mb-4" />
          <motion.div
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
            className="text-xl font-medium text-gray-300 italic"
          >
            {quotes[0]}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Portfolio
            </h3>
            <p className="text-gray-400">
              Building the future with code, one project at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {'to' in link ? (
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 5 }}>contact@example.com</motion.li>
              <motion.li whileHover={{ x: 5 }}>+1 (555) 123-4567</motion.li>
              <motion.li whileHover={{ x: 5 }}>San Francisco, CA</motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-4 md:mt-0"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full cursor-pointer transition-colors"
            >
              <FaArrowUp />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;