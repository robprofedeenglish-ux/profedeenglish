import { getCollection } from 'astro:content';

// Los borradores (draft: true) no se publican. Para verlos en una vista previa:
// SHOW_DRAFTS=1 npm run build
const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === '1';

export async function getArticles() {
  const all = await getCollection('articulos', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export const CATEGORIES: Record<string, string> = {
  bloqueo: 'Hablar sin bloquearte',
  examenes: 'Exámenes',
  'apps-y-clases': 'Apps y clases',
  pronunciacion: 'Pronunciación',
};

export const fmtDate = (d: Date) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
