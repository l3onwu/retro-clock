import { useAppContext } from "@/lib/AppContext";
import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ClockModelView() {
  const { bodyColor } = useAppContext();

  return (
    <Box height="100%" width="100%">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 1, 2]} />
          <meshStandardMaterial color={bodyColor.toString("hsl")} />
        </mesh>
      </Canvas>
    </Box>
  );
}
