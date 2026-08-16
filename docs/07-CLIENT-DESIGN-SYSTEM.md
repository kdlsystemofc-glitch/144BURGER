# 07 — CLIENT DESIGN SYSTEM: 144BURGER

> **Phase 04 Output** — Formal client-owned design system derived from empirical brand evidence (logo mark, physical neon signage, physical store environment, brand poster, and macro culinary photography) mapped into the approved reference architecture.

---

## 1. IDENTITY EXTRACTION & BRAND ESSENCE

* **Core Essence:** Artisanal craft burger house rooted in Diadema, SP (*"Feito pra marcar"*). Combines high-volume craft mastery (+200k burgers, +32k deliveries) with an intimate, welcoming neighborhood experience (*"Sabor, Atitude, Propósito"*).
* **Visual Anchor:** Urban dark charcoal canvas illuminated by glowing terracotta neon orange and electric yellow accents, grounded in rich brioche gold, slow-cooked beef rib fibers, and natural dark wood textures.

---

## 2. COLOR SYSTEM (DESIGN TOKENS)

Every color token is strictly derived from real client assets and brand evidence.

| TOKEN | VALUE (HEX / RGB) | SOURCE | ROLE | RATIONALE |
| :--- | :--- | :--- | :--- | :--- |
| **`--brand-primary`** | `#E55A1B` / `rgb(229, 90, 27)` | Official Logo Triangles (`imgi_1.jpg`) & Illuminated Wall Sign (`imgi_14.jpg`) | Primary Brand Accent & Dominant Action Color | The iconic terracotta orange defining the bun arrowheads, script wordmark, and neon lighting. |
| **`--brand-primary-deep`**| `#D44A10` / `rgb(212, 74, 16)` | Poster Artwork (`imgi_18.jpg`) & Ambient Neon Core | Hover State & Deep Accent | Provides rich optical depth and contrast on hover interactions. |
| **`--brand-accent`** | `#F5B800` / `rgb(245, 184, 0)` | Logo Underline Bars (`imgi_1.jpg`) & Yellow Neon Tube Underline (`imgi_14.jpg`) | Secondary Brand Accent & Visual Highlight | Highlights the double underline of *"Burger"* and draws focal attention. |
| **`--bg-primary`** | `#121111` / `rgb(18, 17, 17)` | Logo Backdrop (`imgi_1.jpg`) & Dark Restaurant Interior | Primary Background Canvas | Creates a moody, high-contrast urban environment that lets food photography and glowing neon elements shine. |
| **`--bg-surface`** | `#1A1817` / `rgb(26, 24, 23)` | Poster Dark Surfaces & Natural Dark Wood (`imgi_18.jpg`, `imgi_19.jpg`) | Section Containers & Ribbons | Subtle warm elevation over primary dark canvas, preventing flat sterile black. |
| **`--surface-card`** | `#FFFFFF` / `rgb(255, 255, 255)` | Hero Floating Crest Banner (`reference-full.png`) & Pure White Neon (`imgi_14.jpg`) | High-Contrast Information Containers | Delivers maximum typographic legibility for the hero crest and text cards. |
| **`--text-primary`** | `#121111` / `rgb(18, 17, 17)` | Display Numerals `"144"` in Logo (`imgi_1.jpg`) | Primary Dark Text (on light surfaces) | Sharp, grounded readability for headlines and numbers inside white containers. |
| **`--text-on-dark`** | `#FFFFFF` / `rgb(255, 255, 255)` | Pure White Typography & Glowing Neon Tubes (`imgi_14.jpg`) | Primary Light Text (on dark surfaces) | Maximum contrast for section headers, ribbons, and dark scenes. |
| **`--text-muted`** | `#666666` / `rgb(102, 102, 102)` | Editorial Subtext Standard | Secondary Body Text & Captions | Balanced hierarchy without competing with primary headings. |
| **`--interactive-hover`** | `#E55A1B` / `rgb(229, 90, 27)` | Primary Brand Color | Button Hover Fill & Active Nav Line | Unmistakable feedback indicator across all clickable UI elements. |
| **`--border-accent`** | `#E55A1B` / `rgb(229, 90, 27)` | Logo Perimeter & Signage Frame | Container Frames & Inset Rules | Unifies card borders, decorative dividers, and input focus rings. |
| **`--border-subtle`** | `rgba(229, 90, 27, 0.25)` | Inset Rule Dividers in Crest Card | Internal Column Dividers | Creates structural separation without visual heaviness. |

---

## 3. TYPOGRAPHY SYSTEM

Typography pairs bold geometric authority with artisanal warmth, matching reference scale hierarchy.

* **DISPLAY (`--font-display`): `Montserrat`, sans-serif**
  * *Weights:* `800` (ExtraBold), `900` (Black).
  * *Role:* Large numerals (`"144"`), hero headline stats (*"+200 MIL BURGERS"*), section ribbon titles (*"NOSSA ESSÊNCIA"*), and badge titles.
  * *Rationale:* Bold, heavyweight geometric sans-serif reflecting the strong vertical presence of the physical 144 brand mark.
* **HEADING (`--font-display`): `Montserrat`, sans-serif**
  * *Weights:* `700` (Bold), `800` (ExtraBold).
  * *Role:* Card titles, dish names (*"Costela Burger"*, *"Batata Costeluda"*).
  * *Rationale:* Punchy uppercase and title-case legibility with tracked kerning (`0.5px` to `1.5px`).
