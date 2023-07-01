import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

function ImageModal({ children, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen} cursor={"pointer"}>
        {children}
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"min"}
        scrollBehavior="outside"
      >
        <ModalOverlay backdropFilter="blur(10px) grayscale(80%)" />
        <ModalContent
          p={0}
          m={2}
          bg={"none"}
          maxW={["minContent", "80vw", "800px"]}
        >
          <ModalHeader
            p={2}
            bg={"blackAlpha.100"}
            color={"gray.100"}
            borderRadius="lg"
          >
            {title}
          </ModalHeader>
          <ModalCloseButton color={"white"} bg={"blackAlpha.600"} boxSize={8} />
          <ModalBody p={0} m={0} bg={"blackAlpha.100"} borderRadius="lg">
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImageModal;
