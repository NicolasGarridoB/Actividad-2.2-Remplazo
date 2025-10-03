# Mi Sitio Web - Proyecto React Router con Ant Design

Este proyecto implementa un sitio web moderno utilizando React Router v7, Ant Design y una arquitectura de componentes basada en Atomic Design.

## 🏗️ Arquitectura de Componentes

El proyecto sigue la metodología **Atomic Design** con la siguiente estructura:

### 📁 Estructura de Carpetas

```
components/
├── atoms/           # Componentes básicos reutilizables
│   ├── Button.tsx   # Botón con variante white
│   ├── Text.tsx     # Componente de texto parametrizable
│   ├── Image.tsx    # Componente de imagen
│   └── index.ts     # Barrel export
├── molecules/       # Combinaciones de átomos
│   ├── Header.tsx   # Cabecera del sitio
│   ├── Footer.tsx   # Pie de página
│   ├── InfoCard.tsx # Tarjeta de información
│   ├── TextSection.tsx    # Sección de texto para banners
│   ├── ButtonGroup.tsx    # Grupo de botones
│   └── index.ts     # Barrel export
├── organisms/       # Componentes complejos
│   ├── MainBanner.tsx     # Banner principal
│   ├── InfoSection.tsx    # Sección de tarjetas informativas
│   └── index.ts     # Barrel export
├── layouts/         # Layouts de página
│   ├── HomeLayout.tsx     # Layout principal con header y footer
│   └── index.ts     # Barrel export
├── styles.css       # Estilos globales y personalizaciones
├── AntdProvider.tsx # Configuración de Ant Design
└── index.ts         # Barrel export principal
```

## 🧩 Componentes Desarrollados

### Átomos (Atoms)
- **Button**: Botón reutilizable con variantes `primary` y `white`
- **Text**: Componente de texto con tipos `title`, `text`, `paragraph`
- **Image**: Componente de imagen con propiedades configurables

### Moléculas (Molecules)
- **Header**: Cabecera con logo y botones de navegación
- **Footer**: Pie de página con información de contacto y enlaces
- **InfoCard**: Tarjeta informativa con título, descripción e imagen
- **TextSection**: Sección de texto para banners y títulos
- **ButtonGroup**: Grupo de botones para calls-to-action

### Organismos (Organisms)
- **MainBanner**: Banner principal con texto y botones
- **InfoSection**: Sección que muestra múltiples InfoCards

### Layouts
- **HomeLayout**: Layout principal con estructura Ant Design Layout

## 🚀 Características

- ✅ **React Router v7** - Navegación moderna
- ✅ **Ant Design** - Sistema de diseño completo
- ✅ **TypeScript** - Tipado estático
- ✅ **Responsive Design** - Adaptable a diferentes pantallas
- ✅ **Atomic Design** - Arquitectura escalable de componentes
- ✅ **Accesibilidad** - Componentes accesibles
- ✅ **SEO Friendly** - Meta tags y estructura semántica

## 🎨 Personalización

### Colores y Temas
Los colores principales se pueden modificar en `components/styles.css`:
- Primary: `#1890ff`
- Gradients: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Contenido
El contenido principal se configura en `app/routes/home.tsx`:
- Textos del banner
- Items de las tarjetas informativas
- Handlers de botones

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Construcción
```bash
npm run build
```

### Producción
```bash
npm start
```

## 🖼️ Recursos de Imágenes

Las imágenes se encuentran en la carpeta `assets/`:
- `bg_main_card.png` - Fondo del banner principal
- `bg_card_1.png`, `bg_card_2.png`, `bg_card_3.png` - Imágenes de las tarjetas
- `profile_icon.png` - Icono de perfil

## 🔧 Configuración

### Ant Design
La configuración de Ant Design está en `components/AntdProvider.tsx` con:
- Locale en español
- Tema personalizable
- Componentes globales

### Estilos
Los estilos globales en `components/styles.css` incluyen:
- Responsive design
- Hover effects
- Animaciones suaves
- Print styles
- Mejoras de accesibilidad

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:
- **Mobile**: < 576px
- **Tablet**: 576px - 768px  
- **Desktop**: > 768px

## 🌐 Navegación

Rutas configuradas:
- `/` - Página principal (Home)

## 🤝 Contribuir

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.