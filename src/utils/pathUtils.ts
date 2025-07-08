// Utility para manejar las rutas base en desarrollo y producción
export const getBasePath = (): string => {
  // En desarrollo, Vite usa la raíz
  if (import.meta.env.DEV) {
    return '';
  }
  
  // En producción, usar el base configurado en vite.config.ts
  return import.meta.env.BASE_URL || '/heroes-app/';
};

// Helper para construir URLs absolutas con el base path
export const buildUrl = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};

// Helper específico para rutas de navegación
export const buildRoutePath = (route: string): string => {
  const basePath = getBasePath();
  const cleanRoute = route.startsWith('/') ? route : `/${route}`;
  return `${basePath.slice(0, -1)}${cleanRoute}`;
};
