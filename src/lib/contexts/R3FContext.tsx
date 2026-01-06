import { createContext, useContext, useRef } from "react";
import * as THREE from "three";

type R3FState = {
  gl: THREE.WebGLRenderer | null;
  scene: THREE.Scene | null;
  camera: THREE.Camera | null;
};

const R3FContext = createContext<R3FState | null>(null);

export function R3FProvider({ children }: { children: React.ReactNode }) {
  const state = useRef<R3FState>({
    gl: null,
    scene: null,
    camera: null,
  });

  return (
    // eslint-disable-next-line react-hooks/refs
    <R3FContext.Provider value={state.current}>{children}</R3FContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useR3F() {
  const ctx = useContext(R3FContext);
  if (!ctx) {
    throw new Error("useR3F must be used inside R3FProvider");
  }
  return ctx;
}
