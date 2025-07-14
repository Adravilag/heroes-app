import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/hooks";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const { pathname: currentPath, search: currentSearch } = location;

  if (currentPath !== "/") {
    const lastVisitedPath = `${currentPath}${currentSearch}`;
    localStorage.setItem("lastVisitedPath", lastVisitedPath);
  }

  // Si no está autenticado, redirigir a login guardando la ubicación actual
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si está autenticado, renderizar el componente hijo
  return <>{children}</>;
};

export default PrivateRoute;
