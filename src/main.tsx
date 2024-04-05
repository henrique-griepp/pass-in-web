import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import '../app/globals.css';

import { ThemeProvider } from "./components/ui/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* não esquecer vite-ui-theme storagekey */}
    <ThemeProvider defaultTheme="dark" storageKey="">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
