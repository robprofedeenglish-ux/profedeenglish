import { SITE } from '../config';

const sameAs = [SITE.instagram, SITE.tiktok, SITE.youtube].filter(Boolean);

export const personId = `${SITE.url}/sobre-mi#rob`;
export const orgId = `${SITE.url}/#organizacion`;

export const person = {
  '@type': 'Person',
  '@id': personId,
  name: SITE.author,
  alternateName: SITE.name,
  url: `${SITE.url}/sobre-mi`,
  jobTitle: 'Profesor de inglés',
  knowsLanguage: ['en', 'es'],
  hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'TEFL' },
  nationality: { '@type': 'Country', name: 'Reino Unido' },
  sameAs,
};

export const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: SITE.name,
  alternateName: SITE.community,
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  founder: { '@id': personId },
  sameAs,
};

export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'es',
  publisher: { '@id': orgId },
};

export function breadcrumbs(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: new URL(item.href, SITE.url).toString(),
    })),
  };
}
