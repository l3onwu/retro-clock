import { Box, Flex } from "@chakra-ui/react";

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
      <Box height="90%" width="100%" bg="gray.200" borderRadius={"20px"}>
        3D Model Viewer Placeholder
      </Box>
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
