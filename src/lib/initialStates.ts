import clockPresets from "./clockPresets";
import constants from "./constants";

const initialStates = {
  initialPreset: clockPresets[0],
  dialDesignsImages: [
    {
      id: 1,
      name: "Full Markers",
      image: `${constants.IMAGES_PATH}image_dial_markers_1.png`,
      description: "Full hour markers with correct positions for all 12 hours.",
      stlUrl: [`${constants.MODELS_PATH}dial_hours_1.stl`],
    },
    {
      id: 2,
      name: "Smile",
      image: `${constants.IMAGES_PATH}image_dial_smile_1.png`,
      description: "A smiley face design to bring joy to your timekeeping.",
      stlUrl: [`${constants.MODELS_PATH}dial_smile_1.stl`],
    },
  ],
  handsDesignsImages: [
    {
      id: 1,
      name: "Chopsticks",
      image: `${constants.IMAGES_PATH}image_hands_chopsticks_1.png`,
      description: "Elegant chopstick-shaped hands for a minimalist look.",
      stlUrl: [
        `${constants.MODELS_PATH}hour_hand_chopsticks_1.stl`,
        `${constants.MODELS_PATH}minute_hand_chopsticks_1.stl`,
      ],
    },
    {
      id: 2,
      name: "Bold",
      image: `${constants.IMAGES_PATH}image_hands_bold_1.png`,
      description: "Thick and bold hands for easy readability.",
      stlUrl: [
        `${constants.MODELS_PATH}hour_hand_bold_1.stl`,
        `${constants.MODELS_PATH}minute_hand_bold_1.stl`,
      ],
    },
  ],
  gifCarouselItems: [
    {
      label: "Rotate the clock by clicking and dragging with your mouse",
      src: `${constants.GIFS_PATH}orbit.gif`,
    },
    {
      label: "Customize the colors using the color pickers",
      src: `${constants.GIFS_PATH}color_picker.gif`,
    },
    {
      label: "Choose from various designs",
      src: `${constants.GIFS_PATH}option_dialog.gif`,
    },
    {
      label: "Screenshot your designs and download models",
      src: `${constants.GIFS_PATH}download.gif`,
    },
  ],
};

export default initialStates;
