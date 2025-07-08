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
// Como React Router ya maneja el basename, siempre devolvemos rutas relativas
export const buildRoutePath = (route: string): string => {
  // Limpiar la ruta para asegurar que comience con /
  const cleanRoute = route.startsWith('/') ? route : `/${route}`;
  
  // Devolver la ruta tal como está - React Router se encarga del basename
  return cleanRoute;
};
