import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { ParticlesBackground, AnimatedBackground } from "../ui/components";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <AnimatedBackground />
      <ParticlesBackground />
      <Routes>
        <Route 
          path="login" 
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } 
        />
        <Route 
          path="/*" 
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
};

export default AppRouter;
