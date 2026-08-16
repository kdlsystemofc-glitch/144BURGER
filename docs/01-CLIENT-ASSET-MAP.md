# 01 — CLIENT ASSET MAP: 144BURGER

> **Phase 01 Output** — Detailed inventory, technical audit, and classification of all 8 image assets available in `C:\CLI\144BURGER\imagens`.

---

## 1. FULL ASSET AUDIT TABLE

| FILE | DIMENSIONS | ORIENTATION | SUBJECT | QUALITY | BRAND VALUE | POTENTIAL USE | NOTES |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `imgi_1_726814833_18086390372393704_4776444318929408133_n.jpg` | 150x150 px | Square (1:1) | 2D Graphic Brand Logo (Circular arc, "144", triangle arrows, "Burger", underlines) | Low (150px) | High | Favicon, small logo mark, SVG recreation base | Low-resolution raster graphic. Must be recreated as an inline SVG or high-DPI vector component for crisp rendering on retina screens. |
| `imgi_5_404328534_895235005603989_8788666339946120575_n.jpg` | 150x150 px | Square (1:1) | Close perspective crop of physical neon wall sign glowing indoors | Very Low (150px) | Medium-High | Micro thumbnail, palette & neon lighting reference | Redundant crop of `imgi_14`. Severe compression artifacts at 150px. |
| `imgi_7_565918056_18076823783113090_7704104567781721952_n.jpg` | 150x150 px | Square (1:1) | Two double burgers held by hands over dark background with corner logo watermark | Very Low (150px) | Medium | Small secondary preview card, thumbnail | Strong appetite appeal and dynamic hand-held composition, but degraded by 150px size. |
| `imgi_11_772817595_18091804064393704_3453361317485084915_n.jpg` | 480x640 px | Vertical (3:4) | Macro portrait close-up of signature burger with slow-cooked shredded beef (*costela*) and dripping melted cheddar | High | High | Hero secondary visual candidate, featured specialty section card, menu spotlight | Crisp texture, rich colors, appetizing cheese drip. Perfectly represents core culinary differentiator. |
| `imgi_14_728652987_18081854228378294_1147931231683571596_n.jpg` | 360x640 px | Vertical (9:16) | Full physical illuminated neon logo sign on indoor restaurant wall | Medium | High | Physical space / Store identity section, vertical background banner | Real-world proof of store brand identity, neon colors (orange, yellow, white), and physical atmosphere. |
| `imgi_15_722407962_18085446389393704_2564331252033526900_n.jpg` | 361x640 px | Vertical (~9:16) | Dining table setting with wooden table, candle, heart balloons, and illuminated neon sign in background | Medium | High | Ambiance / Dining experience section card, store atmosphere | Authentic capture of the intimate, cozy dine-in experience in Diadema. |
| `imgi_18_695726439_18082293005393704_1444086981245708916_n.jpg` | 512x640 px | Vertical (4:5) | Digital illustration poster featuring founder, *"Feito pra marcar"*, *"Plano do Dono"*, team slogans, values | High | High | Brand story / About section, founder narrative spotlight | Rich storytelling asset containing core brand pillars, slogan, and visual identity personality. |
| `imgi_19_670858869_18079921283393704_2432605616828049199_n.jpg` | 480x640 px | Vertical (3:4) | Ultra-macro portrait shot of signature burger on wooden cutting board with glazed brioche, shredded beef rib, cheddar, mayo | High | High | **Primary Hero visual candidate**, signature dish showcase | Highest appetite-appeal asset in collection. Superb texture details on brioche bun, cheese, and shredded beef fibers. |

---

## 2. ASSET CATEGORIZATION & ARCHITECTURAL CLASSIFICATION

### 2.1 Strongest Hero Candidates
1. **`imgi_19...jpg` (480x640, Vertical 3:4)** — **Primary Hero Candidate**. Spectacular visual impact, high color fidelity, appetizing shredded beef (*costela desfiada*) and melted cheddar layers.
2. **`imgi_11...jpg` (480x640, Vertical 3:4)** — **Secondary Hero Candidate**. Complementary macro close-up showcasing artisanal ingredients.

### 2.2 Product Imagery
* **`imgi_19...jpg`** — Master product macro shot (glazed brioche, costela desfiada, melted cheddar).
* **`imgi_11...jpg`** — Secondary product macro shot (focus on cheese melt and shredded beef).
* **`imgi_7...jpg`** — Double burger action shot held by hands (constrained by 150px size).

### 2.3 Store Environment & Physical Space Imagery
* **`imgi_14...jpg`** — Complete illuminated physical neon sign on restaurant wall.
* **`imgi_15...jpg`** — Dine-in table setup with glowing candle and background neon sign.
* **`imgi_5...jpg`** — Tight perspective crop of the illuminated neon sign (low resolution).

### 2.4 Brand Graphic & Narrative Assets
* **`imgi_1...jpg`** — Official 2D brand logo mark (150x150 px).
* **`imgi_18...jpg`** — Comprehensive narrative poster art (*"Feito pra marcar"*, *"Plano do Dono"*, *"Equipe 144"*).

### 2.5 Low-Quality / Constrained Assets
* **`imgi_1...jpg`** (150x150 px) — Resolution constraint; requires vector/SVG code recreation.
* **`imgi_5...jpg`** (150x150 px) — Resolution constraint; redundant with `imgi_14.jpg`.
* **`imgi_7...jpg`** (150x150 px) — Resolution constraint; restricted to small card thumbnail use.

### 2.6 Duplicates & Redundancies
* **`imgi_5...jpg`** is an avatar/close-up crop of the same illuminated physical sign displayed in full context in **`imgi_14...jpg`**.

---

## 3. IMAGE GEOMETRY & LAYOUT IMPLICATIONS

* **Landscape (Horizontal) Assets:** **0 assets**. There are **no wide horizontal photographs** in the provided assets.
* **Vertical (Portrait) Assets:** **5 assets** (`imgi_11`, `imgi_14`, `imgi_15`, `imgi_18`, `imgi_19` ranging from 3:4, 4:5, to 9:16).
* **Square Assets:** **3 assets** (`imgi_1`, `imgi_5`, `imgi_7` all 1:1 at 150x150 px).
* **Architectural Mandate:**
  * The website layout cannot assume generic wide landscape hero banners or full-bleed 16:9 carousel containers.
  * The design must leverage **portrait-first image framing**, split-column hero compositions, vertical card aspect ratios (3:4 / 4:5 / 9:16), or layered compositions that celebrate vertical food photography.
