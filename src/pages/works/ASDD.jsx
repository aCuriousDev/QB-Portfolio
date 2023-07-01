import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  List,
  ListItem,
  Center,
  Heading,
  Tag,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { HiLightningBolt, HiLightBulb, HiStar } from "react-icons/hi";
import { Date, Meta, WorkImage } from "../../components/Custom";
import Section from "../../components/Section";
import Work from "../../components/Work";

const Asdd = () => {
  return (
    <Work>
      <WorkImage src={"/images/works/thumb_ASDD.jpg"} alt={"thumb_ASDD"} />
      <Date>2019 - </Date>
      <Text variant={"section-paragraph"}>
        Depuis 2019 je dirige l&apos;ASDD - Krav Maga Décines, association loi
        1901, accompagné d&apos;une équipe de bénévoles et du président.
        J&apos;insuffle ma vision et veille au bon développement du club. Je
        suis notamment responsable de la transition vers le numérique pour
        laquelle j&apos;ai mis en place l&apos;ensemble des supports et
        services. Nous pouvons nous féliciter d&apos;une belle croissance qui se
        maintient année après année.
      </Text>
      <List ml={4} my={4}>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Website</Meta>
            <Link href="https://kravmagadecines.fr/" isExternal>
              https://kravmagadecines.fr/
              <ExternalLinkIcon mx={1} boxSize={3} />
            </Link>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Catégorie</Meta>
            <Text>
              Leadership, Gestion, Développement, Création de contenu, Design
              Graphique
            </Text>
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
              Projet Impactant / Secteur Santé, Bien-être / Opportunité
              d&apos;Apprentissage / Contraintes Réelles / Liberté Technologique
            </Text>
          </ListItem>
        </List>
      </Section>
    </Work>
  );
};

export default Asdd;
