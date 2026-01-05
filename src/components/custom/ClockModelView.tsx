import { useAppContext } from "@/lib/AppContext";
import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { STLLoader } from "three/addons/loaders/STLLoader.js";

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, -8, 3); // position the camera
    camera.lookAt(0, 0, 0); // point it at the scene center
  }, [camera]);

  return null;
}
export default function ClockModelView() {
  const { bodyColor, dialColor, handsColor } = useAppContext();
  const modelClockBody = useLoader(STLLoader, "/public/body_1.stl");
  const modelClockBase = useLoader(STLLoader, "/public/base_1.stl");
  const modelDialHours = useLoader(STLLoader, "/public/dial_hours_1.stl");
  const modelDialSmile = useLoader(STLLoader, "/public/dial_smile_1.stl");
  const modelHandsHours = useLoader(STLLoader, "/public/hour_hand_1.stl");
  const modelHandsMinutes = useLoader(STLLoader, "/public/minute_hand_1.stl");

  // Center the geometry at origin
  modelClockBody.center();
  modelClockBase.center();
  modelDialHours.center();
  modelDialSmile.center();
  modelHandsHours.center();
  modelHandsMinutes.center();

  return (
    <Box height="100%" width="100%">
      <Canvas camera={{ fov: 9 }}>
        <CameraSetup />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <directionalLight color="white" position={[0, -5, 0]} intensity={0.2} />
        {/* Clock body */}
        <mesh geometry={modelClockBody} scale={0.01} position={[0, 0, 0]}>
          <meshStandardMaterial color={bodyColor.toString("hsl")} />
        </mesh>
        {/* Clock base */}
        <mesh geometry={modelClockBase} scale={0.01} position={[0, 0, -0.4]}>
          <meshStandardMaterial color={bodyColor.toString("hsl")} />
        </mesh>
        {/* Dial hours */}
        <mesh
          geometry={modelDialHours}
          scale={0.01}
          position={[0, -0.05, 0.04]}
        >
          <meshBasicMaterial color={dialColor.toString("hsl")} />
        </mesh>
        {/* Hands hours */}
        <mesh
          geometry={modelHandsHours}
          scale={0.01}
          position={[0.07, -0.06, 0.04]}
        >
          <meshStandardMaterial color={handsColor.toString("hsl")} />
        </mesh>
        {/* Hands minutes */}
        <mesh
          geometry={modelHandsMinutes}
          scale={0.01}
          position={[-0.08, -0.1, 0.15]}
          rotation={[0, 4, 0]}
        >
          <meshStandardMaterial color={handsColor.toString("hsl")} />
        </mesh>
      </Canvas>
    </Box>
  );
}
