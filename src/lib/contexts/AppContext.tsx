import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import initialStates from "../initialStates";
import { parseColor, type Color } from "@chakra-ui/react";
import { loadPresetsFromLocalStorage } from "../api/presetsLocalStorage";
import type { PresetType } from "@/components/custom/presets/PresetItem";

interface AppContextType {
  // Body options
  bodyColor: Color;
  setBodyColor: React.Dispatch<React.SetStateAction<Color>>;
  // Dial options
  dialColor: Color;
  setDialColor: React.Dispatch<React.SetStateAction<Color>>;
  dialDesignImage: DialDesignImage;
  setDialDesignImage: React.Dispatch<React.SetStateAction<DialDesignImage>>;
  // Hands options
  handsColor: Color;
  setHandsColor: React.Dispatch<React.SetStateAction<Color>>;
  handsDesignImage: DialDesignImage;
  setHandsDesignImage: React.Dispatch<React.SetStateAction<DialDesignImage>>;
  // Saved presets
  presets: PresetType[];
  setPresets: React.Dispatch<React.SetStateAction<PresetType[]>>;
}

export interface DialDesignImage {
  id: number;
  name: string;
  image: string;
  description: string;
  stlUrl: string[];
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
  const [handsDesignImage, setHandsDesignImage] = useState(
    initialStates.handsDesignsImages[0]
  );

  // Saved presets
  const [presets, setPresets] = useState<PresetType[]>(
    loadPresetsFromLocalStorage()
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
    handsDesignImage,
    setHandsDesignImage,
    presets,
    setPresets,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext)!;
