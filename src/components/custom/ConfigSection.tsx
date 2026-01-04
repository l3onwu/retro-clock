import type { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";
import BodyBaseConfig from "./clockConfig/body/BodyBaseConfig";
import BodyColorConfig from "./clockConfig/body/BodyColorConfig";
import DialColorConfig from "./clockConfig/dial/DialColorConfig";
import DialDesignConfig from "./clockConfig/dial/DialDesignConfig";
import HandsDesignConfig from "./clockConfig/hands/HandsDesignConfig";
import HandsColorConfig from "./clockConfig/hands/HandsColorConfig";

export default function ConfigSection() {
  return (
    <>
      <ClockConfigWrapper configTitle="Body">
        <BodyColorConfig />
        <BodyBaseConfig />
      </ClockConfigWrapper>

      <ClockConfigWrapper configTitle="Dial">
        <DialColorConfig />
        <DialDesignConfig />
      </ClockConfigWrapper>

      <ClockConfigWrapper configTitle="Hands">
        <HandsColorConfig />
        <HandsDesignConfig />
      </ClockConfigWrapper>
    </>
  );
}

const ClockConfigWrapper = ({
  configTitle,
  children,
}: {
  configTitle: string;
  children?: ReactNode;
}) => {
  return (
    <Flex direction="column" mb={4} width="100%">
      <Text fontSize="lg" fontWeight="bold">
        {configTitle}
      </Text>
      <Flex mt={2} direction="column" width="100%">
        {children}
      </Flex>
    </Flex>
  );
};
