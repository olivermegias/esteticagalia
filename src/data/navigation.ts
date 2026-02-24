/** Links de navegación principal */
export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Links del footer – servicios populares */
export const footerServiceLinks = [
  { href: "/servicios#facial", label: "Tratamientos Faciales" },
  { href: "/servicios#corporal", label: "Tratamientos Corporales" },
  { href: "/servicios#mirada", label: "Pestañas y Cejas" },
  { href: "/servicios#depilacion", label: "Depilación Láser" },
] as const;

/** Links legales */
export const legalLinks = [
  { href: "/politica-privacidad", label: "Política de privacidad" },
  { href: "/aviso-legal", label: "Aviso legal" },
] as const;

/** Categorías de servicios */
export const serviceCategories = [
  { id: "todos", label: "Todos" },
  { id: "facial", label: "Facial" },
  { id: "mirada", label: "Mirada" },
  { id: "corporal", label: "Corporal" },
  { id: "depilacion", label: "Depilación" },
] as const;

export const categoryLabels: Record<string, string> = {
  facial: "Facial",
  mirada: "Mirada",
  corporal: "Corporal",
  depilacion: "Depilación",
};
