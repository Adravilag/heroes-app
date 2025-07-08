# 🚀 Script de Despliegue Automático para GitHub Pages
# Heroes App - Deploy Script (PowerShell)

Write-Host "🎮 Heroes App - GitHub Pages Deploy Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Verificar si Git está inicializado
if (-not (Test-Path ".git")) {
    Write-Host "📁 Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
}

# Construir la aplicación
Write-Host "🔨 Construyendo la aplicación..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en el build. Abortando despliegue." -ForegroundColor Red
    exit 1
}

# Verificar si hay cambios para commitear
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "📝 Añadiendo archivos al staging..." -ForegroundColor Yellow
    git add .
    
    Write-Host "💾 Creando commit..." -ForegroundColor Yellow
    $commitMessage = Read-Host "📋 Mensaje del commit (o presiona Enter para usar mensaje automático)"
    
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "🚀 Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    }
    
    git commit -m "$commitMessage"
} else {
    Write-Host "✅ No hay cambios para commitear." -ForegroundColor Green
}

# Verificar si existe el remote origin
try {
    git remote get-url origin | Out-Null
} catch {
    Write-Host "🔗 Configurando remote origin..." -ForegroundColor Yellow
    $repoUrl = Read-Host "📋 URL del repositorio GitHub (ej: https://github.com/usuario/heroes-app.git)"
    git remote add origin $repoUrl
}

# Subir a GitHub (esto activará GitHub Actions)
Write-Host "⬆️ Subiendo cambios a GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ ¡Cambios subidos a GitHub!" -ForegroundColor Green
Write-Host "🔄 GitHub Actions se está encargando del despliegue automáticamente" -ForegroundColor Cyan
Write-Host "🔍 Ve a GitHub → tu repositorio → pestaña 'Actions' para ver el progreso" -ForegroundColor Cyan
Write-Host "🌐 Una vez completado, tu app estará en: https://tu-usuario.github.io/heroes-app/" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎉 ¡Gracias por usar Heroes App!" -ForegroundColor Magenta

# Pausa para que el usuario pueda leer el mensaje
Read-Host "Presiona Enter para continuar..."
