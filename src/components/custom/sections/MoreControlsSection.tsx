import { Flex, HStack, Button } from "@chakra-ui/react";

export default function MoreControlsSection() {
  return (
    <Flex direction="column" height="25%">
      <HStack mb="10px">
        <Button variant="subtle">Randomise</Button>
        <Button variant="subtle">Screenshot</Button>
      </HStack>
      <Flex>
        <Button size="xl" variant="subtle">
          Export models
        </Button>
      </Flex>
    </Flex>
  );
}
