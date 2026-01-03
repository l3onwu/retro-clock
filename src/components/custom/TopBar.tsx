import { Flex, Text } from "@chakra-ui/react";

export default function TopBar() {
  return (
    <Flex align="center" justify="space-between" width="100%">
      <Logo />
      <InfoButton />
    </Flex>
  );
}

const Logo = () => {
  return (
    <Text fontSize="xl" fontWeight={"bold"}>
      RETROCLOCK.IO
    </Text>
  );
};

const InfoButton = () => {
  return <Text fontSize="lg">i</Text>;
};
