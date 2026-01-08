import { Flex, parseColor, Text, Badge, IconButton } from "@chakra-ui/react";
import { useAppContext } from "@/lib/contexts/AppContext";
import initialStates from "@/lib/initialStates";
import getDesignFromName from "@/lib/utils/getDesignFromName";
import { RxCross2 } from "react-icons/rx";
import { deletePresetFromLocalStorage } from "@/lib/api/presetsLocalStorage";

export interface PresetType {
  name: string;
  bodyColor: string;
  dialColor: string;
  handsColor: string;
  dialDesign: string;
  handsDesign: string;
}

export default function PresetItem({
  preset,
  index,
  user = false,
}: {
  preset: PresetType;
  index: number;
  user?: boolean;
}) {
  const {
    setBodyColor,
    setDialColor,
    setHandsColor,
    setDialDesignImage,
    setHandsDesignImage,
    savedPresets,
    setSavedPresets,
  } = useAppContext();

  const applyClockPreset = (preset: PresetType) => {
    // Set configurations
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

  const deletePreset = (presetName: string, index: number) => {
    deletePresetFromLocalStorage(presetName);
    // Delete from local state using index
    const updatedPresets = [...savedPresets];
    updatedPresets.splice(index, 1);
    setSavedPresets(updatedPresets);
  };

  return (
    <Flex
      flexShrink={0}
      direction="column"
      align="center"
      justify="center"
      width="150px"
      height="95px"
      border="1px solid #d4d4d4ff"
      borderRadius="10px"
      cursor="pointer"
      onClick={() => applyClockPreset(preset)}
      _hover={{ scale: 1.05, boxShadow: "md" }}
      position="relative"
      p="10px"
    >
      {/* User preset controls */}
      {user && (
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          width="90%"
          position="absolute"
          top="1px"
        >
          <Badge
            colorPalette="yellow"
            variant="solid"
            size="xs"
            maxHeight="max-content"
          >
            Saved
          </Badge>
          <IconButton
            aria-label="Delete User Preset"
            size="2xs"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              deletePreset(preset.name, index);
            }}
          >
            <RxCross2 />
          </IconButton>
        </Flex>
      )}
      <Text fontSize="xs" lineClamp={1}>
        {preset.name}
      </Text>
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
}
