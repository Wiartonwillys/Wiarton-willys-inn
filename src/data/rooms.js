import { siteImages } from "./siteImages.js";

export const rooms = [
  {
    slug: "single-queen-room",
    title: "Single Queen Room",
    seoKey: "singleQueen",
    intro: "A clean, practical room for couples, solo travellers, workers, and short stays in Wiarton.",
    sleeps: "Sleeps up to 2",
    beds: "1 Queen Bed",
    occupancy: "2",
    petStatus: "Not Pet-Friendly",
    petTone: "no-pets",
    bestFor: "Couples · Solo Travellers · Workers · Short Stays",
    description:
      "Our Single Queen Room is a simple, comfortable choice for couples, solo travellers, workers, and short stays. It includes one queen bed, a renovated private bathroom, and practical in-room essentials like a mini fridge, microwave, TV, and AC/heat.",
    petNote:
      "This room type is not pet-friendly. Guests traveling with pets should call before booking so we can confirm whether a pet-friendly Family Room is available.",
    facts: [
      "Sleeps up to 2",
      "1 Queen Bed",
      "Renovated Private Bathroom",
      "Mini Fridge",
      "Microwave",
      "TV",
      "AC / Heat",
      "Not Pet-Friendly",
    ],
    amenities: ["Renovated private bathroom", "Mini fridge", "Microwave", "TV", "AC / Heat", "Free parking"],
    images: [
      { src: siteImages.rooms.singleQueenMain, alt: "Single Queen Room at Wiarton Willys Inn", caption: "Single Queen Room" },
      { src: siteImages.rooms.singleQueenBed, alt: "Queen bed inside the Single Queen Room", caption: "Queen Bed" },
      { src: siteImages.rooms.singleQueenBathroom, alt: "Renovated bathroom in the Single Queen Room", caption: "Updated Bathroom" },
      { src: siteImages.rooms.singleQueenVanity, alt: "Bathroom vanity in the Single Queen Room", caption: "Bathroom Vanity" },
    ],
    related: ["family-room", "deluxe-family-room"],
  },
  {
    slug: "family-room",
    title: "Family Room",
    seoKey: "family",
    intro: "A flexible room for families, small groups, and guests traveling with pets by request.",
    sleeps: "Sleeps up to 6",
    beds: "2 Double Beds + 1 Double-Sized Sofa Bed",
    occupancy: "6",
    petStatus: "Pet-Friendly by Request",
    petTone: "request",
    bestFor: "Families · Small Groups · Pet-Friendly by Request · Flexible Stays",
    description:
      "Our Family Room is a flexible option for families, small groups, and guests who want more sleeping space while staying together. It includes two double beds, one double-sized sofa bed, a renovated private bathroom, and practical in-room essentials like a mini fridge, microwave, TV, and AC/heat.",
    petCallout: {
      title: "Pet-Friendly Family Rooms Available by Request",
      copy:
        "We have a limited number of designated pet-friendly Family Rooms. If you’re traveling with a pet, please call before booking so we can confirm availability and make sure the right room type is reserved for you. A $25 + tax pet fee applies per stay.",
      button: "Call About Pet-Friendly Rooms",
    },
    facts: [
      "Sleeps up to 6",
      "2 Double Beds",
      "1 Double-Sized Sofa Bed",
      "Renovated Private Bathroom",
      "Mini Fridge",
      "Microwave",
      "TV",
      "AC / Heat",
      "Pet-Friendly by Request",
      "4 Designated Pet-Friendly Family Rooms",
    ],
    amenities: ["Renovated private bathroom", "Mini fridge", "Microwave", "TV", "AC / Heat", "Free parking", "4 designated pet-friendly Family Rooms by request"],
    images: [
      { src: siteImages.rooms.familyRoomMain, alt: "Family Room at Wiarton Willys Inn", caption: "Family Room" },
      { src: siteImages.rooms.familyBeds, alt: "Two double beds inside the Family Room", caption: "Two Double Beds" },
      { src: siteImages.rooms.familySofa, alt: "Double-sized sofa bed inside the Family Room", caption: "Sofa Bed" },
      { src: siteImages.rooms.familyBathroom, alt: "Renovated private bathroom in the Family Room", caption: "Updated Bathroom" },
    ],
    related: ["single-queen-room", "deluxe-family-room"],
  },
  {
    slug: "deluxe-family-room",
    title: "Deluxe Family Room",
    seoKey: "deluxeFamily",
    intro: "Our largest room option, ideal for larger families and groups who want to stay together.",
    sleeps: "Sleeps up to 8",
    beds: "2 Queen Beds + 2 Double-Sized Sofa Beds",
    occupancy: "8",
    petStatus: "Not Pet-Friendly",
    petTone: "no-pets",
    bestFor: "Larger Families · Groups · Flexible Sleeping Arrangements · Staying Together",
    description:
      "Our Deluxe Family Room is the largest room option at Wiarton Willys Inn, designed for families and groups who want to stay together with more sleeping flexibility. It includes two queen beds, two double-sized sofa beds, a fully renovated private bathroom, and practical in-room essentials like a mini fridge, microwave, TV, and AC/heat.",
    occupancyNote:
      "Comfortably accommodates up to 6 guests, with flexible sleeping arrangements for up to 8 guests total.",
    petNote:
      "This room is not pet-friendly. Guests traveling with pets should call before booking so we can confirm whether a designated pet-friendly Family Room is available.",
    facts: [
      "Sleeps up to 8",
      "2 Queen Beds",
      "2 Double-Sized Sofa Beds",
      "Fully Renovated Private Bathroom",
      "Mini Fridge",
      "Microwave",
      "TV",
      "AC / Heat",
      "Largest Room",
    ],
    amenities: ["Fully renovated private bathroom", "Mini fridge", "Microwave", "TV", "AC / Heat", "Free parking", "Largest room option"],
    images: [
      { src: siteImages.rooms.deluxeFamilyMain, alt: "Deluxe Family Room at Wiarton Willys Inn", caption: "Deluxe Family Room" },
      { src: siteImages.rooms.deluxeQueenBeds, alt: "Two queen beds inside the Deluxe Family Room", caption: "Two Queen Beds" },
      { src: siteImages.rooms.deluxeSofaBeds, alt: "Two double-sized sofa beds inside the Deluxe Family Room", caption: "Flexible Sofa Beds" },
      { src: siteImages.rooms.deluxeBathroom, alt: "Fully renovated private bathroom in the Deluxe Family Room", caption: "Fully Renovated Bathroom" },
    ],
    related: ["single-queen-room", "family-room"],
  },
];

