import { buildUrl } from '../../utils/pathUtils';

// Helper para obtener la URL de una imagen de héroe
export const getHeroImageUrl = (fileName: string): string => {
  try {
    // En desarrollo y producción, usar rutas relativas al public folder
    return buildUrl(`assets/heroportraits/${fileName}`);
  } catch {
    console.warn(`No se pudo cargar la imagen: ${fileName}`);
    // Imagen de fallback si la imagen no existe
    return buildUrl('assets/heroportraits/storm_ui_glues_draft_portrait_diablo.png');
  }
};
