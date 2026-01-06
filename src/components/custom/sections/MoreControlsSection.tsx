import { useAppContext } from "@/lib/contexts/AppContext";
import { useR3F } from "@/lib/contexts/R3FContext";
import getRandomColor from "@/lib/utils/getRandomColor";
import { Flex, HStack, Button, parseColor } from "@chakra-ui/react";

export default function MoreControlsSection() {
  const {
    setBodyColor,
    setDialColor,
    setHandsColor,
    dialDesignImage,
    handsDesignImage,
  } = useAppContext();
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

  async function downloadSTL(url: string, filename: string) {
    const res = await fetch(url);
    const blob = await res.blob();

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function downloadSelectedParts() {
    await downloadSTL("/public/body_1.stl", "clock_body.stl");
    await downloadSTL("/public/base_1.stl", "clock_base.stl");
    await downloadSTL(dialDesignImage.stlUrl[0], "clock_dial.stl");
    await downloadSTL(handsDesignImage.stlUrl[0], "clock_hands_hours.stl");
    await downloadSTL(handsDesignImage.stlUrl[1], "clock_hands_minutes.stl");
  }

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
        <Button size="xl" variant="subtle" onClick={downloadSelectedParts}>
          Export models
        </Button>
      </Flex>
    </Flex>
  );
}
