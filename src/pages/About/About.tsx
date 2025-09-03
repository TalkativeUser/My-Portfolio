// import React from 'react'

// export default function About() {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   )
// }


import { motion } from 'framer-motion'
import styles from './About.module.css'
export default function About() {
  return (
     <motion.div 
    className={`h-screen bg-red-900  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${styles.about}  `}

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
     <div className={styles.innerAbout} >

      <h1 className="text-white text-2xl" >About</h1>

     </div>




    </motion.div>
  )
}




