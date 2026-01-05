import { Box, Flex } from "@chakra-ui/react";
import ClockModelView from "./ClockModelView";

export default function BodyLeft() {
  return (
    <Flex direction="column" height="100%" width="100%">
      <ModelViewer />
      <MoreControls />
    </Flex>
  );
}

const ModelViewer = () => {
  return (
    <Box height="75%" width="100%" pb="20px">
      <ClockModelView />
    </Box>
  );
};

const MoreControls = () => {
  return (
    <Box height="25%" width="100%">
      More Controls Placeholder
    </Box>
  );
};
