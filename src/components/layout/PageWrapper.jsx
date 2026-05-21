import { motion } from "framer-motion";
import { pageTransition } from "../../utils/animations";

/*
  PageWrapper
  -----------
  Wrap every page inside this component.
  It adds smooth page-enter animations automatically.
*/

const PageWrapper = ({ children }) => {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-[#0a0a0a] text-white"
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
