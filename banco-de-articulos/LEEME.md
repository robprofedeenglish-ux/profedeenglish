# Banco de artículos (sin publicar)

Artículos terminados y revisados por Rob que esperan al lanzamiento del sitio. Esta carpeta está fuera de `src/content` y de `public`, así que **no se compila ni se publica**.

Para publicar uno: copiar el archivo a `src/content/articulos/`, quitar `draft: true`, ajustar `published` (y `updated` si hace falta), revisar los datos con fecha (precios, planes), `npm run build` y push. El nombre del archivo es la URL.

| Archivo | Estado | Notas |
|---|---|---|
| duolingo-sirve-para-aprender-ingles.md | Aprobado por Rob (7 nov 2026), compila con la plantilla | Revisar antes de publicar: planes y precios de Duolingo (Max se retira en noviembre de 2026), y falta `videoTitle` opcional |
