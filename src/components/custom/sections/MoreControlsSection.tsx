import { useAppContext } from "@/lib/contexts/AppContext";
import { useR3F } from "@/lib/contexts/R3FContext";
import { Flex, Button, Text } from "@chakra-ui/react";
import { BsCamera, BsDownload } from "react-icons/bs";

export default function MoreControlsSection() {
  const { dialDesignImage, handsDesignImage } = useAppContext();
  const { gl, scene, camera } = useR3F();

  const takeScreenshot = () => {
    if (!gl || !scene || !camera) return;

    gl.render(scene, camera);

    const url = gl.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "clock_screenshot.png";
    a.click();
  };

  async function downloadSTL(url: string, filename: string) {
    const res = await fetch(url);
    const blob = await res.blob();

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function downloadSelectedParts() {
    await downloadSTL("/public/body_1.stl", "clock_body.stl");
    await downloadSTL("/public/base_1.stl", "clock_base.stl");
    await downloadSTL(dialDesignImage.stlUrl[0], "clock_dial.stl");
    await downloadSTL(handsDesignImage.stlUrl[0], "clock_hands_hours.stl");
    await downloadSTL(handsDesignImage.stlUrl[1], "clock_hands_minutes.stl");
  }

  return (
    <Flex direction="column">
      <FinishingSection
        takeScreenshot={takeScreenshot}
        downloadSelectedParts={downloadSelectedParts}
      />
    </Flex>
  );
}

const FinishingSection = ({
  takeScreenshot,
  downloadSelectedParts,
}: {
  takeScreenshot: () => void;
  downloadSelectedParts: () => void;
}) => {
  return (
    <Flex direction="column" mb="20px">
      <Text fontSize="lg" fontWeight="600" mb="10px">
        Finish
      </Text>
      <Flex mb="10px" flexDirection="row" gap="10px" wrap="wrap">
        <Button variant="outline" size="sm" onClick={takeScreenshot}>
          <BsCamera /> Screenshot
        </Button>
        <Button variant="outline" size="sm" onClick={downloadSelectedParts}>
          <BsDownload /> Download Models
        </Button>
      </Flex>
    </Flex>
  );
};
