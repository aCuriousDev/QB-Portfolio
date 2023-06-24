import { Box, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox scroll={false} cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay>
          <Text className="grid-item-thumbnail" mt={2} fontSize={20}></Text>
        </LinkOverlay>
        <Text>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export default WorkGridItem;
