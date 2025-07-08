// Utility para manejar las rutas base en desarrollo y producción
export const getBasePath = (): string => {
  // En desarrollo, BASE_URL será "/" (raíz)
  // En producción, BASE_URL será "/heroes-app/" (prefijo)
  return import.meta.env.BASE_URL || '/';
};

// Helper para construir URLs absolutas con el base path
export const buildUrl = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Si basePath es "/" (desarrollo), no agregar barra extra
  if (basePath === '/') {
    return `/${cleanPath}`;
  }
  
  // En producción con prefijo
  return `${basePath}${cleanPath}`;
};

// Helper específico para rutas de navegación
export const buildRoutePath = (route: string): string => {
  const basePath = getBasePath();
  const cleanRoute = route.startsWith('/') ? route : `/${route}`;
  
  // Si basePath es "/" (desarrollo), devolver la ruta tal como está
  if (basePath === '/') {
    return cleanRoute;
  }
  
  // En producción con prefijo
  return `${basePath.slice(0, -1)}${cleanRoute}`;
};
