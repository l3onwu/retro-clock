import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
} from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  coolHeading: {
    description: "Page header",
    value: {
      fontFamily: "Ranchers, Trebuchet, Tahoma, sans-serif",
      fontSize: "4xl",
      fontWeight: "400",
      textTransform: "uppercase",
    },
  },
  coolSubHeading: {
    description: "Page sub header",
    value: {
      fontFamily: "Ranchers, Trebuchet, Tahoma, sans-serif",
      fontSize: "2xl",
      fontWeight: "400",
      textTransform: "uppercase",
    },
  },
});

const config = defineConfig({
  globalCss: {
    "html, body": {
      fontFamily: "Arial, Helvetica, sans-serif",
    },
  },
  theme: {
    textStyles,
  },
});

export default createSystem(defaultConfig, config);
