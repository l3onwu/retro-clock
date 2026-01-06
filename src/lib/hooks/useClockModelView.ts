import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/addons/loaders/STLLoader.js";

export default function useClockModelView() {
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

  return {
    modelClockBody,
    modelClockBase,
    modelDialHours,
    modelDialSmile,
    modelHandsHoursChopsticks,
    modelHandsMinutesChopsticks,
    modelHandsHoursBold,
    modelHandsMinutesBold,
  };
}
