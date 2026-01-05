import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import initialStates from "./initialStates";
import { parseColor, type Color } from "@chakra-ui/react";

interface AppContextType {
  bodyColor: Color;
  setBodyColor: React.Dispatch<React.SetStateAction<Color>>;
  dialColor: Color;
  setDialColor: React.Dispatch<React.SetStateAction<Color>>;
  handsColor: Color;
  setHandsColor: React.Dispatch<React.SetStateAction<Color>>;
  dialDesignImage: DialDesignImage;
  setDialDesignImage: React.Dispatch<React.SetStateAction<DialDesignImage>>;
}

interface DialDesignImage {
  id: number;
  name: string;
  image: string;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  // Body options
  const [bodyColor, setBodyColor] = useState(
    parseColor(initialStates.initialBodyColor)
  );

  // Dial options
  const [dialColor, setDialColor] = useState(
    parseColor(initialStates.initialDialColor)
  );
  const [dialDesignImage, setDialDesignImage] = useState(
    initialStates.dialDesignsImages[0]
  );

  // Hands options
  const [handsColor, setHandsColor] = useState(
    parseColor(initialStates.initialHandsColor)
  );

  const value: AppContextType = {
    bodyColor,
    setBodyColor,
    dialColor,
    setDialColor,
    handsColor,
    setHandsColor,
    dialDesignImage,
    setDialDesignImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext)!;
