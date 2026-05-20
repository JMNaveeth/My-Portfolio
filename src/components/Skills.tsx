import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import {
  FaReact, FaNodeJs, FaDatabase, FaCloud, FaMobile, FaTools,
  FaPython, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt,
  FaAws, FaFigma, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiFlutter, SiMongodb, SiMysql, SiFirebase,
  SiSupabase, SiTailwindcss, SiVite, SiNextdotjs, SiExpress,
  SiDart, SiPostgresql, SiFramer, SiNetlify, SiVercel,
  SiJavascript
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 0-100
  color: string;
}

interface SkillCategory {
  category: string;
  categoryIcon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    categoryIcon: <FaReact />,
    accentColor: 'text-cyan-400',
    glowColor: 'shadow-cyan-500/30',
    borderColor: 'border-cyan-500/30',
    skills: [
      { name: 'React 18', icon: <FaReact />, level: 92, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 88, color: 'text-blue-400' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 82, color: 'text-white' },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-400' },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-500' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: 'text-teal-400' },
      { name: 'Framer Motion', icon: <SiFramer />, level: 80, color: 'text-pink-400' },
    ]
  },
  {
    category: 'Backend',
    categoryIcon: <FaNodeJs />,
    accentColor: 'text-green-400',
    glowColor: 'shadow-green-500/30',
    borderColor: 'border-green-500/30',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: 'text-green-400' },
      { name: 'Express.js', icon: <SiExpress />, level: 83, color: 'text-gray-300' },
      { name: 'Python', icon: <FaPython />, level: 80, color: 'text-yellow-300' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: 'text-yellow-400' },
      { name: 'REST APIs', icon: <FaTools />, level: 88, color: 'text-orange-300' },
    ]
  },
  {
    category: 'Database',
    categoryIcon: <FaDatabase />,
    accentColor: 'text-yellow-400',
    glowColor: 'shadow-yellow-500/30',
    borderColor: 'border-yellow-500/30',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: 'text-green-500' },
      { name: 'MySQL', icon: <SiMysql />, level: 82, color: 'text-blue-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: 'text-blue-500' },
      { name: 'Supabase', icon: <SiSupabase />, level: 85, color: 'text-emerald-400' },
      { name: 'Firebase', icon: <SiFirebase />, level: 82, color: 'text-orange-400' },
    ]
  },
  {
    category: 'Mobile',
    categoryIcon: <FaMobile />,
    accentColor: 'text-pink-400',
    glowColor: 'shadow-pink-500/30',
    borderColor: 'border-pink-500/30',
    skills: [
      { name: 'Flutter', icon: <SiFlutter />, level: 88, color: 'text-cyan-400' },
      { name: 'Dart', icon: <SiDart />, level: 85, color: 'text-blue-400' },
      { name: 'React Native', icon: <FaReact />, level: 80, color: 'text-cyan-300' },
    ]
  },
  {
    category: 'Cloud & DevOps',
    categoryIcon: <FaCloud />,
    accentColor: 'text-purple-400',
    glowColor: 'shadow-purple-500/30',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'AWS', icon: <FaAws />, level: 72, color: 'text-orange-400' },
      { name: 'Docker', icon: <FaDocker />, level: 75, color: 'text-blue-400' },
      { name: 'Netlify', icon: <SiNetlify />, level: 88, color: 'text-teal-400' },
      { name: 'Vercel', icon: <SiVercel />, level: 85, color: 'text-white' },
    ]
  },
  {
    category: 'Tools & Design',
    categoryIcon: <FaFigma />,
    accentColor: 'text-rose-400',
    glowColor: 'shadow-rose-500/30',
    borderColor: 'border-rose-500/30',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 90, color: 'text-red-400' },
      { name: 'GitHub', icon: <FaGithub />, level: 90, color: 'text-gray-300' },
      { name: 'Figma', icon: <FaFigma />, level: 82, color: 'text-pink-400' },
      { name: 'Vite', icon: <SiVite />, level: 88, color: 'text-purple-400' },
      { name: 'CI/CD', icon: <FaTools />, level: 75, color: 'text-orange-300' },
    ]
  }
];

