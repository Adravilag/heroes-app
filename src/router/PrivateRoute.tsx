import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/hooks";
import { buildRoutePath } from "../utils/pathUtils";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Si no está autenticado, redirigir a login guardando la ubicación actual
  if (!isAuthenticated) {
    return <Navigate to={buildRoutePath("/login")} state={{ from: location }} replace />;
  }

  // Si está autenticado, renderizar el componente hijo
  return <>{children}</>;
};

export default PrivateRoute;
