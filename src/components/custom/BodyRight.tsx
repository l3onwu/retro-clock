import { Flex } from "@chakra-ui/react";
import ConfigSection from "./ConfigSection";

export default function BodyRight() {
  return (
    <Flex direction="column" overflow="scroll" width="100%">
      <ConfigSection />
    </Flex>
  );
}
