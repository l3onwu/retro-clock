import { Flex } from "@chakra-ui/react";
import ConfigSection from "./sections/ConfigSection";
import MoreControlsSection from "./sections/MoreControlsSection";

export default function BodyRight() {
  return (
    <Flex direction="column" overflow="scroll" width="100%">
      <ConfigSection />
      <MoreControlsSection />
    </Flex>
  );
}
