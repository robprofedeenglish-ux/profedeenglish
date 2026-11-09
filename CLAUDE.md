# profedeenglish.com: rules for any Claude session working in this repo

Rob Tyson's Spanish-language site (Astro 5, Cloudflare Pages, deploys on push to `main`). For writing articles, use the `profedeenglish-articles` skill.

## Privacy and cookies (the site has no cookie banner, so this must stay true)

The site must not set cookies or use browser storage (localStorage, sessionStorage, IndexedDB) and must not contact third-party domains when a page loads. Before adding anything that runs in the browser, check it against this:

- No Google Analytics, Meta/TikTok pixels, Hotjar, chat widgets, embedded forms from email tools (Brevo, Kit, MailerLite scripts), Google Fonts, or third-party CDNs. Fonts and images are self-hosted.
- YouTube only through `src/components/LiteYouTube.astro` (thumbnail inlined at build time, youtube-nocookie loads only on click, with the notice underneath). Never a plain YouTube or Instagram iframe/embed.
- Analytics: Cloudflare Web Analytics only (cookieless).
- Email capture (planned for the level test and challenge): post the form to our own endpoint (e.g. a Cloudflare Pages Function) that calls the email provider's API server-side. No provider scripts in the page. Update `/privacidad` before it goes live.
- If something genuinely needs cookies or storage, stop and tell Rob: it would need a consent banner with Accept and Reject equal on the first layer (AEPD guide), and the cookie policy updated.
- After changing anything client-side, run the audit: `npm run build && npx astro preview` then load each page in Playwright and check `context.cookies()`, `localStorage`/`sessionStorage` keys and requests to other hosts. All three must be empty.

## Design ("Wish You Were Here", see design-archive/wish-you-were-here-2026-11/README.md)

- Colours only from the tokens in `src/styles/global.css` (cream, navy, coral, sea, sea-light, sun). Coral text only at headline sizes; body text navy; buttons coral with white bold text at 19px or larger.
- Shrikhand only for H1/H2; DM Sans 400/700 for everything else. Fonts stay self-hosted (fontsource), never fonts.googleapis.com.
- Flat only: no gradients (the hero stripes use hard stops), no heavy shadows, no glassmorphism, no emoji icons, no stock or AI images.
- Motifs sparingly: waves (hero bottom, footer), sun (hero photo), stripes (hero edge only). Max two or three per screen.
- Styles for a class passed into a child component (e.g. `<Photo class="x">`) must use `:global(.x)` in the parent, because Astro scopes styles per component.
- The previous design is on the branch `old-brand-vintage-penguin`.

## Community offer (from 9 Nov 2026; this OVERRIDES the older facts in the profedeenglish-articles skill)

- **No free trial.** Never write "prueba gratis", "7 días gratis" or anything implying one. Buttons say "Empieza tus 90 días".
- Promises: "Deja de bloquearte en 90 días"; Premium: "Que el mejor inglés de la sala sea el tuyo".
- **Standard: 23 $/mes o 197 $/año, más impuestos.** Reto de 90 días para hablar sin bloquearte; intercambios con nativos; una clase en directo a la semana con Rob; test de nivel y más de 100 horas de material; respuestas en el foro en menos de 24 h.
- **Premium: 1.457 $/año, más impuestos, solo anual.** Coaching 1 a 1 con Rob con un plan hecho solo para ti, empieces donde empieces y sea cual sea tu meta (trabajo, entrevistas, viajes o un examen), más todo lo de Standard. Plazas limitadas; the CTA is WhatsApp ("Escríbeme y lo hablamos"). Don't state a session frequency.
- The 90-task guarantee, the separate exam-prep bullet and the old trial week are gone; don't mention them. Exam prep now sits under Premium's 1:1 coaching.
- The 90-day journey ("Tus próximos 90 días", homepage section `#tus-90-dias`): Día 1 Guardamos tu antes; Día 30 Entiendes a la primera; Día 60 Te sueltas a hablar; Día 90 Hablas sin pensarlo. All included in Standard; with Premium it's done 1 to 1.
- When describing the programme, don't make it sound like work: say what happens to the reader ("la confianza llega sola", "sin darte cuenta ya llevas horas hablando"), not chores ("tareas", "retos", "entrenar", "tienes que").

## Other standing rules

- Never mention or imply that Rob is a Cambridge examiner.
- Don't set `launched: true` in `src/config.ts` or add Rob's address to the legal pages unless Rob says so.
- Spanish copy: tú, neutral Spanish, no em or en dashes, no choppy sentence strings, no motivational sign-offs.
- Prices are shown as USD "más impuestos".