// Flat list of all unique skills for the orbiting ticker
const allSkillNames = [
  'React 18', 'TypeScript', 'Node.js', 'Flutter', 'Python', 'Supabase', 'Next.js',
  'MongoDB', 'Dart', 'Framer Motion', 'Tailwind CSS', 'Docker', 'PostgreSQL',
  'Firebase', 'AWS', 'Netlify', 'Vite', 'Express.js', 'Java', 'Git', 'GitHub',
  'React Native', 'Figma', 'MySQL', 'Vercel', 'JavaScript', 'HTML5', 'CSS3'
];

function SkillCard({ category, skills, categoryIcon, accentColor, borderColor, index }: SkillCategory & { index: number }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(-(e.clientY - cy) / 20);
    rotateY.set((e.clientX - cx) / 20);
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 80 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`relative group p-6 rounded-2xl border ${borderColor} hover:border-current/40 shadow-2xl transition-all duration-500 cursor-default ${accentColor}`}
    >
      {/* Dynamic Outer Glow Orb (renders behind the dark background) */}
      <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md bg-gradient-to-br from-current to-transparent pointer-events-none z-0" />

      {/* Solid Dark Card Background (covers the glow orb inside, keeping content high-contrast) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl z-10 pointer-events-none" />

      {/* Glass shimmer overlay */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-15">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-5 relative z-20">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className={`text-3xl ${accentColor} drop-shadow-lg flex-shrink-0`}
        >
          {categoryIcon}
        </motion.div>
        <div>
          <h3 className={`text-lg font-bold ${accentColor}`}>{category}</h3>
          <p className="text-xs text-gray-500">{skills.length} technologies</p>
        </div>
        <div className={`ml-auto w-2 h-2 rounded-full ${accentColor.replace('text-', 'bg-')} animate-pulse shadow-lg`} />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-2 relative z-20">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + i * 0.05 }}
            whileHover={{ scale: 1.06, x: 4 }}
            onHoverStart={() => setHovered(skill.name)}
            onHoverEnd={() => setHovered(null)}
            className="group/skill relative"
          >
            <div className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 hover:bg-gray-850">
              <span className={`text-base ${skill.color} flex-shrink-0`}>{skill.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-200 truncate">{skill.name}</p>
                {/* Proficiency mini bar */}
                <div className="w-full h-0.5 bg-gray-800 rounded-full mt-1 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.08 + i * 0.06 + 0.3, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${accentColor.replace('text-', 'from-')} to-transparent`}
                  />
                </div>
              </div>
              {hovered === skill.name && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`text-xs font-bold ${skill.color} flex-shrink-0`}
                >
                  {skill.level}%
                </motion.span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-blue-900/20 via-black to-purple-900/10 relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/4 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            ⚡ Arsenal
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text leading-tight">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A full-stack skillset built through real-world projects, research & continuous learning
          </p>
        </motion.div>

        {/* Infinite skills ticker */}
        <div className="relative mb-16 overflow-hidden py-3">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex gap-3 whitespace-nowrap w-max"
          >
            {[...allSkillNames, ...allSkillNames].map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-800/70 border border-gray-700/40 text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-gray-700/70 transition-colors duration-200 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.category} {...cat} index={i} />
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '28+', label: 'Technologies', color: 'from-cyan-400 to-blue-500' },
            { value: '6', label: 'Skill Domains', color: 'from-blue-400 to-purple-500' },
            { value: '3+', label: 'Years Learning', color: 'from-purple-400 to-pink-500' },
            { value: '5+', label: 'Live Projects', color: 'from-pink-400 to-rose-500' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-950 rounded-2xl p-5 border border-gray-800/50 text-center group hover:border-gray-700 transition-all duration-300 shadow-xl"
            >
              <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-1 group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;