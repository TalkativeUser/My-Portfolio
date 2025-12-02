import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook , FaWhatsapp } from "react-icons/fa";
import Squares from "../../components/ui/squers";
import TextEffect3D from "../../components/TextEffect3D/textEffect3d";
import { useForm, ValidationError } from '@formspree/react';
import ToastMsg from "../../components/Toast/Toast";
import Loader from "../../components/Loader/Loader";

export default function ContactUs() {

  const [state, handleSubmit] = useForm("xgvjelzn");

 const contactInfo = [
    { icon: <FaEnvelope className="text-2xl text-purple-400" />, text: "morshedy480@gmail.com" },
    { icon: <FaPhone className="text-2xl text-purple-400" />, text: "01020768377" },
    { icon: <FaMapMarkerAlt className="text-2xl text-purple-400" />, text: "Eygpet Kafr AL-shikh, Desouk" }
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-2xl" />, url: "https://github.com/TalkativeUser" },
    { icon: <FaLinkedin className="text-2xl" />, url: "https://www.linkedin.com/in/mohammed-morshidy-khfagy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaFacebook className="text-2xl" />, url: "https://www.facebook.com/mhmd.mrshdy.542668" },
    { icon: <FaWhatsapp className="text-2xl" />, url: "https://wa.me/201020768377" }
  ];

  return (
    <motion.div 
      className={`min-h-screen relative pt-10 md:pt-36 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 md:px-12 lg:px-24 xl:px-32 pb-20 `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`max-w-6xl mx-auto relative z-10 `}>
     
            <div className="relative w-full h-24 sm:h-16 md:h-32 lg:h-36 xl:h-38 ">
                  <TextEffect3D  text={'Contact'} />
            </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 text-xl py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white"
                  placeholder="John Doe"
                  required
                />

                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />

              </div>


              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-xl px-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white"
                  placeholder="john@example.com"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />

              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full text-xl px-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white"
                  placeholder="How can I help you?"
                  required
                />
                 <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                />

              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full text-xl px-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white resize-none"
                  placeholder="I'd like to discuss a potential project..."
                  required
                ></textarea>
                 <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />

              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full md:w-60 text-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
             { state.submitting ?<Loader/> :" Send Message" }
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm  p-8 rounded-xl border border-purple-900/30 h-full">
              <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <p className="text-gray-300 text-xl ">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" w-12 h-12 flex items-center justify-center bg-slate-700/50 hover:bg-slate-700/80 rounded-full transition-colors duration-300 text-purple-300 hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
     
      </div>
    
      <div className="absolute inset-0 z-0">
                <Squares 
                  speed={0}
                  squareSize={50}
                  direction="diagonal"
                  borderColor="rgba(147, 51, 234, 0.3)" 
                  hoverFillColor="#a855f7"
                />
          </div>

{state.succeeded && <ToastMsg /> }
          
    </motion.div>
  );
}