# Archived design: Vintage Penguin (November 2026)

The original look of profedeenglish.com, archived on 8 November 2026 before the "Wish You Were Here" rebrand.

## Restore it

The code for this design is tagged in git as `old-brand-vintage-penguin`. To go back to it:

```
git checkout old-brand-vintage-penguin -- src public astro.config.mjs package.json package-lock.json
```

(or ask Claude to "restore the old-brand-vintage-penguin design"), then build and push. Articles added after the rebrand stay where they are because they live in `src/content/articulos/` and only use the shared template.

## Palette

| Role | Colour | Hex |
|---|---|---|
| Headings, buttons, dark bands | Burgundy | #4A1820 |
| Accents, highlights, the "en ____" blank | Mustard gold | #D4A847 |
| Page background | Aged paper cream | #F4EFE5 |
| Body text | Charcoal | #2A2A2A |

## Fonts

- Headings: EB Garamond (400, 500, italic for quotes), self-hosted
- Body text: Inter (variable), self-hosted

## Screenshots

Full-page screenshots at 1440px (desktop) and 390px (mobile) wide, taken from a local build with drafts shown, so the article pages and the articles list include two unpublished drafts: the approved Duolingo article from `banco-de-articulos/` and the `ejemplo-plantilla` template.

| Page | Desktop | Mobile |
|---|---|---|
| Home | desktop-inicio.jpg | mobile-inicio.jpg |
| Articles list | desktop-articulos.jpg | mobile-articulos.jpg |
| Article (Duolingo, real content) | desktop-articulo-duolingo.jpg | mobile-articulo-duolingo.jpg |
| Article (template sample) | desktop-articulo-plantilla.jpg | mobile-articulo-plantilla.jpg |
| Sobre mí | desktop-sobre-mi.jpg | mobile-sobre-mi.jpg |
| Opiniones | desktop-opiniones.jpg | mobile-opiniones.jpg |
| Aviso legal | desktop-aviso-legal.jpg | mobile-aviso-legal.jpg |
| Privacidad | desktop-privacidad.jpg | mobile-privacidad.jpg |
| Cookies | desktop-cookies.jpg | mobile-cookies.jpg |
| 404 | desktop-404.jpg | mobile-404.jpg |

This folder is outside `src/` and `public/`, so it isn't published on the website.
