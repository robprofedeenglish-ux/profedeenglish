# Current design: Wish You Were Here (November 2026)

British seaside theme, launched 8 November 2026 to match the Skool rebrand. Same pages, URLs, text, titles, descriptions and structured data as the Vintage Penguin design; only the look changed.

## Palette

| Role | Colour | Hex |
|---|---|---|
| Page background | Cream | #F4EFE5 |
| Body text, outlines, borders, dark bands | Navy | #1E2A3A |
| Headlines (large only) and main buttons | Coral | #E04E36 |
| Links, subheadings, secondary buttons, proof band | Sea Blue | #1F6F96 |
| Wave shapes and soft accents only | Light Sea | #6FB3D2 |
| Highlights, the sun, small badges, the "en ____" blank | Sunshine | #F2B84B |

Accessibility notes: coral on cream is 3.45:1, so it's only used for large headlines. Button text is white bold at 19px (white on coral is 3.95:1, which passes as large bold text). Sea blue links are 2.6:1 against navy text, so links inside paragraphs keep a thin underline; navigation links underline on hover.

## Fonts

- Shrikhand (400) for H1 and H2 only, at large sizes
- DM Sans 400 for text and 700 for labels and buttons
- Both are the Google Fonts versions, self-hosted through fontsource with `font-display: swap`, so no request goes to Google (keeps the site free of a cookie banner)

## Motifs (max two or three per screen)

- Two flat wave bands (Light Sea over Sea Blue): bottom of the hero and above the footer (`src/components/Waves.astro`)
- Sunshine circle: behind Rob in the hero photo
- Deckchair stripes: only on the left edge of the hero, desktop only
- Postcard details: 2 to 3px navy outlines, 14px card corners, pill buttons, one tilted photo in the homepage About section

## Screenshots

Same set as the Vintage Penguin archive (1440px and 390px, built with the two drafts showing). Video thumbnails appear blank because the screenshots were taken in a sandbox without internet access; on the live site Cloudflare fetches them at build time.
