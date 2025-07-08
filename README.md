# Heroes App 🎮

> Una aplicación web inmersiva inspirada en Heroes of the Storm para explorar el universo de héroes de Blizzard Entertainment

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.3-646CFF?logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-7952B3?logo=bootstrap)](https://getbootstrap.com/)

## 🌟 Descripción del Proyecto

Heroes App es una aplicación web de última generación que recrea la experiencia visual de Heroes of the Storm, permitiendo a los usuarios explorar una extensa colección de héroes de los universos más icónicos de Blizzard Entertainment: **Warcraft**, **StarCraft**, **Diablo** y **Overwatch**.

La aplicación combina un diseño épico inspirado en videojuegos con tecnologías web modernas, ofreciendo una experiencia fluida e inmersiva tanto en desktop como en dispositivos móviles.

## 🚀 Características Destacadas

### 🦸‍♂️ Sistema Completo de Héroes
- **Base de datos exhaustiva** con más de 90 héroes
- **Información detallada**: estadísticas, roles, dificultad, trasfondos
- **Organización por universos** con navegación intuitiva
- **Tarjetas interactivas** con efectos visuales

### 🔍 Búsqueda y Filtrado Inteligente
- **Búsqueda en tiempo real** con autocompletado
- **Filtros avanzados** por rol, universo, dificultad
- **Sistema de paginación mejorado** con scroll automático
- **Resultados instantáneos** sin recargas de página

### 🌐 Internacionalización Completa
- **Soporte multiidioma**: Inglés y Español
- **Traducciones dinámicas** de toda la interfaz
- **Localización de contenido** de héroes y descripciones
- **Cambio de idioma en tiempo real**

### 🔐 Sistema de Autenticación
- **Login/logout seguro** con validación
- **Rutas protegidas** para contenido premium
- **Gestión de sesiones** persistente
- **Estados de carga** y manejo de errores

### 🎨 Diseño Visual Épico
- **Tema Heroes of the Storm** con gradientes dorados y azules
- **Efectos de partículas animadas** en fondos
- **Interfaz completamente responsive**
- **Animaciones fluidas** y transiciones suaves
- **Paleta de colores Blizzard** auténtica

## 🛠️ Stack Tecnológico

### Frontend Core
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático y desarrollo robusto
- **Vite 7.0.3** - Herramienta de build ultrarrápida
- **React Router DOM 7.6.3** - Enrutamiento SPA avanzado

### Internacionalización
- **i18next 25.3.1** - Framework de internacionalización
- **react-i18next 15.6.0** - Integración React para i18n

### Efectos Visuales
- **react-tsparticles 2.12.2** - Sistema de partículas animadas
- **Bootstrap 5.3.7** - Framework CSS responsive
- **CSS Custom Properties** - Variables y temas dinámicos

### Herramientas de Desarrollo
- **ESLint** - Linting y calidad de código
- **Prettier** - Formateo automático
- **TypeScript Strict Mode** - Máxima seguridad de tipos

## 🏗️ Arquitectura del Proyecto

```
src/
├── 🔐 auth/              # Sistema de autenticación
│   ├── components/       # Componentes de login/registro
│   ├── context/         # Context de autenticación
│   └── types/           # Tipos TypeScript
├── 🦸 heroes/            # Módulo principal de héroes
│   ├── components/      # Componentes de héroes
│   ├── helpers/         # Utilidades y funciones
│   ├── hooks/           # Hooks personalizados
│   ├── pages/           # Páginas del módulo
│   └── types/           # Interfaces TypeScript
├── 🌐 i18n/             # Internacionalización
│   ├── locales/         # Archivos de traducción
│   └── config/          # Configuración i18next
├── 🛣️ router/            # Configuración de rutas
│   ├── AppRouter.tsx    # Router principal
│   └── PrivateRoute.tsx # Rutas protegidas
├── 🎨 ui/               # Componentes UI reutilizables
│   ├── components/      # Componentes base
│   └── styles/          # Estilos globales
└── 📱 main.tsx          # Punto de entrada
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Instalación Rápida
```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/heroes-app.git
cd heroes-app

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

### Build de Producción
```bash
# Construir aplicación optimizada
npm run build

# Preview del build
npm run preview

# Análisis de código
npm run lint
```

## 📋 Scripts Disponibles

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm run dev` | 🚀 Servidor de desarrollo con HMR | Desarrollo local |
| `npm run build` | 📦 Build optimizado para producción | Deploy |
| `npm run lint` | 🔍 Análisis de código con ESLint | Control de calidad |
| `npm run preview` | 👀 Preview del build de producción | Testing pre-deploy |
| `npm run type-check` | 🔍 Verificación de tipos TypeScript | Validación |

## 🎯 Características Técnicas Avanzadas

### ⚡ Optimizaciones de Rendimiento
- **Code Splitting** automático por rutas
- **Lazy Loading** de componentes pesados
- **Memoización** de cálculos costosos
- **Paginación eficiente** con scroll virtual

### 🔧 Hooks Personalizados
- `usePagination` - Lógica de paginación reutilizable
- `useDebounce` - Optimización de búsquedas
- `useLocalStorage` - Persistencia de preferencias
- `useAuth` - Gestión de estado de autenticación

### 🎨 Sistema de Temas
- **Variables CSS dinámicas** para temas
- **Paletas de colores** por universo
- **Modo oscuro/claro** (próximamente)
- **Personalización** de efectos visuales

### 📱 Responsive Design
- **Mobile-first** approach
- **Breakpoints Bootstrap** optimizados
- **Touch gestures** para móviles
- **PWA capabilities** (próximamente)

## 🌟 Roadmap Futuro

### 🚧 Próximas Características
- [ ] **Sistema de favoritos** personalizado
- [ ] **Comparador de héroes** lado a lado
- [ ] **Modo oscuro** completo
- [ ] **Progressive Web App** (PWA)
- [ ] **Filtros avanzados** por habilidades
- [ ] **Sistema de rating** de usuarios

### 🔧 Mejoras Técnicas
- [ ] **Testing automatizado** con Vitest
- [ ] **Storybook** para componentes
- [ ] **Performance monitoring** con Web Vitals
- [ ] **SEO optimization** con meta tags dinámicos

## 🤝 Contribuir al Proyecto

### Guía de Contribución
1. **Fork** el repositorio
2. **Crear** una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** los cambios (`git commit -m 'Añadir nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abrir** un Pull Request

### Estándares de Código
- **ESLint** para linting y calidad
- **Prettier** para formateo consistente
- **Conventional Commits** para mensajes
- **TypeScript strict** obligatorio

## 🐛 Reporte de Bugs

Para reportar bugs, utiliza el [sistema de issues](https://github.com/tu-usuario/heroes-app/issues) con:
- **Descripción clara** del problema
- **Pasos para reproducir** el error
- **Screenshots** si es visual
- **Información del navegador** y dispositivo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto y Soporte

- **GitHub Issues**: [Reportar problemas](https://github.com/tu-usuario/heroes-app/issues)
- **Documentación**: [Wiki del proyecto](https://github.com/tu-usuario/heroes-app/wiki)
- **Email**: tu-email@ejemplo.com

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐

*Desarrollado con ❤️ y ☕ por [Tu Nombre]*
