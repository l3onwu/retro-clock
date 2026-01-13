import { useAppContext } from "@/lib/contexts/AppContext";
import initialStates from "@/lib/initialStates";
import getRandomColor from "@/lib/utils/getRandomColor";
import { Badge, Flex, parseColor, Text } from "@chakra-ui/react";
import { LuPaintbrush, LuRuler } from "react-icons/lu";
import { PiRobot } from "react-icons/pi";
import type { MenuOption } from "../page/BottomBar";

export default function RandomizeStack({
  setMenuOption,
}: {
  setMenuOption: React.Dispatch<React.SetStateAction<MenuOption>>;
}) {
  const {
    setBodyColor,
    setDialColor,
    setHandsColor,
    setDialDesignImage,
    setHandsDesignImage,
  } = useAppContext();

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

  return (
    <Flex
      direction="row"
      justify={{ base: "flex-start", md: "center" }}
      width="100%"
      height="105px"
      overflowX="auto"
      overflowY="hidden"
      gap="10px"
      p="5px"
    >
      <RandomizeColors randomizeColors={randomizeColors} />
      <RandomizeDesigns randomizeDesigns={randomizeDesigns} />
      <RandomizeColorsAndDesigns
        randomizeColorsAndDesigns={randomizeColorsAndDesigns}
      />
      <GenerateAiStyle
        generateAiDesigns={() => {
          setMenuOption("AI");
        }}
      />
    </Flex>
  );
}

const RandomizeColors = ({
  randomizeColors,
}: {
  randomizeColors: () => void;
}) => {
  return (
    <Flex {...randomBoxStyle} onClick={randomizeColors}>
      <LuPaintbrush size={24} />
      <Text fontSize="xs">Color</Text>
    </Flex>
  );
};

const RandomizeDesigns = ({
  randomizeDesigns,
}: {
  randomizeDesigns: () => void;
}) => {
  return (
    <Flex {...randomBoxStyle} onClick={randomizeDesigns}>
      <LuRuler size={24} />
      <Text fontSize="xs">Design</Text>
    </Flex>
  );
};

const RandomizeColorsAndDesigns = ({
  randomizeColorsAndDesigns,
}: {
  randomizeColorsAndDesigns: () => void;
}) => {
  return (
    <Flex {...randomBoxStyle} onClick={randomizeColorsAndDesigns}>
      <Flex direction="row" gap={1}>
        <LuPaintbrush size={20} />
        <LuRuler size={20} />
      </Flex>

      <Text fontSize="xs">Color + Design</Text>
    </Flex>
  );
};

const GenerateAiStyle = ({
  generateAiDesigns,
}: {
  generateAiDesigns: () => void;
}) => {
  return (
    <Flex {...randomBoxStyle} onClick={generateAiDesigns}>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        width="90%"
        position="absolute"
        top="5px"
      >
        <Badge
          colorPalette="black"
          variant="solid"
          size="xs"
          maxHeight="max-content"
        >
          New
        </Badge>
      </Flex>
      <PiRobot size={20} />
      <Text fontSize="xs">Generate AI</Text>
    </Flex>
  );
};

const randomBoxStyle = {
  flexShrink: 0,
  direction: "column",
  align: "center",
  justify: "center",
  gap: 1,
  width: "150px",
  height: "95px",
  border: "1px solid #d4d4d4ff",
  borderRadius: "10px",
  cursor: "pointer",
  position: "relative",
  _hover: { scale: 1.05, boxShadow: "md" },
};
