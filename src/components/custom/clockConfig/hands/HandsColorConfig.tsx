import { useState } from "react";
import { Flex, parseColor } from "@chakra-ui/react";
import ConfigOptionWrapper from "../_shared/ConfigOptionWrapper";
import ConfigColorPicker from "../_shared/ConfigColorPicker";
import initialStates from "@/lib/initialStates";

export default function HandsColorConfig() {
  const [color, setColor] = useState(
    parseColor(initialStates.initialHandsColor)
  );

  return (
    <Flex>
      <ConfigOptionWrapper configTitle="Color">
        <ConfigColorPicker color={color} setColor={setColor} />
      </ConfigOptionWrapper>
    </Flex>
  );
}
