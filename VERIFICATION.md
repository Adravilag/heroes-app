# Guía de Verificación - Heroes App en GitHub Pages

## Lista de Verificación Post-Despliegue

### 1. Verificación de la Página Principal
- [ ] Acceder a `https://adravilag.github.io/heroes-app/`
- [ ] Verificar que la página carga correctamente
- [ ] Confirmar que los estilos se aplican correctamente
- [ ] Verificar que el sistema de autenticación funciona

### 2. Verificación de Rutas SPA
- [ ] Navegar a `/heroes-app/search`
- [ ] Navegar a `/heroes-app/dc`
- [ ] Navegar a `/heroes-app/starcraft`
- [ ] Navegar a `/heroes-app/overwatch`
- [ ] Verificar que todas las rutas cargan correctamente

### 3. Verificación de Recarga de Página
- [ ] Acceder directamente a `https://adravilag.github.io/heroes-app/search`
- [ ] Recargar la página en `/heroes-app/dc`
- [ ] Recargar la página en `/heroes-app/starcraft`
- [ ] Recargar la página en `/heroes-app/overwatch`
- [ ] Verificar que NO aparecen errores 404

### 4. Verificación de Recursos Estáticos
- [ ] Verificar que las imágenes de héroes cargan correctamente
- [ ] Verificar que los iconos y logos se muestran
- [ ] Verificar que los estilos CSS se aplican
- [ ] Verificar que las fuentes se cargan correctamente

### 5. Verificación de Funcionalidad
- [ ] Probar la búsqueda de héroes
- [ ] Probar la navegación entre páginas de héroes
- [ ] Probar el sistema de autenticación (login/logout)
- [ ] Probar la navegación con el botón "Atrás" del navegador

### 6. Verificación de Responsive Design
- [ ] Probar en dispositivos móviles
- [ ] Probar en tablets
- [ ] Probar en diferentes tamaños de pantalla

## Problemas Conocidos y Soluciones

### Error 404 en Rutas Profundas
Si aparece un error 404 al acceder directamente a rutas como `/heroes-app/overwatch`:

1. **Verificar que `404.html` existe** en la carpeta `public/`
2. **Verificar el script SPA** en `index.html`
3. **Verificar la configuración** de `pathSegmentsToKeep = 1` en `404.html`

### Prefijo Duplicado en URLs (RESUELTO)
Si las URLs aparecen como `/heroes-app/heroes-app/diablo` en lugar de `/heroes-app/diablo`:

1. **Causa**: `buildRoutePath` añadía el prefijo base cuando React Router ya lo maneja con `basename`
2. **Solución**: Simplificado `buildRoutePath` para devolver solo rutas relativas
3. **Resultado**: React Router se encarga automáticamente del prefijo con `basename`

### Recursos Estáticos No Cargan
Si las imágenes o estilos no cargan:

1. **Verificar `vite.config.ts`** - base debe ser `/heroes-app/` en producción
2. **Verificar `pathUtils.ts`** - debe usar el prefijo correcto en producción
3. **Verificar el build** - ejecutar `npm run build` y `npm run preview`

### Navegación Interna Rota
Si la navegación interna no funciona:

1. **Verificar `AppRouter.tsx`** - debe usar `basename="/heroes-app"`
2. **Verificar componentes de navegación** - deben usar rutas relativas
3. **Verificar hooks de navegación** - deben usar rutas relativas (sin prefijo)

## Comandos de Depuración

```bash
# Verificar build local
npm run build
npm run preview

# Verificar el contenido del dist
ls -la dist/

# Verificar las rutas generadas
grep -r "heroes-app" dist/

# Verificar el 404.html
cat dist/404.html
```

## URLs de Prueba

### Desarrollo (Local)
- http://localhost:5173/
- http://localhost:5173/search
- http://localhost:5173/dc
- http://localhost:5173/starcraft
- http://localhost:5173/overwatch

### Producción (GitHub Pages)
- https://adravilag.github.io/heroes-app/
- https://adravilag.github.io/heroes-app/search
- https://adravilag.github.io/heroes-app/dc
- https://adravilag.github.io/heroes-app/starcraft
- https://adravilag.github.io/heroes-app/overwatch

## Notas Técnicas

- **Prefijo de Ruta**: `/heroes-app/` solo en producción
- **Basename**: Configurado en `BrowserRouter` para GitHub Pages
- **SPA Routing**: Manejado por `404.html` y script en `index.html`
- **Recursos Estáticos**: Prefijo aplicado automáticamente por Vite
- **Navegación**: Rutas relativas para compatibilidad entre entornos
