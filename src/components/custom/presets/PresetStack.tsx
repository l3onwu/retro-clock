import clockPresets from "@/lib/clockPresets";
import { Flex } from "@chakra-ui/react";
import { PresetItem, SaveItem } from "./PresetItem";

export default function PresetStack() {
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
      {clockPresets.map((preset, idx) => (
        <PresetItem key={idx} preset={preset} />
      ))}
    </Flex>
  );
}
