import { Heading, Link, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <LinkBox>
      <LinkOverlay as={RouterLink} to="home">
        <Heading as="h1" size="lg" letterSpacing="tight" ml={3}>
          Quentin Berger
        </Heading>
      </LinkOverlay>
    </LinkBox>
  );
};
export default Logo;
