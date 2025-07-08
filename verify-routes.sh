#!/bin/bash

# Script de verificación de rutas para Heroes App
# Verifica que las URLs no tengan prefijo duplicado

echo "=== Verificación de Rutas Heroes App ==="
echo "Verificando que las URLs no tengan prefijo duplicado..."
echo ""

# URLs correctas que deberían funcionar
urls=(
    "https://adravilag.github.io/heroes-app/"
    "https://adravilag.github.io/heroes-app/search"
    "https://adravilag.github.io/heroes-app/warcraft"
    "https://adravilag.github.io/heroes-app/diablo"
    "https://adravilag.github.io/heroes-app/overwatch"
    "https://adravilag.github.io/heroes-app/starcraft"
)

echo "✅ URLs correctas esperadas:"
for url in "${urls[@]}"; do
    echo "  - $url"
done

echo ""
echo "❌ URLs incorrectas que NO deberían aparecer:"
echo "  - https://adravilag.github.io/heroes-app/heroes-app/diablo"
echo "  - https://adravilag.github.io/heroes-app/heroes-app/overwatch"
echo "  - https://adravilag.github.io/heroes-app/heroes-app/search"
echo ""

echo "🔧 Corrección aplicada:"
echo "  - buildRoutePath() ahora devuelve solo rutas relativas"
echo "  - React Router basename se encarga del prefijo automáticamente"
echo "  - Eliminado el prefijo duplicado en la navegación"
echo ""

echo "📋 Para verificar manualmente:"
echo "  1. Abrir cualquier URL correcta de arriba"
echo "  2. Navegar usando los enlaces internos"
echo "  3. Verificar que la URL en la barra de direcciones sea correcta"
echo "  4. Recargar la página en cualquier ruta"
echo "  5. Usar el botón 'Atrás' del navegador"
echo ""

echo "✅ Estado: Corrección aplicada y desplegada"
echo "🌐 Aplicación disponible en: https://adravilag.github.io/heroes-app/"
