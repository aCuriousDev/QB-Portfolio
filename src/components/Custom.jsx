import { useRef } from "react";
import { useInView } from "framer-motion";
import { Badge, Image } from "@chakra-ui/react";

export const WorkImage = ({ src, alt }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Image
      ref={ref}
      borderRadius="lg"
      w="full"
      src={src}
      alt={alt}
      mb={4}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "opacity 500ms ease-in",
      }}
    />
  );
};

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

export const Date = ({ children }) =>
  children && <Badge colorScheme="gray">{children}</Badge>;
