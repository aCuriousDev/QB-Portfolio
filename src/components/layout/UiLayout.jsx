import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -100, y: -0 },
};

const UiLayout = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 1, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
};
export default UiLayout;
