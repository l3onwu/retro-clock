import { Flex, Text } from "@chakra-ui/react";

export default function TopBar() {
  return (
    <Flex direction="column" align="center" justify="center" width="100%">
      <Logo />
      <Description />
      {/* <InfoButton /> */}
    </Flex>
  );
}

const Logo = () => {
  return (
    <Text
      fontFamily={"ranchers"}
      fontSize="4xl"
      fontWeight={"400"}
      textTransform={"uppercase"}
    >
      retroclock.io
    </Text>
  );
};

// const InfoButton = () => {
//   return <Text fontSize="lg">i</Text>;
// };

const Description = () => {
  return (
    <Text fontSize="sm" color="gray.600">
      A vintage-inspired, funky 3D-Printable clock!
    </Text>
  );
};
