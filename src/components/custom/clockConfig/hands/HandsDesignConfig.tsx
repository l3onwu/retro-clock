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
import { useAppContext } from "@/lib/AppContext";
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
            <Dialog.Title>Select a dial design</Dialog.Title>
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
                    <HandsDesignRadioOption
                      key={design.name}
                      option={design.name}
                      image={design.image}
                    />
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

const HandsDesignRadioOption = ({
  option,
  image,
}: {
  option: string;
  image: string;
}) => {
  return (
    <RadioCard.Item key={option} value={option} width="400px">
      <RadioCard.ItemHiddenInput />
      {/* Control */}
      <RadioCard.ItemControl>
        <RadioCard.ItemText>{option}</RadioCard.ItemText>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>

      {/* Content */}
      <RadioCard.ItemContent p={4}>
        <RadioCard.ItemDescription>
          Full hour markers with correct positions for all 12 hours.
        </RadioCard.ItemDescription>
        <Image src={image} alt={option} />
      </RadioCard.ItemContent>
    </RadioCard.Item>
  );
};
