import { useRef } from "react";
import { useInView } from "framer-motion";
import { Badge, Center, Image } from "@chakra-ui/react";
import ImageModal from "./ImageModal";

export const WorkImage = ({ src, alt, isDisable }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ImageModal title={alt} isDisable={isDisable}>
      <Image
        ref={ref}
        borderRadius="lg"
        w="full"
        src={src}
        alt={alt}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 500ms ease-in",
        }}
      />
    </ImageModal>
  );
};

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

export const Date = ({ children }) =>
  children && (
    <Badge
      variant="outline"
      colorScheme="telegram"
      fontSize=".8em"
      mt={1}
      mb={2}
      px={2}
    >
      {children}
    </Badge>
  );
