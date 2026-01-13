import { useAppContext } from "@/lib/contexts/AppContext";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import type { MenuOption } from "../page/BottomBar";

export default function AIStack({
  setMenuOption,
}: {
  setMenuOption: React.Dispatch<React.SetStateAction<MenuOption>>;
}) {
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      width="100%"
      height="100px"
      overflowX="auto"
      overflowY="hidden"
      gap="10px"
      p="5px"
    >
      <Flex {...randomBoxStyle} onClick={() => {}}>
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          width="90%"
          px="5px"
          gap="20px"
        >
          <Input variant="flushed" placeholder="Enter prompt..." size="sm" />
          <Button variant="subtle">Generate</Button>
        </Flex>
      </Flex>

      <Flex
        direction="row"
        p="10px"
        width="100px"
        height="90px"
        gap="3px"
        color="gray.700"
        fontSize="12px"
        align="center"
        justify="center"
        cursor="pointer"
        border="1px solid #d4d4d4ff"
        borderRadius="10px"
        _hover={{ scale: 1.05, boxShadow: "md" }}
        onClick={() => setMenuOption("Randomize")}
      >
        <IoIosArrowBack size="15px" />
        <Text>Back</Text>
      </Flex>
    </Flex>
  );
}

const randomBoxStyle = {
  flexShrink: 0,
  direction: "column",
  align: "center",
  justify: "center",
  gap: 1,
  width: "400px",
  height: "90px",
  border: "1px solid #d4d4d4ff",
  borderRadius: "10px",
  cursor: "pointer",
  position: "relative",
  backgroundColor: "grey.200",
};
