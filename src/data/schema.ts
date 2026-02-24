import { business } from "./business";

/** Schema.org – BeautySalon (para Home, Contacto, Servicios) */
export function getBeautySalonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.mainPhone,
    email: business.email,
    priceRange: business.priceRange,
    image: `${business.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "15:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [business.social.instagram, business.social.facebook],
  };
}

/** Schema.org – Service (para páginas de servicio individual) */
export function getServiceSchema(service: {
  title: string;
  descripcion: string;
  precio?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.descripcion,
    provider: {
      "@type": "BeautySalon",
      name: business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        postalCode: business.address.postalCode,
        addressCountry: business.address.countryCode,
      },
      telephone: business.mainPhone,
    },
    ...(service.precio
      ? {
          offers: {
            "@type": "Offer",
            price: service.precio.replace("€", "").trim(),
            priceCurrency: "EUR",
          },
        }
      : {}),
  };
}
