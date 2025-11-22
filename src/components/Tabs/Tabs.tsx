import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0]?.id || ''
  );

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full px-4 my-10">
      <div className="w-full max-w-4xl  ">
        {/* Tab Headers */}
        <div className=" flex ">
          {tabs.map((tab,idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-5 py-2 font-semibold text-sm ${idx==0 ? "rounded-tl-xl " : idx== 2 ?"rounded-tr-xl ":""}
                transition
                ${
                  activeTab === tab.id
                    ? 'bg-white/10 backdrop-blur-sm text-white'
                    : ' bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'
                }
              `}
            >
              {tab.label}
          
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[220px] p-4  shadow-sm bg-white/10 backdrop-blur-sm rounded-tr-xl rounded-br-xl rounded-bl-xl ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTabContent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
