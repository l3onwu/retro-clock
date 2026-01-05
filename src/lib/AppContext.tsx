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
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [bodyColor, setBodyColor] = useState(
    parseColor(initialStates.initialBodyColor)
  );
  const [dialColor, setDialColor] = useState(
    parseColor(initialStates.initialDialColor)
  );
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext)!;
