import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/hooks";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth();

  // Si ya está autenticado, redirigir a la página principal
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si no está autenticado, renderizar el componente hijo
  return <>{children}</>;
};

export default PublicRoute;
