# DAMBROSE — Design Guidelines

> Source of truth extracted from the Figma file **DAMBROSE | Website (Internal)** (page `🟢 UI (28 apr/ Copy tweaks)` + `🎨 Style guide`). Use this doc before designing any new page so the result matches the rest of the site.

---

## 1. Brand architecture

The site covers one master brand and two sub-brands. Each has its own color palette but shares the same typography and layout grammar.

- **DAMBROSE** — master brand, earthy/warm. Default for institutional pages (Home, Services, About, Membership, Contact).
- **Alma** — sub-brand for one of the programs. Uses green/warm tones.
- **Praeva** — sub-brand for the other program. Uses cool grays.

When designing program-specific pages, swap the palette but keep the layout language identical.

---

## 2. Canvas & grid

| Property | Desktop | Mobile |
| --- | --- | --- |
| Frame width | **1440px** | **375px** |
| Horizontal page padding | **40px** | typically **20px** |
| Content max width (inside padding) | **1360px** | — |
| Section vertical padding | **112px top / 112px bottom** | reduced (~64px) |
| Section inner item spacing | **112px** between major blocks | — |
| Hero height | **750px** | scaled |
| Section divider | **1px** horizontal line, 40px inset (1360px wide), color `Olive haze / Bison hide` tonal | full-width |

Page background default: **Ecru white `#f2f1e3`** (variable `Dambrose / Ecru white`).

Every section sits inside its own `FRAME` named `SEC 01`, `SEC 02`, etc. — keep this convention for consistency with existing pages.

---

## 3. Color tokens

All colors are defined as Figma variables under the collection **Variable collection**, organized in three groups: `Dambrose / *`, `Alma / *`, `Praeva / *`. **Never hardcode hex** — always bind to a variable.

### 3.1 Dambrose palette (master)

| Token | Hex | Typical use |
| --- | --- | --- |
| `Dambrose / Ecru white` | `#f2f1e3` | Page background |
| `Dambrose / White rock` | `#ebe9d1` | Soft card background |
| `Dambrose / Tana` | `#dedbbc` | Card / section background |
| `Dambrose / Heathered gray` | `#bdb992` | Muted accent |
| `Dambrose / Olive haze` | `#847c66` | **Default heading color on light bg** |
| `Dambrose / Bison hide` | `#bdb8a9` | Dividers, secondary borders |
| `Dambrose / Rangoon green` | `#1c1a08` | Body copy on light bg, deep contrast |
| `Dambrose / Woodrush` | `#222009` | Dark sections background |
| `Dambrose / Cape cod` | `#383f39` | Alternate dark background |
| `Dambrose / Fire` | `#ae4000` | Strong CTA/section background |
| `Dambrose / Tia maria` | `#cc3d0d` | Hot accent / focus |
| `Dambrose / Sandy brown` | `#eba16f` | Warm accent |
| `Dambrose / Putty` | `#e6ca84` | Yellow card background |
| `Dambrose / Banana mania` | `#fae5b0` | Light yellow surface |
| `Dambrose / Husk` | `#bda25f` | Mustard accent |
| `Dambrose / Opal` | `#b1c5c1` | Soft cool surface |
| `Dambrose / Blue smoke` | `#728b8b` | Cool accent |
| `Dambrose / Barley corn` | `#997d4d` | Bronze accent |

> Memory note: **headings on light backgrounds must use `Dambrose / Olive haze` (`#847c66`)**.

### 3.2 Alma & Praeva

Sub-brand palettes follow the same warm/cool intent. Use them only inside their dedicated sections or pages. Full list available in the Figma variables panel.

---

## 4. Typography system

Two type families do all the work:

- **Instrument Serif** — display, every heading. Italic variant is reserved for emphasized phrases inside a heading (e.g. *"knows you"*, *"foundation"*, *"family doctor"*).
- **Martian Mono** — every label, body copy, eyebrow, footer, footnote. **Always in UPPERCASE** in this design language.

Roboto Mono shows up only in legacy spec callouts on the style guide — don't use it in new layouts.

### 4.1 Scale (from the DAMBROSE style guide)

| Style | Family | Weight | Size | Line height | Letter spacing | Case |
| --- | --- | --- | --- | --- | --- | --- |
| Heading-jumbo | Instrument Serif | Regular | **72** | 110% | 0% | Sentence |
| Heading-big | Instrument Serif | Regular | **52** | 100% | 0% | Sentence |
| Heading-large | Instrument Serif | Regular | **50** | 100% | +1% | Sentence |
| Heading-large-detail | Instrument Serif | Regular | **40** | 100% | +1% | Sentence |
| Heading-medium | Instrument Serif | Italic | **32** | 110% | +2% | Sentence |
| Body-large | Martian Mono | ExtraLight | **20** | 120% | 0% | **UPPER** |
| Body-medium | Martian Mono | Regular | **14** | 140% | -4% | **UPPER** |
| Body-detail-small | Martian Mono | Regular | **12** | 140% | -4% | **UPPER** |

