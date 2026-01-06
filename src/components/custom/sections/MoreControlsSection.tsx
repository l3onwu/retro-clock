import { useAppContext } from "@/lib/contexts/AppContext";
import { useR3F } from "@/lib/contexts/R3FContext";
import getRandomColor from "@/lib/utils/getRandomColor";
import { Flex, HStack, Button, parseColor } from "@chakra-ui/react";

export default function MoreControlsSection() {
  const { setBodyColor, setDialColor, setHandsColor } = useAppContext();
  const { gl, scene, camera } = useR3F();

  const randomizeColors = () => {
    setBodyColor(parseColor(getRandomColor()));
    setDialColor(parseColor(getRandomColor()));
    setHandsColor(parseColor(getRandomColor()));
  };

  const takeScreenshot = () => {
    if (!gl || !scene || !camera) return;

    gl.render(scene, camera);

    const url = gl.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "clock_screenshot.png";
    a.click();
  };

  return (
    <Flex direction="column" height="25%">
      <HStack mb="10px">
        <Button variant="subtle" size="sm" onClick={randomizeColors}>
          Randomise
        </Button>
        <Button variant="subtle" size="sm" onClick={takeScreenshot}>
          Screenshot
        </Button>
      </HStack>
      <Flex>
        <Button size="xl" variant="subtle">
          Export models
        </Button>
      </Flex>
    </Flex>
  );
}
