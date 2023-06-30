import { Box, Container } from "@chakra-ui/react";
// import { motion } from "framer-motion";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import MainAnim from "../MainAnim";
import ScrollToTop from "../ScrollToTop";

const MainLayout = () => {
  return (
    <Box pb={8}>
      {/* <ScrollToTop /> */}
      <NavBar />
      <Container maxW="container.sm" pt={20}>
        <MainAnim />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
export default MainLayout;
