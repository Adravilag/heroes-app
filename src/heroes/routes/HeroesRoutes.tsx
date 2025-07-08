import { ModernNavbar, Footer } from "../../ui";
import { Routes, Route, Navigate } from "react-router-dom";
import { WarcraftPage, StarcraftPage, DiabloPage, SearchPage, HeroPage, OverwatchPage } from "../pages";

const HeroesRoutes = () => {
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
          <Route path="/" element={<Navigate to="/warcraft" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default HeroesRoutes;
