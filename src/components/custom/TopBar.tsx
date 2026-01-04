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
    <Text fontSize="2xl" fontWeight={"bold"} textTransform={"uppercase"}>
      retroclock.io
    </Text>
  );
};

const InfoButton = () => {
  return <Text fontSize="lg">i</Text>;
};
