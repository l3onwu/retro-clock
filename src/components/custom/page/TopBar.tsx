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
import { useRef } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function TopBar() {
  return (
    <Flex direction="column" align="center" justify="center" width="100%">
      <Logo />
      <Description />
    </Flex>
  );
}

const Logo = () => {
  return (
    <Text
      fontFamily={"ranchers"}
      fontSize="4xl"
      fontWeight={"400"}
      textTransform={"uppercase"}
    >
      retroclock.io
    </Text>
  );
};

const Description = () => {
  const initialRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <Dialog.Root size="lg" initialFocusEl={() => initialRef.current}>
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
            <Dialog.Title>Welcome to retroclock.io!</Dialog.Title>
          </Dialog.Header>
          {/* Body */}
          <Dialog.Body>
            <Flex width="100%" p={2} direction="column" gap={4}>
              {/* GIF Demos */}
              <Flex direction="column" mb={2} gap={4}>
                <Carousel.Root
                  slideCount={initialStates.gifCarouselItems.length}
                  maxW="xl"
                  mx="auto"
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
                            height="280px"
                            fit="contain"
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
                  This project started when I was looking for a clock for my
                  desk. Uninspired by what I found in stores, I decided to model
                  and print my own. I was so happy I decided to share it with
                  the world. I built this tool to help visualize designs for
                  printing. Enjoy!{" "}
                </Text>
              </Flex>

              {/* Links */}
              <Flex direction="row" gap={4}>
                <Link
                  href="https://github.com/l3onwu/retro-clock"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={"4xl"}
                  _hover={{ color: "purple.600" }}
                >
                  <FaGithub style={{ display: "inline", marginRight: "4px" }} />
                </Link>
                {/* <Link
                  href="makerworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={"4xl"}
                  _hover={{ color: "purple.600" }}
                >
                  <BsBadge3dFill
                    style={{ display: "inline", marginRight: "4px" }}
                  />
                </Link> */}
              </Flex>
            </Flex>
          </Dialog.Body>
          {/* Footer */}
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
