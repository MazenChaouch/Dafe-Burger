export interface Review {
  quote: string;
  name: string;
  stars: number;
  initials: string;
  color: string;
}

export const TESTIMONIALS: Review[] = [
  {
    quote: "The harissa burger changed my life 🔥",
    name: "Karim B.",
    stars: 5,
    initials: "KB",
    color: "bg-red-500",
  },
  {
    quote: "Freshest patties in the city, hands down.",
    name: "Amina M.",
    stars: 5,
    initials: "AM",
    color: "bg-emerald-500",
  },
  {
    quote: "Fries are dangerously good. Went back 3 times.",
    name: "Mehdi T.",
    stars: 5,
    initials: "MT",
    color: "bg-yellow-500",
  },
  {
    quote: "Perfect late-night spot. Open late, worth it!",
    name: "Sarah K.",
    stars: 5,
    initials: "SK",
    color: "bg-purple-500",
  },
];

export const TESTIMONIAL_SUMMARY = {
  rating: "5.0",
  count: "200+ reviews",
  platforms: ["Google", "TripAdvisor"],
};
