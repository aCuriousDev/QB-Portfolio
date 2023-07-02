import Work from "../../components/Work";
import PdfNatecia from "../../components/PdfNatecia";
import {
  Center,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { WorkImage, Meta, Date } from "../../components/Custom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../../components/Section";
import { ImCheckmark } from "react-icons/im";
import { HiLightBulb, HiLightningBolt, HiStar } from "react-icons/hi";

const Natecia = () => {
  return (
    <Work>
      <WorkImage
        isDisable
        src={"/images/works/thumb_natecia.jpg"}
        alt={"thumb_natecia"}
      />
      <Date>2019 - 2023</Date>
      <Text variant={"section-paragraph"}>
        Dans l&apos;objectif d&apos;obtenir le{" "}
        <Link href="https://www.i-hab.fr/" isExternal>
          label IHAB (Initiative Hôpital Ami des Bébés)
          <ExternalLinkIcon mx={1} boxSize={3} />
        </Link>{" "}
        de l&apos;OMS et de l&apos;UNICEF, qui symbolise l&apos;engagement des
        professionnels de santé pour offrir une naissance respectueuse, sûre et
        bienveillante. J&apos;ai collaboré avec l&apos;équipe pilote de
        l&apos;hôpital privé Natecia pour créer une série de ressources et
        supports graphiques destinés à informer, accompagner et rassurer les
        parents durant cette étape cruciale de leur vie.
      </Text>
      <List ml={4} my={4}>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Website</Meta>
            <Link href="https://natecia.fr/" isExternal>
              https://natecia.fr/
              <ExternalLinkIcon mx={1} boxSize={3} />
            </Link>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Catégorie</Meta>
            <Text>Design Graphique</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Outils</Meta>
            <Text>InDesign, Photohop, Illustrator</Text>
          </Center>
        </ListItem>
      </List>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Impact
        </Heading>
        <StatGroup>
          <Stat>
            <StatLabel>Livrets d&apos;Accueil Distribués / An</StatLabel>
            <StatNumber color="green.400">3300+</StatNumber>
            <StatHelpText>mamans aidées</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Obtention du Label</StatLabel>
            <StatNumber>
              <Icon as={ImCheckmark} boxSize={30} color="green.400" />
            </StatNumber>
            <StatHelpText>validé par l&apos;OMS et l&apos;UNICEF</StatHelpText>
          </Stat>
        </StatGroup>
        <StatGroup>
          <Stat>
            <StatLabel>Supports Produits</StatLabel>
            <StatNumber color="green.400">20+</StatNumber>
            <StatHelpText>et 100 + itérations</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Durée du projet</StatLabel>
            <StatNumber color="green.400">4 ans</StatNumber>
            <StatHelpText>de collaboration</StatHelpText>
          </Stat>
        </StatGroup>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Retrospective
        </Heading>
        <List spacing={4}>
          <ListItem>
            <Text>
              <Tag
                size="lg"
                colorScheme="red"
                borderRadius="full"
                mr={1}
                sx={{ verticalAlign: "baseline" }}
              >
                <Icon as={HiLightningBolt} mr={1} boxSize={4} />
                Challenge
              </Tag>
              Déchiffrer et structurer les attentes d&apos;un client peu
              familier avec la création graphique.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Tag
                size="lg"
                colorScheme="blue"
                borderRadius="full"
                mr={1}
                sx={{ verticalAlign: "baseline" }}
              >
                <Icon as={HiLightBulb} mr={1} boxSize={4} />
                Découverte
              </Tag>
              Créer un support multi-pages destiné à l&apos;impression et à un
              tirage important.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Tag
                size="lg"
                colorScheme="green"
                borderRadius="full"
                mr={1}
                sx={{ verticalAlign: "baseline" }}
              >
                <Icon as={HiStar} mr={1} boxSize={4} />
                Points Forts
              </Tag>
              Impact social important / Suivi d&apos;un projet de A à Z sur 4
              ans / Travail de documentation et de recherche / Liberté
              d&apos;exécution / Interaction avec une équipe passionnée
            </Text>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Livret d&apos;accueil
        </Heading>
        <Text variant={"section-paragraph"} mb={2}>
          Livret permettant d&apos;informer les mamans sur les 3 premiers jours
          de vie avec le nouveau né, fruit de nombreuses sessions de travail et
          allers retours avec l&apos;équipe pilote du projet.
        </Text>
        <PdfNatecia />
        <Text variant={"section-paragraph"}>
          Ce livret est distribué systématiquement à toutes les futures mamans (
          + de 3300 / an ). Il constitue l&apos;élément central de ma
          contribution au projet de labellisation. Chaque page a été
          soigneusement créée pour répondre aux attentes de l&apos;équipe et du
          cahier des charges. La conception a commencé en 2019 et la dernière
          version a été livrée en 2023.
        </Text>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Autres productions
        </Heading>
        <Text variant={"section-paragraph"} mb={2}>
          En parallèle du livret une charte d&apos;accueil et
          d&apos;accompagnement a été produite, disponible en trois langues
          (Français, Anglais, Arabe) elle est affichée dans les services
          concernés. Sa conception m&apos;a demandé de trouver puis de
          travailler avec une traductrice arabe - français.
        </Text>
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>Français</Tab>
            <Tab>English</Tab>
            <Tab>العربية</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WorkImage
                src="/images/works/Natecia-Charte_fr.jpg"
                alt="Natecia-Charte_fr"
              />
            </TabPanel>
            <TabPanel>
              <WorkImage
                src="/images/works/Natecia-Charte_eng.jpg"
                alt="Natecia-Charte_eng"
              />
            </TabPanel>
            <TabPanel>
              <WorkImage
                src="/images/works/Natecia-Charte_arabe.jpg"
                alt="Natecia-Charte_arabe"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Text variant={"section-paragraph"}>
          On peut aussi mentionner l&apos;édition d&apos;un journal interne à
          parution trimestrielle &quot;La Gazette de l&apos;IHAB&quot; (
          <Link
            href="https://www.dropbox.com/scl/fi/iuskeqoae86glm1r4k4qe/Gazette_5_light.pdf?dl=0&rlkey=k3vqlvum3povdn29dt5h0vqon"
            isExternal
          >
            consulter un exemplaire
          </Link>
          ). Ainsi qu&apos;un outil de collecte de données qui a évolué au fur
          et à mesure des retours terrains pour faciliter le travail du
          personnel soignant &quot;Le Rythme de mon Bébé&quot; qui a été conçu
          pour limiter l&apos;impact écologique à l&apos;impression avec des
          jeux de polices et des illustrations adaptées.
        </Text>
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>v0</Tab>
            <Tab>v1</Tab>
            <Tab>v5</Tab>
            <Tab>Schéma client</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WorkImage
                src="/images/works/Natecia-rythme_01.jpg"
                alt="Natecia-Schéma v0"
              />
            </TabPanel>
            <TabPanel>
              <WorkImage
                src="/images/works/Natecia-rythme_02.jpg"
                alt="Natecia-Schéma v"
              />
            </TabPanel>

            <TabPanel>
              <WorkImage
                src="/images/works/Natecia-rythme_04.jpg"
                alt="Natecia-Schéma v3"
              />
            </TabPanel>
            <TabPanel>
              <WorkImage
                src="/images/works/Natecia-rythme_00.jpg"
                alt="Natecia-Schéma Rythme"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Section>
    </Work>
  );
};
export default Natecia;
