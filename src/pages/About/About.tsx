import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  const skills = [
    "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Redux", "Git", "Responsive Design", "RESTful APIs"
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Developing and maintaining web applications using React and TypeScript, collaborating with cross-functional teams to deliver high-quality software solutions."
    },
    {
      role: "Junior Web Developer",
      company: "Digital Creatives",
      period: "2020 - 2022",
      description: "Built responsive websites and web applications, implemented UI/UX designs, and optimized web performance."
    }
  ];

  return (
    <motion.div 
      className={`min-h-screen pt-5 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 md:px-12 lg:px-24 xl:px-32 ${styles.about}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`max-w-6xl mx-auto ${styles.innerAbout}`}>
        {/* About Me Section */}
        <section className="mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          
          <motion.div 
            className="text-lg md:text-xl leading-relaxed text-gray-300"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="mb-6">
              I'm a passionate Frontend Developer with a strong foundation in building responsive and user-friendly web applications. 
              With a keen eye for design and a commitment to clean, efficient code, I create seamless digital experiences that users love.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work, which led me to pursue a career in technology. 
              I'm constantly learning and staying up-to-date with the latest industry trends and best practices.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Skills
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm md:text-base hover:bg-purple-800/70 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-1">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <p className="text-purple-100">{exp.company}</p>
                  <span className="text-sm text-purple-400">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}