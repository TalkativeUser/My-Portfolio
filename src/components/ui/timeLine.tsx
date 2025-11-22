import { motion } from "framer-motion";

const timeline = [
  {
    date: "August 2024",
    title: "Beginning My Coding Journey",
    text: "Started learning HTML, CSS, and JavaScript fundamentals through online courses and tutorials.",
    tags: ["HTML", "CSS", "JavaScript Basics"],
  },
  {
    date: "November 2024",
    title: "Diving into React",
    text: "Learned the core concepts like components, props, and state, then moved into hooks & advanced patterns.",
    tags: ["React", "Components", "Hooks"],
  },
  {
    date: "April 2025",
    title: "Exploring Next.js & Tailwind",
    text: "Started building more advanced UI with Next.js server-side rendering + Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
  },
];

export default function LearningTimeline() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16">
      <h2 className="text-center text-4xl font-bold mb-16">
        My Learning Journey
      </h2>

      <div className="flex flex-col items-center " >


           <div
                className={` 
                  bg-white shadow-lg rounded-xl p-6 basis-full w-[300px]
               
                `}
              >
                <p className="text-teal-600 font-semibold">22/11/2025</p>
                <h3 className="text-xl font-bold mb-2">my title</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat odit commodi cupiditate!</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["HTML", "CSS", "JavaScript Basics"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
           <div
                className={` 
                  bg-white shadow-lg rounded-xl p-6 basis-full w-[300px]
               
                `}
              >
                <p className="text-teal-600 font-semibold">22/11/2025</p>
                <h3 className="text-xl font-bold mb-2">my title</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat odit commodi cupiditate!</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["HTML", "CSS", "JavaScript Basics"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
           <div
                className={` 
                  bg-white shadow-lg rounded-xl p-6 basis-full w-[300px]
               
                `}
              >
                <p className="text-teal-600 font-semibold">22/11/2025</p>
                <h3 className="text-xl font-bold mb-2">my title</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat odit commodi cupiditate!</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["HTML", "CSS", "JavaScript Basics"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            


      </div>

      {/* الخط الأساسي */}
     
    </div>
  );
}












//  <div className="relative mx-auto border-l-4 border-teal-300 h-full" style={{ left: "50%" }}>

//         {timeline.map((item, idx) => {
//           const isLeft = idx % 2 === 0; // للشاشات الكبيرة فقط

//           return (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="relative mb-20"
//             >

//               {/* الدائرة */}
//               <div className="absolute left-[-10px] top-2 w-5 h-5 bg-teal-400 border-4 border-white rounded-full z-20"></div>

//               {/* نسخة الديسكتوب */}
//               <div
//                 className={`
//                   hidden md:block 
//                   bg-white shadow-lg rounded-xl p-6 w-[430px] relative z-10
//                   absolute top-0
//                   ${isLeft ? "right-[calc(50%+10px)]" : "left-[calc(50%+10px)]"}
//                 `}
//               >
//                 <p className="text-teal-600 font-semibold">{item.date}</p>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.text}</p>

//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {item.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* نسخة الموبايل */}
//               <div className="md:hidden bg-white shadow-lg rounded-xl p-6 w-full ml-6 sm:ml-8">
//                 <p className="text-teal-600 font-semibold">{item.date}</p>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.text}</p>

//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {item.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//             </motion.div>
//           );
//         })}

//       </div>