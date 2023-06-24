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
  forwardRef,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeButton from "./theme-button";
import Logo from "./Logo";

const LinkItem = ({ children, to }) => {
  //   const active = path === href;
  //   const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link as={RouterLink} scroll={"false"} p={2} bg={"grassTeal"} to={to}>
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={RouterLink} {...props} />
));

const NavBar = (props) => {
  const { path } = props;

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
          <Logo />
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem to="home">Home</LinkItem>
          <LinkItem to="works">Works</LinkItem>
          <LinkItem to="home">Ressources</LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Works</MenuItem>
                <MenuItem>Ressources</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default NavBar;
