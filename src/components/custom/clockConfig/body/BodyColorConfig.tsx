import ConfigOptionWrapper from "../_shared/ConfigOptionWrapper";
import { Flex, parseColor } from "@chakra-ui/react";
import { useState } from "react";
import ConfigColorPicker from "../_shared/ConfigColorPicker";
import initialStates from "@/lib/initialStates";

export default function BodyColorConfig() {
  const [color, setColor] = useState(
    parseColor(initialStates.initialBodyColor)
  );

  return (
    <Flex>
      <ConfigOptionWrapper configTitle="Color">
        <ConfigColorPicker color={color} setColor={setColor} />
      </ConfigOptionWrapper>
    </Flex>
  );
}
