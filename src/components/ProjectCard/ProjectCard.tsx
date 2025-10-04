// import reduxIcon from "../../assets/react-icon-28.jpg";
// import Tilt from 'react-vanilla-tilt'

// //  important notic 
// //  عشان العنصر tilt  يتحرك كويس ويعمل الانيميشن بتاعه بشكل كويس لازم الاب بتاع ال  tilt  ياخد الخاصيتين دول  [transform-style:preserve-3d] [perspective:1000px]

// export default function ProjectCard({ productName }: { productName: string }) {
//   return (
//     <Tilt options={{speed:400 , max:40 }} style={{ }} className=" [transform-style:preserve-3d] [perspective:1000px]"  >
//   <div className="bg-white rounded-xl overflow-hidden container  ">
//       <div className="card relative group ">
//         <div className="imgBx overflow-hidden ">
//               <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s"
//                     alt="project image"
//                     className=" w-full object-cover  group-hover:scale-[1.2] transition-all duration-300 "
//                     style={{ aspectRatio: "4/2.3" }}
//                   />
//         </div>
    

//         <div className="projDetails px-4 rounded-lg bg-white   ">
//           <h3 className="mt-4 mb-2 text-xl font-bold  ">{productName}</h3>
//           <p className="mb-3">
//             This project is a modern, fully functional e-commerce website built
//             using React and Tailwind CSS. Designed with a seamless user
//             experience in mind, the platform includes all essential features
//             needed for a smooth online shopping experience.
//           </p>

//           <div className="techStackIcons  pb-1  flex gap-3 ">
//             <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
//             <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
//             <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
//             <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
//             <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
//             <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
//             <img src={reduxIcon} alt="redux icon" className="w-5 h-5" />
//           </div>

//           <div className="details flex justify-end ">
//             <div className="mb-3 py-1  flex items-center  ">
//               <h5 className="font-medium me-1 ">View Details </h5>
//               <svg
//                 className="w-6 h-7 text-gray-800 dark:text-white"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M19 12H5m14 0-4 4m4-4-4-4"
//                 />
//               </svg>
//             </div>
//           </div>



//         </div>
//       </div>
//     </div>
//     </Tilt>
  
//   );
// }



import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  index: number;
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  source_code_link: string;
  demo_link: string;
}

const ProjectCard = ({ 
  index, 
  title, 
  description, 
  tags, 
  image,
  source_code_link,
  demo_link
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-3">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-500 flex items-center justify-center text-white transition-colors"
              aria-label="View Source Code"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-pink-600/80 hover:bg-pink-500 flex items-center justify-center text-white transition-colors"
              aria-label="View Live Demo"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;