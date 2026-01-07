import { Flex, parseColor, Text } from "@chakra-ui/react";
import { useAppContext, type DialDesignImage } from "@/lib/contexts/AppContext";
import initialStates from "@/lib/initialStates";
import { savePresetToLocalStorage } from "@/lib/api/presetsLocalStorage";

export interface PresetType {
  name: string;
  bodyColor: string;
  dialColor: string;
  handsColor: string;
  dialDesign: string;
  handsDesign: string;
}

export const SaveItem = () => {
  const {
    bodyColor,
    dialColor,
    handsColor,
    dialDesignImage,
    handsDesignImage,
    presets,
    setPresets,
  } = useAppContext();

  const savePreset = () => {
    const newPreset: PresetType = {
      name: `Preset ${new Date().toLocaleTimeString()}`,
      bodyColor: bodyColor.toString("hsl"),
      dialColor: dialColor.toString("hsl"),
      handsColor: handsColor.toString("hsl"),
      dialDesign: dialDesignImage.name,
      handsDesign: handsDesignImage.name,
    };
    // Save to local storage
    savePresetToLocalStorage(newPreset);
    // Save to current state
    setPresets([...presets, newPreset]);
    alert(
      `Preset Saved!\n\nName: ${newPreset.name}\nBody Color: ${newPreset.bodyColor}\nDial Color: ${newPreset.dialColor}\nHands Color: ${newPreset.handsColor}\nDial Design: ${newPreset.dialDesign}\nHands Design: ${newPreset.handsDesign}`
    );
  };

  return (
    <Flex
      flexShrink={0}
      direction="column"
      align="center"
      justify="center"
      width="150px"
      height="90px"
      border="1px solid #d4d4d4ff"
      borderRadius="10px"
      cursor="pointer"
      onClick={savePreset}
      _hover={{ scale: 1.05, boxShadow: "md" }}
    >
      <Text fontSize="xs">Save Preset</Text>
    </Flex>
  );
};

export const PresetItem = ({ preset }: { preset: PresetType }) => {
  const {
    setBodyColor,
    setDialColor,
    setHandsColor,
    setDialDesignImage,
    setHandsDesignImage,
  } = useAppContext();

  const getDesignFromName = (
    designName: string,
    collection: DialDesignImage[]
  ) => {
    const design = collection.find((item) => item.name === designName);
    return design ? design : collection[0];
  };

  const applyClockPreset = (preset: PresetType) => {
    setBodyColor(parseColor(preset.bodyColor));
    setDialColor(parseColor(preset.dialColor));
    setHandsColor(parseColor(preset.handsColor));
    setDialDesignImage(
      getDesignFromName(preset.dialDesign, initialStates.dialDesignsImages)
    );
    setHandsDesignImage(
      getDesignFromName(preset.handsDesign, initialStates.handsDesignsImages)
    );
  };

  return (
    <Flex
      flexShrink={0}
      direction="column"
      align="center"
      justify="center"
      width="150px"
      height="90px"
      border="1px solid #d4d4d4ff"
      borderRadius="10px"
      cursor="pointer"
      onClick={() => applyClockPreset(preset)}
      _hover={{ scale: 1.05, boxShadow: "md" }}
    >
      <Text fontSize="xs">{preset.name}</Text>
      {/* Create colored boxes to match preset */}
      <Flex direction="row" mt="5px" gap="5px">
        <Flex
          width="20px"
          height="20px"
          bg={preset.bodyColor}
          border="1px solid #000000"
          borderRadius="3px"
        />
        <Flex
          width="20px"
          height="20px"
          bg={preset.dialColor}
          border="1px solid #000000"
          borderRadius="3px"
        />
        <Flex
          width="20px"
          height="20px"
          bg={preset.handsColor}
          border="1px solid #000000"
          borderRadius="3px"
        />
      </Flex>
    </Flex>
  );
};
