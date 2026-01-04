import { Flex } from "@chakra-ui/react";
import ConfigSection from "./ConfigSection";

export default function BodyRight() {
  return (
    <Flex
      direction="column"
      overflow="scroll"
      height="100%"
      width="100%"
      p="10px"
    >
      <ConfigSection />
    </Flex>
  );
}
