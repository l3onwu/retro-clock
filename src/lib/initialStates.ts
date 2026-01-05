const initialStates = {
  initialBodyColor: "#8EB672",
  initialDialColor: "#ffffff",
  initialHandsColor: "#E54D4C",
  dialDesignsImages: [
    {
      id: 1,
      name: "Full Markers",
      image: "/public/image_dial_markers_1.png",
      description: "Full hour markers with correct positions for all 12 hours.",
    },
    {
      id: 2,
      name: "Smile",
      image: "/public/image_dial_smile_1.png",
      description: "A smiley face design to bring joy to your timekeeping.",
    },
  ],
  handsDesignsImages: [
    {
      id: 1,
      name: "Chopsticks",
      image: "/public/image_hands_chopsticks_1.png",
      description: "Elegant chopstick-shaped hands for a minimalist look.",
    },
    {
      id: 2,
      name: "Bold",
      image: "/public/image_hands_bold_1.png",
      description: "Thick and bold hands for easy readability.",
    },
  ],
};

export default initialStates;
