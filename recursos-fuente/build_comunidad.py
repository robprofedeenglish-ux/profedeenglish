#!/usr/bin/env python3
"""Genera las fichas de la comunidad (material del curso de 90 días) con la marca Wish You Were Here.

Uso (desde la raíz del repo):
    python3 recursos-fuente/build_comunidad.py                      # todas
    python3 recursos-fuente/build_comunidad.py day-1-freeze-tracker  # solo una

Cada ficha es recursos-fuente/comunidad/<slug>.html con el mismo bloque <!--meta {...} -->
que las guías de /recursos. Diferencias con build.py:
- el PDF sale en public/descargas/comunidad/<slug>.pdf;
- NO se añade a src/data/recursos.json (no aparece en /recursos);
- no lleva el bloque final "Empieza tus 90 días" (quien la usa ya es miembro);
- public/_headers marca /descargas/comunidad/* como noindex.
"""
import html
import pathlib
import sys

from playwright.sync_api import sync_playwright
from pypdf import PdfReader, PdfWriter

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from build import FOOTER, HEADER, ROOT, REPO, page_html, read_doc  # noqa: E402

SRC = ROOT / 'comunidad'
OUT = REPO / 'public' / 'descargas' / 'comunidad'


def main():
    only = sys.argv[1:]
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        for path in sorted(SRC.glob('*.html')):
            slug = path.stem
            if only and slug not in only:
                continue
            meta, body = read_doc(path)
            meta['end'] = False
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
                footer_template=FOOTER,
                margin={'top': '14mm', 'bottom': '16mm', 'left': '0', 'right': '0'},
            )
            tmp.unlink()
            writer = PdfWriter(clone_from=PdfReader(str(pdf_path)))
            writer.add_metadata({
                '/Title': f"{html.unescape(meta['title'])} | Real English With Rob",
                '/Author': 'Rob Tyson (Real English With Rob)',
                '/Subject': html.unescape(meta['description']),
                '/Creator': 'profedeenglish.com',
            })
            writer.compress_identical_objects()
            with open(pdf_path, 'wb') as f:
                writer.write(f)
            pages = len(PdfReader(str(pdf_path)).pages)
            print(f'{slug}: {pages} páginas, {round(pdf_path.stat().st_size / 1024)} KB')
        browser.close()


if __name__ == '__main__':
    main()
