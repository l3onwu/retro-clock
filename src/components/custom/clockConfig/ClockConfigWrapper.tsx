import { Flex, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function ClockConfigWrapper({
  configTitle,
  children,
}: {
  configTitle: string;
  children?: ReactNode;
}) {
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
}
