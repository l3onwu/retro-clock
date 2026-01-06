import { useAppContext } from "@/lib/AppContext";
import getRandomColor from "@/lib/utils/getRandomColor";
import { Flex, HStack, Button, parseColor } from "@chakra-ui/react";

export default function MoreControlsSection() {
  const { setBodyColor, setDialColor, setHandsColor } = useAppContext();

  const randomizeColors = () => {
    setBodyColor(parseColor(getRandomColor()));
    setDialColor(parseColor(getRandomColor()));
    setHandsColor(parseColor(getRandomColor()));
  };

  return (
    <Flex direction="column" height="25%">
      <HStack mb="10px">
        <Button variant="subtle" onClick={randomizeColors}>
          Randomise
        </Button>
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
