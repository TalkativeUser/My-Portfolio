import styles from './TiltCard.module.css'
import Tilt from 'react-vanilla-tilt'
import {motion} from 'framer-motion'
import { useState } from 'react'

// 3D Glassmorphism Card Hover Effects 

export default function TiltCard() {

  const [cardHeight,setCardHeight]=useState()

  return (
   
           <Tilt options={{speed:400 , max:40 }} 
             style={{ }} className={styles.tilt} >
         
            <motion.div className={styles.card}
            

            >
               <div className={styles.imgBx} >
             <img
                 src="projectsImage/jecard/img1.png"
                 alt="project image"
           
               />
               </div>
             
   
               <div className={styles.content}  >
                 <p className="mb-3">
                   This project is a modern, fully functional e-commerce website built
                   using React and Tailwind CSS. Designed with a seamless user
                   experience in mind, the platform includes all essential features
                   needed for a smooth online shopping experience.
                 </p>
   
   
              
   
   
   
               </div>
   
   
             </motion.div>
        
           </Tilt>
   
   
   
  )
}
