import { SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/WorkGridItem";

// img thumb import
import thumbPyralim from "/public/images/works/logo_pyralim.png";

export default function Works() {
  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <WorkGridItem id="pyralim" title="Pyralim" thumbnail={thumbPyralim}>
          Un appli de bilan alimentaire simple et accessible pour reprendre la
          main sur son alimentation
        </WorkGridItem>
      </SimpleGrid>
    </>
  );
}
