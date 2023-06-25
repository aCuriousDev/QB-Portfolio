import { Box, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox scroll="false" cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay as={NavLink} to={`/works/${id}`}>
          <Text className="grid-item-title" mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export default WorkGridItem;
