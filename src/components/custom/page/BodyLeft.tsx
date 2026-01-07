import { Flex } from "@chakra-ui/react";
import ConfigSection from "../sections/ConfigSection";

export default function BodyLeft() {
  return (
    <Flex direction="column" overflow="scroll" width="100%">
      <ConfigSection />
    </Flex>
  );
}
