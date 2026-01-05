import { Flex } from "@chakra-ui/react";
import ConfigOptionWrapper from "../_shared/ConfigOptionWrapper";
import ConfigColorPicker from "../_shared/ConfigColorPicker";
import { useAppContext } from "@/lib/AppContext";

export default function HandsColorConfig() {
  const { handsColor: color, setHandsColor: setColor } = useAppContext();

  return (
    <Flex>
      <ConfigOptionWrapper configTitle="Color">
        <ConfigColorPicker color={color} setColor={setColor} />
      </ConfigOptionWrapper>
    </Flex>
  );
}
