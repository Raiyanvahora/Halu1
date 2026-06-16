// Vietnam destinations. `slug` drives /destinations/[slug] dynamic pages.
export const destinations = [
  {
    slug: "hanoi",
    name: "Hanoi",
    tagline: "The soulful capital",
    image: "/images/vietnam-01.jpg",
    blurb:
      "Wander the Old Quarter's lantern-lit lanes, sip egg coffee by Hoan Kiem Lake and taste the street food that made Vietnam famous.",
    highlights: ["Old Quarter walks", "Hoan Kiem Lake", "Street food trails", "Train Street"],
    bestTime: "Oct – Apr",
  },
  {
    slug: "halong-bay",
    name: "Halong Bay",
    tagline: "Limestone wonder of the world",
    image: "/images/vietnam-02.jpg",
    blurb:
      "Cruise emerald waters dotted with thousands of limestone karsts, kayak hidden lagoons and sleep aboard a luxury overnight cruise.",
    highlights: ["Overnight luxury cruise", "Kayaking lagoons", "Cave exploring", "Sunrise tai chi"],
    bestTime: "Oct – Mar",
  },
  {
    slug: "da-nang",
    name: "Da Nang",
    tagline: "Beaches & the Golden Bridge",
    image: "/images/vietnam-03.jpg",
    blurb:
      "Golden sand beaches meet the surreal Golden Bridge held by giant stone hands — Da Nang blends modern coastal living with mountain magic.",
    highlights: ["Golden Bridge", "My Khe Beach", "Ba Na Hills", "Marble Mountains"],
    bestTime: "Feb – Aug",
  },
  {
    slug: "hoi-an",
    name: "Hoi An",
    tagline: "Ancient town of lanterns",
    image: "/images/vietnam-04.jpg",
    blurb:
      "A UNESCO old town glowing with silk lanterns, tailor shops and riverside cafes — the most romantic corner of Vietnam.",
    highlights: ["Lantern night walk", "Ancient town", "Tailor experiences", "Basket boat ride"],
    bestTime: "Feb – Jul",
  },
  {
    slug: "ho-chi-minh-city",
    name: "Ho Chi Minh City",
    tagline: "Energy of the south",
    image: "/images/vietnam-05.jpg",
    blurb:
      "Saigon hums with rooftop bars, French-colonial landmarks, buzzing markets and the gateway to the Mekong Delta and Cu Chi Tunnels.",
    highlights: ["Ben Thanh Market", "Cu Chi Tunnels", "Rooftop dining", "Mekong day trips"],
    bestTime: "Dec – Apr",
  },
  {
    slug: "golden-bridge",
    name: "Golden Bridge",
    tagline: "Held by giant hands",
    image: "/images/vietnam-06.jpg",
    blurb:
      "Vietnam's most photographed landmark — a golden walkway cradled by two colossal stone hands, floating above the Ba Na Hills clouds.",
    highlights: ["Iconic photo stop", "Ba Na Hills", "Cable car ride", "French Village"],
    bestTime: "Feb – Aug",
  },
  {
    slug: "sapa",
    name: "Sapa",
    tagline: "Terraced rice valleys",
    image: "/images/vietnam-16.jpg",
    blurb:
      "Trek emerald rice terraces, meet hill-tribe villages and wake to misty mountain mornings in Vietnam's spectacular far north.",
    highlights: ["Rice-terrace trek", "Fansipan peak", "Hill-tribe villages", "Mountain homestay"],
    bestTime: "Mar – May",
  },
  {
    slug: "ninh-binh",
    name: "Ninh Binh",
    tagline: "Halong Bay on land",
    image: "/images/vietnam-17.jpg",
    blurb:
      "Glide a sampan through limestone caves and emerald rivers framed by towering karsts and golden paddies — Halong Bay on land.",
    highlights: ["Trang An boat ride", "Mua Cave viewpoint", "Tam Coc paddies", "Bai Dinh temple"],
    bestTime: "Jan – May",
  },
  {
    slug: "phu-quoc",
    name: "Phu Quoc",
    tagline: "Island beach paradise",
    image: "/images/vietnam-18.jpg",
    blurb:
      "Vietnam's island getaway — white-sand beaches, island-hopping, sunset cruises and one of the world's longest sea cable cars.",
    highlights: ["Island hopping", "Sunset cruise", "Sea cable car", "Beach resorts"],
    bestTime: "Nov – Apr",
  },
  {
    slug: "nha-trang",
    name: "Nha Trang",
    tagline: "Coastal city sunshine",
    image: "/images/vietnam-19.jpg",
    blurb:
      "A buzzing beach city of golden bays, island snorkelling, seafood feasts and lively nightlife along Vietnam's sunny south coast.",
    highlights: ["Bay snorkelling", "Island tours", "Mud-spa baths", "Seafood markets"],
    bestTime: "Feb – Aug",
  },
  {
    slug: "da-lat",
    name: "Da Lat",
    tagline: "City of eternal spring",
    image: "/images/vietnam-20.jpg",
    blurb:
      "Pine forests, flower gardens, waterfalls and cool mountain air — a romantic highland escape unlike anywhere else in Vietnam.",
    highlights: ["Flower gardens", "Waterfalls", "Coffee farms", "Lake views"],
    bestTime: "Nov – Apr",
  },
];

// Two display groups so the homepage can mirror the Avian-style
// dual destination carousels (north/central vs. south/coastal Vietnam).
export const featuredDestinations = destinations.filter((d) =>
  ["halong-bay", "hanoi", "sapa", "ninh-binh", "golden-bridge", "da-nang"].includes(d.slug)
);

export const coastalDestinations = destinations.filter((d) =>
  ["hoi-an", "phu-quoc", "nha-trang", "da-lat", "ho-chi-minh-city"].includes(d.slug)
);
