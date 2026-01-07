import { useAppContext } from "@/lib/contexts/AppContext";
import { useR3F } from "@/lib/contexts/R3FContext";
import initialStates from "@/lib/initialStates";
import getRandomColor from "@/lib/utils/getRandomColor";
import { Flex, Button, parseColor, Text } from "@chakra-ui/react";
import { BsCamera, BsDownload } from "react-icons/bs";

export default function MoreControlsSection() {
  const {
    setBodyColor,
    setDialColor,
    setHandsColor,
    dialDesignImage,
    handsDesignImage,
    setDialDesignImage,
    setHandsDesignImage,
  } = useAppContext();
  const { gl, scene, camera } = useR3F();

  const randomizeColors = () => {
    setBodyColor(parseColor(getRandomColor()));
    setDialColor(parseColor(getRandomColor()));
    setHandsColor(parseColor(getRandomColor()));
  };

  const randomizeDesigns = () => {
    // Randomly select dial design
    setDialDesignImage(
      initialStates.dialDesignsImages[
        Math.floor(Math.random() * initialStates.dialDesignsImages.length)
      ]
    );
    // Randomly select hands design
    setHandsDesignImage(
      initialStates.handsDesignsImages[
        Math.floor(Math.random() * initialStates.handsDesignsImages.length)
      ]
    );
  };

  const randomizeColorsAndDesigns = () => {
    randomizeColors();
    randomizeDesigns();
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
    <Flex direction="column">
      <RandomizeSection
        randomizeColors={randomizeColors}
        randomizeDesigns={randomizeDesigns}
        randomizeColorsAndDesigns={randomizeColorsAndDesigns}
      />
      <FinishingSection
        takeScreenshot={takeScreenshot}
        downloadSelectedParts={downloadSelectedParts}
      />
    </Flex>
  );
}

const RandomizeSection = ({
  randomizeColors,
  randomizeDesigns,
  randomizeColorsAndDesigns,
}: {
  randomizeColors: () => void;
  randomizeDesigns: () => void;
  randomizeColorsAndDesigns: () => void;
}) => {
  return (
    <Flex direction="column" mb="20px">
      <Text
        fontSize="xs"
        textTransform={"uppercase"}
        fontWeight={"500"}
        mb="5px"
      >
        Randomize
      </Text>
      <Flex mb="10px" flexDirection="row" gap="10px" wrap="wrap">
        <Button variant="subtle" size="sm" onClick={randomizeColors}>
          Colors
        </Button>
        <Button variant="subtle" size="sm" onClick={randomizeDesigns}>
          Design
        </Button>
        <Button variant="subtle" size="sm" onClick={randomizeColorsAndDesigns}>
          Colors + Design
        </Button>
      </Flex>
    </Flex>
  );
};

const FinishingSection = ({
  takeScreenshot,
  downloadSelectedParts,
}: {
  takeScreenshot: () => void;
  downloadSelectedParts: () => void;
}) => {
  return (
    <Flex direction="column" mb="20px">
      <Text
        fontSize="xs"
        textTransform={"uppercase"}
        fontWeight={"500"}
        mb="5px"
      >
        Finish
      </Text>
      <Flex mb="10px" flexDirection="row" gap="10px" wrap="wrap">
        <Button variant="subtle" size="sm" onClick={takeScreenshot}>
          <BsCamera /> Screenshot
        </Button>
        <Button size="sm" variant="subtle" onClick={downloadSelectedParts}>
          <BsDownload /> Download Models
        </Button>
      </Flex>
    </Flex>
  );
};
