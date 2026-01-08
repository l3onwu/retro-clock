import clockPresets from "@/lib/clockPresets";
import { Flex } from "@chakra-ui/react";
import { useAppContext } from "@/lib/contexts/AppContext";
import SavePresetItem from "./SavePresetItem";
import PresetItem from "./PresetItem";

export default function PresetStack() {
  const { savedPresets } = useAppContext();
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
      <SavePresetItem />
      {/* Preset options */}
      {[...savedPresets].reverse().map((preset, idx) => (
        <PresetItem key={idx} preset={preset} />
      ))}
      {clockPresets.map((preset, idx) => (
        <PresetItem key={idx} preset={preset} />
      ))}
    </Flex>
  );
}
