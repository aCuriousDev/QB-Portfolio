import Work from "../../components/Work";
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  Stat,
  StatArrow,
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
  useColorModeValue,
} from "@chakra-ui/react";
import { WorkImage, Meta } from "../../components/Custom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../../components/Section";
import { HiLightBulb, HiLightningBolt, HiStar } from "react-icons/hi";

const KMGFrance = () => {
  return (
    <Work>
      <Text variant={"section-paragraph"}>
        Afin d&apos;atteindre une nouvelle cible Emmanuel Ayache, directeur de
        Krav Maga Global France (KMG France) à développer une stratégie de
        contenu sur YouTube et d&apos;autres réseaux sociaux. Ensemble nous
        avons déployé et peaufiné sa vision au travers d&apos;une collaboration
        riche et variée.
      </Text>
      <List ml={4} my={4}>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>YouTube</Meta>
            <Link
              href="https://www.youtube.com/user/KravMagaGlobalFrance"
              isExternal
            >
              KravMagaGlobalFrance
              <ExternalLinkIcon mx={1} boxSize={3} />
            </Link>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Website</Meta>
            <Link href="https://www.kravmagaglobal.fr/" isExternal>
              https://www.kravmagaglobal.fr/
              <ExternalLinkIcon mx={1} boxSize={3} />
            </Link>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Catégorie</Meta>
            <Text>Création de Contenu</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Outils</Meta>
            <Text>Caméra, Premiere Pro, After Effect, Photoshop</Text>
          </Center>
        </ListItem>
      </List>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Impact
        </Heading>
        <StatGroup>
          <Stat>
            <StatLabel>Vues réalisées</StatLabel>
            <StatNumber color="green.400">4M+</StatNumber>
            <StatHelpText>220 000 heures visionnées</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Augmentation des abonnées</StatLabel>

            <StatNumber color="green.400">+600%</StatNumber>

            <StatHelpText>
              <StatArrow type="increase" />
              10k à 70k
            </StatHelpText>
          </Stat>
        </StatGroup>
        <StatGroup>
          <Stat>
            <StatLabel>Vidéos Produites</StatLabel>
            <StatNumber color="green.400">200+</StatNumber>
            <StatHelpText>du tournage à l&apos;upload </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Projets connexes</StatLabel>
            <StatNumber color="green.400">100+</StatNumber>
            <StatHelpText>défis relevés</StatHelpText>
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
              Produire du contenu de &quot;A à Z&quot; en respectant un planning
              de parution rythmé.
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
              Standardiser et mesurer son efficacité pour optimiser son temps de
              travail.
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
              Maîtrise de bout en bout / Responsabilité / Autonomie / Travail en
              Synergie / Recherche & Veille
            </Text>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          YouTube
        </Heading>
        <Text variant={"section-paragraph"} mb={4}>
          Avec un objectif initial de 3 vidéos / semaine, ce rythme de parution
          permis à la chaîne de rapidement multiplier le nombre de viewers.
          Travaillant à la fois en amont pour capter et produire vidéos,
          miniatures et description et en aval pour collecter analyser les
          performances de chacune d&apos;entre elles et ainsi optimiser la
          prochaine série de publication.
        </Text>
        <AspectRatio
          ratio={16 / 9}
          sx={{ borderRadius: "lg", overflow: "hidden" }}
        >
          <iframe
            title="Video YT KMG France"
            src="https://www.youtube.com/embed/tRYw_Dln-pY"
          />
        </AspectRatio>
        <Center>
          <Text
            as={"i"}
            fontSize={"sm"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Vidéo de la chaîne totalisant 600k + vues
          </Text>
        </Center>
        <Link href="/images/works/kmgfrance-statsYT.png" isExternal>
          <WorkImage
            src="/images/works/kmgfrance-statsYT.png"
            alt="kmgfrance-statsYT"
          />
        </Link>
        <Center>
          <Text
            textAlign={"center"}
            as={"i"}
            fontSize={"sm"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Vert le nombre de vidéos publiées, en violet le nombre de vues sur
            la période Sept. 2019 - Janv. 2022
          </Text>
        </Center>
        <Text mt={2}>
          Le lancement de la stratégie de contenu a commencé en avril 2020 et a
          permis d&apos;atteindre les chiffres présentés dans &quot;Impact&quot;
          ci-dessus. Réutilisant et adaptant le contenu créer à d&apos;autres
          plateformes a également été positif avec des vidéos générant
          jusqu&apos;à 1M de vues sur Facebook notamment.
        </Text>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Autres productions
        </Heading>
        <Text variant={"section-paragraph"} mb={2}>
          De nombreuses autres réalisations ont été faites en collaboration avec
          KMG France, entre autre un design web pour la page d&apos;accueil du
          site de la société réalisé sur Figma, responsive et avec interactions
          :
        </Text>
        <Box mb={4}>
          <iframe
            width="100%"
            height="600"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBpFmWIgc8FNSMu2fy0M3AA%2FKMG-FRANCE-HOMEPAGE%3Fpage-id%3D0%253A1%26node-id%3D113-1%26starting-point-node-id%3D1%253A2%26mode%3Ddesign%26t%3DaqTHDBv0rBdRy1d3-1"
            allowFullScreen
          />
        </Box>
        <Text variant={"section-paragraph"}>
          La création d&apos;une charte graphique et d&apos;une banque de
          modèles graphiques pour unifier l&apos;image de la marque dans les
          clubs partenaire :
        </Text>
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>Page 01</Tab>
            <Tab>Page 02</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WorkImage
                src="/images/works/kmgfrance_pack01.jpg"
                alt="kmgfrance_pack01"
              />
            </TabPanel>
            <TabPanel>
              <WorkImage
                src="/images/works/kmgfrance_pack02.jpg"
                alt="kmgfrance_pack02"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Text variant={"section-paragraph"}>
          C&apos;est plus d&apos;une centaine de projets qui ont été réalisés
          dans le cadre de cette collaboration, une partie consistant à la
          productions de formations et des visuels les accompagnants
          consultables directement sur le site :{" "}
        </Text>
        <Center>
          <Link href="https://www.kravmagauniversity.fr/promo" isExternal>
            https://www.kravmagauniversity.fr/
            <ExternalLinkIcon mx={1} boxSize={3} />
          </Link>
        </Center>
        <WorkImage
          src="/images/works/kmgfrance-formations.png"
          alt="kmgfrance-formations"
        />
      </Section>
    </Work>
  );
};

export default KMGFrance;
