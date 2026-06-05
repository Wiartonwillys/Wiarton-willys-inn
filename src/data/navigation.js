import { siteConfig } from "./siteConfig.js";

export const mainNav = [
  { label: "Rooms", href: "/rooms" },
  { label: "Explore Nearby", href: "/explore" },
  { label: "See Our Property", href: "/see-our-property" },
  { label: "Policies", href: "/policies" },
  { label: "Contact", href: "/contact" },
];

export const mobileNav = [
  ...mainNav,
  { label: "Long-Term Stays", href: "/long-term-stays" },
  { label: "Book Direct", href: siteConfig.bookingUrl, external: true, track: "book-direct" },
  { label: "Call", href: siteConfig.phoneLink, track: "call" },
];

export const footerLinks = {
  rooms: [
    { label: "Single Queen Room", href: "/rooms/single-queen-room" },
    { label: "Family Room", href: "/rooms/family-room" },
    { label: "Deluxe Family Room", href: "/rooms/deluxe-family-room" },
    { label: "View All Rooms", href: "/rooms" },
  ],
  explore: [
    { label: "Explore Nearby", href: "/explore" },
    { label: "Tobermory", href: "/explore/tobermory" },
    { label: "Sauble Beach", href: "/explore/sauble-beach" },
    { label: "Bluewater Park", href: "/explore/bluewater-park" },
    { label: "Bruce’s Caves", href: "/explore/bruces-caves" },
  ],
  guestInfo: [
    { label: "Policies", href: "/policies" },
    { label: "Pet Policy", href: "/policies#pet-policy" },
    { label: "Fire Pit Guidelines", href: "/policies#fire-pits" },
    { label: "Pool Rules", href: "/policies#pool" },
    { label: "See Our Property", href: "/see-our-property" },
    { label: "Contact", href: "/contact" },
  ],
};
