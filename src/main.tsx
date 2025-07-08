import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeroesApp from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
);
