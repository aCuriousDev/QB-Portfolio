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
} from "@chakra-ui/react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { VscArrowRight } from "react-icons/vsc";
import profileSrc from "../assets/img/quentin_profile.jpg";
import Section from "../components/Section";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout/Article";

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
            enthousiasme mon engouement pour le sport au sein de mon
            association.
          </Text>
          <Center>
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
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Impact
          </Heading>
        </Section>
      </Container>
    </Layout>
  );
}
