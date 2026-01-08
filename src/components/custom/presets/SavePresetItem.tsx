import { useAppContext } from "@/lib/contexts/AppContext";
import type { PresetType } from "./PresetItem";
import { savePresetToLocalStorage } from "@/lib/api/presetsLocalStorage";
import { Flex, Text } from "@chakra-ui/react";

export default function SavePresetItem() {
  const {
    bodyColor,
    dialColor,
    handsColor,
    dialDesignImage,
    handsDesignImage,
    savedPresets,
    setSavedPresets,
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
    setSavedPresets([...savedPresets, newPreset]);
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
}
