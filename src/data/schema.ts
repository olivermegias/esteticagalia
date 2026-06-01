import { business } from "./business";

/** Schema.org – BeautySalon (para Home, Contacto, Servicios) */
export function getBeautySalonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": business.url,
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.mainPhone,
    email: business.email,
    priceRange: business.priceRange,
    image: `${business.url}/images/logo.png`,
    hasMap: business.mapDirectionsUrl,
    currenciesAccepted: "EUR",
    paymentAccepted: "Efectivo, Tarjeta de crédito, Tarjeta de débito",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.1552452,
      longitude: -3.5919465,
    },
    areaServed: {
      "@type": "City",
      name: "Granada",
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
export function getServiceSchema(
  service: {
    title: string;
    descripcion: string;
    precio?: string;
  },
  pageUrl?: string,
) {
  const rawPrice = service.precio?.match(/(\d+)/)?.[1];
  const hasValidPrice = rawPrice && !Number.isNaN(Number(rawPrice));

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.descripcion,
    ...(pageUrl ? { url: `${business.url}${pageUrl}` } : {}),
    areaServed: {
      "@type": "City",
      name: "Granada",
    },
    provider: {
      "@type": "BeautySalon",
      "@id": business.url,
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
    ...(hasValidPrice
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: rawPrice,
            priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31)
              .toISOString()
              .split("T")[0],
          },
        }
      : {}),
  };
}

/** Schema.org – FAQPage (para página de asesoramiento/preguntas frecuentes) */
export function getFAQSchema(faqs: { pregunta: string; respuesta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.respuesta,
      },
    })),
  };
}
