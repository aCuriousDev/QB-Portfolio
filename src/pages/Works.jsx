import { SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/WorkGridItem";

// img thumb import
import thumbPyralim from "/images/works/logo_pyralim.png";
import Layout from "../components/layout/Article";

export default function Works() {
  return (
    <Layout>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <WorkGridItem id="Pyralim" title="Pyralim" thumbnail={thumbPyralim}>
          Un appli de bilan alimentaire simple et accessible pour reprendre la
          main sur son alimentation
        </WorkGridItem>
        <WorkGridItem id="Natecia" title="Natecia" thumbnail={thumbPyralim}>
          Un appli de bilan alimentaire simple et accessible pour reprendre la
          main sur son alimentation
        </WorkGridItem>
        <WorkGridItem
          id="KMGFrance"
          title="KMG France"
          thumbnail={thumbPyralim}
        >
          Un appli de bilan alimentaire simple et accessible pour reprendre la
          main sur son alimentation
        </WorkGridItem>
      </SimpleGrid>
    </Layout>
  );
}
