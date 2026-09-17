# iScript redesign QA

## Scope

- Surface: multilingual marketing site and all guide, API, resource, support, and privacy pages
- Languages: Korean, English, Japanese, Simplified Chinese
- State: deployed production build
- Production URL: https://iscript.dev/
- Tested revision: `dac95d7a8b015c340be803df85eddefc3a056644`

## Visual truth and evidence

- Selected visual direction: `C:\Users\pst\.codex\generated_images\01a0ae1f-f4a3-7e33-aa59-f832ca7eee9e\exec-5ca171fc-a910-48fd-b3fd-80cdc1852539.png`
  - Dimensions: 852 x 1846 px
  - Intended density: desktop landing-page concept
- Production full-page capture: `C:\Users\pst\AppData\Local\Temp\iscript-qa\qa-home-full-final.png`
  - Viewport: 1440 x 900 CSS px
  - Capture dimensions: 1440 x 3799 px
  - Device scale factor: 1
- Production mobile capture: `C:\Users\pst\AppData\Local\Temp\iscript-qa\qa-home-mobile-final.png`
  - Viewport and capture dimensions: 390 x 844 CSS px
  - Device scale factor: 1
- Full-view side-by-side comparison: `C:\Users\pst\AppData\Local\Temp\iscript-qa\qa-comparison.png`
- Representative subpage capture: `C:\Users\pst\AppData\Local\Temp\iscript-qa\qa-guide-desktop.png`
- Travel resources desktop capture: `C:\Users\pst\AppData\Local\Temp\iscript-resource-qa\resources-desktop.png`
  - Viewport: 1440 x 900 CSS px
  - Full-page capture height: 3079 px
- Travel resources mobile capture: `C:\Users\pst\AppData\Local\Temp\iscript-resource-qa\resources-mobile.png`
  - Viewport: 390 x 844 CSS px
  - Full-page capture height: 5490 px
- Resource-page captures used the deployed production HTML and CSS in an isolated local preview because the sandboxed browser could not access the public network. Live HTTP checks were run separately against the production URLs.

## Comparison findings

### Required fidelity surfaces

- Typography: bold, compact display type and neutral sans-serif body type match the selected modern editorial direction. Legacy theme heading decoration and text shadows were removed.
- Spacing and layout: the split hero, three-screen product composition, proof strip, three-step workflow, feature split, and closing CTA preserve the concept's hierarchy. The implementation intentionally uses a slightly more generous vertical rhythm for production copy and localization.
- Colors and tokens: white canvas, near-black type, cobalt primary, pale-blue surfaces, restrained borders, and rounded cards are consistent across landing and document pages.
- Image quality: production uses the real App Store icon and real iScript screenshots rather than mock placeholders. Images are crisp at tested desktop and mobile densities.
- Copy and content: the approved Korean headline, localized benefit copy, and localized calls to action are present in all four languages. Existing detailed documentation content remains intact.

### Full-view comparison

- Hero composition, visual weight, cobalt workflow section, feature screenshot section, and final download block closely follow the selected direction.
- The production page adds a compact proof strip and utility footer required by the real site.
- No P0, P1, or P2 visual fidelity issue remains.

### Focused-region comparison

- Mobile hero and navigation were checked independently at an exact 390 px viewport.
- `window.innerWidth` and `document.documentElement.scrollWidth` both reported 390, confirming no horizontal overflow.
- Menu state changed from `aria-expanded=false` to `true`; the panel rendered as a grid with four language links and a visible App Store action.
- Browser console errors: none.

### Travel resources follow-up

- The resources page extends the established white, near-black, cobalt, pale-blue, restrained-border, and rounded-card system without introducing a second visual language.
- Desktop renders two clear three-column collections. The introduction, download cards, emergency panel, and workbook-format example maintain the existing page rhythm.
- At an exact 390 px viewport, `window.innerWidth` and `document.documentElement.scrollWidth` both reported 390. The layout rendered six single-column cards, six visible download actions, and three emergency contacts without horizontal overflow.
- The mobile menu changed from `aria-expanded=false` to `true` and applied the expected open state.
- The isolated preview logged three expected missing-resource responses for external assets removed from the snapshot. No application JavaScript exception or broken page interaction was observed.
- No P0, P1, or P2 issue remains. The long single-column mobile page is an acceptable P3 trade-off because it preserves full descriptions and large download targets.

## Comparison history

1. Initial production comparison found inherited Slate-theme image and heading styles and an overly large small-screen headline as P2 polish issues.
2. Added scoped theme resets, clipped the product stage, removed legacy heading decoration, and reduced the mobile display size.
3. Rebuilt and redeployed. Exact 390 px CDP verification confirmed the corrected geometry, menu behavior, and zero console errors.
4. Final 1440 px full-page comparison found only acceptable P3 differences: more generous vertical spacing and retained source-document emoji on some guide pages.

## Functional and structural verification

- GitHub Pages deployment for the tested revision completed successfully.
- 24 public Markdown pages were enumerated: six page groups across four languages.
- Automated internal-link check reported `BROKEN_INTERNAL=0`.
- Replacement-character scan reported zero U+FFFD characters.
- Layout tag and Liquid conditional counts were balanced.
- Locale-specific App Store URLs and language navigation were checked in the shared layout.
- Four production resource routes returned HTTP 200 with six cards and six download actions each.
- Six production workbook URLs returned HTTP 200 with the Excel workbook MIME type.
- Every workbook reopened with one sheet, 87 rows, two columns, zero blank cells, correct language direction, and zero formula-error matches.
- Resource-page desktop and mobile screenshots were visually reviewed in full.

## Final result

`final result: passed`
