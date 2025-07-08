#!/bin/bash

# 🚀 Script de Despliegue Automático para GitHub Pages
# Heroes App - Deploy Script

echo "🎮 Heroes App - GitHub Pages Deploy Script"
echo "=========================================="

# Verificar si Git está inicializado
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositorio Git..."
    git init
fi

# Verificar si hay cambios para commitear
if [[ -n $(git status --porcelain) ]]; then
    echo "📝 Añadiendo archivos al staging..."
    git add .
    
    echo "💾 Creando commit..."
    read -p "📋 Mensaje del commit (o presiona Enter para usar mensaje automático): " commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="🚀 Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    git commit -m "$commit_message"
else
    echo "✅ No hay cambios para commitear."
fi

# Verificar si existe el remote origin
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Configurando remote origin..."
    read -p "📋 URL del repositorio GitHub (ej: https://github.com/usuario/heroes-app.git): " repo_url
    git remote add origin "$repo_url"
fi

# Subir a GitHub
echo "⬆️ Subiendo cambios a GitHub..."
git push -u origin main

echo ""
echo "✅ ¡Despliegue iniciado!"
echo "🔍 Ve a GitHub → tu repositorio → pestaña 'Actions' para ver el progreso"
echo "🌐 Una vez completado, tu app estará en: https://tu-usuario.github.io/heroes-app/"
echo ""
echo "🎉 ¡Gracias por usar Heroes App!"
