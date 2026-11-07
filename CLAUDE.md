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

## Other standing rules

- Never mention or imply that Rob is a Cambridge examiner.
- Don't set `launched: true` in `src/config.ts` or add Rob's address to the legal pages unless Rob says so.
- Spanish copy: tú, neutral Spanish, no em or en dashes, no choppy sentence strings, no motivational sign-offs.
- Prices are shown as USD "más impuestos".
