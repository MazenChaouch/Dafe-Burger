import topBun from "../assets/burger/top-bun.png";
import lettuce from "../assets/burger/letuce.png";
import cheese from "../assets/burger/cheese.png";
import tomato from "../assets/burger/tomato.png";
import onions from "../assets/burger/onions.png";
import meat from "../assets/burger/meat.png";
import bottomBun from "../assets/burger/bottom-bun.png";
import type { ImageMetadata } from "astro";

export interface BurgerLayer {
  src: ImageMetadata;
  alt: string;
  label: string;
  cal: string;
  openY: number;
  closedY: number;
  z: number;
}

export const BURGER_LAYERS: BurgerLayer[] = [
  {
    src: topBun,
    alt: "Top bun",
    label: "Top Bun",
    cal: "120 kcal",
    openY: -4,
    closedY: 5.6,
    z: 50,
  },
  {
    src: tomato,
    alt: "Tomato",
    label: "Tomato",
    cal: "5 kcal",
    openY: -3,
    closedY: 4.0,
    z: 40,
  },
  {
    src: onions,
    alt: "Onions",
    label: "Onions",
    cal: "10 kcal",
    openY: -2,
    closedY: 3.0,
    z: 30,
  },
  {
    src: cheese,
    alt: "Cheese",
    label: "Cheese",
    cal: "80 kcal",
    openY: -1,
    closedY: 2.0,
    z: 20,
  },
  {
    src: meat,
    alt: "Beef patty",
    label: "Beef Patty",
    cal: "250 kcal",
    openY: 0,
    closedY: 0.0,
    z: 10,
  },
  {
    src: lettuce,
    alt: "Lettuce",
    label: "Lettuce",
    cal: "3 kcal",
    openY: 1,
    closedY: -1.0,
    z: 0,
  },
  {
    src: bottomBun,
    alt: "Bottom bun",
    label: "Bottom Bun",
    cal: "120 kcal",
    openY: 2,
    closedY: -2.0,
    z: 10,
  },
];
