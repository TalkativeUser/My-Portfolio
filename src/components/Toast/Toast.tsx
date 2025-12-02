import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ToastMsg() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white fixed top-6 left-1/2 z-[999999999]
            rounded-lg shadow-[0_0_25px_#e879f9] border-pink-300/40 text-xl p-3  "
          initial={{ y: -50 , x: "-50%" , opacity: 0 }}
          animate={{ y: 0, x: "-50%" , opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p> sended message success ✅ </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
