import { motion } from "framer-motion";

const timeline = [
  {
    date: "May 2022",
    title: "Started Programming Fundamentals",
    text: "Began studying programming fundamentals with C++, including OOP concepts, data structures, and algorithms for about 10 months.",
    tags: ["C++", "OOP", "Data Structures", "Algorithms"],
    reverse: false,
  },
  {
    date: "August 2023",
    title: "Started Web Development Journey",
    text: "Started learning web development: HTML, CSS, JavaScript, Bootstrap, jQuery, some JavaScript plugins, then React basics, Git, and GitHub.",
    tags: ["HTML", "CSS", "JavaScript",  "React", "Git", "GitHub"],
    reverse: true,
  },
  {
    date: "Freelance Period",
    title: "Freelance Web Developer",
    text: "Worked on freelance projects building various websites and web applications using the skills I acquired.",
    tags: ["React", "JavaScript", "Web Development"],
    reverse: false,
  },
  {
    date: "October 2024 - January 2025",
    title: "Frontend Developer at Envaglo",
    text: "Worked at Envaglo company in Cairo (Mokattam) for 4 months, developing modern web apps using Next.js and Redux Toolkit.",
    tags: ["Next.js", "Redux Toolkit", "React"],
    reverse: true,
  },

  {
    date: "Present",
    title: "Continuous Learning & Projects",
    text: "Focusing on improving skills in React, Next.js, TypeScript, and state management while building practical projects.",
    tags: ["React", "Next.js", "TypeScript", "State Management"],
    reverse: false,
  },
];


export default function AnimatedTimeline() {
  return (
    <div className="w-full max-w-5xl mx-auto  pb-20 lg:pt-20 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-20 text-pink-300"
      >
        My Learning Journey
      </motion.h2>

      <div className="relative">
        {/* Glow Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-pink-400 shadow-[0_0_20px_#e879f9]"
        />

        <div className="space-y-20  ">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col items-center md:flex-row ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
                       {/* Node */}
              <motion.div
                  className="absolute left-1/2 rounded-full z-10"
                  initial={{ scale: 0, x: "-50%" }}
                  whileInView={{ scale: 1, x: "-50%" }}
                  transition={{ duration: 0.4 }}
                >

                <div className="w-6 h-6 rounded-full bg-pink-200 border-2 border-pink-400 flex items-center justify-center shadow-[0_0_12px_#e879f9]">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                </div>
              </motion.div>

              <motion.div
                className="md:w-[46%] w-full bg-[#ffffff0f] border border-pink-300/40 backdrop-blur-xl rounded-xl p-6 shadow-lg md:px-12 md:mx-6"
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px #e879f9" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm text-pink-300 font-medium mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-pink-100 mb-3">{item.title}</h3>
                <p className="text-pink-100/70 mb-4">{item.text}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-pink-100/10 text-pink-300 border border-pink-300/30 px-3 py-1 rounded-full text-sm hover:bg-pink-100/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}