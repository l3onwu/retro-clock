import clockPresets from "@/lib/clockPresets";
import { useAppContext } from "@/lib/contexts/AppContext";
import { Flex, parseColor, Text } from "@chakra-ui/react";
import { useState } from "react";

export interface PresetType {
  bodyColor: string;
  dialColor: string;
  handsColor: string;
  name: string;
}

export default function BottomBar() {
  const [menuOption, setMenuOption] = useState("Presets");

  return (
    <Flex
      direction="column"
      align="center"
      width="100%"
      height="100%"
      pt="30px"
    >
      <MenuOptions />

      {menuOption === "Presets" && <PresetStack />}
    </Flex>
  );
}

const MenuOptions = () => {
  return (
    <Flex direction="row" mb="20px">
      <Text fontSize="xs" textTransform={"uppercase"} fontWeight={"500"}>
        Presets
      </Text>
    </Flex>
  );
};

const PresetStack = () => {
  return (
    <Flex
      direction="row"
      width="100%"
      height="100px"
      overflowX="auto"
      overflowY="hidden"
      gap="10px"
      p="5px"
    >
      {/* <SaveItem /> */}
      {clockPresets.map((preset, idx) => (
        <PresetItem key={idx} preset={preset} />
      ))}
    </Flex>
  );
};

// const SaveItem = () => {
//   return (
//     <Flex
//       direction="column"
//       align="center"
//       justify="center"
//       width="150px"
//       height="90px"
//       border="1px solid #d4d4d4ff"
//       borderRadius="10px"
//       cursor="pointer"
//     >
//       <Text fontSize="xs">Save Preset</Text>
//     </Flex>
//   );
// };

const PresetItem = ({ preset }: { preset: PresetType }) => {
  const { setBodyColor, setDialColor, setHandsColor } = useAppContext();

  const applyClockPreset = (preset: PresetType) => {
    setBodyColor(parseColor(preset.bodyColor));
    setDialColor(parseColor(preset.dialColor));
    setHandsColor(parseColor(preset.handsColor));
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
