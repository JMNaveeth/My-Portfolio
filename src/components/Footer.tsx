import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import SocialMediaLinks from './SocialMediaLinks';

function Footer() {
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
        { name: "View CV", url: "https://drive.google.com/file/d/1KimyNQcHs4AEvVfgshsMOLy8-yIcH__p/view?usp=sharing", download: true },
        { name: "Blog", url: "#" },
        { name: "Projects", url: "#projects" }
      ]
    }
  ];


  return (
    <footer className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SocialMediaLinks />

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Portfolio
            </h3>
            <p className="text-gray-400">
              Building the future with code, one project at a time.
            </p>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
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
                        download={link.download}
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
        </motion.div>

        <motion.div className="border-t border-gray-800 py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} Portfolio. Made by Naveeth 
            </p>
            
            <motion.div className="mt-4 md:mt-0">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative group"
              >
                <div className="px-4 py-2 bg-black rounded-full ring-1 ring-gray-900/5 leading-none flex items-center">
                  <FaArrowUp className="text-blue-500 group-hover:animate-bounce" />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;