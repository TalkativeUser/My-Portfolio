import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from './contactUs.module.css';
import Squares from "../../components/ui/squers";
import TextEffect3D from "../../components/TextEffect3D/textEffect3d";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-2xl text-purple-400" />, text: "your.email@example.com" },
    { icon: <FaPhone className="text-2xl text-purple-400" />, text: "+1 (555) 123-4567" },
    { icon: <FaMapMarkerAlt className="text-2xl text-purple-400" />, text: "San Francisco, CA" }
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-2xl" />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin className="text-2xl" />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter className="text-2xl" />, url: "https://twitter.com/yourusername" }
  ];

  return (
    <motion.div 
      className={`min-h-screen pt-36 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 md:px-12 lg:px-24 xl:px-32 pb-20 `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`max-w-6xl mx-auto relative z-10 `}>
     
          <div className="relative mt-10 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-4 w-full h-24 sm:h-16 md:h-32 lg:h-36 xl:h-38 ">
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white resize-none"
                  placeholder="I'd like to discuss a potential project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Send Message
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
                    <p className="text-gray-300">{item.text}</p>
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
                      className="w-12 h-12 flex items-center justify-center bg-slate-700/50 hover:bg-slate-700/80 rounded-full transition-colors duration-300 text-purple-300 hover:text-white"
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
    </motion.div>
  );
}