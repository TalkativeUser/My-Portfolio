import { useNavigate, useParams } from "react-router-dom";
import data from "../../data";
import Carousel from "../Carousel/Carousel";
import Tabs from "../Tabs/Tabs";


 





export default function ProjectDetails () {

  const {projectId}=useParams()


    const projDetails=data.projects[Number(projectId)]
    console.log("projectId => ",projectId);
    const navigate=useNavigate()

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <div className="p-4 text-white">
        <h2 className="text-xl font-bold mb-2">Overview</h2>
        <p>{projDetails.tabsData.overview}</p>
      </div>
    ),
  },
  {
    id: "challenge",
    label: "Challenge",
    content: (
      <div className="p-4 text-white">
        <h2 className="text-xl font-bold mb-2">Challenge</h2>
        <p>{projDetails.tabsData.challenge}</p>
      </div>
    ),
  },
  {
    id: "solutions",
    label: "Solutions",
    content: (
      <div className="p-4 text-white">
        <h2 className="text-xl font-bold mb-2">Solutions</h2>
        <p>{projDetails.tabsData.solutions}</p>
      </div>
    ),
  },
];

    return <div className="flex relative items-center justify-center  " role="dialog" aria-modal="true">
            <div className=" h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900  text-white rounded-2xl border
                border-purple-900/40 p-5 sm:p-10 md:p-24 overflow-auto  ">

                <div className="max-w-full md:max-w-4xl mt-24 m-auto " >

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
             
         
                           
    
                 
                             {/* tech stack */}
                            <div className="my-10 ">
                            <h3 className="font-semibold mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                              {projDetails.techStack.map((t) => (
                                <span key={t} className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/40">
                                  {t}
                                </span>
                              ))}
                            </div>
                               </div>
                               
                              <Carousel images={projDetails.gallery} />
                              <Tabs tabs={tabs} defaultActiveTab="overview" />  

                </div>

                                 
            </div>
         
          </div>
}