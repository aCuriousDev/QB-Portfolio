import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { accordionTheme } from "./accordionTheme";

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
      "section-subtitle": {
        fontSize: "xl",
        marginTop: 2,
        marginBottom: 2,
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
  Link: {
    baseStyle: (props) => ({
      color: mode("blue.500", "blue.400")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components: { Accordion: accordionTheme, ...components },
});
export default theme;
