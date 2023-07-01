import { Box, Container } from "@chakra-ui/react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router-dom";
import MainAnim from "../MainAnim";
import { useEffect } from "react";

const MainLayout = () => {
  // Update page Title on page change
  const location = useLocation();
  const mainTitle = "Quentin Berger";

  useEffect(() => {
    if (location.pathname !== "/") {
      let currentTitle = "";
      const title = location.pathname.split("/");
      currentTitle = title[title.length - 1];
      console.log(title, currentTitle);
      document.title =
        currentTitle.slice(0, 1).toUpperCase().concat(currentTitle.slice(1)) +
        " | " +
        mainTitle;
    } else document.title = mainTitle;
  }, [location]);

  return (
    <Box pb={8}>
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
