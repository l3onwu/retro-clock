import { Container, Flex } from "@chakra-ui/react";
import TopBar from "./TopBar";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

export default function PageContainer() {
  return (
    <Container
      direction="column"
      height="100vh"
      width="100vw"
      maxWidth="1300px"
    >
      {/* Top Bar */}
      <Flex height="80px" width="100%" align="center">
        <TopBar />
      </Flex>

      {/* Body */}
      <Flex width="100%" height="calc(100vh - 80px)">
        <Flex width="50%" height="100%" pr="20px">
          <BodyLeft />
        </Flex>

        <Flex width="50%" height="100%" pl="20px">
          <BodyRight />
        </Flex>
      </Flex>
    </Container>
  );
}
