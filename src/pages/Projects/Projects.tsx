
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { fadeIn, staggerContainer, textVariant } from "../../lib/motion";
import data from '../../data'

export default function Projects() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen pt-36 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={textVariant(0.2)}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            My Projects
          </motion.h2>
          <motion.p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Here are some of my recent works. Each project is built with modern technologies and best practices.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              index={index}
              {...project}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}