### 4.2 Usage rules

- **Section titles** use Heading-big or Heading-large; emphasized words are *italic*.
- **Eyebrows / labels / dates / footnotes** use Body-detail-small (Martian Mono 12 UPPER, tight tracking).
- **Body copy inside cards** uses Body-medium (Martian Mono 14 UPPER).
- **Hero captions** use Body-detail-small bottom-aligned over the image.
- Never mix Instrument Serif uppercase or Martian Mono in sentence case — the contrast between *serif lowercase* and **mono UPPER** is the visual signature.

---

## 5. Layout patterns

### 5.1 Page skeleton

Every internal page composes the same blocks in this order:

1. **Top bar** — burger icon (top-left) + `DAMBROSE / Lifelong Medicine` wordmark (top-center) + `INQUIRY ABOUT MEMBERSHIP` button (top-right). Lives over the hero, transparent.
2. **HERO** (1440 × 750) — full-bleed photograph or solid brand panel. Bottom-left: short page tagline in Heading-big. Bottom-right: date stamp / context line in Body-detail-small.
3. **Section divider** — 1px hairline at 40px inset.
4. **N content sections** — each in its own `SEC NN` frame, separated by hairline dividers. Mix backgrounds: ecru white default, occasional Putty / Tana / Fire / dark Woodrush blocks for rhythm.
5. **CTA block** — usually two stacked sentences (Heading-big with italic emphasis) + primary button + optional ornamental image.
6. **Footer** (2453px tall combined CTA + footer frame on desktop).

### 5.2 Section variants observed

- **Two-card showcase** — gradient/solid card + serif logo + 1-line description + secondary button (used to surface Alma + Praeva on the existing Services page).
- **Framework grid** — title at top, 8 items in a 4×2 grid on a tonal background (Putty / Banana mania). Each item: tiny label + paragraph.
- **Feature row** — full-width title + 3 or 4 image-and-text cards. Mixes portrait/landscape ratios.
- **Audience cards** — 3 cards on Opal background (cool counterpoint), eyebrow + title + paragraph.
- **Testimonial overlay** — full-bleed photo, overlaid quote card with mono attribution.
- **Final CTA** — ecru background, centered serif sentence with italic emphasis + ornamental flower / arch image + small landscape thumbnail.

### 5.3 Decorative elements

- **Star ornaments** (8-point stars) scattered subtly across sections — keep small (150–450px), low contrast, behind or beside titles.
- **Hairline dividers** between sections — never skip them; they're a visual constant.
- **Date / location stamps** (Body-detail-small) often double as section meta info.

---

## 6. Components & buttons

Reuse the existing buttons / cards / nav from the file rather than redrawing. Discover them via `figma_search_components` before creating new ones.

Primary button style observed:
- Pill / rounded rectangle.
- Label in Body-detail-small (Martian Mono UPPER 12, tight tracking).
- Filled variant: dark Woodrush bg + Ecru white label (or Fire bg + Ecru white label for highest emphasis).
- Outlined variant: transparent bg + 1px Olive haze border + Olive haze label.

---

## 7. Imagery

- Editorial, warm, low-saturation photography. Hands, interiors, portraits, plants.
- Mix portrait + landscape ratios in the same row; don't standardize them.
- Always leave room for a Body-detail-small caption at the bottom edge of hero images.

---

## 8. Naming & file housekeeping

When creating a new page frame on the UI page:

- Name the **frame** with the page name in UPPERCASE (e.g. `OUR SERVICES`).
- Add a Heading-jumbo **title TEXT node** in the row above the frame at `y = 0` for navigation in canvas, using the same `x` as the frame.
- Number sections `SEC 01`, `SEC 02`, … top to bottom.
- Group decorative stars under names like `Star NN` (matches existing convention).
- Don't drop loose layers on the page canvas — always nest inside a section frame.

---

## 9. Pre-design checklist

Before placing anything on canvas:

1. Confirm the page's purpose, audience, and the conversion action.
2. Sketch the section list (hero → … → CTA + footer) and validate it.
3. Pull the reusable header + footer + button + card components — don't redraw.
4. Pick the section background sequence (mostly ecru, accented by Putty/Tana/Fire/Woodrush) to set rhythm.
5. Choose 2–3 phrases that will carry italic emphasis (the brand's voice depends on this).
6. Only then start placing frames.

---

## 10. Voice & copy direction

- Tone: calm, considered, premium. No medical jargon dumped on the user.
- Headlines lean on one emotional word in italic (*foundation*, *family*, *knows you*, *steady hand*).
- Labels are short, definite, mono-uppercase — they feel like archival index tags.
- Avoid exclamation marks, ALL-CAPS serif headings, and sales language.
