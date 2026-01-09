import { Flex, Text } from "@chakra-ui/react";
import PageDescription from "../sections/PageDescription";

export default function TopBar() {
  return (
    <Flex direction="column" align="center" justify="center" width="100%">
      <Logo />
      <PageDescription />
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
