// Inserta la caja "Dentro de la comunidad" antes del tercer H2 de cada artículo,
// para que el artículo pida la prueba a mitad de lectura sin tener que escribirlo a mano.
// Si el artículo tiene menos de tres H2, la caja va antes del último H2 (o no va).

const el = (tagName, properties, children = []) => ({
  type: 'element',
  tagName,
  properties,
  children,
});
const text = (value) => ({ type: 'text', value });

export default function rehypeMidCta() {
  return (tree, file) => {
    const path = String(file.path || file.history?.[0] || '');
    const match = path.match(/articulos\/(.+?)\.mdx?$/);
    if (!match) return;
    const slug = match[1];

    const h2Indexes = tree.children
      .map((node, i) => (node.type === 'element' && node.tagName === 'h2' ? i : -1))
      .filter((i) => i >= 0);
    if (h2Indexes.length < 2) return;
    const at = h2Indexes.length >= 3 ? h2Indexes[2] : h2Indexes[h2Indexes.length - 1];

    const params = new URLSearchParams({
      utm_source: 'web',
      utm_medium: 'articulo',
      utm_campaign: 'seo',
      utm_content: 'mid_box',
      utm_term: slug,
    });
    const href = `https://www.skool.com/realenglishwithrob/about?${params}`;

    const box = el('aside', { className: ['cta-mid'], ariaLabel: 'La comunidad' }, [
      el('p', { className: ['cta-mid__title'] }, [text('Si quieres practicar esto con gente, no solo leerlo')]),
      el('p', {}, [
        text(
          'En mi comunidad, Real English With Rob, hablas cada semana en clases en directo, con un compañero de práctica y en intercambios con nativos, y yo te digo qué te bloquea y cómo trabajarlo.'
        ),
      ]),
      el('p', { className: ['cta-mid__action'] }, [
        el('a', { href, className: ['btn', 'btn--primary'], rel: ['noopener'] }, [text('Prueba 7 días gratis')]),
      ]),
      el('p', { className: ['microcopy'] }, [
        text('Después, desde 25 $ al mes más impuestos. Puedes cancelar desde Skool antes de que acabe la prueba.'),
      ]),
    ]);

    tree.children.splice(at, 0, box);
  };
}
