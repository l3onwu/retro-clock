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
      <Text textStyle="coolHeading">retroclock.io</Text>
      <Flex ml="20px" direction="column" align="center" justify="center">
        <Text fontSize="2xs" color="gray.800">
          As seen on
        </Text>
        <Image src="/images/makerworld-lq.jpg" height="20px" />
      </Flex>
    </Flex>
  );
};
