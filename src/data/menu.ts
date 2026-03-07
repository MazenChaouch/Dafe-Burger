export interface MenuItem {
  name: string;
  desc: string;
  ingredients: string;
  price: string;
  image: string;
  tag?: string;
  tagColor?: string;
}

export const signatureBurgers: MenuItem[] = [
  {
    image: "/burger-classic.png",
    name: "Classic Dafe",
    desc: "The one that started it all",
    ingredients: "Beef · Cheddar · Lettuce · Tomato · House Sauce",
    price: "18 TND",
    tag: "Crowd Favorite",
    tagColor: "bg-yellow-400 text-black",
  },
  {
    image: "/burger-harissa.png",
    name: "Harissa Beast",
    desc: "Tunis heat in every bite",
    ingredients: "Beef · Harissa Mayo · Jalapeños · Pepper Jack",
    price: "22 TND",
    tag: "🔥 Spicy",
    tagColor: "bg-red-600 text-white",
  },
  {
    image: "/burger-merguez.png",
    name: "Merguez Madness",
    desc: "Lamb merguez + harissa kick",
    ingredients: "Lamb Merguez · Harissa · Feta · Grilled Peppers",
    price: "26 TND",
    tag: "Chef's Pick",
    tagColor: "bg-emerald-500 text-white",
  },
  {
    image: "/burger-classic.png", // Reuse classic for now or placeholder
    name: "The Tunis Smash",
    desc: "Double smashed with local secret spices",
    ingredients: "2 Smashed Patties · Double Cheese · Caramelized Onions",
    price: "20 TND",
    tag: "New",
    tagColor: "bg-blue-500 text-white",
  },
  {
    image: "/burger-classic.png",
    name: "Veggie Carthage",
    desc: "Chickpea & herb powerhouse",
    ingredients: "Chickpea Patty · Tahini Sauce · Pickled Turnips · Fresh Herbs",
    price: "19 TND",
    tag: "Vegan",
    tagColor: "bg-green-600 text-white",
  },
];

export const sides: MenuItem[] = [
  {
    name: "Hand-cut Fries",
    desc: "Twice fried in peanut oil",
    ingredients: "Sea salt · Secret spice dust",
    price: "6 TND",
    image: "", // We can use CSS patterns or stylized icons on the menu page
  },
  {
    name: "Spicy Wedges",
    desc: "Thick cut with a harissa dip",
    ingredients: "Cajun seasoning · Local Harissa mayo",
    price: "8 TND",
    image: "",
  },
  {
    name: "Halloumi Sticks",
    desc: "Zesty fried cheese",
    ingredients: "Pomegranate molasses · Fresh Mint",
    price: "12 TND",
    image: "",
  },
];

export const drinks: MenuItem[] = [
  {
    name: "Homemade Lemonade",
    desc: "Zesty and fresh",
    ingredients: "Zaghwan lemons · Organic sugar · Mint",
    price: "5 TND",
    image: "",
  },
  {
    name: "Local Gazouz",
    desc: "Vintage Tunisian soda",
    ingredients: "Selection of local favorites",
    price: "3 TND",
    image: "",
  },
  {
    name: "Mint Tea",
    desc: "Traditional brew",
    ingredients: "Green tea · Fresh mint · Pine nuts",
    price: "4 TND",
    image: "",
  },
];

export const combos = [
  {
    name: "Solo Feast",
    desc: "The perfect lunch",
    items: "1 Burger + 1 Side + 1 Drink",
    price: "28 TND",
  },
  {
    name: "Dual Delight",
    desc: "Better together",
    items: "2 Burgers + 2 Sides + 2 Drinks",
    price: "52 TND",
  },
];
