import { Container } from "@chakra-ui/react";
import Layout from "./layout/Article";

const Work = ({ children }) => {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
};
export default Work;
