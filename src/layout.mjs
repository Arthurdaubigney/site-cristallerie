// Gabarit commun : configuration, <head> SEO, en-tête, pied de page, icônes.
export const SITE = {
  name: 'Maison Éclat',
  tagline: 'Expertise & rachat de cristallerie',
  url: 'https://www.maison-eclat.fr', // À REMPLACER par le vrai domaine
  phone: '01 23 45 67 89', // À REMPLACER
  phoneHref: '+33123456789', // À REMPLACER
  email: 'contact@maison-eclat.fr', // À REMPLACER
  zone: 'Paris, Île-de-France et toute la France',
  tallyId: 'FORM_ID', // À REMPLACER par l'identifiant du formulaire Tally (tally.so/r/XXXXXX)
};

const i = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;

export const icon = {
  arrow: i('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  check: i('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  chevron: i('<path d="M6 9l6 6 6-6"/>'),
  shield: i('<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>'),
  clock: i('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  truck: i('<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>'),
  home: i('<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>'),
  euro: i('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5a4 4 0 100 7M7.5 11h5.5M7.5 13.5H13"/>'),
  camera: i('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),
  phone: i('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>'),
  mail: i('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
  pin: i('<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  gem: i('<path d="M6 4h12l4 5-10 12L2 9z"/><path d="M2 9h20M9 4l-2 5 5 12 5-12-2-5"/>'),
  glass: i('<path d="M7 3h10c.5 6-1 9-5 10-4-1-5.500-4-5-10z"/><path d="M12 13v7M8 21h8"/>'),
  vase: i('<path d="M9 3h6M10 3c0 4-4 5-4 10a6 6 0 0012 0c0-5-4-6-4-10"/>'),
  lamp: i('<path d="M12 2v4M5 8h14l-2 5H7zM9 13c0 4-2 5-2 8M15 13c0 4 2 5 2 8M12 13v8"/>'),
  sculpt: i('<path d="M12 3l3 5 5 1-4 4 1 6-5-3-5 3 1-6-4-4 5-1z"/>'),
  decanter: i('<path d="M10 3h4v4l3 4v9a1 1 0 01-1 1H8a1 1 0 01-1-1v-9l3-4z"/><path d="M7 15h10"/>'),
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6z"/></svg>',
  spark: '<svg class="spark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c.8 6.2 5.800 11.200 12 12-6.200.8-11.200 5.800-12 12-.8-6.200-5.800-11.200-12-12 6.200-.8 11.200-5.800 12-12z"/></svg>',
  logo: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6 54 26 32 58 10 26Z" fill="rgba(226,232,240,.14)" stroke="#E2E8F0" stroke-width="2.5" stroke-linejoin="round"/><path d="M10 26H54M32 6V58M21 26 32 6 43 26M21 26 32 58 43 26" stroke="#94A3B8" stroke-width="1.6" fill="none" stroke-linejoin="round"/></svg>',
};

const NAV = [
  ['expertises', 'Expertises'],
  ['estimation', 'Rachat & estimation'],
  ['a-propos', 'À propos'],
  ['contact', 'Contact & FAQ'],
];

export function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

export function render({ slug, title, description, body, schema = [], crumbs = [], ogImage = 'assets/img/carafe.svg' }) {
  const rel = slug ? '../' : '';
  const canonical = `${SITE.url}/${slug ? slug + '/' : ''}`;
  const nav = NAV.map(
    ([s, label]) => `<a href="${rel}${s}/"${s === slug ? ' aria-current="page"' : ''}>${label}</a>`,
  ).join('');
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url + '/',
      inLanguage: 'fr-FR',
    },
    ...schema,
  ];
  if (crumbs.length) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [['Accueil', ''], ...crumbs].map(([name, path], idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name,
        item: `${SITE.url}/${path ? path + '/' : ''}`,
      })),
    });
  }
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#0B0F17">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="${rel}assets/img/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}/${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap">
<link rel="stylesheet" href="${rel}assets/css/style.css">
<script>document.documentElement.classList.add('js')</script>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip" href="#contenu">Aller au contenu</a>
<header class="site-header">
  <div class="wrap header-in">
    <a class="brand" href="${rel || './'}" aria-label="${SITE.name} — accueil">${icon.logo}<span class="brand-name">${SITE.name}<small>${SITE.tagline}</small></span></a>
    <button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span></button>
    <nav class="nav" id="nav" aria-label="Navigation principale">${nav}<a class="btn btn--sm" href="${rel}estimation/">Estimer ma cristallerie</a></nav>
  </div>
</header>
<main id="contenu">
${body(rel)}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <a class="brand" href="${rel || './'}">${icon.logo}<span class="brand-name">${SITE.name}</span></a>
        <p style="margin-top:18px">Expertise indépendante et rachat de cristallerie ancienne, vases signés, verrerie d'art et services de verres de collection.</p>
      </div>
      <div><h2>Explorer</h2><ul>${NAV.map(([s, l]) => `<li><a href="${rel}${s}/">${l}</a></li>`).join('')}</ul></div>
      <div><h2>Manufactures</h2><ul><li>Baccarat · Saint-Louis</li><li>Lalique · Daum</li><li>Val Saint-Lambert</li><li>Gallé · Schneider</li></ul></div>
      <div><h2>Contact</h2><ul><li><a href="tel:${SITE.phoneHref}">${SITE.phone}</a></li><li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li>${SITE.zone}</li></ul></div>
    </div>
    <div class="foot-bottom"><span>© <span id="y">2026</span> ${SITE.name}. Tous droits réservés.</span><span>Estimation gratuite · Sans engagement · Discrétion assurée</span></div>
  </div>
</footer>
<script src="${rel}assets/js/main.js" defer></script>
</body>
</html>
`;
}
