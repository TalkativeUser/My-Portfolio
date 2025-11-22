import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../../components/Carousel/Carousel';
import Tabs from '../../components/Tabs/Tabs';

// Mock data - replace with your actual data
const projectData = {
  title: 'Project Title',
  description: 'A brief description of the project goes here. This project showcases various technologies and solutions.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  images: [
    'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Project+Screenshot+1',
    'https://via.placeholder.com/800x500/10b981/ffffff?text=Project+Screenshot+2',
    'https://via.placeholder.com/800x500/8b5cf6/ffffff?text=Project+Screenshot+3',
  ],
  features: [
    'Responsive design that works on all devices',
    'Modern UI with smooth animations',
    'Optimized performance and fast loading times',
    'Clean and maintainable codebase',
  ],
  challenges: [
    'Implementing complex state management',
    'Optimizing for mobile performance',
    'Ensuring cross-browser compatibility',
    'Meeting tight deadlines',
  ],
  problems: [
    'Initial performance bottlenecks',
    'Responsive design challenges',
    'State management complexity',
    'Third-party API integration issues',
  ],
};

const ProjectDetails: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const tabs = [
    {
      id: 'features',
      label: 'Project Features',
      content: (
        <ul className="space-y-2">
          {projectData.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <svg
                className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </motion.li>
          ))}
        </ul>
      ),
    },
    {
      id: 'challenges',
      label: 'Project Challenges',
      content: (
        <ul className="space-y-2">
          {projectData.challenges.map((challenge, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <svg
                className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {challenge}
            </motion.li>
          ))}
        </ul>
      ),
    },
    {
      id: 'problems',
      label: 'Problems & Solutions',
      content: (
        <ul className="space-y-3">
          {projectData.problems.map((problem, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="font-medium text-gray-900 dark:text-gray-100">
                {problem}
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Implemented solution details would go here with technical details.
              </div>
            </motion.li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-8 max-w-6xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {projectData.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {projectData.description}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <Carousel images={projectData.images} />
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
        {projectData.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <Tabs tabs={tabs} />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition-colors"
        >
          View Live Demo
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg text-center transition-colors"
        >
          View Source Code
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
