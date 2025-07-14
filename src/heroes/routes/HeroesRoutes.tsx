import { ModernNavbar, Footer } from "../../ui";
import { Routes, Route, Navigate } from "react-router-dom";
import { WarcraftPage, StarcraftPage, DiabloPage, SearchPage, HeroPage, OverwatchPage } from "../pages";

const HeroesRoutes = () => {

  // En el caso de que haya visitdo la última ruta, se redirige a Warcraft por defecto
  const lastVisitedPath = localStorage.getItem("lastVisitedPath") || "/warcraft";

  console.log(`Redirigiendo a la última ruta visitada: ${lastVisitedPath}`);
  

  return (
    <>
      <ModernNavbar />
      <div className="container">
        <Routes>
          <Route path="warcraft" element={<WarcraftPage />} />
          <Route path="starcraft" element={<StarcraftPage />} />
          <Route path="diablo" element={<DiabloPage />} />
          <Route path="overwatch" element={<OverwatchPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to={lastVisitedPath} replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default HeroesRoutes;
