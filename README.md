# Heroes App

## Descripción del Proyecto

Heroes App es una aplicación web inspirada en Heroes of the Storm que permite explorar héroes de múltiples universos de Blizzard Entertainment (Warcraft, StarCraft, Diablo, Overwatch). [1](#0-0)  La aplicación está construida con React, TypeScript y Vite, ofreciendo una experiencia moderna e inmersiva. 

## Tecnologías Principales

- **Frontend**: React 19.1.0 con TypeScript 5.8.3 [2](#0-1) 
- **Build Tool**: Vite 7.0.3 [3](#0-2) 
- **Routing**: React Router DOM 7.6.3 [4](#0-3) 
- **Internacionalización**: i18next 25.3.1 con react-i18next 15.6.0 [5](#0-4) 
- **Efectos Visuales**: react-tsparticles 2.12.2 [6](#0-5) 
- **Estilos**: Bootstrap 5.3.7 + CSS personalizado [7](#0-6) 

## Características Principales

### Sistema de Héroes
- Base de datos completa de héroes con información detallada
- Organización por universos (Warcraft, StarCraft, Diablo, Overwatch)
- Visualización de estadísticas, roles y dificultad

### Búsqueda y Filtrado Avanzado
- Búsqueda en tiempo real por nombre [8](#0-7) 
- Filtros por rol, universo y otras características
- Sistema de paginación integrado [9](#0-8) 

### Internacionalización
- Soporte completo para inglés y español [10](#0-9) 
- Traducciones de interfaz y contenido de héroes
- Cambio dinámico de idioma

### Sistema de Autenticación
- Login/logout de usuarios
- Protección de rutas privadas
- Gestión de estado de autenticación

### Diseño Visual
- Tema inspirado en Heroes of the Storm con gradientes y efectos
- Fondos animados con partículas [11](#0-10) 
- Interfaz responsive con Bootstrap

## Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar linting
npm run lint
``` [12](#0-11) 

## Estructura del Proyecto

```
src/
├── auth/           # Sistema de autenticación
├── heroes/         # Gestión de héroes y páginas
├── i18n/          # Internacionalización
├── router/        # Configuración de rutas
├── ui/            # Componentes de interfaz
└── main.tsx       # Punto de entrada
``` [13](#0-12) 

## Arquitectura

La aplicación sigue una arquitectura modular con:
- **Providers**: AuthProvider y LanguageProvider para gestión de estado global [14](#0-13) 
- **Routing**: Sistema de rutas con protección de acceso
- **Hooks personalizados**: Para lógica reutilizable de búsqueda y paginación
- **Componentes modulares**: Separación clara entre lógica y presentación

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción |
| `npm run lint` | Análisis de código con ESLint |
| `npm run preview` | Preview del build de producción |

**Notes**

El proyecto utiliza Vite como herramienta de build moderna, proporcionando desarrollo rápido con Hot Module Replacement.  La configuración de ESLint incluye reglas específicas para React y TypeScript. [15](#0-14)  El sistema de internacionalización permite fácil expansión a nuevos idiomas agregando archivos JSON en `src/i18n/locales/`. 

Wiki pages you might want to explore:
- [Overview (Adravilag/heroes-app)](/wiki/Adravilag/heroes-app#1)
- [Getting Started (Adravilag/heroes-app)](/wiki/Adravilag/heroes-app#3)