import { Box, Container, Image } from "@chakra-ui/react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import CustomBreadCrumbs from "../CustomBreadCrumbs";
import WalkingAnim from "../MainAnim";

const MainLayout = () => {
  return (
    <Box pb={8}>
      <NavBar />
      <Container maxW="container.sm" pt={20}>
        {/* <Image src="https://place-hold.it/800x300?text=Something Here" mb={2}/> */}
        <WalkingAnim/>
        <CustomBreadCrumbs />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
export default MainLayout;
