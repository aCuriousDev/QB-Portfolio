import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  panel: {
    px: "0",
    py: "1",
  },
  button: {
    px: "1",
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
