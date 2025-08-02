
// import { FaHome } from "react-icons/fa";
// import { FaInfoCircle } from "react-icons/fa";
// import { IoIosContact } from "react-icons/io";
// import { TbDeviceAnalytics } from "react-icons/tb";
// import styles from './navbar.module.css'
// import { Link ,useLocation} from "react-router-dom";
// let prevLinkItem:HTMLAnchorElement|null=null;

// export default function Navbar() {

//    const location = useLocation();

//     const indicatorTranslate =
//     location.pathname === '/' ? '0px' :
//     location.pathname === '/about' ? '84px' :
//     location.pathname === '/projects' ? '167px' :
//     location.pathname === '/contact' ? '250px' :
//     '0px'; // fallback value
//     //   نخش بقا على المشكله بتاعة النص ال  svg  وعلى الاسكرول اللى بيحصل بسبب ال  blob svg

//   const addActiveClass = (event: React.MouseEvent<HTMLAnchorElement>) => {
//   if (prevLinkItem) {
//     prevLinkItem.classList.remove('active');
//   }

//   event.currentTarget.classList.add('active');
//   prevLinkItem = event.currentTarget; // خزن العنصر نفسه، مش الـ event
// };



//   return (
//     <>
//      <nav className=" pt-12 pb-8  fixed left-[50%] translate-x-[-50%] z-10 " >
//         <div className={`${styles.navigation}  `} 
// >
//             <ul >

//                 <li >
//                     <Link  to="/"  className="home" onClick={(e)=>{ addActiveClass(e) }} >
//                         <span className={styles.icon} style={{zIndex:5555}}  > <FaHome /> </span>
//                         <span className={styles.text} >Home</span>
//                     </Link>

//                 </li>

//                 <li>
//                     <Link to="/about" className="about" onClick={(e)=>{ addActiveClass(e) }} >
//                         <span className={styles.icon} > <FaInfoCircle/> </span>
//                         <span className={styles.text} >About</span>
//                     </Link>

//                 </li>

//                 <li>
//                     <Link to="/projects" className="project" onClick={(e)=>{ addActiveClass(e) }} >
//                         <span className={styles.icon} ><TbDeviceAnalytics /></span>
//                         <span className={styles.text} >Projects</span>
//                     </Link>

//                 </li>

//                 <li>
//                     <Link to="/contact" className="contact" onClick={(e)=>{ addActiveClass(e) }} >
//                         <span  className={styles.icon} ><IoIosContact /></span>
//                         <span className={styles.text} >ContactUs</span>
//                     </Link>

//                 </li>

//             <div className={`${styles.indicator}   `} style={{transform : ` translateX(${indicatorTranslate}) `}}></div>
            

//             </ul>
//                  <div className="halfCircle absolute inset-0  bg-white/40 backdrop-blur-lg  rounded-[10px] transition-all duration-200  "
//                 //  we answered the navbar problem , indicator problem become coreccted with masks image 
//                style={{
//                     maskImage: `radial-gradient(circle at calc(${indicatorTranslate} + 75px) top, transparent 37px, black 38px)`,
//                     maskRepeat: 'no-repeat',
//                     maskSize: '100% 100%',
//                     }}

                 
//                  ></div>

//         </div>
//     </nav>
//     </>
   
    
//   )
// }

import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import styles from './navbar.module.css';
import {  useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation()
  console.log('path name => ' , location.hash);
  

  const navItems = [
    { path: "#home", label: "Home", icon: <FaHome /> },
    { path: "#about", label: "About", icon: <FaInfoCircle /> },
    { path: "#projects", label: "Projects", icon: <TbDeviceAnalytics /> },
    { path: "#contact", label: "ContactUs", icon: <IoIosContact /> },
  ];

  const currentIndex = navItems.findIndex(item => item.path === location.hash);
  const tabWidth = 84; // Adjust this based on your actual tab width
  const indicatorTranslate = `${tabWidth * (currentIndex !== -1 ? currentIndex : 0)}px`;

  return (
    <nav className="pt-12 pb-8 fixed left-[50%] translate-x-[-50%] z-10">
      <div className={styles.navigation}>
        <ul>
          {navItems.map((item,index) => (
            <li key={item.path}>
              <a
                href={item.path}
                className={`${styles.link} ${location.hash === item.path||(location.hash === ''&& index == 0) ? 'active' : ''}`}
              >
                <span className={styles.icon}>
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
          className="halfCircle absolute inset-0 bg-white/40 backdrop-blur-lg rounded-[10px] transition-clip-path duration-700"
         
        //   لازم نخلى الكيرفى ديناميك بقا
          style={{
               clipPath:
               `path('M 0 0 H 400 V 70  H 0 Z M ${location.hash == "#home"?"38":location.hash == "#about"?"122":location.hash == "#projects"?"205":location.hash == "#contact"?"289":"38" } 0 A 20 20 0 1 0 ${location.hash == "#home"?"114":location.hash == "#about"?"198":location.hash == "#projects"?"281":location.hash == "#contact"?"365":"114" }  0  Z')`
          }}
        ></div>
      </div>
    </nav>
  );
}

//   maskImage: `radial-gradient(circle at calc(${indicatorTranslate} + 75px) top, transparent 37px, black 38px)`,
//             maskRepeat: 'no-repeat',
//             maskSize: '100% 100%',