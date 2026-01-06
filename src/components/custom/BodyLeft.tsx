import { Box, Flex } from "@chakra-ui/react";
import ClockModelView from "./sections/ClockModelView";

export default function BodyLeft() {
  return (
    <Flex direction="column" height="100%" width="100%">
      <ModelViewer />
    </Flex>
  );
}

const ModelViewer = () => {
  return (
    <Box height="100%" width="100%" pb="20px">
      <ClockModelView />
    </Box>
  );
};
