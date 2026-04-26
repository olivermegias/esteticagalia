/** Links de navegación principal */
export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/asesoramiento", label: "Asesoramiento" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Links del footer – servicios populares */
export const footerServiceLinks = [
  { href: "/servicios?categoria=facial", label: "Tratamientos Faciales" },
  { href: "/servicios?categoria=corporal", label: "Tratamientos Corporales" },
  { href: "/servicios?categoria=mirada", label: "Diseño de Mirada" },
  { href: "/servicios?categoria=depilacion", label: "Depilación Láser" },
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
  { id: "corporal", label: "Corporal" },
  { id: "mirada", label: "Diseño de Mirada" },
  { id: "depilacion", label: "Depilación Láser" },
] as const;

export const categoryLabels: Record<string, string> = {
  facial: "Facial",
  corporal: "Corporal",
  mirada: "Diseño de Mirada",
  depilacion: "Depilación Láser",
};
