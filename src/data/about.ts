export interface AboutValue {
  emoji: string;
  title: string;
  description: string;
}

export const ABOUT_DATA = {
  hero: {
    title: "YAMMY",
    subtitle: "The Vibe Check",
    bgText: "TUNIS",
  },
  story: {
    title: "Handcrafted",
    titleAccent: "with Passion",
    paragraphs: [
      "Founded in 2018 in the heart of Tunis, Dafe's Burger isn't just about food—it's about the grit, the fire, and the flavor of our streets. We believe a burger should be an experience, not a quick fix.",
      "Every morning, we source fresh ingredients from local markets. Our patties are never frozen, our sauces are made from scratch, and our vibes are always 100% authentic.",
    ],
    stats: [
      { label: "Local Beef", value: "100%" },
      { label: "Freezers", value: "0%" },
    ],
    imagePlaceholder: "DAFE",
    testimonial: {
      text: "Best Burger in Town",
      author: "Tunis Foodies",
    },
  },
  values: [
    {
      emoji: "🔥",
      title: "The Heat",
      description: "We don't hold back. Our harissa blends and spicy house sauces are designed for those who live for the kick.",
    },
    {
      emoji: "🌿",
      title: "The Fresh",
      description: "No shortcuts. Sourced daily, sliced daily. If it's not at its peak, it's not on your plate.",
    },
    {
      emoji: "🤝",
      title: "The Local",
      description: "Supporting our neighbors. From the bakers who make our buns to the farms providing our greens.",
    },
  ],
};
