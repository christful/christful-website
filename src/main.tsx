import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="363990971536-b57116i98g4m56bm4vri2uqnfqa4bp4j.apps.googleusercontent.com" >
      <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
