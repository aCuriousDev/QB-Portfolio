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
  Box,
  AspectRatio,
  Badge,
  Code,
  Stack,
} from "@chakra-ui/react";
import { WorkImage, Meta } from "../../components/Custom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../../components/Section";
import { ImCheckmark } from "react-icons/im";
import { FaReact } from "react-icons/fa";
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
          Principe
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
            Tester la démo
          </Button>
        </Center>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Version actuelle
        </Heading>
        <Text variant={"section-paragraph"} my={2}>
          Le prototype fût approuvé par toute l&apos;équipe il était temps de
          développer une nouvelle version plus robuste et capable
          d&apos;intégrer des fonctionnalités supplémentaires comme une page
          d&apos;accueil, un tutoriel, une page de résultats, l&apos;envoie des
          résultats vers une base de données et l&apos;authentification.
        </Text>

        <Text variant={"section-paragraph"} my={2}>
          Le choix de React{" "}
          <Icon
            as={FaReact}
            boxSize={4}
            color="#149ECA"
            verticalAlign={"middle"}
          />{" "}
          s&apos;impose naturellement étant une framework populaire il dispose
          de nombreuses librairies et d&apos;une documentation complète.
        </Text>
        <Stack>
          <Link
            href="https://github.com/aCuriousDev/pyra-alim-app-v2"
            isExternal
          >
            Voir le Repository sur GitHub
            <ExternalLinkIcon mx={1} boxSize={3} />
          </Link>
          <Link href="https://pyra-alim.netlify.app/" isExternal>
            Voir la version en ligne
            <ExternalLinkIcon mx={1} boxSize={3} />
          </Link>
        </Stack>
        <AspectRatio ratio={16 / 9} minH={750}>
          <iframe
            src="https://pyra-alim.netlify.app/"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </AspectRatio>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Early Dev
        </Heading>
        <Text variant={"section-paragraph"} mb={2}>
          Ma première approche est d&apos;utiliser les outils que je connais
          déjà et rester simple :
          <Tag size="md" colorScheme="yellow" borderRadius="full" pl={0}>
            Javascript
          </Tag>{" "}
          <Tag size="md" colorScheme="blue" borderRadius="full" pl={0}>
            HTML
          </Tag>{" "}
          <Tag size="md" colorScheme="green" borderRadius="full" pl={0}>
            CSS
          </Tag>
          . Le GitHub de cette première itération est disponible ici :{" "}
          <Link isExternal href="https://github.com/aCuriousDev/Pyra-Alim-App">
            https://github.com/aCuriousDev/Pyra-Alim-App
          </Link>
        </Text>
        <AspectRatio ratio={16 / 9} minH={600}>
          <iframe
            src="https://acuriousdev.github.io/Pyra-Alim-App/"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </AspectRatio>
        <Badge>iframe du premier proto</Badge>
        <Text variant={"section-paragraph"} mt={2}>
          Le challenge principal fût la gestion des événements
          d&apos;interactions avec les cartes pour lesquels je me résolu à
          utiliser une librairie légère sans dépendance : <Code>hammer.js</Code>
          <br />
          En créant des events listeners elle me permettait d&apos;exécuter une
          fonction lorsque l&apos;utilisateur commençait à toucher la carte{" "}
          <Code>onPan()</Code> puis une autre fonction lorsqu&apos;il la
          déplaçait <Code>onTap</Code> et la relâchait <Code>isFinal</Code>.
        </Text>
        <Tabs isFitted>
          <TabList>
            <Tab>onTap( )</Tab>
            <Tab>onPan( )</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WorkImage
                src={"/images/code/pyralim_onTap.png"}
                alt={"code pyralim_onTap"}
              />
            </TabPanel>
            <TabPanel>
              <WorkImage
                src={"/images/code/pyralim_onPan.png"}
                alt={"code pyralim_onTap"}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Text variant={"section-paragraph"} mt={2}>
          La position relative au point de départ de la carte permet de mesurer
          un delta qui comparé à la position initiale permettra de déterminer la
          direction du swipe et appliquera une transformation afin de faire
          sortir la carte du DOM via une animation dynamique. Une fois ces
          fonctionnalités créées il ne suffisait plus que de créer un handler
          qui dans lequel on ferait passer uniquement la carte la plus haute
          dans la pile.
        </Text>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Conception
        </Heading>
        <Text variant={"section-paragraph"} mb={2}>
          J&apos;ai commencé par décrire les fonctionnalités de base et réaliser
          quelques schémas du fonctionnement et de l&apos;interface. En
          utilisant la base de donnée et les illustration fournies, rapidement
          j&apos; pu créer deux premiers prototypes interactifs sous Figma,
          disponibles ci-dessous :
        </Text>
        <Tabs
          variant="solid-rounded"
          colorScheme="twitter"
          isFitted
          isLazy={true}
          lazyBehavior={"keepMounted"}
        >
          <TabList>
            <Tab>v1</Tab>
            <Tab>v2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <Link
                  href="https://www.figma.com/proto/viYVY3iYPrpFeBSne14FI8/Alim'App?page-id=58%3A43&type=design&node-id=58-45&viewport=717%2C562%2C0.09&t=CSmaouSILc09Xeft-1&scaling=min-zoom&starting-point-node-id=58%3A45&hide-ui=1"
                  isExternal
                >
                  lien vers le proto 01
                </Link>
                <AspectRatio ratio={9 / 19.5}>
                  <iframe
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FviYVY3iYPrpFeBSne14FI8%2FAlim'App%3Fpage-id%3D58%253A43%26type%3Ddesign%26node-id%3D58-45%26viewport%3D717%252C562%252C0.09%26t%3DCSmaouSILc09Xeft-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D58%253A45"
                  />
                </AspectRatio>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Link
                  href="https://www.figma.com/proto/viYVY3iYPrpFeBSne14FI8/Alim'App?page-id=58%3A43&node-id=58-114&viewport=717%2C562%2C0.09&t=xKJqjmko43OvBOTN-8&scaling=min-zoom&starting-point-node-id=58%3A114&hide-ui=1"
                  isExternal
                >
                  lien vers le proto 02
                </Link>
                <AspectRatio ratio={9 / 19.5}>
                  <iframe
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FviYVY3iYPrpFeBSne14FI8%2FAlim'App%3Fpage-id%3D58%253A43%26type%3Ddesign%26node-id%3D58-122%26viewport%3D717%252C562%252C0.09%26t%3DCSmaouSILc09Xeft-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D58%253A114"
                  />
                </AspectRatio>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Text variant={"section-paragraph"}>
          En plus des prototypes, je réalise une Flowchart de l&apos;application
          ainsi que quelques concepts d&apos;éléments UI :
        </Text>
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>Flow Chart</Tab>
            <Tab>UI 1</Tab>
            <Tab>UI 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WorkImage
                src="/images/works/pyralim_Flow Chart App Alim01.png"
                alt="pyralim_Flow Chart App Alim01"
              />
            </TabPanel>
            <TabPanel>
              <WorkImage
                src="/images/works/pyralim_early_concept01.jpg"
                alt="pyralim_early_concept01"
              />
            </TabPanel>

            <TabPanel>
              <WorkImage
                src="/images/works/pyralim_early_concept02.jpg"
                alt="pyralim_early_concept02"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Section>
    </Work>
  );
};

export default Pyralim;
