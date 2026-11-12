#!/usr/bin/env python3
"""Genera los PDF de /recursos con la marca Wish You Were Here.

Uso (desde la raíz del repo):
    python3 recursos-fuente/build.py            # todos
    python3 recursos-fuente/build.py false-friends   # solo uno

Cada recurso es un archivo en recursos-fuente/docs/<slug>.html que empieza con un
bloque <!--meta {...} --> en JSON. El PDF sale en public/descargas/<slug>.pdf y la
lista para la página /recursos en src/data/recursos.json.

Necesita: Python con playwright (Chromium) y pypdf, y las fuentes Shrikhand y DM Sans
instaladas en el sistema (ver README.md).
"""
import html
import json
import pathlib
import re
import sys

from playwright.sync_api import sync_playwright
from pypdf import PdfReader, PdfWriter
from pypdf.annotations import Link

ROOT = pathlib.Path(__file__).resolve().parent
REPO = ROOT.parent
OUT = REPO / 'public' / 'descargas'
DATA = REPO / 'src' / 'data' / 'recursos.json'

SKOOL = 'https://www.skool.com/realenglishwithrob/about'

WAVES = (
    '<svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">'
    '<rect width="1440" height="120" fill="#F4EFE5"/>'
    '<path d="M0 40 C 240 70, 480 75, 720 45 S 1200 10, 1440 38 L1440 120 L0 120 Z" fill="#6FB3D2"/>'
    '<path d="M0 78 C 260 55, 520 60, 760 85 S 1220 105, 1440 72 L1440 120 L0 120 Z" fill="#1F6F96"/>'
    '<rect y="112" width="1440" height="8" fill="#1E2A3A"/>'
    '</svg>'
)

# Chromium no pinta el fondo en los márgenes, así que la cabecera y el pie llevan el crema
_FIX = '<style>#header,#footer{padding:0!important;margin:0!important;}html{-webkit-print-color-adjust:exact;}</style>'
HEADER = _FIX + '<div style="width:100%;height:14mm;background:#F4EFE5;"></div>'
FOOTER = _FIX + (
    '<div style="width:100%;height:16mm;background:#F4EFE5;box-sizing:border-box;padding:4mm 17mm 0;'
    'font-family:\'DM Sans 9pt\',\'DM Sans\',sans-serif;font-size:7.5pt;color:#4d5560;'
    'display:flex;justify-content:space-between;">'
    '<span>Real English With Rob &middot; profedeenglish.com</span>'
    '<span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'
)


def footer_link(slug: str) -> str:
    return f'{SKOOL}?utm_source=pdf&utm_medium=recurso&utm_campaign=seo&utm_content={slug}-pie'


def speaking_footer() -> str:
    """Pie llamativo con el enlace a la comunidad en cada página (meta "footer": "speaking").

    Chromium no deja enlaces activos en el pie, así que build() añade después una zona
    clicable sobre el pie de cada página con pypdf.
    """
    return _FIX + (
        '<div style="width:100%;height:16mm;background:#F4EFE5;box-sizing:border-box;padding:2.5mm 17mm 0;'
        'font-family:\'DM Sans 9pt\',\'DM Sans\',sans-serif;color:#1E2A3A;'
        'display:flex;align-items:center;justify-content:space-between;">'
        '<span style="display:flex;align-items:center;gap:2.5mm;font-size:9.5pt;font-weight:700;">'
        '<span style="background:#E04E36;color:#ffffff;border:1px solid #1E2A3A;border-radius:999px;padding:1mm 3.2mm;">'
        'Desbloquea tu speaking</span>'
        '<span>skool.com/realenglishwithrob</span></span>'
        '<span style="font-size:7.5pt;color:#4d5560;">&copy; 2026 Rob Tyson &middot; '
        '<span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'
    )


def end_block(slug: str, meta: dict) -> str:
    link = f'{SKOOL}?utm_source=pdf&utm_medium=recurso&utm_campaign=seo&utm_content={slug}'
    text = meta.get(
        'cta',
        'Esta guía te ayuda a entender el inglés, pero soltarte a hablar llega cuando lo usas con '
        'gente de verdad. En Real English With Rob hablas cada semana con nativos y conmigo, y sin '
        'darte cuenta ya llevas horas hablando en inglés.',
    )
    return f'''
<section class="end">
  {WAVES}
  <div class="end__body">
    <h2>Deja de bloquearte en 90 días</h2>
    <p>{text}</p>
    <a class="btn" href="{link}">Empieza tus 90 días</a>
    <p class="small">Más guías como esta en <a href="https://profedeenglish.com/recursos">profedeenglish.com/recursos</a>
    &middot; Instagram <a href="https://www.instagram.com/profedeenglish_/">@profedeenglish_</a></p>
  </div>
</section>'''


