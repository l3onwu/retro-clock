import clockPresets from "@/lib/clockPresets";
import { Flex } from "@chakra-ui/react";
import { PresetItem, SaveItem } from "./PresetItem";
import { useAppContext } from "@/lib/contexts/AppContext";

export default function PresetStack() {
  const { presets: savedPresets } = useAppContext();
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
      <SaveItem />
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
