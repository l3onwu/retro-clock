import clockPresets from "./clockPresets";

const initialStates = {
  initialPreset: clockPresets[0],
  dialDesignsImages: [
    {
      id: 1,
      name: "Full Markers",
      image: "/image_dial_markers_1.png",
      description: "Full hour markers with correct positions for all 12 hours.",
      stlUrl: ["/dial_hours_1.stl"],
    },
    {
      id: 2,
      name: "Smile",
      image: "/image_dial_smile_1.png",
      description: "A smiley face design to bring joy to your timekeeping.",
      stlUrl: ["/dial_smile_1.stl"],
    },
  ],
  handsDesignsImages: [
    {
      id: 1,
      name: "Chopsticks",
      image: "/image_hands_chopsticks_1.png",
      description: "Elegant chopstick-shaped hands for a minimalist look.",
      stlUrl: ["/hour_hand_chopsticks_1.stl", "/minute_hand_chopsticks_1.stl"],
    },
    {
      id: 2,
      name: "Bold",
      image: "/image_hands_bold_1.png",
      description: "Thick and bold hands for easy readability.",
      stlUrl: ["/hour_hand_bold_1.stl", "/minute_hand_bold_1.stl"],
    },
  ],
  gifCarouselItems: [
    {
      label: "Rotate the clock by clicking and dragging with your mouse",
      src: "/gifs/orbit.gif",
    },
    {
      label: "Customize the colors using the color pickers",
      src: "/gifs/color_picker.gif",
    },
    {
      label: "Choose from various designs",
      src: "/gifs/option_dialog.gif",
    },
    {
      label: "Save and load your favorite designs as presets",
      src: "/gifs/save_preset.gif",
    },
  ],
};

export default initialStates;
