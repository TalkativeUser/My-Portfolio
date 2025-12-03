
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../lib/motion";
import data from '../../data'
import { Link } from "react-router-dom";
import  { CardContainer, CardBody, CardItem } from "../../components/ui/3dcard";
import Squares from "../../components/ui/squers";
import TextEffect3D from "../../components/TextEffect3D/textEffect3d";



export default function Projects() {
  return (
 <motion.div
  variants={staggerContainer()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="relative min-h-screen pt-10 md:pt-36 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20 overflow-hidden"
>
  <div className="absolute inset-0 z-0">
    <Squares 
        speed={0.2}
        squareSize={50}
        direction="diagonal"
      borderColor="rgba(147, 51, 234, 0.3)" 
        hoverFillColor="#a855f7"
      /> 
  </div>

  {/* المحتوى فوق الخلفية */}
  <div className="relative z-10 ">
      <div className="max-w-7xl mx-auto ">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={textVariant(0.2)}
               className="text-center mb-16 " >

                      <div className="relative w-full h-24 sm:h-16 md:h-32 lg:h-36 xl:h-38 ">
                          <TextEffect3D  text={'Projects'} />
                        </div>

                        <motion.p className="text-gray-400 max-w-3xl mx-auto text-lg">
                          Here are some of my recent works. Each project is built with modern technologies and best practices.
                        </motion.p>

              </motion.div>

              <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeIn("up", "tween", 0.2, 1)}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  "
              >
                {data.projects.map((project, index) => (
                  <CardContainer key={index} className="inter-var">
                    <CardBody className="relative group/card rounded-xl px-2 p-1 border w-full h-auto bg-gradient-to-b from-purple-950 via-gray-800 border-purple-500/50 hover:border-purple-400/85 hover:shadow-[0_0_25px_4px_rgba(192,132,252,0.35)] transition-all duration-150">
                      
                      <CardItem
                        translateZ="50"
                        className="flex items-center justify-center text-xl font-bold text-white py-2"
                      >
                        {project.title}
                      </CardItem>

                      <CardItem translateZ="100" className="w-full mt-0">
                        <img
                          src={project.gallery[0]}
                          className=" w-full aspect-video object-cover rounded-md group-hover/card:shadow-xl"
                          alt=""
                        />
                      </CardItem>

                      <CardItem 
                        as="p"
                        translateZ="60"
                        className="text-white text-sm max-w-sm mt-3 line-clamp-3 "
                      >
                      {project.description}
                      </CardItem>

                      <div className="flex justify-between items-center mt-8 mb-4 text-white hover:text-cyan-400 transition-all duration-300  ">
                          <Link
                        to={`/projects/${index}`}
                        className="py-1 "
                      
                        >
                          veiw details →
                        </Link>
                      </div>
                    </CardBody>
                  </CardContainer>
                ))}
              </motion.div> 

      </div>
  </div>
</motion.div>

  );
}




