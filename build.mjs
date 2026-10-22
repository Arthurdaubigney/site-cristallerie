// Génère le site statique : `node build.mjs`
import { mkdirSync, writeFileSync } from 'node:fs';
import { render, SITE } from './src/layout.mjs';
import { pages } from './src/pages.mjs';

const urls = [];
for (const [slug, p] of Object.entries(pages)) {
  const html = render({ slug, ...p });
  const dir = slug ? `./${slug}` : '.';
  if (slug) mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, html);
  if (!p.noindex) urls.push(`${SITE.url}/${slug ? slug + '/' : ''}`);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  './sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
writeFileSync('./robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

// Page 404 (noindex)
const notFound = render({
  slug: '',
  title: 'Page introuvable | ' + SITE.name,
  description: 'Cette page est introuvable.',
  noindex: true,
  body: () => `<section class="page-hero"><div class="wrap"><h1>Page introuvable</h1><p class="lead">Retournez à <a href="/">l'accueil</a> ou demandez une <a href="/estimation/">estimation gratuite</a>.</p></div></section>`,
});
writeFileSync('./404.html', notFound);
console.log('OK :', urls.length, 'pages');
