import { useRef, useState } from "react";
import { useAppContext } from "@/lib/contexts/AppContext";
import type { PresetType } from "./PresetItem";
import { savePresetToLocalStorage } from "@/lib/api/presetsLocalStorage";
import {
  Flex,
  Text,
  Dialog,
  Button,
  CloseButton,
  Input,
} from "@chakra-ui/react";
import { LuFolderHeart } from "react-icons/lu";

export default function SavePresetItem() {
  const {
    bodyColor,
    dialColor,
    handsColor,
    dialDesignImage,
    handsDesignImage,
    savedPresets,
    setSavedPresets,
  } = useAppContext();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newPresetName, setNewPresetName] = useState<string>("");
  const initialRef = useRef<HTMLInputElement | null>(null);

  const isValidName = (name: string) => {
    return name.trim().length > 0;
  };

  const closeDialogHandler = () => {
    setNewPresetName("");
  };

  const savePreset = () => {
    const newPreset: PresetType = {
      name: newPresetName.trim(),
      bodyColor: bodyColor.toString("hsl"),
      dialColor: dialColor.toString("hsl"),
      handsColor: handsColor.toString("hsl"),
      dialDesign: dialDesignImage.name,
      handsDesign: handsDesignImage.name,
    };
    // Save to local storage
    savePresetToLocalStorage(newPreset);
    // Save to current state
    setSavedPresets([...savedPresets, newPreset]);

    // Close dialog
    setDialogOpen(false);
  };

  return (
    <Dialog.Root
      onExitComplete={closeDialogHandler}
      open={dialogOpen}
      onOpenChange={(e) => setDialogOpen(e.open)}
      initialFocusEl={() => initialRef.current}
    >
      {/* Trigger */}
      <Dialog.Trigger asChild>
        <Flex
          flexShrink={0}
          direction="column"
          gap={2}
          align="center"
          justify="center"
          width="150px"
          height="90px"
          border="1px solid #d4d4d4ff"
          borderRadius="10px"
          cursor="pointer"
          onClick={() => setDialogOpen(true)}
          _hover={{ scale: 1.05, boxShadow: "md" }}
        >
          <LuFolderHeart size={24} />
          <Text fontSize="xs">Save Preset</Text>
        </Flex>
      </Dialog.Trigger>

      {/* Content */}
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          {/* Close */}
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
          {/* Header */}
          <Dialog.Header>
            <Dialog.Title>Save preset</Dialog.Title>
          </Dialog.Header>
          {/* Body */}
          <Dialog.Body>
            <Flex width="100%" p={2} direction="row" gap={4}>
              <Input
                ref={initialRef}
                placeholder="Preset Name"
                value={newPresetName}
                onChange={(e) => setNewPresetName(e.target.value)}
              />
              <Button
                onClick={savePreset}
                disabled={!isValidName(newPresetName)}
                variant={"subtle"}
              >
                Save Preset
              </Button>
            </Flex>
          </Dialog.Body>
          {/* Footer */}
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
