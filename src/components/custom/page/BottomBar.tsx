import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import PresetStack from "../presets/PresetStack";

export default function BottomBar() {
  const [menuOption, setMenuOption] = useState<null | string>("Presets");

  return (
    <Flex
      direction="column"
      align="center"
      width="100%"
      height="100%"
      pt="30px"
    >
      <MenuOptions setMenuOption={setMenuOption} menuOption={menuOption} />

      {menuOption === "Presets" && <PresetStack />}
    </Flex>
  );
}

const MenuOptions = ({
  setMenuOption,
  menuOption,
}: {
  setMenuOption: React.Dispatch<React.SetStateAction<null | string>>;
  menuOption: null | string;
}) => {
  return (
    <Flex direction="row" mb="20px">
      <Text
        fontSize="xs"
        textTransform={"uppercase"}
        fontWeight={"500"}
        color={menuOption === "Presets" ? "black" : "gray.500"}
        cursor="pointer"
        mx="10px"
        onClick={() =>
          setMenuOption(menuOption === "Presets" ? null : "Presets")
        }
      >
        Presets
      </Text>
    </Flex>
  );
};
