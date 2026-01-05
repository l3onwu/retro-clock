import ConfigOptionWrapper from "../_shared/ConfigOptionWrapper";
import { Flex } from "@chakra-ui/react";
import ConfigColorPicker from "../_shared/ConfigColorPicker";
import { useAppContext } from "@/lib/AppContext";

export default function BodyColorConfig() {
  const { bodyColor: color, setBodyColor: setColor } = useAppContext();

  return (
    <Flex>
      <ConfigOptionWrapper configTitle="Color">
        <ConfigColorPicker color={color} setColor={setColor} />
      </ConfigOptionWrapper>
    </Flex>
  );
}
