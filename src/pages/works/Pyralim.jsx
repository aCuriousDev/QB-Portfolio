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
  Button,
} from "@chakra-ui/react";
import { WorkImage, Meta } from "../../components/Custom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../../components/Section";
import { ImCheckmark } from "react-icons/im";
import { HiLightBulb, HiLightningBolt, HiStar } from "react-icons/hi";
import Work from "../../components/Work";
import { VscArrowRight } from "react-icons/vsc";

const Pyralim = () => {
  return (
    <Work>
      <Text variant={"section-paragraph"}>
        Application permettant de réaliser un bilan alimentaire rapide pour
        prendre conscience de ses habitudes de consommation. Simple et ludique
        elle est en cours de développement. Un prototype fonctionnel est déjà
        disponible sous la forme d&apos;une web app.
      </Text>
      <List ml={4} my={4}>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Website</Meta>
            <Link href="https://pyra-alim.netlify.app/" isExternal>
              https://pyra-alim.netlify.app/
              <ExternalLinkIcon mx={1} boxSize={3} />
            </Link>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>GitHub</Meta>
            <Link
              href="https://github.com/aCuriousDev/pyra-alim-app-v2"
              isExternal
            >
              Pyralim App Repository
              <ExternalLinkIcon mx={1} boxSize={3} />
            </Link>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Catégorie</Meta>
            <Text>Développement</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Outils</Meta>
            <Text> React, Framer Motion, Swipeable, Vite</Text>
          </Center>
        </ListItem>
      </List>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Perspective
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
              Développer un application capable de remplir les besoins du client
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
              React et son écosystème, Firebase pour la gestion de base de
              données et l&apos;authentification
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
              Projet Utile / Opportunité d&apos;Apprentissage / Contraintes
              Réelles / Liberté Technologique
            </Text>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Concept
        </Heading>
        <Text variant={"section-paragraph"} mb={2}>
          L&apos;appli Pyralim a été conçu pour éveiller sa conscience
          alimentaire en proposant à l&apos;utilisateur de faire le tri dans son
          alimentation.
          <br /> Chaque catégorie d&apos;aliments est représentée par une carte
          que l&apos;on peut manipuler pour la faire glisser dans la direction
          correspondant à la fréquence de consommation, façon Tinder. Pour
          comprendre le plus simple est de la tester !
        </Text>
        <Center mt={6}>
          <Button
            as={Link}
            isExternal
            href={"https://pyra-alim.netlify.app/"}
            colorScheme="green"
            rightIcon={<VscArrowRight fontSize={"1.1rem"} />}
          >
            Tester Pyralim
          </Button>
        </Center>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Autres productions
        </Heading>
        <Text variant={"section-paragraph"} mb={2}>
          En parallèle
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
            <Tab>Schéma</Tab>
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

export default Pyralim;
