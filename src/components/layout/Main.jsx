import { Box, Container } from "@chakra-ui/react";
import NavBar from "../NavBar";

const Main = ({ children }) => {
  return (
    <Box pb={8}>
      <NavBar />
      <Container maxW="container.sm" pt={14}>
        {children}
      </Container>
    </Box>
  );
};
export default Main;
