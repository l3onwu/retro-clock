import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import { AppProvider } from "./lib/contexts/AppContext.tsx";
import { R3FProvider } from "./lib/contexts/R3FContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <R3FProvider>
        <Provider>
          <App />
        </Provider>
      </R3FProvider>
    </AppProvider>
  </StrictMode>
);
