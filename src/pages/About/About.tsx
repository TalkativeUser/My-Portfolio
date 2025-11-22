import { motion } from "framer-motion";
import styles from "./About.module.css";
import Squares from "../../components/ui/squers";
import TextEffect3D from "../../components/TextEffect3D/textEffect3d";
import IconCloudDemo from "../../components/ui/icloudDemo";
import LearningTimeline from "../../components/ui/timeLine";


export default function About() {

    // width: 4px;
    // position: absolute;
    // left: 20px;
    // inset-block: 0;
    // background: red;

  return (
    <motion.div 
      className={`min-h-screen pt-24 text-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 md:px-12 lg:px-24 xl:px-32 ${styles.about}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`max-w-8xl mx-auto relative z-10`}>
        <div className="relative mt-10 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-8 w-full h-24 sm:h-16 md:h-32 lg:h-36 xl:h-38 ">
          <TextEffect3D text={'About me'} />
        </div>

        {/* About Me and skills Section */}

{/* after:content-[''] after:block after:h-0.5 after:absolute after:left-10 after:right-10 after:-bottom-10 after:bg-[#e78dbe] */}
        <div className="  grid grid-cols-1 lg:grid-cols-2 items-center relative py-12 " >
            {/*  About me section */}
              <div className="">
                <motion.div 
                  className="text-lg md:text-xl leading-relaxed text-gray-300 bg-white/10 backdrop-blur-sm text-start
                  p-7 rounded-xl shadow-[#ffd0ec_2px_2px_4px_0px_inset,rgba(255,255,255,0.8)_-2px_-2px_6px_1px_inset]"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className=" text-2xl font-[600] uppercase" >Biography</h3>
                  <p className="mb-6">

                        I'm a React and Next.js developer working as a freelancer, with previous experience in a company environment. I focus on building strong, high-performance products and writing clean, organized logic-first code.

                        I've worked on several real-world projects, including an ERP system, an E-commerce platform, and multiple full websites. Through these projects, I improved my problem-solving skills, code organization, and API integration experience.

                        I'm currently developing my skills in Next.js, Redux Toolkit, TypeScript, Framer Motion, and basic system design. I enjoy learning fast, paying attention to details, and working in both freelance and mixed environments.                  </p>
                                      
                </motion.div>
              </div>

              {/* Skills Section */}
                  <div className="relative z-50   ">
            
                              <IconCloudDemo />
                  </div>
        </div>
     

        {/* skills section */}
      {/* <section className="mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Skills
            </motion.h2>

            <div className={styles.skillsWrapper}>
              <div className={styles.skillsSlider}>
                {[...skills, ...skills].map((skill, index) => (
                  <span 
                    key={index}
                    className="flex-shrink-0 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm md:text-base hover:bg-purple-800/70 transition-colors duration-300 select-none mx-2"
                    style={{ minWidth: "130px", textAlign: "center" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
      </section> */}



<LearningTimeline />



      </div>




      <div className="absolute inset-0 z-0">
        <Squares 
          speed={0}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(147, 51, 234, 0.3)" 
          hoverFillColor="#a855f7"
        />
      </div>
    </motion.div>
  );
}
