
// export default function Projects() {
//   return (
//     <div>
//          <h1>Projects</h1>
//     </div>
//   )
// }



import { motion } from "framer-motion";

export default function Projects() {
  return (
     <motion.div 
      className='h-screen bg-red-500 '
      initial={{
        x:"-100vw"
      }}

      animate={{
        x:0 , 
        transition:{
          duration:0.3
        }
      }} 


      exit={{
        y:"-100vh",
          transition:{
          duration:0.2
        }
   
      }}
    >
      <h1 className="text-white text-2xl" >Projects</h1>
    </motion.div>
  )
}
