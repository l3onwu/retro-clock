import { Container, Flex } from "@chakra-ui/react";
import TopBar from "./TopBar";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import BodyCenter from "./BodyCenter";
import BottomBar from "./BottomBar";

export default function PageContainer() {
  return (
    <Container direction="column" height="100%" width="100%" fluid>
      {/* Top Bar */}
      <Flex height="100px" width="100%" align="center">
        <TopBar />
      </Flex>

      {/* Body */}
      <Flex
        width="100%"
        height="calc(100vh - 300px)"
        justify="space-between"
        px="20px"
      >
        <Flex {...sideBodyResponsiveStyle} pr="20px">
          <BodyLeft />
        </Flex>

        <Flex width={{ base: "100%", lg: "60%" }} height="100%">
          <BodyCenter />
        </Flex>

        <Flex pl="20px" {...sideBodyResponsiveStyle}>
          <BodyRight />
        </Flex>
      </Flex>

      {/* Bottom Bar */}
      <Flex height="200px" width="100%" align="center">
        <BottomBar />
      </Flex>
    </Container>
  );
}

const sideBodyResponsiveStyle = {
  height: "100%",
  width: { base: "25%", "2xl": "15%" },
  hideBelow: "lg",
};
