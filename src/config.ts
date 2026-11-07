// Ajustes generales del sitio. Cambia aquí y se actualiza en todas las páginas.

export const SITE = {
  url: 'https://profedeenglish.com',
  name: 'Profe de English',
  community: 'Real English With Rob',
  author: 'Rob Tyson',
  email: 'hola@profedeenglish.com',
  instagram: 'https://www.instagram.com/profedeenglish_/',
  // Añade aquí los enlaces exactos cuando los tengas a mano:
  tiktok: '',
  youtube: '',
  // Mientras esté en false, Google no indexa el sitio (meta noindex).
  // Cámbialo a true el día del lanzamiento.
  launched: false,
};

export const PRICES = {
  standardMonth: 25,
  standardYear: 249,
  premiumMonth: 49,
  premiumYear: 449,
  trialDays: 7,
};

const SKOOL_ABOUT = 'https://www.skool.com/realenglishwithrob/about';

/**
 * Enlace a Skool con etiquetas UTM, para saber qué página y qué botón trae cada prueba.
 * medium: tipo de página (home, articulo, sobre-mi...)
 * content: el hueco del botón (hero, mid_box, final...)
 * term: el slug del artículo, si lo hay
 */
export function skoolLink(medium: string, content: string, term?: string) {
  const params = new URLSearchParams({
    utm_source: 'web',
    utm_medium: medium,
    utm_campaign: 'seo',
    utm_content: content,
  });
  if (term) params.set('utm_term', term);
  return `${SKOOL_ABOUT}?${params.toString()}`;
}
