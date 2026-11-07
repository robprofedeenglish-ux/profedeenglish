# profedeenglish.com

Web de Profe de English (Rob Tyson). Hecha con Astro, alojada en Cloudflare.

## Añadir un artículo

1. Crea un archivo nuevo en `src/content/articulos/`. El nombre del archivo es la URL, en minúsculas, sin tildes ni eñes y con guiones:
   `entiendo-ingles-pero-no-lo-hablo.md` se publica en `/articulos/entiendo-ingles-pero-no-lo-hablo`.
2. Copia la cabecera de `ejemplo-plantilla.md` y rellénala:
   - `title`: el título del artículo
   - `description`: lo que sale en Google debajo del título (unos 150 caracteres)
   - `shortAnswer`: dos o tres frases que responden la búsqueda
   - `published`: fecha de publicación (AAAA-MM-DD); `updated` si lo cambias más tarde
   - `category`: `bloqueo`, `examenes`, `apps-y-clases` o `pronunciacion`
   - `intent`: `info` (artículo de ayuda), `compra` (comparativas, opiniones, precios) o `examen`
   - `youtubeId`: el código del vídeo (lo que va después de `v=` o de `/shorts/`)
   - `videoFirst: true` en páginas de pronunciación, para que el vídeo salga antes de la respuesta
   - `comparison: true` en comparativas y opiniones de otras empresas (añade el aviso obligatorio)
   - `exercise`: la tarea de speaking del final
   - `faq`: preguntas tal y como las busca la gente
   - quita `draft: true` para publicarlo
3. Escribe el cuerpo en Markdown con `##` para cada sección. Los ejemplos en inglés van así:

   ```
   > **I'm not sure how to put this, but...**
   > No sé muy bien cómo decirlo, pero...
   ```

La caja de la comunidad a mitad de artículo, los botones con etiquetas UTM, el índice, el autor y los artículos relacionados se añaden solos.

## Antes del lanzamiento

- Rellenar NIF y domicilio en `src/pages/aviso-legal.astro` y `src/pages/privacidad.astro`
- Poner las fotos reales en `public/fotos/` y pasar `src="/fotos/..."` a los componentes `Photo`
- Añadir los enlaces de TikTok y YouTube en `src/config.ts`
- Cambiar `launched: false` a `true` en `src/config.ts` para que Google pueda indexar

## Comandos

- `npm install` instala lo necesario
- `npm run dev` abre la web en local
- `npm run build` genera la web en `dist/`
- `SHOW_DRAFTS=1 npm run build` incluye los borradores
