import { Box } from "@chakra-ui/react";
import PageContainer from "./components/custom/PageContainer";

function App() {
  return (
    <Box height="100vh" width="100vw">
      <Box
        position="absolute"
        top="-20px"
        left="-20px"
        right="-20px"
        bottom="-20px"
        bgImage="url('/backgrounds/texture10.jpg')"
        bgSize="cover"
        filter="blur(1px) saturate(100%) opacity(0.3) brightness(0.9)"
        zIndex={-1}
      />
      <PageContainer />
    </Box>
  );
}

export default App;
