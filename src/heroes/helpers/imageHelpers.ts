// Helper para obtener la URL de una imagen de héroe
export const getHeroImageUrl = (fileName: string): string => {
  try {
    // Vite maneja las importaciones dinámicas con import.meta.glob
    return `/src/assets/heroportraits/${fileName}`;
  } catch (error) {
    console.warn(`No se pudo cargar la imagen: ${fileName}`);
    // Imagen de fallback si la imagen no existe
    return '/src/assets/heroportraits/storm_ui_glues_draft_portrait_diablo.png';
  }
};