def page_html(slug: str, meta: dict, body: str) -> str:
    css = (ROOT / 'style.css').read_text()
    logo = (ROOT / 'logo.png').as_uri()
    sun = '<div class="sun" aria-hidden="true"></div>' if meta.get('sun', True) else ''
    header = f'''<header class="cover">
  {sun}
  <div class="brand"><img src="{logo}" alt=""><span>Real English With Rob<small>Profe de English</small></span></div>
  <div class="kicker">{meta['kicker']}</div>
  <h1>{meta['title']}</h1>
  <p class="subtitle">{meta['subtitle']}</p>
</header>'''
    if meta.get('cover') == 'full':
        # Portada a página completa: título grande y, abajo, el banner de la comunidad
        chips = ''.join(f'<span>{c}</span>' for c in meta.get('coverChips', []))
        banner = meta.get('coverBanner', '')
        banner_html = f'<img class="fullcover__banner" src="{banner}" alt="Real English With Rob: Deja de bloquearte en 90 días">' if banner else ''
        header = f'''<section class="fullcover">
  <div class="fullcover__stripes" aria-hidden="true"></div>
  <div class="fullcover__sun" aria-hidden="true"></div>
  <div class="brand"><img src="{logo}" alt=""><span>Real English With Rob<small>Profe de English</small></span></div>
  <div class="fullcover__main">
    <div class="kicker">{meta['kicker']}</div>
    <h1>{meta['title']}</h1>
    <p class="subtitle">{meta['subtitle']}</p>
    <div class="fullcover__chips">{chips}</div>
  </div>
  <div class="fullcover__by"><p>Un recurso creado por <strong>Real English With Rob</strong></p>{banner_html}</div>
</section>'''
    return f'''<!doctype html>
<html lang="{meta.get('lang', 'es')}"><head><meta charset="utf-8">
<title>{meta['title']} | Real English With Rob</title>
<style>{css}</style></head>
<body>
{header}
<main>
{body}
</main>
{end_block(slug, meta)}
</body></html>'''


def read_doc(path: pathlib.Path):
    raw = path.read_text()
    m = re.match(r'\s*<!--meta\s*(\{.*?\})\s*-->\s*', raw, re.S)
    if not m:
        raise SystemExit(f'{path.name}: falta el bloque <!--meta ... -->')
    meta = json.loads(m.group(1))
    body = raw[m.end():]
    for bad in ('\u2014', '\u2013', '&mdash;', '&ndash;', '&#8212;', '&#8211;'):
        if bad in body or bad in json.dumps(meta, ensure_ascii=False):
            raise SystemExit(f'{path.name}: contiene una raya (em/en dash). Cámbiala por coma, dos puntos o paréntesis.')
    return meta, body


def main():
    only = sys.argv[1:]
    OUT.mkdir(parents=True, exist_ok=True)
    docs = sorted((ROOT / 'docs').glob('*.html'))
    index = json.loads(DATA.read_text()) if DATA.exists() else []
    by_slug = {r['slug']: r for r in index}

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        for path in docs:
            slug = path.stem
            if only and slug not in only:
                continue
            meta, body = read_doc(path)
            tmp = ROOT / f'.tmp-{slug}.html'
            tmp.write_text(page_html(slug, meta, body))
            page.goto(tmp.as_uri())
            page.wait_for_load_state('networkidle')
            page.evaluate('document.fonts.ready')
            pdf_path = OUT / f'{slug}.pdf'
            page.pdf(
                path=str(pdf_path),
                format='A4',
                print_background=True,
                display_header_footer=True,
                header_template=HEADER,
                footer_template=speaking_footer() if meta.get('footer') == 'speaking' else FOOTER,
                margin={'top': '14mm', 'bottom': '16mm', 'left': '0', 'right': '0'},
            )
            tmp.unlink()

            # Metadatos del PDF
            reader = PdfReader(str(pdf_path))
            writer = PdfWriter(clone_from=reader)
            writer.add_metadata({
                '/Title': f"{meta['title']} | Real English With Rob",
                '/Author': 'Rob Tyson (Real English With Rob)',
                '/Subject': html.unescape(meta['description']),
                '/Creator': 'profedeenglish.com',
            })
            if meta.get('footer') == 'speaking':
                # Zona clicable sobre el pie (16 mm de alto) de cada página
                for i, pg in enumerate(writer.pages):
                    w = float(pg.mediabox.width)
                    writer.add_annotation(page_number=i, annotation=Link(rect=(0, 0, w, 45), url=footer_link(slug), border=[0, 0, 0]))
            writer.compress_identical_objects()
            with open(pdf_path, 'wb') as f:
                writer.write(f)

            pages = len(PdfReader(str(pdf_path)).pages)
            size_kb = round(pdf_path.stat().st_size / 1024)
            by_slug[slug] = {
                'slug': slug,
                'file': f'/descargas/{slug}.pdf',
                'title': html.unescape(meta['title']),
                'description': html.unescape(meta['description']),
                'category': meta['category'],
                'level': meta['level'],
                'lang': meta.get('lang', 'es'),
                'order': meta.get('order', 99),
                'pages': pages,
                'sizeKb': size_kb,
            }
            print(f'{slug}: {pages} páginas, {size_kb} KB')
        browser.close()

    # Quita de la lista los recursos cuyo archivo fuente ya no existe
    slugs = {d.stem for d in docs}
    index = sorted((r for s, r in by_slug.items() if s in slugs), key=lambda r: (r['order'], r['title']))
    DATA.write_text(json.dumps(index, ensure_ascii=False, indent=2) + '\n')


if __name__ == '__main__':
    main()
