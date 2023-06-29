import { SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/WorkGridItem";

import Layout from "../components/layout/Article";
import Section from "../components/Section";
// img thumb import

import thumbPyralim from "/images/works/thumb_pyralim.jpg";
import thumbNatecia from "/images/works/natecia_copil-IHAB_thumb.jpg";
import thumbKMG from "/images/works/thumb_KMG.jpg";
import thumbASDD from "/images/works/thumb_ASDD.jpg";

export default function Works() {
  return (
    <Layout>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="Pyralim" title="Pyralim" thumbnail={thumbPyralim}>
            Un app de bilan alimentaire simple et accessible pour reprendre la
            main sur son alimentation
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="Natecia"
            title="Natecia - IHAB"
            thumbnail={thumbNatecia}
          >
            Accompagnement graphique sur l&apos;obtention du label IHAB, créé
            par l&apos;UNICEF et l&apos;OMS
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="KMGFrance" title="KMG France" thumbnail={thumbKMG}>
            Collaboration étroite sur le developpement d&apos;une chaîne YouTube
            et de son écosystème
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="ASDD" title="ASDD" thumbnail={thumbASDD}>
            Direction d&apos;une association sportive dynamique et prospère,
            avec un focus sur la transition numérique
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  );
}
