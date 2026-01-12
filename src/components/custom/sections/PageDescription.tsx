import { saveIsFirstVisitToLocalStorage } from "@/lib/api/presetsLocalStorage";
import { useAppContext } from "@/lib/contexts/AppContext";
import initialStates from "@/lib/initialStates";
import {
  Dialog,
  Flex,
  Text,
  CloseButton,
  Link,
  Image,
  Carousel,
  IconButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsBadge3dFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function PageDescription() {
  const { isFirstVisit, setIsFirstVisit } = useAppContext();
  const initialRef = useRef<HTMLAnchorElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState(isFirstVisit);

  const closeDialogHandler = () => {
    setIsFirstVisit(false);
    saveIsFirstVisitToLocalStorage(false);
  };

  return (
    <Dialog.Root
      size="lg"
      initialFocusEl={() => initialRef.current}
      onExitComplete={closeDialogHandler}
      open={dialogOpen}
      onOpenChange={(e) => setDialogOpen(e.open)}
    >
      {/* Trigger */}
      <Dialog.Trigger asChild>
        <Link
          fontSize="sm"
          variant="underline"
          color="gray.600"
          _hover={{ color: "gray.500", scale: 1.05 }}
        >
          A vintage-inspired, funky 3D-Printable clock!{" "}
          <BsFillInfoCircleFill style={{ display: "inline" }} />
        </Link>
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
            <Dialog.Title
              textAlign="center"
              width="100%"
              mb="-10px"
              textStyle="coolSubHeading"
            >
              Welcome!
            </Dialog.Title>
          </Dialog.Header>
          {/* Body */}
          <Dialog.Body>
            <Flex width="100%" px={2} direction="column" gap={4}>
              {/* GIF Demos */}
              <Flex direction="column" mb={2} gap={4}>
                <Carousel.Root
                  slideCount={initialStates.gifCarouselItems.length}
                >
                  <Carousel.ItemGroup flex="1">
                    {initialStates.gifCarouselItems.map((_, index) => (
                      <Carousel.Item key={index} index={index}>
                        <Text
                          textAlign="center"
                          fontSize="xs"
                          color="gray.500"
                          mb={2}
                        >
                          {initialStates.gifCarouselItems[index].label}
                        </Text>
                        <Flex direction="column">
                          <Image
                            borderRadius={"20px"}
                            fit="cover"
                            // Temp style before updated gifs
                            height="315px"
                            objectPosition="bottom"
                            width="100%"
                            src={initialStates.gifCarouselItems[index].src}
                            alt={initialStates.gifCarouselItems[index].label}
                          />
                        </Flex>
                      </Carousel.Item>
                    ))}
                  </Carousel.ItemGroup>
                  <Carousel.Control justifyContent="center" gap="4">
                    <Carousel.PrevTrigger asChild>
                      <IconButton size="xs" variant="ghost">
                        <LuChevronLeft />
                      </IconButton>
                    </Carousel.PrevTrigger>

                    <Carousel.Indicators />

                    <Carousel.NextTrigger asChild>
                      <IconButton size="xs" variant="ghost">
                        <LuChevronRight />
                      </IconButton>
                    </Carousel.NextTrigger>
                  </Carousel.Control>
                </Carousel.Root>
              </Flex>

              {/* About */}
              <Flex mb={2}>
                <Text fontSize="sm">
                  When I was looking for a desk clock, I was uninspired by what
                  I found in stores. So I decided to 3D model and print my own.
                  I built this tool to help visualize designs. Enjoy!{" "}
                </Text>
              </Flex>

              {/* Links */}
              <Flex direction="row" gap={4} justify="center" fontSize={"3xl"}>
                <Link
                  href="https://github.com/l3onwu/retro-clock"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <FaGithub style={{ display: "inline", marginRight: "4px" }} />
                </Link>
                <Link
                  href="https://makerworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <Image
                    src="/images/makerworld-lq.jpg"
                    alt="MakerWorld"
                    height="24px"
                  />
                </Link>
              </Flex>
            </Flex>
          </Dialog.Body>
          {/* Footer */}
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
