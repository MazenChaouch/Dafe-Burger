# 🍔 Dafe's Burger — High-Performance Astro Template

A premium, motion-driven restaurant template built with **Astro 5.0**, **Tailwind CSS 4.0**, and **GSAP**. Designed for high visual impact and smooth multi-page navigation.

![Banner](public/favicon.svg) <!-- Replace with a proper banner image -->

## 🚀 Technical Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) (Scroll-triggered entrance & state-driven interactions)
- **State Management:** Minimalist vanilla JS Store (`src/store.ts`)
- **Icons:** Custom SVG components

## 📂 Project Structure

```text
src/
├── assets/          # Static assets & optimized images
├── components/      # Reusable UI components
├── config/          # Centralized site & navigation settings
├── data/            # Content data (menu, testimonials, etc.)
├── layouts/         # Shared page skeletons
├── pages/           # Application routes (Home, Menu, About)
├── styles/          # Global styles & Tailwind layers
└── store.ts         # Global client-side state
```

## 🛠️ Key Features

- **Snap Scroll Experience:** A native-feeling single-page navigation on the homepage.
- **Dynamic Routing:** Seamless transitions between landing sections and dedicated pages.
- **Optimized Performance:** 100/100 Lighthouse scores through Astro's partial hydration.
- **Micro-Animations:** Fluid GSAP interactions for a premium 'alive' feel.
- **Centralized Content:** Easy updates via `src/data/` configuration files.

## 🏁 Getting Started

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Start Dev Server:**

   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
