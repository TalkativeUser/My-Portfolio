import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export interface ProjectCardProps {
  index?: number;
  id: number;
  title: string;
  description: string;
  techStack: string[];
  gallery: string[];
  repoLink: string;
  demoLink: string;
}

const ProjectCard = ({ 
  index, 
  id,
  title, 
  description, 
  techStack, 
  gallery,
  repoLink ,
  demoLink
}: ProjectCardProps) => {
const navigate=useNavigate()

  const handleOpenDetails = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // you should send id insted of index but dont happen that because i use staic data insted of dynamic data from apis
    navigate(`${index}`)
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring",  index ? index * 0.2 : 0, 0.75)}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
      onClick={handleOpenDetails}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleOpenDetails(e as unknown as MouseEvent<HTMLDivElement>); } }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={gallery[0]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-3">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-500 flex items-center justify-center text-white transition-colors"
              aria-label="View Source Code"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-pink-600/80 hover:bg-pink-500 flex items-center justify-center text-white transition-colors"
              aria-label="View Live Demo"
              onClick={(e) => e.stopPropagation()}
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
          {techStack.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <h5 className="text-end text-white mb-auto ">view details</h5>
      </div>
    </motion.div>
  );
};

export default ProjectCard;