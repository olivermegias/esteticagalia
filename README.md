# 🌸 Estética GaliaBeauty

Sitio web para el centro de estética GaliaBeauty ubicado en Granada, España.

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework web estático
- **[React](https://react.dev/)** - Islands interactivas (filtros, galería)
- **TypeScript** - Tipado estático
- **CSS** - Estilos personalizados con variables CSS

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.astro       # Navegación principal
│   ├── Footer.astro       # Pie de página
│   └── islands/           # Componentes React interactivos
│       ├── Gallery.tsx    # Galería de imágenes con lightbox
│       └── ServiciosFilter.tsx  # Filtro de servicios
├── content/
│   └── servicios/         # Contenido de servicios (Markdown)
├── layouts/
│   └── BaseLayout.astro   # Layout principal
├── pages/
│   ├── index.astro        # Página de inicio
│   ├── servicios.astro    # Catálogo de servicios
│   ├── servicios/[...slug].astro  # Detalle de servicio
│   └── contacto.astro     # Página de contacto
├── scripts/
│   ├── main.ts            # Script principal
│   └── scrollAnimations.ts # Animaciones de scroll
└── styles/
    ├── global.css         # Importa todos los estilos
    ├── theme.css          # Variables de colores y tokens
    ├── base.css           # Reset y utilidades globales
    └── animation.css      # Animaciones reutilizables
```

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 📍 Información del Negocio

- **Dirección:** C/ Torre de los Picos nº11, Granada, CP: 18008
- **Teléfonos:** 958 12 59 93 / 652 11 26 21
- **Email:** esteticagaliaguerrero@gmail.com
- **Instagram:** [@estetica_galiabeauty](https://instagram.com/estetica_galiabeauty)

## 📝 Añadir Nuevos Servicios

Crea un archivo `.md` en `src/content/servicios/`:

```markdown
---
title: "Nombre del Tratamiento"
categoria: "facial" | "mirada" | "corporal" | "depilacion"
descripcion: "Descripción breve del tratamiento"
duracion: "60 min"
precio: "50€"
orden: 1
imagen: ["/images/imagen.jpg"]
---

## Descripción del tratamiento

Contenido en Markdown...
```

## 🎨 Personalización de Colores

Edita las variables en `src/styles/theme.css`:

```css
:root {
  --color-primary: #8B9474;    /* Verde olivo */
  --color-secondary: #3C3C3C;  /* Gris oscuro */
  --color-brand: #5b6d5b;      /* Verde marca */
  --color-cream: #f3e3d2;      /* Crema */
  --color-accent: #F4E7D6;     /* Beige */
}
```

## 📄 Licencia

Todos los derechos reservados © 2026 Estética GaliaBeauty
