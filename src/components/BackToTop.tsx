import { ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0EA5E9] text-white shadow-lg hover:bg-[#0EA5E9]/90 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToBottom}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0EA5E9] text-white shadow-lg hover:bg-[#0EA5E9]/90 transition-all duration-300"
        aria-label="Scroll to bottom"
      >
        <ArrowDown size={20} />
      </motion.button>
    </div>
  );
};

export default BackToTop;
