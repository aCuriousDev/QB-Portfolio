import { Box, Button, Center, Collapse, useDisclosure } from "@chakra-ui/react";

function CollapseElement({ children, btnText }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Center my={2}>
        <Button colorScheme="blue" onClick={onToggle}>
          {btnText}
        </Button>
      </Center>
      <Collapse in={isOpen} animateOpacity unmountOnExit>
        <Box my={2}>{children}</Box>
      </Collapse>
    </>
  );
}

export default CollapseElement;
