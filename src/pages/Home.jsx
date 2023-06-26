import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Box,
  useColorModeValue,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import profileSrc from "../assets/img/quentin_profile.jpg";

export default function Home() {
  return (
    <>
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
            <Heading as="h2" variant="page-title">
              Quentin Berger
            </Heading>
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
      </Container>
    </>
  );
}
