import { Avatar, Heading, LinkBox, LinkOverlay, Stack } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <LinkBox>
      <LinkOverlay as={RouterLink} to="/">
        <Stack direction="row" align="end">
          <Avatar size="sm" bg="blue.700" icon={<FaCode fontSize="1.1rem" />} />
          <Heading as="h1" size="lg" letterSpacing="tight" ml={3}>
            Quentin Berger
          </Heading>
        </Stack>
      </LinkOverlay>
    </LinkBox>
  );
};
export default Logo;