* **SCRIPT ACCENT (`--font-script`): `Satisfy`, cursive**
  * *Weights:* `400` (Regular).
  * *Role:* Brand wordmark (*"Burger"*), category accent flourishes, and customer quote signatures.
  * *Rationale:* Authentic, friendly neon/chalk cursive script directly reproducing the physical neon sign's tubular letterforms.
* **BODY (`--font-body`): `Plus Jakarta Sans`, sans-serif**
  * *Weights:* `500` (Medium), `600` (SemiBold), `700` (Bold).
  * *Role:* Paragraph descriptions, addresses, operating hours, form inputs.
  * *Rationale:* Modern humanist geometric sans with exceptional optical clarity across mobile and desktop viewports.
* **META & LABELS (`--font-display`): `Montserrat`, sans-serif**
  * *Weights:* `700` / `800`, All-Caps, `letter-spacing: 1.5px` to `2.2px`.
  * *Role:* Eyebrow tags (*"REFERÊNCIA EM DIADEMA"*), tagline (*"FEITO PRA MARCAR"*), address lines.
* **CTA (`--font-display`): `Montserrat`, sans-serif**
  * *Weights:* `800`, All-Caps, `letter-spacing: 1.2px`.
  * *Role:* Primary action buttons (*"PEÇA ONLINE"*, *"ENVIAR MENSAGEM"*).

---

## 4. IMAGE LANGUAGE

* **Aspect Ratios & Framing:**
  * Hero Background: Full-width cover with warm dark gradient overlay (`rgba(18, 17, 17, 0.5)` to `rgba(18, 17, 17, 0.72)`).
  * Macro Product Photography: 3:4 portrait framing (`imgi_19.jpg`, `imgi_11.jpg`) celebrating artisanal ingredients (brioche shine, slow-cooked shredded beef rib fibers, melting cheddar drips).
  * Store Atmosphere: 9:16 portrait framing (`imgi_14.jpg`, `imgi_15.jpg`) capturing intimate dining ambiance and glowing wall neon.
* **Corner Radius Logic:** Strict `0px` sharp squared corners for structural containers, matching the tactile editorial print geometry of the reference.
* **Image Borders & Framing:** Solid pop-color background blocks (Terracotta `#E55A1B` and Charcoal `#121111`) framing isolated product photography in the staggered grid.
* **Object-Position:** Calibrated `center 32%` for the hero burger backdrop to ensure the golden brioche crown and dripping cheese frame the floating crest card symmetrically.

---

## 5. GRAPHIC LANGUAGE & MOTIFS

* **Dual Directional Triangles:** Upward arrow (top bun) and downward arrow (bottom bun) in `#E55A1B`, symbolizing the craft burger architecture.
* **Circular Semicircular Arc:** Framing the `"144"` numerals with top and bottom curved bars.
* **Double Yellow Underline Bar:** Two parallel rounded bars (`#F5B800`) stabilizing the script wordmark.
* **Sawtooth Serrated Border Dividers:** Sharp geometric zigzag edge dividers (`15px` tooth width, `24px` height) separating major section transitions.
* **Double-Line Accent Frames:** Clean outer border (`2px solid #E55A1B`) paired with an inner inset rule (`1px solid #E55A1B`) with a `6px` white margin.

---

## 6. UI LANGUAGE & INTERACTIVE COMPONENTS

* **Primary CTA Button (`.btn-pedir`):**
  * Default: Transparent background, `2px solid var(--brand-orange)`, `var(--brand-orange)` bold uppercase text.
  * Hover: Solid `var(--brand-orange)` background, white text, subtle shadow `0 4px 12px rgba(229, 90, 27, 0.3)`.
* **Sticky Navigation Bar (`.header`):**
  * Height: `64px` desktop / `58px` mobile. White background with `1px solid rgba(0,0,0,0.08)`.
  * Active state: Bottom border indicator in `var(--brand-orange)` (`2.5px`).
* **Docked Social Tab (`.docked-social-tab`):**
  * Fixed at right viewport edge in solid `var(--brand-orange)` with white SVG icons.
* **Form Inputs:**
  * Clean white background, `1px solid var(--brand-dark)`, focus state glowing with `2px solid var(--brand-orange)` and soft halo.

---

## 7. MOTION PERSONALITY

* **Timing & Pacing:** Fast, energetic, and tactile (`200ms` - `300ms`).
* **Easing Curve:** Punchy cubic bezier (`cubic-bezier(0.16, 1, 0.3, 1)`) for card entrances and smooth ease (`ease`) for color transitions.
* **Hover Micro-Interactions:**
  * Links: Instant color shift (`color: var(--brand-orange)`, `0.2s ease`).
  * Buttons: Scale lift `scale(1.02)` with subtle elevation shadow.
  * Social Icons: Micro-scale `scale(1.15)`.

---

## 8. CODE TOKEN REPOSITORY (`styles.css`)

```css
:root {
  /* Brand Colors */
  --brand-primary: #E55A1B;
  --brand-primary-deep: #D44A10;
  --brand-accent: #F5B800;
  --bg-primary: #121111;
  --bg-surface: #141312;
  --surface-card: #FFFFFF;
  
  /* Text Colors */
  --text-primary: #121111;
  --text-on-dark: #FFFFFF;
  --text-muted: #666666;
  
  /* Borders & Accents */
  --border-accent: #E55A1B;
  --border-subtle: rgba(229, 90, 27, 0.35);
  
  /* Typography */
  --font-display: 'Montserrat', -apple-system, sans-serif;
  --font-script: 'Satisfy', cursive;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  
  /* Transitions */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s var(--ease-spring);
}
```
