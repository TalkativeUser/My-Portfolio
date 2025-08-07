// import React from 'react'

// export default function About() {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   )
// }


import { motion } from 'framer-motion'

export default function About() {
  return (
     <motion.div 
    className='h-screen bg-red-900   '
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
      {/* clip-path: polygon(0% 0% , 100% 100% , 100% 0 , 0 100% ); */}

      <h1 className="text-white text-2xl" >About</h1>



    </motion.div>
  )
}




