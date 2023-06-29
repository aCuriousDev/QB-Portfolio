import { Avatar, Heading, LinkBox, LinkOverlay, Stack } from "@chakra-ui/react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <LinkBox>
      <LinkOverlay as={RouterLink} to="/">
        <Stack direction="row" align="end">
          <Avatar
            size="sm"
            bg="blue.700"
            icon={<PiBracketsCurlyBold fontSize="1.3rem" />}
          />
          <Heading as="h1" size="lg" letterSpacing="tight" ml={2}>
            Quentin Berger
          </Heading>
        </Stack>
      </LinkOverlay>
    </LinkBox>
  );
};
export default Logo;
