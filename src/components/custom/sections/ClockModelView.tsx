import { useAppContext } from "@/lib/contexts/AppContext";
import { useR3F } from "@/lib/contexts/R3FContext";
import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { STLLoader } from "three/addons/loaders/STLLoader.js";

export default function ClockModelView() {
  const r3f = useR3F();

  const {
    bodyColor,
    dialColor,
    handsColor,
    dialDesignImage,
    handsDesignImage,
  } = useAppContext();

  const modelClockBody = useLoader(STLLoader, "/public/body_1.stl");
  const modelClockBase = useLoader(STLLoader, "/public/base_1.stl");
  const modelDialHours = useLoader(STLLoader, "/public/dial_hours_1.stl");
  const modelDialSmile = useLoader(STLLoader, "/public/dial_smile_1.stl");
  const modelHandsHoursChopsticks = useLoader(
    STLLoader,
    "/public/hour_hand_chopsticks_1.stl"
  );
  const modelHandsMinutesChopsticks = useLoader(
    STLLoader,
    "/public/minute_hand_chopsticks_1.stl"
  );
  const modelHandsHoursBold = useLoader(
    STLLoader,
    "/public/hour_hand_bold_1.stl"
  );
  const modelHandsMinutesBold = useLoader(
    STLLoader,
    "/public/minute_hand_bold_1.stl"
  );

  // Center the geometry at origin
  modelClockBody.center();
  modelClockBase.center();
  modelDialHours.center();
  modelDialSmile.center();
  modelHandsHoursChopsticks.center();
  modelHandsMinutesChopsticks.center();
  modelHandsHoursBold.center();
  modelHandsMinutesBold.center();

  const selectDialDesign = () => {
    switch (dialDesignImage.name) {
      case "Full Markers":
        return modelDialHours;
      case "Smile":
        return modelDialSmile;
      default:
        return modelDialHours;
    }
  };

  const selectHandsHoursDesign = () => {
    switch (handsDesignImage.name) {
      case "Chopsticks":
        return modelHandsHoursChopsticks;
      case "Bold":
        return modelHandsHoursBold;
      default:
        return modelHandsHoursChopsticks;
    }
  };

  const selectHandsMinutesDesign = () => {
    switch (handsDesignImage.name) {
      case "Chopsticks":
        return modelHandsMinutesChopsticks;
      case "Bold":
        return modelHandsMinutesBold;
      default:
        return modelHandsMinutesChopsticks;
    }
  };

  const modelDial = selectDialDesign();
  const modelHandsHours = selectHandsHoursDesign();
  const modelHandsMinutes = selectHandsMinutesDesign();

  return (
    <Box height="100%" width="100%">
      <Canvas
        camera={{ fov: 9 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          // eslint-disable-next-line react-hooks/immutability
          r3f.gl = gl;
          r3f.scene = scene;
          r3f.camera = camera;
        }}
      >
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
        <mesh
          geometry={modelClockBase}
          scale={0.01}
          position={[0, -0.02, -0.4]}
        >
          <meshStandardMaterial color={bodyColor.toString("hsl")} />
        </mesh>
        {/* Dial hours */}
        <mesh geometry={modelDial} scale={0.01} position={[0, -0.05, 0.04]}>
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

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, -8, 3); // position the camera
    camera.lookAt(0, 0, 0); // point it at the scene center
  }, [camera]);

  return null;
};
