import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import initialStates from "./initialStates";
import type { Color } from "@chakra-ui/react";
import { parse } from "@zag-js/color-picker";

interface AppContextType {
  bodyColor: Color;
  setBodyColor: React.Dispatch<React.SetStateAction<Color>>;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [bodyColor, setBodyColor] = useState(
    parse(initialStates.initialBodyColor)
  );

  const value: AppContextType = {
    bodyColor,
    setBodyColor,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext)!;
