# Recursos descargables (/recursos)

Fuente de los PDF gratuitos de la página `/recursos`. Cada guía es un archivo en `docs/<slug>.html` con un bloque `<!--meta {...} -->` al principio (título, subtítulo, nivel, categoría, descripción para la web y orden). El diseño está en `style.css` y sigue la marca Wish You Were Here (crema, navy, coral, sea, sun; Shrikhand y DM Sans).

## Generar los PDF

Desde la raíz del repo, con `npm install` hecho:

```bash
python3 recursos-fuente/build.py              # todos
python3 recursos-fuente/build.py false-friends # solo uno
```

Hace falta Python con `playwright` (Chromium) y `pypdf`. El pie de página usa la fuente instalada en el sistema, así que antes conviene convertir e instalar DM Sans (en una sesión nueva de Claude basta con pedírselo).

El script:

- crea `public/descargas/<slug>.pdf` (indexables a propósito: si Google los posiciona, también traen visitas, y cada PDF acaba con el enlace a Skool);
- actualiza `src/data/recursos.json`, que es lo que lista la página `src/pages/recursos.astro`;
- se niega a generar un PDF si el texto lleva rayas (em o en dash).

## Para añadir una guía nueva

1. Copia uno de los archivos de `docs/` con un slug nuevo (minúsculas, sin tildes, con guiones).
2. Cambia el bloque meta. Categorías: `gramatica`, `vocabulario`, `pronunciacion`, `series-y-peliculas`, `ia`, `plan`.
3. Escribe el contenido con las piezas de `style.css`: `.card`, `.grid2`, `.tip`, `.prompt`, tablas, `.step`, `.exercise` con `.blank`, `.answers`, `.wrong` / `.right`.
4. Genera, revisa el PDF, `npm run build`, commit y push.

El bloque final ("Deja de bloquearte en 90 días" con el enlace a Skool con UTM `utm_source=pdf&utm_content=<slug>`) se añade solo. Su texto se puede cambiar por guía con la clave `cta` del meta.

## Origen

Rehechas en noviembre de 2026 a partir de la carpeta de Drive "Resources for the gram", con la marca nueva, el texto revisado y los CTA antiguos (lista de espera, "8 clases en directo") sustituidos. "The B2 Textbook" no está aquí a propósito: es material de pago de la comunidad.
