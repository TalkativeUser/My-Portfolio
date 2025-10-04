
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import styles from './navbar.module.css';
import {  useLocation } from "react-router-dom";
import { useState } from "react";
import type { Variants } from "framer-motion";

export default function Navbar() {
  
  const [toggleMenu,setToggleMenu]=useState<boolean>()
  const location = useLocation()
  const toggleVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -30,
      // rotateY: 360,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      // rotateY: 10,

      transition: {
        type: "spring" as const,
        stiffness: 50,
        duration:0.5
      },
    },
  };
  

  const navItems = [
    { path: "#home", label: "Home", icon: <FaHome /> },
    { path: "#about", label: "About", icon: <FaInfoCircle /> },
    { path: "#projects", label: "Projects", icon: <TbDeviceAnalytics /> },
    { path: "#contact", label: "ContactUs", icon: <IoIosContact /> },
  ];

  const currentIndex = navItems.findIndex(item => item.path === location.hash);
  const tabWidth = 84; // Adjust this based on your actual tab width
  const indicatorTranslate = `${tabWidth * (currentIndex !== -1 ? currentIndex : 0)}px`;
//  md:left-[50%] md:translate-x-[-50%]
  return ( <nav>

 
    <div className={`pt-12 pb-8 fixed -end-36 top-[50%] -rotate-90 md:rotate-0  md:translate-y-0 
            md:top-0 md:left-[50%] md:translate-x-[-50%] z-10  transition-translate duration-500
          ${toggleMenu ? "translate-x-[120px] translate-y-[80%] " : "translate-x-0 translate-y-[-50%] "  } ` }>
      <div className={styles.navigation}>
        <ul>
          {navItems.map((item,index) => (
            <li key={item.path}>
              <a
                href={item.path}
                className={`${styles.link} ${location.hash === item.path||(location.hash === ''&& index == 0) ? 'active' : ''}`}
              >
                <span className={` ${styles.icon}`}>
                  {item.icon}
                </span>
                <span className={styles.text}>{item.label}</span>
              </a>
            </li>
          ))}

          

          <div
            className={`${styles.indicator} transition-transform duration-700`}
            style={{ transform: `translateX(${indicatorTranslate})` }}
          ></div>
        </ul>
                    <svg>
                      
                      </svg> 

        <div
          className="halfCircle absolute inset-0 bg-white/30 backdrop-blur-sm rounded-[10px] transition-clip-path duration-700"
         
        //   لازم نخلى الكيرفى ديناميك بقا
          style={{
               clipPath:
               `path('M 0 0 H 400 V 70  H 0 Z M ${location.hash == "#home"?"38":location.hash == "#about"?"122":location.hash == "#projects"?"205":location.hash == "#contact"?"289":"38" } 0 A 20 20 0 1 0 ${location.hash == "#home"?"114":location.hash == "#about"?"198":location.hash == "#projects"?"281":location.hash == "#contact"?"365":"114" }  0  Z')`
          }}
        ></div>
      </div>

     

    </div>


      <ToggleMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

    </nav>
  );
}

//   maskImage: `radial-gradient(circle at calc(${indicatorTranslate} + 75px) top, transparent 37px, black 38px)`,
//             maskRepeat: 'no-repeat',
//             maskSize: '100% 100%',

const ToggleMenu=({toggleMenu , setToggleMenu}:{toggleMenu , setToggleMenu } )=>{


 


  return <div className="toggleMenu fixed top-4 right-3 z-10 md:hidden">

      {
        toggleMenu ?  <div className=" openMenu" onClick={()=>{  setToggleMenu( prev=>!prev ) } } >
        <span className="text-white border p-1 rounded rounded-1 bg-green-600 " >
         OM
        </span>
     </div> : <div className="closeMenu "  onClick={()=>{  setToggleMenu( prev=>!prev ) } } >
         <span className="text-white border p-1 rounded rounded-1 bg-red-600 " >
          CM
         </span>
      </div>
      }
   
   
  </div>
}