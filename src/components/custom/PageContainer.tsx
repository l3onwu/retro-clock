import { Container, Flex } from "@chakra-ui/react";
import TopBar from "./TopBar";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import BodyCenter from "./BodyCenter";
import BottomBar from "./BottomBar";

export default function PageContainer() {
  return (
    <Container
      direction="column"
      height="100vh"
      width="100vw"
      maxWidth="1300px"
    >
      {/* Top Bar */}
      <Flex height="100px" width="100%" align="center">
        <TopBar />
      </Flex>

      {/* Body */}
      <Flex width="100%" height="calc(100vh - 280px)" justify="space-evenly">
        <Flex width="16%" height="100%" pr="20px">
          <BodyLeft />
        </Flex>

        <Flex width="66%" height="100%">
          <BodyCenter />
        </Flex>

        <Flex width="16%" height="100%" pl="20px">
          <BodyRight />
        </Flex>
      </Flex>

      {/* Bottom Bar */}
      <Flex height="180px" width="100%" align="center">
        <BottomBar />
      </Flex>
    </Container>
  );
}
