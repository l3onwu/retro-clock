import {
  Dialog,
  CloseButton,
  Flex,
  HStack,
  Button,
  RadioCard,
  Image,
} from "@chakra-ui/react";
import ConfigOptionWrapper from "../_shared/ConfigOptionWrapper";
import { useAppContext, type DialDesignImage } from "@/lib/AppContext";
import initialStates from "@/lib/initialStates";

export default function HandsDesignConfig() {
  return (
    <ConfigOptionWrapper configTitle="Design">
      <ConfigDialog />
    </ConfigOptionWrapper>
  );
}

const ConfigDialog = () => {
  const { handsDesignImage, setHandsDesignImage } = useAppContext();

  return (
    <Dialog.Root>
      {/* Trigger */}
      <Dialog.Trigger asChild>
        <Button variant="outline" size={"sm"}>
          {handsDesignImage.name}
        </Button>
      </Dialog.Trigger>

      {/* Content */}
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          width="900px"
          maxWidth="90vw"
          height="550px"
          maxHeight="80vh"
        >
          {/* Close */}
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
          {/* Header */}
          <Dialog.Header>
            <Dialog.Title>Select hands design</Dialog.Title>
          </Dialog.Header>
          {/* Body */}
          <Dialog.Body>
            <Flex width="100%" overflow="scroll" direction="row" gap={4} p={2}>
              {/* Design Options */}
              <RadioCard.Root
                value={handsDesignImage.name}
                onValueChange={(e) =>
                  setHandsDesignImage(
                    initialStates.handsDesignsImages.find(
                      (design) => design.name === e.value
                    )!
                  )
                }
              >
                <HStack align="stretch" p={4}>
                  {initialStates.handsDesignsImages.map((design) => (
                    <HandsDesignRadioOption key={design.name} design={design} />
                  ))}
                </HStack>
              </RadioCard.Root>
            </Flex>
          </Dialog.Body>
          {/* Footer */}
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

const HandsDesignRadioOption = ({ design }: { design: DialDesignImage }) => {
  return (
    <RadioCard.Item key={design.name} value={design.name} width="400px">
      <RadioCard.ItemHiddenInput />
      {/* Control */}
      <RadioCard.ItemControl>
        <RadioCard.ItemText>{design.name}</RadioCard.ItemText>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>
      {/* Content */}
      <RadioCard.ItemContent p={4}>
        <RadioCard.ItemDescription>
          {design.description}
        </RadioCard.ItemDescription>
        <Image src={design.image} alt={design.name} />
      </RadioCard.ItemContent>
    </RadioCard.Item>
  );
};
