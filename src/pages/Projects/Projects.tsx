
// import { motion } from "framer-motion";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import TiltCard from '../../components/TiltCard/TiltCard.jsx'
// export default function Projects() {

//   return (
//      <motion.div 
//       className='min-h-screen pt-36 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-2 border-red-500 '>
//       <h1 className="text-white text-2xl" >All Projects</h1>
//         <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3    py-16
//            [transform-style:preserve-3d] [perspective:1000px]
//            px-5 xs:px-12 sm:px-20 md:px-16 lg:px-32 xl:px-20 2xl:px-32 3xl:px-44
//          gap-10 md:gap-6 lg:gap-12 xl:gap-8 3xl:gap-12" >
          
    
//           {
//             [
//                 "Product 1",
//                 "Product 2",
//                 "Product 3",
//                 "Product 4",
//                 "Product 5"
//             ].map((name, index) => (

//                <ProjectCard productName={name} key={index} />
// //  <TiltCard /> 

              
//             ))
//           }
          
//         </div>





//     </motion.div>
//   )
// }

import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import { projects } from "../../data";

// Today Taskes : 
//   1- fetch projects from githup and render them
//   2 - improve about and skilles sections 

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
          {projects.map((project, index) => (
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