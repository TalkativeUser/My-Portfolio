
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
      <motion.div 
      className='h-screen bg-blue-800 '
      id="contact"
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
      <h1 className="text-white text-2xl" >Contact</h1>
    </motion.div>
  )
}
