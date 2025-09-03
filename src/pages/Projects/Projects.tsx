
// export default function Projects() {
//   return (
//     <div>
//          <h1>Projects</h1>
//     </div>
//   )
// }

      // initial={{
      //   x:"-100vw"
      // }}

      // animate={{
      //   x:0 , 
      //   transition:{
      //     duration:0.3
      //   }
      // }} 


      // exit={{
      //   y:"-100vh",
      //     transition:{
      //     duration:0.2
      //   }
   
      // }}
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TiltCard from '../../components/TiltCard/TiltCard.jsx'
export default function Projects() {

  return (
     <motion.div 
      className='min-h-screen pt-36 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-2 border-red-500 '>
      <h1 className="text-white text-2xl" >All Projects</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3    py-16
           [transform-style:preserve-3d] [perspective:1000px]
           px-5 xs:px-12 sm:px-20 md:px-16 lg:px-32 xl:px-20 2xl:px-32 3xl:px-44
         gap-10 md:gap-6 lg:gap-12 xl:gap-8 3xl:gap-12" >
          
    
          {
            [
                "Product 1",
                "Product 2",
                "Product 3",
                "Product 4",
                "Product 5"
            ].map((name, index) => (

               <ProjectCard productName={name} key={index} />
//  <TiltCard /> 

              
            ))
          }
          
        </div>





    </motion.div>
  )
}
