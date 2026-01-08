import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import PresetStack from "../presets/PresetStack";
import RandomizeStack from "../presets/RandomizeStack";

type MenuOptions = "Presets" | "Randomize";

export default function BottomBar() {
  const [menuOption, setMenuOption] = useState<MenuOptions>("Presets");

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
      {menuOption === "Randomize" && <RandomizeStack />}
    </Flex>
  );
}

const MenuOptions = ({
  setMenuOption,
  menuOption,
}: {
  setMenuOption: React.Dispatch<React.SetStateAction<MenuOptions>>;
  menuOption: MenuOptions;
}) => {
  return (
    <Flex direction="row" mb="20px">
      <Text
        {...menuOptionStyle}
        color={menuOption === "Presets" ? "black" : "gray.500"}
        onClick={() => setMenuOption("Presets")}
      >
        Presets
      </Text>
      <Text
        {...menuOptionStyle}
        color={menuOption === "Randomize" ? "black" : "gray.500"}
        onClick={() => setMenuOption("Randomize")}
      >
        Randomize
      </Text>
    </Flex>
  );
};

const menuOptionStyle = {
  fontSize: "xs",
  textTransform: "uppercase",
  fontWeight: "500",
  cursor: "pointer",
  mx: "10px",
};
