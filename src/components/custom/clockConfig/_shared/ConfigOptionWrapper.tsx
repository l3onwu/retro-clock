import { Box, Flex, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function ConfigOptionWrapper({
  configTitle,
  children,
}: {
  configTitle: string;
  children?: ReactNode;
}) {
  return (
    <Flex
      direction="row"
      mb={3}
      width="100%"
      align="center"
      justify="space-between"
    >
      <Text fontSize="sm" fontWeight="400">
        {configTitle}
      </Text>
      <Box>{children}</Box>
    </Flex>
  );
}
