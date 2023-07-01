import { Container } from "@chakra-ui/react";
import Layout from "./layout/Article";
import ScrollToTop from "./ScrollToTop";
import { Date } from "./Custom";

const Work = ({ children }) => {
  return (
    <Layout>
      <ScrollToTop />
      <Container>{children}</Container>
    </Layout>
  );
};
export default Work;
