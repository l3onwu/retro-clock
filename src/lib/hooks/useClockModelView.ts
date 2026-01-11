import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import constants from "../constants";

export default function useClockModelView() {
  const modelClockBody = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}body_1.stl`
  );
  const modelClockBase = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}base_1.stl`
  );
  const modelDialHours = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}dial_hours_1.stl`
  );
  const modelDialSmile = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}dial_smile_1.stl`
  );
  const modelHandsHoursChopsticks = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}hour_hand_chopsticks_1.stl`
  );
  const modelHandsMinutesChopsticks = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}minute_hand_chopsticks_1.stl`
  );
  const modelHandsHoursBold = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}hour_hand_bold_1.stl`
  );
  const modelHandsMinutesBold = useLoader(
    STLLoader,
    `${constants.MODELS_PATH}minute_hand_bold_1.stl`
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
