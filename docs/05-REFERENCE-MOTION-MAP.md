# 05 — REFERENCE MOTION MAP: 144BURGER

> **Phase 02 Output** — Motion grammar, kinetic pacing, and interactive behavioral specifications reverse-engineered from the live reference.

---

## 1. MOTION ARCHITECTURE & TIMING

* **Sticky Navigation Transition:**
  * Fixed at `top: 0` with `z-index: 1000`.
  * Height remains constant at `64px` to prevent layout reflow.
  * Active section link indicator smoothly transitions with a subtle bottom bar slide/fade (`transition: color 0.2s ease, border-bottom 0.2s ease`).
* **Hero Crest Entrance:**
  * Subtle vertical lift and opacity reveal on initial viewport render (`opacity: 0 -> 1`, `transform: translateY(12px) -> translateY(0)`, duration `0.6s cubic-bezier(0.16, 1, 0.3, 1)`).
* **Sawtooth Border Rhythm:**
  * Static geometric precision with no jank or pixel misalignment during scroll events.
* **Full-Bleed Parallax Quote Scene:**
  * Background photography utilizes fixed background attachment or subtle vertical parallax translation (`background-attachment: fixed` or `transform: translateY(scrollY * 0.15px)`), creating depth behind the fixed white quote text.
* **Food Gallery Carousel:**
  * Horizontal slide translation on arrow click or drag gesture (`transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)`).
  * Hover on navigation arrows triggers subtle scaling (`transform: scale(1.1)`).
* **Interactive Buttons & Micro-Interactions:**
  * Hover state on primary CTA buttons (*"PEÇA ONLINE"*, *"ENVIAR"*): Smooth color fill inversion, subtle shadow expansion, and micro-elevation (`transform: translateY(-2px)`, `transition: all 0.2s ease`).
  * Hover state on secondary text buttons (*"VER CARDÁPIO"*): Border and text color change to brand accent orange.

---

## 2. INTERACTION STATE SPECIFICATIONS

| ELEMENT | DEFAULT STATE | HOVER / FOCUS STATE | ACTIVE / CLICK STATE |
| :--- | :--- | :--- | :--- |
| **Nav Links** | `#121111` uppercase sans, no underline | Text color shifts to `#E55A1B`, bottom indicator bar appears | Red/Orange bottom border active |
| **Primary CTA ("PEÇA ONLINE")** | Red/Orange border, transparent/white fill, red/orange text | Solid `#E55A1B` fill, `#FFFFFF` text, subtle elevation | Slight scale reduction (`0.98`) |
| **Badge Stamps** | Flat circular seal with crisp vector teeth | Subtle scale lift (`scale(1.03)`) and soft shadow halo | None (informative) |
| **Form Inputs** | Crisp white background, `#121111` border (`1px solid`) | `#E55A1B` border glow (`2px solid #E55A1B`), shadow halo | Caret active |
| **Submit Button ("ENVIAR")** | Solid `#E55A1B` fill, white text | Darker orange `#D44A10` fill, subtle lift | Slight compression |
| **Gallery Arrows** | Translucent white arrow over photo | Solid white arrow with increased contrast | Slide active |
