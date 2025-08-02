


import  {motion, type Variants} from 'framer-motion'
import styles from './home.module.css'
import { useEffect, useRef, useState } from 'react'
import BgParticles from '../../components/Particles/BgParticles.js'
export default function Home() {
  const blobBg='#7524b7'
  const words:string=`A passionate Front-end React Developer , Looking to leverage my experience as a Front End Developer into a challenging position to create innovative and responsive websites.`
 const arrayOfWords=words.split(' ')

//  There is an error here , re print every second ❌❌
//  console.log(arrayOfWords);
const [flipState, setFlipState] = useState<"in" | "out">("in");
const [text, setText] = useState("Next.js");
const frameWorkRef = useRef<HTMLSpanElement>(null);

const pVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const spanVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    x: -25,
   rotateY:360
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
       rotateY:10,


    transition: {
      type: "spring" as const,
      stiffness: 50,
      rotateY :{
        duration:0.5
      }
   
    },
  },
};


const flipVariants: Variants = {
  out: {
    rotateX: 90,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  in: {
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

useEffect(() => {
  const interval = setInterval(() => {
    setFlipState("out");

    setTimeout(() => {
      // نغير النص وهو مختفي
      setText((prev) => (prev === "Next.js" ? "React.js" : "Next.js"));
      setFlipState("in");
    }, 600); // نفس مدة الدوران في flipVariants
  }, 3000);

  return () => clearInterval(interval);
}, []);


  return (
        <motion.div 
    className={` ${styles.homeSection} relative `}
      initial={{x:"-100vw"}}
      animate={{x:0 , transition:{ duration:0.3}}} 
       exit={{y:"-100vh",transition:{duration:0.2 } }}>

   <BgParticles/>
      
      <div className="flex justify-center items-center min-h-screen  ">

          <section className={` w-[50%] flex justify-center `}>
                 
                <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="h-[100%] flex flex-col   "
                      >


                 <svg className={`w-[100%] h-[60px] ${styles.svgTitle}`}>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#60a5fa" />     {/* blue-400 */}
      <stop offset="100%" stopColor="#a78bfa" />   {/* purple-400 */}
    </linearGradient>
  </defs>

  <symbol id="text">
    <text
      fill="rgba(250,250,250 ,0)"
      stroke={"white"}
      strokeLinejoin="round"
      strokeDasharray={80}
      strokeWidth="1px"
      className="text-6xl font-[700]"
      textAnchor="start-0"
      x="0%"
      y="90%"
    >
      Hi, I'm Muhammed
    </text>
  </symbol>

  <use xlinkHref="#text" />
</svg>


                      <h1 
                      
                     
                      className='text-white text-4xl mt-2 font-[600]  ' >Front-End Developer 
                      
                  <motion.span
                      ref={frameWorkRef}
                      className="inline-block origin-bottom ms-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent  "
                      variants={flipVariants}
                      initial="in"
                      animate={flipState}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: 600,
                      }}
                    >
                      {text}
                    </motion.span>
                  
                        
                        
                        
                        
                         </h1>
                    
                    <motion.p
                        variants={pVariant}
                        initial="hidden"
                        animate="visible"
                        className="mt-2 text-lg md:text-2xl max-w-xl flex flex-wrap text-white "
                      >

                                    {

                                      arrayOfWords.map((word , idx)=>   <span className='mr-2' key={idx} >
                                            {word.split('').map((letter, wordIndex) => (
                                              <motion.span
                                                key={wordIndex}
                                                className="inline-block whitespace-nowrap" 
                                                variants={spanVariant}
                                              >
                                                      {letter}
                                              </motion.span>
                                            ))}</span>)

                                    }

                   
               
                      

                      </motion.p>

                      
                      <div className='mt-8 flex gap-4'  >
                        
                        <button  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"> Download CV </button>
                        <button  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"> Download CV </button>
                      </div>
                      </motion.section>


                 
          </section> 

          <section className={`${styles.parentBlob} w-[50%] `}>

                    <div className={`${styles.blob} drop-shadow-[0_0_80px_#7524b799] `}>
                        <svg viewBox="0 0 500 500" width="100%" id="blobSvg"  >
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{ stopColor: blobBg }} />
                              <stop offset="100%" style={{ stopColor: blobBg }} />
                            </linearGradient>
                            {/* this image appears as background image to svg blob */}
                              {/* <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="500" height="500">
                                  <image
                                    xlinkHref="./IMG_9242-removebg-preview.png"
                                    x="70"
                                    y="150"
                                    width="400"
                                    height="500"
                                    preserveAspectRatio="xMidYMid slice"
                                  />
                              </pattern> */}
                          </defs>

          
                          <path fill="url(#gradient)" >
                            <animate attributeName='d' dur='6s' repeatCount="indefinite" 
                              values='M443,301.5Q392,353,352,396Q312,440,254,428.5Q196,417,143,391.5Q90,366.7,70,308Q50,250,62,181Q60,112,126,91Q192,70,258.5,44Q325,19,366.5,77Q408,135,451,192.5Q494,250,443,301.5Z;
                              
                              M423,320.5Q444,391,373.5,402.5Q403,414,251,411Q199,408,146.5,385.5Q94,363,77,306Q62,250,62.5,197Q115,154,152,119Q199,94,250.5,91.5Q302,89,353,113.5Q404,138,403,194Q402,250,423,320.5Z;

                                M404,297.5Q381,345,347.5,396.5Q314,448,248.5,452Q183,456,144,405.5Q105,355.5,85.5,302Q66,250,85,197Q104,144,148.5,109.5Q193.5,75,253,65Q313,55,367,90.5Q421,126,424,188Q427,250,404,297.5Z;

                                  M455.5,321Q445,392,375,406.5Q305,421,252,414Q199,407,126,400Q53,393,60.5,321.5Q68,250,95,203.5Q122,157,157,115.5Q192,71,247.5,79Q303,87,344.5,119Q386,151,426,200.5Q466,250,455.5,321Z;

                                  M442,301Q390,352,349,390Q308,428,243,440Q178,470,146.5,409Q115,348,68,299Q21,250,65.5,199Q110,148,155.5,122.5Q201,97,251.5,86Q302,75,343,118.5Q381,155,437.5,202.5Q494,250,442,301Z;
                                  
                              M443,301.5Q392,353,352,396Q312,440,254,428.5Q196,417,143,391.5Q90,366.7,70,308Q50,250,62,181Q60,112,126,91Q192,70,258.5,44Q325,19,366.5,77Q408,135,451,192.5Q494,250,443,301.5Z;

                              '
                            >

                            </animate>

                          </path>

                        </svg>

                        <div className="imgBox w-[400px] h-[500px] absolute top-[-60px] left-[140px] ">
                          <img src="./IMG_9022-removebg-preview.png" alt="my personlize image" 
                                className="w-[250px] h-[100%]  " />
                       
                        </div> 

                  

                      

                     </div>
                        <div className={`${styles.blob}  `}>
                          <svg viewBox="0 0 500 500" width="100%" id="blobSvg"  >
                            <defs>
                              

                                <linearGradient id="mygradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "rgb(255, 255, 255,0)" }} />
                                <stop offset="80%" style={{ stopColor: blobBg , stopOpacity:1 }} />
                                <stop offset="100%" style={{ stopColor: blobBg , stopOpacity:1 }} />
                              </linearGradient>

                              <filter id="glow">
                              <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#7524b7" floodOpacity="0.4" />
                            </filter>
                        
                            </defs>
                                          
                                           {/* blob svg  */}
            
                            <path fill="url(#mygradient)" filter="url(#glow)"  >
                              <animate attributeName='d' dur='6s' repeatCount="indefinite" 
                                values='M443,301.5Q392,353,352,396Q312,440,254,428.5Q196,417,143,391.5Q90,366.7,70,308Q50,250,62,181Q60,112,126,91Q192,70,258.5,44Q325,19,366.5,77Q408,135,451,192.5Q494,250,443,301.5Z;
                                
                                M423,320.5Q444,391,373.5,402.5Q403,414,251,411Q199,408,146.5,385.5Q94,363,77,306Q62,250,62.5,197Q115,154,152,119Q199,94,250.5,91.5Q302,89,353,113.5Q404,138,403,194Q402,250,423,320.5Z;

                                  M404,297.5Q381,345,347.5,396.5Q314,448,248.5,452Q183,456,144,405.5Q105,355.5,85.5,302Q66,250,85,197Q104,144,148.5,109.5Q193.5,75,253,65Q313,55,367,90.5Q421,126,424,188Q427,250,404,297.5Z;

                                    M455.5,321Q445,392,375,406.5Q305,421,252,414Q199,407,126,400Q53,393,60.5,321.5Q68,250,95,203.5Q122,157,157,115.5Q192,71,247.5,79Q303,87,344.5,119Q386,151,426,200.5Q466,250,455.5,321Z;

                                    M442,301Q390,352,349,390Q308,428,243,440Q178,470,146.5,409Q115,348,68,299Q21,250,65.5,199Q110,148,155.5,122.5Q201,97,251.5,86Q302,75,343,118.5Q381,155,437.5,202.5Q494,250,442,301Z;
                                    
                                M443,301.5Q392,353,352,396Q312,440,254,428.5Q196,417,143,391.5Q90,366.7,70,308Q50,250,62,181Q60,112,126,91Q192,70,258.5,44Q325,19,366.5,77Q408,135,451,192.5Q494,250,443,301.5Z;

                                '
                              >

                              </animate>

                            </path>

                          </svg>                      
                       </div>
            </section>
        </div>


        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-44 ">
                <div className="bg-blue-200 p-4 rounded">Item 1</div>
                <div className="bg-green-200 p-4 rounded">Item 2</div>
                <div className="bg-red-200 p-4 rounded">Item 3</div>
                <div className="bg-yellow-200 p-4 rounded">Item 4</div>
                <div className="bg-purple-200 p-4 rounded">Item 5</div>
                <div className="bg-pink-200 p-4 rounded">Item 6</div>
       </div> */}

    </motion.div>

  )
}


 


// import React from 'react';
// import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//       </div>
      
//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 3}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//         <div className="animate-fade-in-up">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Alex Johnson
//             </span>
//           </h1>
//           <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
//             Full Stack Developer & UI/UX Designer
//           </h2>
//           <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Crafting beautiful, functional web experiences with modern technologies. 
//             Passionate about clean code, elegant design, and solving complex problems.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
//               View My Work
//             </button>
//             <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
//               Download Resume
//             </button>
//           </div>

//           <div className="flex justify-center space-x-6">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
//               <Github size={24} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
//               <Linkedin size={24} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
//               <Mail size={24} />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ArrowDown className="text-gray-400" size={24} />
//       </div>
//     </section>
//   );
// };

// export default Hero;

