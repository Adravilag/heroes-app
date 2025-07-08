# Guía de Despliegue en GitHub Pages

## 🚀 Pasos para Desplegar tu Heroes App

### 1. Preparar el Repositorio de GitHub

```bash
# Si aún no tienes un repositorio, créalo:
# 1. Ve a GitHub.com
# 2. Crea un nuevo repositorio llamado "heroes-app"
# 3. NO inicialices con README (ya tenemos archivos)
```

### 2. Configurar Git Local

```bash
# Inicializar Git (si no está inicializado)
git init

# Añadir todos los archivos
git add .

# Hacer el primer commit
git commit -m "🎮 Initial commit: Heroes App ready for GitHub Pages"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU-USUARIO/heroes-app.git

# Subir el código
git push -u origin main
```

### 3. Configurar GitHub Pages

1. **Ve a tu repositorio en GitHub**
2. **Settings** → **Pages** (en la sidebar izquierda)
3. **Source**: Selecciona **"GitHub Actions"**
4. **¡Guarda y listo!**

### 4. Personalizar la Configuración

**⚠️ IMPORTANTE**: Antes del primer despliegue, actualiza:

#### En `package.json` (línea 6):
```json
"homepage": "https://TU-USUARIO-GITHUB.github.io/heroes-app/"
```

#### Ejemplo:
Si tu usuario de GitHub es `adravilag`, cambia:
```json
"homepage": "https://adravilag.github.io/heroes-app/"
```

### 5. Verificar el Despliegue

1. **Ve a la pestaña "Actions"** en tu repositorio
2. **Espera** a que el workflow termine (círculo verde ✅)
3. **Accede** a tu app en: `https://tu-usuario.github.io/heroes-app/`

### 6. Actualizaciones Futuras

```bash
# Para cualquier cambio futuro:
git add .
git commit -m "📝 Descripción del cambio"
git push

# GitHub Actions desplegará automáticamente
```

## 🔧 Troubleshooting

### La página no carga
- Verifica el `homepage` en `package.json`
- Asegúrate de que el nombre del repo coincida con la URL

### Error 404 en las rutas
- Ya está configurado el manejo de SPA en `404.html`
- Si persiste, verifica que GitHub Pages esté habilitado

### El build falla
- Revisa los logs en la pestaña "Actions"
- Ejecuta `npm run build` localmente para verificar

## 📞 ¿Necesitas Ayuda?

1. **Revisa los logs** en GitHub Actions
2. **Verifica** que todos los archivos estén subidos
3. **Confirma** la configuración de GitHub Pages

¡Tu Heroes App estará funcionando en GitHub Pages en pocos minutos! 🎉
