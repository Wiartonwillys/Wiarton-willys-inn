import { siteConfig } from "./siteConfig.js";
import { existsSync } from "node:fs";
import path from "node:path";

const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const absoluteUrl = (path = "/") => new URL(path, `${baseUrl}/`).toString();
const placeholderImage = "/images/global/default-placeholder/placeholder.svg";
const schemaImage = (image = placeholderImage) => {
  if (!image.startsWith("/")) return placeholderImage;
  const localFile = path.join(process.cwd(), "public", image.slice(1));
  return existsSync(localFile) ? image : placeholderImage;
};

export const breadcrumbSchema = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href || "/"),
  })),
});

export const motelSchema = (image = "/images/global/default-placeholder/placeholder.svg") => ({
  "@context": "https://schema.org",
  "@type": ["Motel", "LodgingBusiness", "LocalBusiness"],
  name: siteConfig.name,
  url: absoluteUrl("/"),
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  image: absoluteUrl(schemaImage(image)),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: siteConfig.bookingUrl,
  },
});

export const roomSchema = (room, image) => ({
  "@context": "https://schema.org",
  "@type": "HotelRoom",
  name: room.title,
  description: room.description,
  image: absoluteUrl(schemaImage(image || room.images?.[0]?.src || placeholderImage)),
  occupancy: {
    "@type": "QuantitativeValue",
    maxValue: room.occupancy,
  },
  bed: room.beds,
  amenityFeature: room.amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    name: amenity,
    value: true,
  })),
  petsAllowed: room.slug === "family-room" ? "Limited designated Family Rooms by request only. A $25 + tax pet fee applies per stay." : "No",
  containedInPlace: {
    "@type": "Motel",
    name: siteConfig.name,
    url: absoluteUrl("/"),
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: siteConfig.bookingUrl,
  },
});

export const webpageSchema = ({ title, description, path = "/" }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: absoluteUrl(path),
});

export const faqSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: [faq.answer, faq.strong].filter(Boolean).join(" "),
    },
  })),
});
