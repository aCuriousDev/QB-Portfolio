import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  Tooltip,
  Avatar,
  Text,
  Button,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Icon,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { VscArrowRight, VscCheck } from "react-icons/vsc";
import { ImCheckmark } from "react-icons/im";
import profileSrc from "../assets/img/quentin_profile.jpg";
import Section from "../components/Section";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout/Article";
import Impact from "../components/Impact";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, je suis un{" "}
          <Tooltip
            label="in progress..."
            color="#fff"
            bg="green.600"
            placement="top"
            hasArrow
            borderRadius={"full"}
          >
            développeur
          </Tooltip>{" "}
          basé à Lyon en France !
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2">Quentin Berger</Heading>
            <p>Digital Qurious ( Creator / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Avatar
                size="full"
                bg="blue.700"
                src={profileSrc}
                icon={<PiBracketsCurlyBold fontSize="1.3rem" />}
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Travail
          </Heading>
          <Text variant={"section-paragraph"}>
            Freelance, je travaille avec passion sur des projets qui
            m&apos;inspirent. Développeur, designer et créateur de contenu je
            m&apos;adapte à une variété de contextes et de défis pour proposer
            des solutions impactantes. Chaque collaboration est une nouvelle
            opportunité pour apprendre et developper de nouvelles compétences.
            <br />
            Lorsque je ne suis pas derrière un écran je partage avec
            enthousiasme mon engouement pour le sport au sein de
            l&apos;association que je dirige.
          </Text>
          <Center mt={6}>
            <Button
              as={NavLink}
              to={"works"}
              colorScheme="blue"
              rightIcon={<VscArrowRight fontSize={"1.1rem"} />}
              scroll={"false"}
            >
              Mon portfolio
            </Button>
          </Center>
        </Section>
        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Impact
          </Heading>
          <Stack>
            <Impact title={"Natecia : Label IHAB"} work={"Natecia"}>
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
                  <StatHelpText>
                    validé par l&apos;OMS et l&apos;UNICEF
                  </StatHelpText>
                </Stat>
              </StatGroup>
              <StatGroup>
                <Stat>
                  <StatLabel>Supports Produits</StatLabel>
                  <StatNumber color="green.400">20+</StatNumber>
                  <StatHelpText>100 et + itérations</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Durée du projet</StatLabel>
                  <StatNumber color="green.400">4 ans</StatNumber>
                  <StatHelpText>de collaboration</StatHelpText>
                </Stat>
              </StatGroup>
            </Impact>
            <Impact title={"KMG France : YouTube"} work={"KMGFrance"}>
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
            </Impact>
            <Impact title={"ASDD : Direction d'une Association"} work={"ASDD"}>
              <StatGroup>
                <Stat>
                  <StatLabel>Nombre d&apos;inscrits</StatLabel>
                  <StatNumber color="green.400">200</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    +80% vs pre-Covid
                  </StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Augmentation des recettes</StatLabel>

                  <StatNumber color="green.400">+125%</StatNumber>

                  <StatHelpText>
                    <StatArrow type="increase" />
                    20k à 45k €
                  </StatHelpText>
                </Stat>
              </StatGroup>
              <StatGroup>
                <Stat>
                  <StatLabel>Transition Numérique</StatLabel>
                  <StatNumber>
                    <Icon as={ImCheckmark} boxSize={30} color="green.400" />
                  </StatNumber>
                  <StatHelpText>100% en ligne</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Taille de l&apos;&Eacute;quipe</StatLabel>
                  <StatNumber color="green.400">+3</StatNumber>
                  <StatHelpText>depuis 2021</StatHelpText>
                </Stat>
              </StatGroup>
            </Impact>
          </Stack>
          <Center mt={6}>
            <Button
              as={NavLink}
              to={"works"}
              colorScheme="blue"
              rightIcon={<VscArrowRight fontSize={"1.1rem"} />}
              scroll={"false"}
            >
              Mon portfolio
            </Button>
          </Center>
        </Section>
      </Container>
    </Layout>
  );
}
