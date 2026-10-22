# Maison Éclat — site de rachat et d'estimation de cristallerie

Site statique multi-pages (HTML/CSS/JS, sans dépendance). Les pages sont générées depuis `src/` :

```
node build.mjs     # régénère index.html, expertises/, estimation/, a-propos/, contact/, sitemap.xml, robots.txt, 404.html
```

## À personnaliser avant mise en ligne (`src/layout.mjs`)
- `url` : domaine réel (canonical, sitemap, Open Graph)
- `phone`, `phoneHref`, `email`, `zone`
- `tallyId` : identifiant du formulaire Tally (tally.so/r/XXXXXX), affiché sur `/estimation/`
- Témoignages (accueil) et texte « Notre histoire » (`src/pages.mjs`) : contenu d'exemple à remplacer
- Repères historiques et marques des manufactures : à faire valider par l'expert
