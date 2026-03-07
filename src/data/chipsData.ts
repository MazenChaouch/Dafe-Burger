import chips0 from "../assets/chips/chips_0.png";
import chips1 from "../assets/chips/chips_1.png";
import chips2 from "../assets/chips/chips_2.png";
import chips3 from "../assets/chips/chips_3.png";
import chips4 from "../assets/chips/chips_4.png";
import chips5 from "../assets/chips/chips_5.png";
import chips6 from "../assets/chips/chips_6.png";
import chips7 from "../assets/chips/chips_7.png";
import type { ImageMetadata } from "astro";

export interface Chip {
  src: ImageMetadata;
  alt: string;
  size: number;
  blur: boolean;
  openX: number;
  openY: number;
  closedX: number;
  closedY: number;
}

export const CHIPS_DATA: Chip[] = [
  {
    src: chips0,
    alt: "Flying potato chip",
    blur: true,
    size: 6,
    openX: -26,
    openY: 8,
    closedX: -18,
    closedY: 7,
  },
  {
    src: chips1,
    alt: "Flying potato chip",
    blur: false,
    size: 5,
    openX: -23,
    openY: -2,
    closedX: -18,
    closedY: -1,
  },
  {
    src: chips2,
    alt: "Flying potato chip",
    blur: true,
    size: 4,
    openX: -20,
    openY: -12,
    closedX: -15,
    closedY: -11.7,
  },
  {
    src: chips3,
    alt: "Flying potato chip",
    blur: false,
    size: 6,
    openX: -6,
    openY: -20.3,
    closedX: -4,
    closedY: -16,
  },
  {
    src: chips4,
    alt: "Flying potato chip",
    blur: false,
    size: 5.5,
    openX: 5,
    openY: -19,
    closedX: 8,
    closedY: -14.6,
  },
  {
    src: chips5,
    alt: "Flying potato chip",
    blur: false,
    size: 4,
    openX: 18,
    openY: -14.1,
    closedX: 17,
    closedY: -9,
  },
  {
    src: chips6,
    alt: "Flying potato chip",
    blur: true,
    size: 5,
    openX: 20,
    openY: -4,
    closedX: 20,
    closedY: 1,
  },
  {
    src: chips7,
    alt: "Flying potato chip",
    blur: true,
    size: 4.5,
    openX: 23,
    openY: 6,
    closedX: 20,
    closedY: 8,
  },
];
