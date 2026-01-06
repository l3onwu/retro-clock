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
      stlUrl: ["/public/dial_hours_1.stl"],
    },
    {
      id: 2,
      name: "Smile",
      image: "/public/image_dial_smile_1.png",
      description: "A smiley face design to bring joy to your timekeeping.",
      stlUrl: ["/public/dial_smile_1.stl"],
    },
  ],
  handsDesignsImages: [
    {
      id: 1,
      name: "Chopsticks",
      image: "/public/image_hands_chopsticks_1.png",
      description: "Elegant chopstick-shaped hands for a minimalist look.",
      stlUrl: [
        "/public/hour_hand_chopsticks_1.stl",
        "/public/minute_hand_chopsticks_1.stl",
      ],
    },
    {
      id: 2,
      name: "Bold",
      image: "/public/image_hands_bold_1.png",
      description: "Thick and bold hands for easy readability.",
      stlUrl: [
        "/public/hour_hand_bold_1.stl",
        "/public/minute_hand_bold_1.stl",
      ],
    },
  ],
};

export default initialStates;
