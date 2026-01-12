import { Flex, Text, Image } from "@chakra-ui/react";
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
    <Flex direction="row" align="center" justify="center">
      <Text
        fontFamily={"ranchers"}
        fontSize="4xl"
        fontWeight={"400"}
        textTransform={"uppercase"}
      >
        retroclock.io
      </Text>
      <Flex ml="20px" direction="column" align="center" justify="center">
        <Text fontSize="2xs" color="gray.800">
          As seen on
        </Text>
        <Image
          src="/images/makerworld-lq.jpg"
          height="20px"
          borderRadius="10px"
        />
      </Flex>
    </Flex>
  );
};
