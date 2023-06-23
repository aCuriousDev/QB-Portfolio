import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

const LinkItem = ({ children }) => {
  //   const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link scroll={false} p={2} bg={"grassTeal"} color={"#202023"}>
      {children}
    </Link>
  );
};

// const MenuLink = forwardRef((props, ref) => (
//   <Link ref={ref} as={RouterLink} {...props} />
// ));

const NavBar = (props) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="cetner" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            Quentin Berger
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem>Home</LinkItem>
          <LinkItem>Works</LinkItem>
        </Stack>

        <Box>
          <Box>
            <Menu>
              <MenuButton />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Works</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default NavBar;
