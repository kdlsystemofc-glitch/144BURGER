# 08 — MOTION & INTERACTION IMPLEMENTATION

> **Phase 06 Output** — Formal documentation of all motion mechanisms, kinetic timing, interaction feedback, scroll reveals, and performance safeguards implemented for 144BURGER.

---

## 1. MOTION ARCHITECTURE & INTERACTION MATRIX

| INTERACTION / SCENE | TRIGGER | TARGET | CSS / JS PROPERTY | DURATION & EASING | SCROLL RELATIONSHIP | RESPONSIVE BEHAVIOR |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Crest Entrance** | Page Load / DOM Ready | `.hero-crest-card` | `opacity: 0 -> 1`, `transform: translateY(24px) scale(0.98) -> translateY(0) scale(1)` | `700ms`, `cubic-bezier(0.16, 1, 0.3, 1)` | Plays once on viewport entry | Maintained on mobile (390px) |
| **Sticky Header Elevation** | `window.scrollY > 20px` | `.header` | `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12)` | `200ms ease` | Active throughout scroll | Active on mobile (`58px` height) |
| **Scroll Spy Navigation** | Viewport crossing section boundaries | `.nav-link` | Dynamic `.active` class assignment (bottom indicator bar) | `200ms ease` | Continuous via passive scroll listener + `requestAnimationFrame` | Hidden on mobile (desktop only) |
| **Smooth Section Navigation** | Click on `#anchor` links | `window` | `window.scrollTo({ top: offset, behavior: 'smooth' })` | Native smooth curve | Smooth scroll to target minus `64px` header offset | Instant jump if `prefers-reduced-motion` |
| **Stamp Badges Reveal** | Viewport entry (15% threshold) | `.stamp-card` | `opacity: 0 -> 1`, `transform: translateY(24px) -> translateY(0)` | `600ms spring`, Staggered delays: `50ms`, `180ms`, `300ms` | Triggered via `IntersectionObserver` | Single column vertical stagger on mobile |
| **Stamp Seal Hover Pop** | Mouse Enter | `.stamp-seal` | `transform: scale(1.06) rotate(2deg)`, `box-shadow` elevation | `350ms`, `cubic-bezier(0.16, 1, 0.3, 1)` | User interactive | Disabled on touch devices |
| **Checkerboard Rows Reveal**| Viewport entry (15% threshold) | `.checker-row` | `opacity: 0 -> 1`, `transform: translateY(24px) -> translateY(0)` | `600ms spring` | Triggered via `IntersectionObserver` | Fluid vertical fade-in on mobile |
| **Checkerboard Image Zoom** | Mouse Enter | `.checker-img` | `transform: scale(1.06)` | `500ms ease` | User interactive | Disabled on touch devices |
| **Parallax Quote Backdrop** | Page Scroll | `.quote-parallax-section` | `background-attachment: fixed` (Desktop) | Native composite thread | Subtle depth parallax behind static text | Reverts to `background-attachment: scroll` on mobile for 60fps performance |
| **Gallery Carousel Slide** | Click Next / Prev or Swipe | `.gallery-slide` | `opacity: 0 -> 1`, `visibility: hidden -> visible` | `600ms`, `cubic-bezier(0.25, 1, 0.5, 1)` | Auto-advances every `5.5s`, pauses on hover | Full Touch Swipe (`touchstart`/`touchend`) enabled on mobile |
| **Button Hover Lift** | Mouse Enter | `.btn-pedir`, `.btn-cardapio`, `.btn-submit` | `transform: translateY(-1px)`, `background-color`, `box-shadow` | `200ms ease` | User interactive | Touch active feedback on mobile |
| **Social Dock Tab Hover** | Mouse Enter | `.social-icon-link` | `transform: scale(1.15)`, `opacity: 0.92` | `200ms ease` | User interactive | Hidden on mobile viewports |
| **Contact Form Submit Feedback**| Form `submit` event | `.btn-submit` | `textContent: 'ENVIANDO...' -> '✓ MENSAGEM ENVIADA!'`, `background: #25D366` | `600ms` processing delay, `4000ms` confirmation reset | Form action state | Immediate user confirmation |

---

## 2. PERFORMANCE & ACCESSIBILITY SAFEGUARDS

1. **Hardware Acceleration:**
   * All animations target compositor-only properties (`transform`, `opacity`, `box-shadow`) to avoid layout thrashing and repaint jank.
2. **Scroll Optimization:**
   * Scroll listeners use `{ passive: true }` and schedule state updates through `requestAnimationFrame()`.
3. **Reduced Motion Compliance (`prefers-reduced-motion`):**
   * Full CSS override (`animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important;`) ensures immediate display for users with motion sensitivity.
4. **Mobile Optimization:**
   * Heavy desktop `background-attachment: fixed` is gracefully disabled on viewports `<= 860px`, guaranteeing silky smooth touch scrolling on smartphones.
