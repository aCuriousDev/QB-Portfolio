import {
  Heading,
  Container,
  Divider,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Container>
        <Heading as="h1">Oops ! Not Found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <Button>
            <Link to={"/"}>Return Home</Link>
          </Button>
        </Box>
      </Container>
    </>
  );
}
