/**
 * Datos centralizados del negocio.
 * Fuente única de verdad para toda la web.
 */
export const business = {
  name: "Estética GaliaBeauty",
  shortName: "GaliaBeauty",
  url: "https://esteticagalia.es",
  description:
    "Centro de estética avanzada en Granada. Tratamientos faciales, corporales, microblading y los últimos avances en estética profesional.",

  address: {
    street: "C/ Torre de los Picos nº11",
    city: "Granada",
    postalCode: "18008",
    country: "España",
    countryCode: "ES",
  },

  phones: [
    { number: "+34958125993", display: "958 12 59 93", label: "Fijo" },
    { number: "+34652112621", display: "652 11 26 21", label: "Móvil/WhatsApp" },
  ],

  /** Teléfono principal para CTAs */
  mainPhone: "+34652112621",
  mainPhoneDisplay: "652 11 26 21",

  email: "esteticagaliaguerrero@gmail.com",

  social: {
    instagram: "https://www.instagram.com/estetica_galiabeauty",
    instagramHandle: "@estetica_galiabeauty",
    facebook: "https://www.facebook.com/esteticagaliabeauty",
    whatsapp: "https://api.whatsapp.com/send?phone=+34652112621",
  },

  hours: [
    { day: "Lunes", hours: "15:00 - 19:00", closed: false },
    { day: "Martes", hours: "10:00 - 19:00", closed: false },
    { day: "Miércoles", hours: "10:00 - 19:00", closed: false },
    { day: "Jueves", hours: "10:00 - 19:00", closed: false },
    { day: "Viernes", hours: "10:00 - 19:00", closed: false },
    { day: "Sábado", hours: "10:00 - 14:00", closed: false },
    { day: "Domingo", hours: "Cerrado", closed: true },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1431.6852220070284!2d-3.591946465401182!3d37.1552452255883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fb5825db2647%3A0x17656bc6e8b9b3bf!2sCentro%20Galia%20Est%C3%A9tico!5e0!3m2!1ses!2ses!4v1767812060551!5m2!1ses!2ses",
  mapDirectionsUrl:
    "https://maps.google.com/?q=Centro+Galia+Estético+Granada",

  priceRange: "€€",
} as const;

export type Business = typeof business;
