import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import { AppProvider } from "./lib/AppContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Provider>
        <App />
      </Provider>
    </AppProvider>
  </StrictMode>
);
