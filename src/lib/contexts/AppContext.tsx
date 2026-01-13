import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import initialStates from "../initialStates";
import { parseColor, type Color } from "@chakra-ui/react";
import {
  loadInitialPresetFromLocalStorage,
  loadIsFirstVisitFromLocalStorage,
  loadPresetsFromLocalStorage,
  saveInitialPresetToLocalStorage,
} from "../api/presetsLocalStorage";
import type { PresetType } from "@/components/custom/presets/PresetItem";
import getDesignFromName from "../utils/getDesignFromName";

interface AppContextType {
  // First page visit
  isFirstVisit: boolean;
  setIsFirstVisit: React.Dispatch<React.SetStateAction<boolean>>;
  // Initial loaded preset
  initialPreset: PresetType | null;
  setInitialPreset: React.Dispatch<React.SetStateAction<PresetType | null>>;
  // Saved presets
  savedPresets: PresetType[];
  setSavedPresets: React.Dispatch<React.SetStateAction<PresetType[]>>;
  // Helper function to apply a clock preset
  applyClockPreset: (preset: PresetType) => void;
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
  // APP STATE
  // First page visit
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(
    loadIsFirstVisitFromLocalStorage()
  );

  // Initial loaded preset
  const [initialPreset, setInitialPreset] = useState<PresetType | null>(
    loadInitialPresetFromLocalStorage()
  );

  // Saved presets
  const [savedPresets, setSavedPresets] = useState<PresetType[]>(
    loadPresetsFromLocalStorage()
  );

  // CLOCK DESIGN OPTIONS
  // Body options
  const [bodyColor, setBodyColor] = useState(
    initialPreset
      ? parseColor(initialPreset.bodyColor)
      : parseColor(initialStates.initialPreset.bodyColor)
  );

  // Dial options
  const [dialColor, setDialColor] = useState(
    initialPreset
      ? parseColor(initialPreset.dialColor)
      : parseColor(initialStates.initialPreset.dialColor)
  );
  const [dialDesignImage, setDialDesignImage] = useState(
    initialPreset
      ? getDesignFromName(
          initialPreset.dialDesign,
          initialStates.dialDesignsImages
        )
      : getDesignFromName(
          initialStates.initialPreset.dialDesign,
          initialStates.dialDesignsImages
        )
  );

  // Hands options
  const [handsColor, setHandsColor] = useState(
    initialPreset
      ? parseColor(initialPreset.handsColor)
      : parseColor(initialStates.initialPreset.handsColor)
  );
  const [handsDesignImage, setHandsDesignImage] = useState(
    initialPreset
      ? getDesignFromName(
          initialPreset.handsDesign,
          initialStates.handsDesignsImages
        )
      : getDesignFromName(
          initialStates.initialPreset.handsDesign,
          initialStates.handsDesignsImages
        )
  );

  // Side effect - save to local storage when initialPreset changes
  useEffect(() => {
    const newPreset = {
      name: "initialPreset",
      bodyColor: bodyColor.toString("hsl"),
      dialColor: dialColor.toString("hsl"),
      handsColor: handsColor.toString("hsl"),
      dialDesign: dialDesignImage.name,
      handsDesign: handsDesignImage.name,
    };
    saveInitialPresetToLocalStorage(newPreset);
  }, [
    initialPreset,
    bodyColor,
    dialColor,
    handsColor,
    dialDesignImage,
    handsDesignImage,
  ]);

  // Helper function to apply a clock preset
  const applyClockPreset = (preset: PresetType) => {
    // Set configurations
    setBodyColor(parseColor(preset.bodyColor));
    setDialColor(parseColor(preset.dialColor));
    setHandsColor(parseColor(preset.handsColor));
    setDialDesignImage(
      getDesignFromName(preset.dialDesign, initialStates.dialDesignsImages)
    );
    setHandsDesignImage(
      getDesignFromName(preset.handsDesign, initialStates.handsDesignsImages)
    );
  };

  const value: AppContextType = {
    isFirstVisit,
    setIsFirstVisit,
    initialPreset,
    setInitialPreset,
    savedPresets,
    setSavedPresets,
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
    applyClockPreset,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext)!;
