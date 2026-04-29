# Project Guidelines

## Build and Test
- Instalar dependencias: `npm install`
- Desarrollo local: `npm run dev` (expone `0.0.0.0` para pruebas en red local)
- Build producción: `npm run build`
- Build con base en subruta: `npm run build:v2` (usa `/v2/`)
- Previsualizar build: `npm run preview`
- No hay scripts de test/lint definidos en `package.json`; evita inventar comandos.

## Architecture
- Stack: Astro 6 + React islands + TypeScript estricto (`tsconfig` extiende `astro/tsconfigs/strict`).
- Layout base en `src/layouts/BaseLayout.astro`: incluye `Header`, `Footer`, `SEO` y `ClientRouter`.
- Rutas en `src/pages`; la ruta dinámica de servicios está en `src/pages/servicios/[slug].astro`.
- Colecciones de contenido en Markdown: `src/content/servicios` y `src/content/faq`, con esquema en `src/content.config.ts`.
- Datos compartidos en `src/data` (`business.ts`, `navigation.ts`, `schema.ts`).
- Interactividad solo en React islands dentro de `src/components/islands`.

## Conventions
- Mantén `business.ts` como fuente única para datos de negocio (teléfonos, dirección, redes, horarios).
- Para slugs de contenido usa `entry.id.replace(/\.md$/, "")`.
- Con Astro 6 usa `render(entry)` desde `astro:content`; no uses `entry.render()`.
- Respeta categorías permitidas por esquema:
  - Servicios: `facial`, `mirada`, `corporal`, `depilacion`
  - FAQ: `general`, `tratamientos`, `citas`, `cuidados`, `pagos`
- Cuando añadas enlaces internos o assets en componentes, respeta el patrón `withBase(...)` ya usado en el código.
- Mantén JSON-LD de SEO en páginas públicas usando `getBeautySalonSchema()` o `getServiceSchema()` cuando aplique.

## Known Pitfalls
- El config de content en Astro 6 debe vivir en `src/content.config.ts`; mantener el archivo legacy provoca `LegacyContentConfigError`.
- El warning de Vite/Astro scripts en modo dev está suprimido intencionalmente en `astro.config.mjs`; no eliminar ese plugin sin validar.
- `CONFIGURACION_EMAIL.md` documenta Web3Forms, pero la versión actual de `src/pages/contacto.astro` no incluye formulario activo. Si se reintroduce, sincroniza código y documentación.

## Documentation
- Visión general y estructura: `README.md`
- Configuración del email/formulario: `CONFIGURACION_EMAIL.md`
- Estado funcional y pendientes: `docs/todo.md`

En cambios grandes, enlaza la documentación anterior en vez de duplicarla aquí.
