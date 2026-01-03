import { Flex } from "@chakra-ui/react";
import BodyConfig from "./clockConfig/BodyConfig";
import DialConfig from "./clockConfig/DialConfig";
import HandsConfig from "./clockConfig/HandsConfig";

export default function BodyRight() {
  return (
    <Flex
      direction="column"
      overflow="scroll"
      height="100%"
      width="100%"
      p="10px"
    >
      <BodyConfig />
      <DialConfig />
      <HandsConfig />
    </Flex>
  );
}
