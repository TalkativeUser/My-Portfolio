import { useNavigate, useParams } from "react-router-dom";
import data from "../../data";


export default function ProjectDetails () {

  const {projectId}=useParams()


    const projDetails=data.projects[Number(projectId)]
    console.log("projectId => ",projectId);
    const navigate=useNavigate()



    return <div className="flex items-center justify-center bg-black/70 " role="dialog" aria-modal="true">
            <div className="relative h-screen bg-slate-900 text-white rounded-2xl border
                border-purple-900/40 p-24 overflow-auto ">
         
                                 <p className=' mb-8 cursor-pointer  ' onClick={()=>{navigate(-1)}} >Back to Projects</p>
                                  <h2 className="text-2xl font-bold mb-3">{projDetails.title}</h2>
                                  {projDetails.description && ( <>
                                  <p className="text-gray-300 mb-4">{projDetails.description} {projDetails.description}{projDetails.description}</p>
    
                                    </>
                                  )}
    
                                  <div className="flex gap-3 mt-4">
                                      {projDetails.repoLink && (
                                        <a
                                          className="px-4 py-2 rounded-md bg-purple-700 hover:bg-purple-600 transition-colors"
                                          href={projDetails.repoLink}
                                          target="_blank"
                                          rel="noreferrer noopener"
                                        >
                                          Source Code
                                        </a>
                                      )}
                                      {projDetails.demoLink && (
                                        <a
                                          className="px-4 py-2 rounded-md bg-pink-700 hover:bg-pink-600 transition-colors"
                                          href={projDetails.demoLink}
                                          target="_blank"
                                          rel="noreferrer noopener"
                                        >
                                          Live Demo
                                        </a>
                                      )}
                              </div>
    
                              <div className='my-5' >
                                <img src={projDetails.gallery[0]} 
                                alt={`${projDetails.title}`} className="w-full aspect-[4/2.1] object-cover rounded-lg border border-slate-700  "  />
                              </div>
    
                            <div className="mb-4">
                            <h3 className="font-semibold mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                              {projDetails.techStack.map((t) => (
                                <span key={t} className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/40">
                                  {t}
                                </span>
                              ))}
                            </div>
                               </div>
    

    
            </div>
          </div>
}