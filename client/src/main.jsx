import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import StoreProvider from "./store/provider.jsx";
import AuthInitializer from "./AuthInitializer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider>
      <AuthInitializer />
      <App />
    </StoreProvider>
  </BrowserRouter>,
);
