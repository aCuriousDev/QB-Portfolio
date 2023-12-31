import { motion } from "framer-motion";
import CustomBreadCrumbs from "../CustomBreadCrumbs";
import { Container } from "@chakra-ui/react";

const variants = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 40 },
};

const Layout = ({ children }) => {
  return (
    <Container>
      <CustomBreadCrumbs />
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.6, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        {children}
      </motion.article>
    </Container>
  );
};

export default Layout;