export const roomCards = [
  {
    slug: "single-queen-room",
    title: "Single Queen Room",
    href: "/rooms/single-queen-room",
    image: siteImages.rooms.overviewSingleQueen,
    alt: "Single Queen Room in Wiarton",
    summary: "A clean, practical room for couples, solo travellers, workers, and short stays.",
    facts: ["Sleeps up to 2", "1 Queen Bed", "Not Pet-Friendly"],
  },
  {
    slug: "family-room",
    title: "Family Room",
    href: "/rooms/family-room",
    image: siteImages.rooms.overviewFamily,
    alt: "Family Room with two double beds in Wiarton",
    summary: "Flexible space for families, small groups, and designated pet-friendly stays by request.",
    facts: ["Sleeps up to 6", "2 Double Beds", "Pet-Friendly by Request"],
  },
  {
    slug: "deluxe-family-room",
    title: "Deluxe Family Room",
    href: "/rooms/deluxe-family-room",
    image: siteImages.rooms.overviewDeluxe,
    alt: "Deluxe Family Room near Bruce Peninsula",
    summary: "Our largest room option, made for larger families and groups staying together.",
    facts: ["Sleeps up to 8", "2 Queen Beds + Sofa Beds", "Not Pet-Friendly"],
  },
];

export const getRoomBySlug = (slug) => rooms.find((room) => room.slug === slug);
