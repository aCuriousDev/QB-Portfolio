import { Box, Container, Image } from "@chakra-ui/react";
// import { motion } from "framer-motion";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import CustomBreadCrumbs from "../CustomBreadCrumbs";
import MainAnim from "../MainAnim";

const MainLayout = () => {
  return (
    <Box pb={8}>
      <NavBar />
      <Container maxW="container.sm" pt={20}>
        <MainAnim />
        <CustomBreadCrumbs />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
export default MainLayout;
