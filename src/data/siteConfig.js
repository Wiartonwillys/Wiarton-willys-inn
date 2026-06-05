export const siteConfig = {
  name: "Wiarton Willys Inn",
  legalName: "Wiarton Willys Inn",
  address: {
    street: "200 Berford Street",
    city: "Wiarton",
    region: "ON",
    postalCode: "N0H 2T0",
    country: "CA",
    formatted: "200 Berford Street, Wiarton, ON N0H 2T0",
  },
  phoneDisplay: "(519) 534-3907",
  phoneLink: "tel:+15195343907",
  email: "rest@wiartonwillys.com",
  emailLink: "mailto:rest@wiartonwillys.com",
  bookingUrl: "https://ibe.channex.io/wiartonwillys",
  siteUrl: import.meta.env.PUBLIC_SITE_URL || "https://wiartonwillys.com",
  gaId: import.meta.env.PUBLIC_GA_ID || "",
  description:
    "A relaxed Wiarton home base for Bruce Peninsula trips, outdoor evenings, family stays, and longer work stays.",
  geo: {
    latitude: 44.741,
    longitude: -81.1409,
  },
  checkIn: "2:00 PM – 11:00 PM",
  checkOut: "11:00 AM",
};
