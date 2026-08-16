# 06 — REFERENCE RESPONSIVE MAP: 144BURGER

> **Phase 02 Output** — Spatial and responsive adaptation rules across desktop (1440x900) and mobile (390x844) viewports.

---

## 1. DESKTOP VIEWPORT ARCHITECTURE (1440px)

* **Sticky Top Header:**
  * Height: `70px`. Full horizontal width.
  * Centered navigation links (`HOME`, `DIFERENCIAIS`, `NOVIDADES`, `CARDÁPIO`, `SOBRE`, `CONTATO`) with right-aligned *"PEÇA ONLINE"* CTA.
* **Hero Scene:**
  * Height: `85vh` (approx. `650px - 720px`).
  * Floating Crest Banner: Centered 960px wide box with 3 horizontal columns:
    * Left (30%): Left-aligned social proof / milestone text.
    * Center (40%): Centered brand crest logo with upper and lower triangle arrows, script wordmark, and tagline.
    * Right (30%): Right-aligned address, city, phone metadata.
* **"NOSSA ESSÊNCIA" (Badge Trio):**
  * 3-column horizontal grid (`grid-template-columns: repeat(3, 1fr)`). Max-width: `1000px`.
  * Circular badge stamps (`220px` diameter) centered in each column with supporting description below.
* **Full-Bleed Quote Scene:**
  * Height: `450px`. Full viewport width (`100vw`). Centered display quote with script signature.
* **"DESTAQUES DA CASA" (Staggered Block Grid):**
  * 2-column equal split (`50% / 50%`).
  * Row 1: Left = White text card; Right = Solid Orange image block.
  * Row 2: Left = Solid Charcoal image block; Right = White text card.
  * Row 3: Left = White text card; Right = Solid Orange image block.
* **"GALERIA 144" (Carousel):**
  * Height: `480px`. Full viewport width (`100vw`). Large format photo slider with navigation arrows.
* **"LOCALIZAÇÃO E CONTATO":**
  * 2-column horizontal split. Max-width: `1080px`.
  * Left: Contact form (Name, Email, Phone, Message, Submit button).
  * Right: Operating hours + Embedded interactive Google Maps iframe.

---

## 2. MOBILE VIEWPORT ADAPTATION (390px)

* **Top Header:**
  * Height: `60px`.
  * Clean mobile header with brand logo mark on left, quick-action "PEÇA ONLINE" mini-button, and hamburger menu toggle for section navigation.
* **Hero Floating Crest Banner:**
  * Adapts from 3 horizontal columns to a stacked vertical crest card:
    * Top: Brand Logo Mark with "144" and triangle arrows.
    * Middle: "+200 MIL BURGERS EM 6 ANOS NO ABC" milestone subtext.
    * Bottom: "Rua Corunha, 67 - Diadema" address and phone metadata.
  * Full width with `16px` lateral margins (`width: calc(100% - 32px)`).
* **"NOSSA ESSÊNCIA" (Badge Trio):**
  * Stacks into a single centered column (`grid-template-columns: 1fr`).
  * Badges retain their circular geometry (`180px` diameter) with `32px` vertical spacing between stamps.
* **Full-Bleed Quote Scene:**
  * Height: `auto` (min-height `320px`) with `40px 20px` internal padding.
  * Typography scales fluidly (`font-size: clamp(1.2rem, 5vw, 1.6rem)`).
* **"DESTAQUES DA CASA" (Staggered Block Grid):**
  * 2-column checkerboard transitions into a single vertical sequence:
    * Pair 1: Text Card 1 -> Image Block 1
    * Pair 2: Text Card 2 -> Image Block 2
    * Pair 3: Text Card 3 -> Image Block 3
  * Maintains clear visual connection between dish description and food photo.
* **"GALERIA 144" (Carousel):**
  * Height: `320px`. Touch-enabled swipeable horizontal carousel.
* **"LOCALIZAÇÃO E CONTATO":**
  * Stacks into single column:
    * Top: Contact form with touch-friendly input heights (`48px`).
    * Bottom: Operating hours summary and Google Maps interactive frame (`260px` height).
