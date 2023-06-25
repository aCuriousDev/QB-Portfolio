import { forwardRef, Box, Container } from "@chakra-ui/react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import CustomBreadCrumbs from "../CustomBreadCrumbs";

const MainLayout = () => {
  return (
    <Box pb={8}>
      <NavBar />
      <Container maxW="container.sm" pt={14}>
        <CustomBreadCrumbs />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
export default MainLayout;
