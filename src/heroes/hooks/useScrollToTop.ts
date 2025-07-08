import { useEffect, useCallback } from 'react';

interface UseScrollToTopOptions {
  /** Comportamiento del scroll ('auto', 'smooth', 'instant') */
  behavior?: ScrollBehavior;
  /** Offset desde el top en pixels */
  offset?: number;
  /** Duración en ms para el debounce (opcional, sin uso por ahora) */
  debounceMs?: number;
  /** Si debe hacer scroll automáticamente en el mount */
  scrollOnMount?: boolean;
  /** Selector del elemento a hacer scroll (por defecto window) */
  elementSelector?: string;
}

interface UseScrollToTopReturn {
  /** Función para hacer scroll to top manualmente */
  scrollToTop: () => void;
  /** Función para hacer scroll to top con opciones específicas */
  scrollToTopWithOptions: (options?: ScrollToOptions) => void;
  /** Función para hacer scroll suave a una posición específica */
  scrollTo: (position: number) => void;
}

export const useScrollToTop = (
  options: UseScrollToTopOptions = {}
): UseScrollToTopReturn => {
  const {
    behavior = 'smooth',
    offset = 0,
    scrollOnMount = true,
    elementSelector,
  } = options;

  // Función para obtener el elemento de scroll
  const getScrollElement = useCallback(() => {
    if (elementSelector) {
      return document.querySelector(elementSelector);
    }
    return window;
  }, [elementSelector]);

  // Función principal de scroll
  const scrollToTop = useCallback(() => {
    const element = getScrollElement();
    
    if (element) {
      if (element === window) {
        window.scrollTo({
          top: offset,
          behavior,
        });
      } else {
        (element as Element).scrollTo({
          top: offset,
          behavior,
        });
      }
    }
  }, [behavior, offset, getScrollElement]);

  // Función con opciones personalizadas
  const scrollToTopWithOptions = useCallback((scrollOptions?: ScrollToOptions) => {
    const element = getScrollElement();
    
    if (element) {
      const defaultOptions = {
        top: offset,
        behavior,
      };
      
      const finalOptions = { ...defaultOptions, ...scrollOptions };
      
      if (element === window) {
        window.scrollTo(finalOptions);
      } else {
        (element as Element).scrollTo(finalOptions);
      }
    }
  }, [behavior, offset, getScrollElement]);

  // Función para hacer scroll a una posición específica
  const scrollTo = useCallback((position: number) => {
    const element = getScrollElement();
    
    if (element) {
      if (element === window) {
        window.scrollTo({
          top: position,
          behavior,
        });
      } else {
        (element as Element).scrollTo({
          top: position,
          behavior,
        });
      }
    }
  }, [behavior, getScrollElement]);



  // Scroll automático en mount
  useEffect(() => {
    if (scrollOnMount) {
      // Pequeño delay para asegurar que el componente esté completamente renderizado
      const timeoutId = setTimeout(scrollToTop, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [scrollOnMount, scrollToTop]);

  return {
    scrollToTop,
    scrollToTopWithOptions,
    scrollTo,
  };
};

// Hook específico para scroll en cambio de página/ruta
export const useScrollToTopOnRouteChange = (
  options: UseScrollToTopOptions = {}
) => {
  const { scrollToTop } = useScrollToTop({
    ...options,
    scrollOnMount: true,
  });

  return { scrollToTop };
};

// Hook para scroll con dependencias
export const useScrollToTopOnDependency = (
  dependencies: unknown[],
  options: UseScrollToTopOptions = {}
) => {
  const { scrollToTop } = useScrollToTop({
    ...options,
    scrollOnMount: false,
  });

  useEffect(() => {
    if (dependencies.length > 0) {
      scrollToTop();
    }
  }, dependencies);

  return { scrollToTop };
};

export default useScrollToTop;
