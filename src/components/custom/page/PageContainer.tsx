import { Container, Flex } from "@chakra-ui/react";
import TopBar from "./TopBar";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import BodyCenter from "./BodyCenter";
import BottomBar from "./BottomBar";

export default function PageContainer() {
  return (
    <Container direction="column" height="100%" width="100%" maxWidth="1300px">
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
        <Flex width="20%" height="100%" pr="20px">
          <BodyLeft />
        </Flex>

        <Flex width="50%" height="100%">
          <BodyCenter />
        </Flex>

        <Flex width="20%" height="100%" pl="20px">
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
