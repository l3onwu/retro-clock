import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import PresetStack from "../presets/PresetStack";
import RandomizeStack from "../presets/RandomizeStack";
import AIStack from "../presets/AIStack";

export type MenuOption = "Presets" | "Randomize" | "AI";

export default function BottomBar() {
  const [menuOption, setMenuOption] = useState<MenuOption>("Presets");

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
      {menuOption === "Randomize" && (
        <RandomizeStack setMenuOption={setMenuOption} />
      )}
      {menuOption === "AI" && <AIStack setMenuOption={setMenuOption} />}
    </Flex>
  );
}

const MenuOptions = ({
  setMenuOption,
  menuOption,
}: {
  setMenuOption: React.Dispatch<React.SetStateAction<MenuOption>>;
  menuOption: MenuOption;
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
        color={
          menuOption === "Randomize" || menuOption === "AI"
            ? "black"
            : "gray.500"
        }
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
