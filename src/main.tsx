import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeroesApp from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import { getBasePath } from "./utils/pathUtils";
import "./i18n";

// Configurar el basename para React Router
const basename = getBasePath().slice(0, -1); // Remover la barra final

// Debug: Verificar que el basename esté correcto
console.log('Current basename:', basename);
console.log('Current BASE_URL:', import.meta.env.BASE_URL);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
);
