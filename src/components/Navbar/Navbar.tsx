
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import styles from './navbar.module.css';
import {  Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

export default function Navbar() {
  
  const [toggleMenu,setToggleMenu]=useState(false)
  const location = useLocation()
   const [currentIndex, setCurrentIndex] = useState(0); 
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
    { path: "/home", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaInfoCircle /> },
    { path: "/projects", label: "Projects", icon: <TbDeviceAnalytics /> },
    { path: "/contact", label: "ContactUs", icon: <IoIosContact /> },
  ];





  useEffect(() => {
    const index = navItems.findIndex((item) =>
      location.pathname.startsWith(item.path)
    );

    if (index !== -1) setCurrentIndex(index);
  }, [location.pathname]);

  const tabWidth = 84;
  const indicatorTranslate = `${tabWidth * currentIndex}px`;



  return ( <nav>

 
    <div className={`pt-12 pb-8 fixed -end-36 top-[50%] -rotate-90 md:rotate-0  md:translate-y-0 
            md:top-0 md:left-[50%] md:translate-x-[-50%] z-50  transition-translate duration-500
          ${toggleMenu ? "translate-x-[120px] translate-y-[80%] " : "translate-x-0 translate-y-[-50%] "  } ` }>
      <div className={styles.navigation}>
        <ul>
          {navItems.map((item,index) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${styles.link} ${location.pathname.startsWith(item.path)||(location.pathname === '/'&& index == 0) ? 'active' : ''}`}
              >
                <span className={` ${styles.icon}`}>
                  {item.icon}
                </span>
                <span className={styles.text}>{item.label}</span>
              </Link>
            </li>
          ))}

          

          <div
            className={`${styles.indicator} transition-transform duration-700`}
            style={{ transform: `translateX(${indicatorTranslate})` }}
          ></div>
        </ul>
                 

        <div
          className="halfCircle absolute inset-0 bg-white/30 backdrop-blur-sm rounded-[10px] transition-clip-path duration-700"
         
        //   لازم نخلى الكيرفى ديناميك بقا
          style={{
               clipPath:
               `path('M 0 0 H 400 V 70  H 0 Z M ${location.pathname == "/home" || location.pathname === "/" ?"38":location.pathname == "/about"?"122":location.pathname == "/projects"?"205":location.pathname == "/contact"?"289":"" } 0 A 20 20 0 1 0 ${location.pathname == "/home" || location.pathname==='/'?"114":location.pathname == "/about"?"198":location.pathname == "/projects"?"281":location.pathname == "/contact"?"365":"" }  0  Z')`
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

const ToggleMenu=({toggleMenu , setToggleMenu}:{toggleMenu:boolean , setToggleMenu:React.Dispatch<React.SetStateAction<boolean >> } )=>{


 


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