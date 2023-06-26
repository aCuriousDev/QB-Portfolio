import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#e6e3e1", "#121215")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline dashed",
        fontSize: "2xl",
        textUnderlineOffset: 6,
        textDecorationColor: "blue.600",
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Text: {
    variants: {
      "section-paragraph": {
        textAlign: "justify",
        textIndent: ".6em",
      },
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components });
export default theme;
