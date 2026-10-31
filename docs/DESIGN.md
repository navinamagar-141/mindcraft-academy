# MindCraft Academy design system

## Visual language

The interface uses a strict monochrome developer-academy aesthetic. The UI uses dark charcoal layers, white text, muted silver secondary text, and white action buttons. Photos retain natural colour and are used as the only colourful visual content.

## Colour tokens

The shared values are defined in [`app/globals.css`](../app/globals.css) as RGB triplets and consumed by [`tailwind.config.ts`](../tailwind.config.ts).

| Token | Value | Use |
| --- | --- | --- |
| `--color-page` | `42 42 45` (`#2a2a2d`) | Page background |
| `--color-frame` | `37 37 40` (`#252528`) | Navbar, footer, frame surfaces |
| `--color-surface` | `51 51 55` (`#333337`) | Cards and panels |
| `--color-panel` | `51 51 55` (`#333337`) | Code and feature panels |
| `--color-feature` | `47 47 51` (`#2f2f33`) | Hero and feature bands |
| `--color-frame-line` and `--color-line` | `67 67 72` (`#434348`) | Borders and dividers |
| `--color-secondary` | `184 184 189` (`#b8b8bd`) | Secondary text |
| `--color-white` | `255 255 255` (`#ffffff`) | Headings and primary text |
| `--color-black` | `0 0 0` (`#000000`) | Dark text and overlays |
| `--color-logo-silver` | `128 128 128` (`#808080`) | Logo CRAFT lettering |

The dotted texture uses `--texture-opacity: 0.04`.

## Typography and sizing

`Open Sans` is the body font and `Montserrat` is the display font, both loaded in [`app/layout.tsx`](../app/layout.tsx). Display headings use `font-display`, with normal responsive sizes generally ranging from `text-2xl` to `text-5xl`. Body copy uses readable line heights and muted silver for supporting text. The interface avoids oversized decorative headings.

## Photo treatment

Photos use `next/image` and the `.photo-natural` class in [`app/globals.css`](../app/globals.css), which applies `saturate(0.9)`. Existing image cards retain rounded corners, borders, object positioning, and bottom readability gradients where captions overlay photos.

## Interface rules

- Use white or bordered monochrome controls with visible `.focus-ring` focus states.
- Keep tap targets comfortable on mobile, generally at least 44 pixels for primary controls.
- Preserve responsive, mobile-first layouts without horizontal scrolling.
- Use semantic headings, labels, landmarks, and keyboard-operable tabs or menus.
- Keep the dotted texture subtle and avoid coloured interface accents.
