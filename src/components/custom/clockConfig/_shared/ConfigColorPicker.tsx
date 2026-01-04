import { ColorPicker, HStack, Portal, type Color } from "@chakra-ui/react";

export default function ConfigColorPicker({
  color,
  setColor,
}: {
  color: Color;
  setColor: (color: Color) => void;
}) {
  return (
    <ColorPicker.Root
      value={color}
      format="hsla"
      onValueChange={(e) => setColor(e.value)}
      maxW="200px"
      size="xs"
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Control>
        <ColorPicker.Trigger px="2">
          <ColorPicker.ValueSwatch width="60px" />
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
