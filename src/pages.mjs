import { SITE, icon, photo } from './layout.mjs';

const R = (i = 0) => `data-reveal style="--i:${i}"`;
const cta = (rel, label = 'Estimer ma cristallerie') =>
  `<a class="btn" href="${rel}estimation/">${label}${icon.arrow}</a>`;

// Fiches des grandes manufactures (repères historiques à valider par l'expert avant mise en ligne)
const houses = [
  ['Baccarat', 'Fondée en 1764', "Le cristal des cours et des palais : services de verres, carafes, lustres et pièces monumentales. Marque gravée à l'acide.", 'wide accent'],
  ['Saint-Louis', 'Depuis 1586', 'Plus ancienne cristallerie de France : modèles Tommy, Thistle, Bubbles, boules presse-papier.', ''],
  ['Lalique', 'Depuis 1888', "René Lalique et ses héritiers : vases, statuettes et flacons en verre moulé-pressé, opalescent ou dépoli.", ''],
  ['Daum', 'Nancy, 1878', "Pâte de verre, verre gravé et cameo : vases Art nouveau et Art déco signés Daum Nancy.", ''],
  ['Val Saint-Lambert', 'Belgique, 1826', "Cristal taillé belge réputé : carafes, services et vases Art déco aux tailles profondes.", ''],
  ['Gallé', 'Nancy, 1884', "Émile Gallé, maître de l'Art nouveau : vases multicouches dégagés à l'acide, signatures en réserve.", 'wide'],
  ['Schneider', 'Épinay-sur-Seine, 1913', "Verreries Art déco aux couleurs vives : vases « Ovington », « Le Verre Français », coupes et lampes.", ''],
];

const faqs = [
  ["L'estimation est-elle vraiment gratuite et sans engagement ?", "Oui. L'analyse de vos photographies et la proposition de rachat sont entièrement gratuites. Vous restez libre d'accepter, de refuser ou de demander un temps de réflexion, sans aucun frais."],
  ['Quels objets rachetez-vous ?', "Cristallerie ancienne et de collection : carafes, services de verres, vases signés, lustres, sculptures, presse-papiers, pâtes de verre et verrerie d'art des grandes manufactures (Baccarat, Saint-Louis, Lalique, Daum, Gallé, Schneider, Val Saint-Lambert) ainsi que de belles pièces non signées."],
  ['Comment reconnaître une signature ou une estampille ?', "Retournez la pièce sous une lumière rasante : une marque à l'acide apparaît comme un léger dépoli, une gravure à la pointe comme un fin trait irrégulier. Photographiez le dessous du pied, la base et le col, en gros plan et net, puis envoyez-nous les clichés."],
  ['Quelles photos dois-je envoyer ?', "Une vue d'ensemble, une vue de dessus, le dessous (signature), un gros plan sur la taille ou le décor et sur tout défaut visible (éclat, fêle). Une photo avec une règle ou une pièce de monnaie nous aide à juger les dimensions."],
  ['Comment est fixé le prix de rachat ?', "Il dépend de la manufacture, de la rareté du modèle, de la période, de l'état de conservation, de la qualité de la taille ou du décor et de la demande du marché des collectionneurs. Nous vous expliquons chaque critère de notre proposition."],
  ['Un verre ébréché ou un vase fêlé a-t-il encore de la valeur ?', "Souvent oui pour une pièce rare ou signée, même si l'état pèse dans le prix. N'essayez pas de la nettoyer ni de la réparer vous-même : envoyez-nous des photos des défauts."],
  ['Pouvez-vous vous déplacer à mon domicile ?', "Oui, pour les collections importantes ou volumineuses (services complets, lustres, héritages). Le déplacement est organisé avec vous, selon votre localisation. Précisez-le dans le formulaire."],
  ['Comment le transport est-il assuré pour une pièce fragile ?', "Pour une pièce acceptée à distance, nous organisons un emballage et un transport assurés. Vous ne payez rien et la pièce est couverte pendant tout le trajet."],
  ['Quand suis-je payé ?', "Le règlement intervient immédiatement à la remise de la pièce, par virement ou par un autre moyen convenu ensemble."],
  ['Mes informations restent-elles confidentielles ?', "Oui. Votre identité, votre adresse et le contenu de votre collection ne sont jamais communiqués à des tiers."],
];

export const pages = {
  // ----------------------------------------------------------------- ACCUEIL
  '': {
    title: 'Rachat & estimation de cristallerie ancienne | Baccarat, Lalique, Daum',
    description: "Estimation gratuite et rachat cash de cristallerie ancienne : vases en cristal, carafes, verres Baccarat, Saint-Louis, Lalique, Daum, Gallé. On vous répond rapidement, paiement à la remise.",
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: SITE.name,
        url: SITE.url + '/',
        description: "Expertise, estimation et rachat de cristallerie ancienne, vases en cristal et verrerie d'art.",
        areaServed: 'FR',
        serviceType: ['Estimation de cristallerie', 'Rachat de cristal ancien', 'Expertise de verrerie d\'art'],
      },
    ],
    crumbs: [],
    body: (rel) => `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <p class="badge" ${R()}>${icon.shield}Expertise indépendante · gratuite et sans engagement</p>
      <h1 ${R(1)}>Estimation et rachat de <span class="metal-text">cristallerie ancienne</span>, vases et verres signés</h1>
      <p class="lead" ${R(2)}>Baccarat, Saint-Louis, Lalique, Daum, Gallé… Envoyez quelques photos : nous estimons vos pièces, nous vous répondons rapidement et nous vous proposons un rachat au comptant, en toute discrétion.</p>
      <div class="cta-row" ${R(3)}>${cta(rel)}<a class="btn btn--ghost" href="${rel}expertises/">Découvrir les pièces recherchées</a></div>
      <div class="hero-stats" ${R(4)}>
        <div><strong>Rapide</strong>une réponse sans attendre</div>
        <div><strong>0 €</strong>de frais, sans engagement</div>
        <div><strong>7</strong>grandes manufactures expertisées</div>
      </div>
    </div>
    <div class="crystal" aria-hidden="false" ${R(2)}>
      ${icon.spark}${icon.spark}${icon.spark}${icon.spark}
      <img src="${rel}assets/img/carafe.svg" width="440" height="550" alt="Carafe en cristal taillé reflétant la lumière, exemple de pièce que nous rachetons" fetchpriority="high">
    </div>
  </div>
</section>

<section class="section section--alt" aria-labelledby="garanties">
  <div class="wrap">
    <div class="section-head" ${R()}>
      <p class="kicker">Nos engagements</p>
      <h2 id="garanties">Une expertise de confiance, du premier cliché au règlement</h2>
    </div>
    <div class="trust">
      <article class="trust-item" ${R(0)}>${icon.shield}<h3>Confidentialité</h3><p>Votre identité et le contenu de votre collection restent strictement privés.</p></article>
      <article class="trust-item" ${R(1)}>${icon.clock}<h3>On répond rapidement</h3><p>Une estimation argumentée par un expert, gratuite et sans attente inutile.</p></article>
      <article class="trust-item" ${R(2)}>${icon.truck}<h3>Transport sécurisé</h3><p>Emballage professionnel et acheminement assuré, à notre charge.</p></article>
      <article class="trust-item" ${R(3)}>${icon.home}<h3>Déplacement à domicile</h3><p>Pour les collections importantes, nous venons chez vous.</p></article>
      <article class="trust-item" ${R(4)}>${icon.euro}<h3>Paiement immédiat</h3><p>Règlement comptant dès la remise de vos pièces.</p></article>
    </div>
  </div>
</section>

<section class="section section--light" aria-labelledby="manufactures">
  <div class="wrap">
    <div class="section-head" ${R()}>
      <p class="kicker">Domaines d'expertise</p>
      <h2 id="manufactures">Les grandes manufactures de cristal que nous rachetons</h2>
      <p class="lead">Des cristalleries royales aux ateliers de l'Art nouveau et de l'Art déco : chaque signature a son histoire, ses marques et son marché.</p>
    </div>
    <div class="houses">
      ${houses
        .map(([n, y, d, f], k) => `<a class="house ${f.includes('wide') ? 'house--wide' : ''} ${f.includes('accent') ? 'house--accent' : ''}" href="${rel}expertises/#${n.toLowerCase().replace(/[^a-z]+/g, '-')}" ${R(k % 4)}><span class="year">${y}</span><h3>${n}</h3><p>${d}</p></a>`)
        .join('')}
      <a class="house house--accent" href="${rel}expertises/" ${R(3)}><span class="year">Et aussi</span><h3>Autres signatures</h3><p>Cristal de Sèvres, Lorraine, Bohême, Murano d'époque… Envoyez-nous vos photos.</p></a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="etapes">
  <div class="wrap">
    <div class="section-head" ${R()}>
      <p class="kicker">Simple et rapide</p>
      <h2 id="etapes">Comment ça marche ?</h2>
    </div>
    <ol class="steps">
      <li class="step" ${R(0)}><h3>Envoyez photos &amp; signatures</h3><p>Remplissez le formulaire en ligne et joignez quelques clichés : vue d'ensemble, détails de taille, dessous du pied et signature.</p></li>
      <li class="step" ${R(1)}><h3>Recevez une estimation gratuite</h3><p>Un expert identifie la manufacture, la période et l'état, puis vous répond rapidement avec une valeur détaillée.</p></li>
      <li class="step" ${R(2)}><h3>Acceptez le rachat cash</h3><p>Si notre proposition vous convient, nous organisons le retrait ou le transport assuré et vous réglons immédiatement.</p></li>
    </ol>
    <div class="cta-row" style="margin-top:48px" ${R()}>${cta(rel, 'Demander une expertise gratuite')}</div>
  </div>
</section>

<section class="section section--light" aria-labelledby="pieces">
  <div class="wrap">
    <div class="section-head" ${R()}>
      <p class="kicker">Galerie</p>
      <h2 id="pieces">Pièces d'exception que nous recherchons</h2>
      <p class="lead">Carafes, vases, verres à pied, presse-papiers… voici le type de pièces qui retiennent toute notre attention.</p>
    </div>
    <div class="pieces">
      <figure class="piece" ${R(0)}>${photo(rel, 'decanter-baccarat')}<figcaption><strong>Carafes &amp; bouchons</strong><span>Tailles diamant, bouchons facettés</span></figcaption></figure>
      <figure class="piece" ${R(1)}>${photo(rel, 'vase-lalique-ceylan')}<figcaption><strong>Vases signés</strong><span>Lalique, Gallé, Daum, Schneider</span></figcaption></figure>
      <figure class="piece" ${R(2)}>${photo(rel, 'verre-saint-louis')}<figcaption><strong>Services de verres</strong><span>Séries complètes ou dépareillées</span></figcaption></figure>
      <figure class="piece" ${R(3)}>${photo(rel, 'presse-papier-baccarat', { w: 1000, h: 1000 })}<figcaption><strong>Presse-papiers</strong><span>Sulfures, fleurs et millefiori</span></figcaption></figure>
    </div>
    <p class="note-sample" style="color:var(--paper-dim)">Exemples de pièces de musées et de collections. Envoyez-nous vos photos pour estimer les vôtres.</p>

    <h2 style="margin-top:clamp(64px,8vw,110px)" ${R()}>Ils nous ont confié leurs pièces</h2>
    <!-- TÉMOIGNAGES D'EXEMPLE : à remplacer par de vrais avis clients avant la mise en ligne -->
    <div class="quotes">
      <blockquote class="quote" ${R(0)}><div class="stars" aria-label="5 étoiles sur 5">${icon.star.repeat(5)}</div><p>« Une réponse claire et rapide, avec le détail de chaque pièce du service. Très rassurant. »</p><footer><strong>Marie-Hélène</strong> · succession, service de verres</footer></blockquote>
      <blockquote class="quote" ${R(1)}><div class="stars" aria-label="5 étoiles sur 5">${icon.star.repeat(5)}</div><p>« Ils se sont déplacés pour mes vases. Emballage soigné et règlement à la remise. »</p><footer><strong>Jean-Paul</strong> · collectionneur</footer></blockquote>
      <blockquote class="quote" ${R(2)}><div class="stars" aria-label="5 étoiles sur 5">${icon.star.repeat(5)}</div><p>« Aucune pression, de vrais conseils pour identifier mes signatures. Je recommande. »</p><footer><strong>Sophie</strong> · particulier</footer></blockquote>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="cta-final">
  <div class="wrap">
    <div class="cta-band" ${R()}>
      <h2 id="cta-final">Un cristal de famille ? Découvrez sa vraie valeur</h2>
      <p class="lead">Quelques photos suffisent. Estimation gratuite, réponse rapide, aucune obligation de vendre.</p>
      <div class="cta-row">${cta(rel)}<a class="btn btn--ghost" href="${rel}contact/">Poser une question</a></div>
    </div>
  </div>
</section>`,
  },

  // --------------------------------------------------------------- EXPERTISES
  expertises: {
    title: 'Cristal ancien : manufactures, signatures et pièces recherchées',
    description: "Guide d'expertise du cristal et de la verrerie d'art : Baccarat, Saint-Louis, Lalique, Daum, Gallé, Schneider, Val Saint-Lambert. Reconnaître une estampille ou une signature gravée.",
    crumbs: [['Expertises', 'expertises']],
    body: (rel) => `
<section class="page-hero"><div class="wrap">
  <p class="crumbs"><a href="${rel}">Accueil</a> / Expertises</p>
  <h1 ${R()}>Cristal ancien : grandes manufactures, signatures et pièces recherchées</h1>
  <p class="lead" ${R(1)}>Identifier la maison, la période et la technique d'une pièce est la première étape de toute estimation. Voici nos repères.</p>
</div></section>

<section class="section section--alt" aria-labelledby="pieces-recherchees"><div class="wrap">
  <div class="section-head" ${R()}><h2 id="pieces-recherchees">Les pièces que nous recherchons</h2></div>
  <div class="cat-grid">
    <article class="cat" ${R(0)}>${icon.glass}<h3>Verres taillés &amp; services</h3><p>Verres à eau, à vin, flûtes, coupes à champagne : services complets, séries dépareillées, modèles anciens ou discontinués.</p></article>
    <article class="cat" ${R(1)}>${icon.decanter}<h3>Carafes &amp; broc</h3><p>Carafes à whisky, à vin, brocs et flacons à bouchon cristal, parfois montés en argent ou vermeil.</p></article>
    <article class="cat" ${R(2)}>${icon.vase}<h3>Vases soufflés &amp; gravés</h3><p>Vases Art nouveau et Art déco, pâtes de verre, verres multicouches dégagés à l'acide, vases moulés-pressés.</p></article>
    <article class="cat" ${R(3)}>${icon.lamp}<h3>Lustres &amp; luminaires</h3><p>Lustres à pampilles, appliques, lampes et suspensions en cristal ou en verre d'art.</p></article>
    <article class="cat" ${R(4)}>${icon.sculpt}<h3>Sculptures &amp; statuettes</h3><p>Animaux, nus, bustes et pièces décoratives en cristal ou verre moulé signés.</p></article>
    <article class="cat" ${R(5)}>${icon.gem}<h3>Presse-papiers &amp; objets de vitrine</h3><p>Sulfures, boules à fleurs, millefiori, cendriers, boîtes et coupes d'exception.</p></article>
  </div>
</div></section>

<section class="section" aria-labelledby="exemples" style="padding-block:clamp(60px,8vw,110px)"><div class="wrap">
  <div class="section-head" ${R()}><h2 id="exemples">Quelques exemples de signatures et de styles</h2>
  <p class="lead">Du verre gravé Art nouveau aux lustres monumentaux : le décor, la couleur et la technique orientent déjà l'identification.</p></div>
  <div class="pieces">
    <figure class="piece" ${R(0)}>${photo(rel, 'vase-galle-angraecum')}<figcaption><strong>Gallé</strong><span>Verre multicouche dégagé à l'acide</span></figcaption></figure>
    <figure class="piece" ${R(1)}>${photo(rel, 'vase-daum-automne', { w: 1000, h: 1750 })}<figcaption><strong>Daum Nancy</strong><span>Verre gravé et émaillé</span></figcaption></figure>
    <figure class="piece" ${R(2)}>${photo(rel, 'vase-schneider-garance', { w: 1000, h: 1950 })}<figcaption><strong>Schneider</strong><span>Verre poudré Art déco</span></figcaption></figure>
    <figure class="piece" ${R(3)}>${photo(rel, 'vase-lalique-ceylan')}<figcaption><strong>Lalique</strong><span>Verre moulé-pressé</span></figcaption></figure>
  </div>
  <figure class="band" ${R()}>${photo(rel, 'lustre-baccarat', { w: 1000, h: 753 })}<figcaption>Lustre Baccarat à pampilles : les luminaires en cristal font aussi partie des pièces que nous estimons.</figcaption></figure>
</div></section>

<section class="section section--light" aria-labelledby="manufactures-detail"><div class="wrap">
  <div class="section-head" ${R()}><h2 id="manufactures-detail">Les grandes manufactures en détail</h2>
  <p class="lead">Repères pour reconnaître chaque maison. Chaque pièce reste à examiner : la marque n'est qu'un indice parmi d'autres.</p></div>
  <div class="table-scroll" ${R()}>
  <table class="sig-table">
    <caption>Repères d'identification (à confirmer par examen de la pièce)</caption>
    <thead><tr><th scope="col">Manufacture</th><th scope="col">Repères historiques</th><th scope="col">Marques &amp; signatures courantes</th></tr></thead>
    <tbody>
      <tr id="baccarat"><th scope="row">Baccarat</th><td>Fondée en 1764 en Lorraine ; fournisseur des cours et des grandes tables. Services, carafes, lustres.</td><td>Marque gravée à l'acide mentionnant « Baccarat », parfois « Baccarat France » ; les modèles anciens peuvent être sans marque.</td></tr>
      <tr id="saint-louis"><th scope="row">Saint-Louis</th><td>Cristallerie royale depuis 1767, héritière de verreries dès 1586. Services Tommy, Thistle, presse-papiers.</td><td>Marque à l'acide « St Louis » ou « Saint-Louis France » ; les anciennes pièces portent parfois une estampille différente.</td></tr>
      <tr id="lalique"><th scope="row">Lalique</th><td>René Lalique crée sa maison à la fin du XIXᵉ siècle ; verre moulé-pressé, opalescent, dépoli.</td><td>Signature « R. Lalique » (avant 1945), puis « Lalique France » ; gravée en creux ou moulée sous la base.</td></tr>
      <tr id="daum"><th scope="row">Daum</th><td>Nancy, à partir de 1878 : pâte de verre, verre gravé, cameo Art nouveau puis Art déco.</td><td>Signature gravée « Daum Nancy » accompagnée de la croix de Lorraine, souvent à la pointe ou à l'acide.</td></tr>
      <tr id="val-saint-lambert"><th scope="row">Val Saint-Lambert</th><td>Cristallerie belge fondée en 1826 près de Liège ; tailles profondes et services de luxe.</td><td>Marque à l'acide « Val Saint Lambert » avec la mention de la Belgique ; certaines pièces portent un cachet circulaire.</td></tr>
      <tr id="galle"><th scope="row">Gallé</th><td>Émile Gallé, à Nancy dès 1884 : figure majeure de l'Art nouveau, verres multicouches dégagés à l'acide.</td><td>Signature « Gallé » en réserve, gravée ou intégrée au décor ; une étoile accompagne certaines signatures de la période 1904-1936.</td></tr>
      <tr id="schneider"><th scope="row">Schneider</th><td>Charles Schneider, Épinay-sur-Seine, 1913 : verres colorés Art déco aux formes audacieuses.</td><td>Signature « Schneider » ou « Schneider France » gravée à la pointe sous le pied.</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="section" aria-labelledby="signatures"><div class="wrap">
  <div class="section-head" ${R()}><h2 id="signatures">Conseils pour identifier estampilles et signatures</h2>
  <p class="lead">Quelques gestes simples avant de nous écrire. Surtout, ne nettoyez pas et ne frottez pas la marque.</p></div>
  <div class="tips">
    <article class="tip" ${R(0)}><h3>Observez sous une lumière rasante</h3><p>Une marque à l'acide apparaît comme un léger dépoli mat sur le cristal brillant. Inclinez la pièce face à une fenêtre ou une lampe.</p></article>
    <article class="tip" ${R(1)}><h3>Distinguez acide, sable et pointe</h3><p>La signature à l'acide est fine et régulière ; le sablage donne un grain plus rugueux ; la gravure à la pointe forme un trait irrégulier, parfois en cursive.</p></article>
    <article class="tip" ${R(2)}><h3>Regardez le dessous, le pied et le col</h3><p>La plupart des marques se trouvent sous la base. Sur les verres à pied, elles sont parfois sur le pied ou sur la coupe.</p></article>
    <article class="tip" ${R(3)}><h3>Écoutez et testez le cristal</h3><p>Un cristal véritable rend un son long et clair quand on tapote le bord d'un verre avec l'ongle, contrairement au verre ordinaire. Faites-le avec précaution.</p></article>
    <article class="tip" ${R(4)}><h3>Notez les défauts sans les réparer</h3><p>Éclats, fêles, rayures : photographiez-les. Une réparation maladroite diminue davantage la valeur que le défaut lui-même.</p></article>
    <article class="tip" ${R(5)}><h3>Pas de signature ? Envoyez-nous la pièce en photo</h3><p>Beaucoup de belles pièces anciennes ne sont pas signées. Nous les identifions par leur taille, leur poids, leur forme et leur décor.</p></article>
  </div>
  <div class="cta-row" style="margin-top:48px" ${R()}>${cta(rel, 'Demander une expertise gratuite')}</div>
</div></section>`,
  },

  // --------------------------------------------------------------- ESTIMATION
  estimation: {
    title: 'Estimation gratuite de cristallerie ancienne et rachat cash',
    description: "Obtenez une estimation gratuite de vos cristaux, vases et verres anciens. Envoyez vos photos via le formulaire sécurisé : rachat au comptant, sans engagement.",
    crumbs: [['Rachat & estimation', 'estimation']],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Estimation gratuite de cristallerie ancienne',
        provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url + '/' },
        areaServed: 'FR',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Estimation gratuite et sans engagement' },
      },
    ],
    body: (rel) => {
      const placeholder = SITE.tallyId === 'FORM_ID';
      const form = placeholder
        ? `<div class="form-placeholder"><div><strong>Votre formulaire Tally s'affichera ici</strong><p>Dans <code>src/layout.mjs</code>, remplacez <code>tallyId</code> par l'identifiant de votre formulaire, puis lancez <code>node build.mjs</code>.</p><p>En attendant : <a href="mailto:${SITE.email}?subject=Demande%20d%27estimation">${SITE.email}</a></p></div></div>`
        : `<iframe data-tally-src="https://tally.so/embed/${SITE.tallyId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="560" title="Formulaire d'estimation de cristallerie"></iframe>`;
      return `
<section class="page-hero"><div class="wrap">
  <p class="crumbs"><a href="${rel}">Accueil</a> / Rachat &amp; estimation</p>
  <h1 ${R()}>Estimation gratuite de votre cristallerie et proposition de rachat</h1>
  <p class="lead" ${R(1)}>Décrivez vos pièces, joignez vos photos : un expert vous répond rapidement. Aucun engagement, aucun frais.</p>
</div></section>

<section class="section" style="padding-top:clamp(40px,6vw,70px)" aria-labelledby="form-title"><div class="wrap split" style="align-items:start">
  <div>
    <h2 id="form-title" ${R()}>Comment se déroule l'expertise</h2>
    <ul class="checks" ${R(1)}>
      <li>${icon.check}<span><strong>Vous envoyez vos photos</strong> via le formulaire : ensemble, détails, dessous du pied, signature.</span></li>
      <li>${icon.check}<span><strong>Nous identifions vos pièces</strong> : manufacture, période, technique, état de conservation.</span></li>
      <li>${icon.check}<span><strong>Vous recevez une estimation</strong> détaillée et une proposition de rachat, on vous répond rapidement.</span></li>
      <li>${icon.check}<span><strong>Vous décidez librement.</strong> Si vous acceptez, retrait à domicile ou transport assuré, puis paiement immédiat.</span></li>
    </ul>
    <div class="panel" style="margin-top:36px" ${R(2)}>
      <h3>Pour une estimation précise</h3>
      <ul class="checks">
        <li>${icon.camera}<span>Photographiez chaque pièce sur fond uni, en pleine lumière.</span></li>
        <li>${icon.gem}<span>Ajoutez un gros plan de la signature ou de l'estampille.</span></li>
        <li>${icon.shield}<span>Signalez les éclats ou fêles, sans nettoyer ni réparer.</span></li>
      </ul>
    </div>
  </div>
  <div class="form-shell" ${R(1)} id="formulaire">${form}</div>
</div></section>

<section class="section section--alt" aria-labelledby="rassurance"><div class="wrap">
  <div class="section-head" ${R()}><h2 id="rassurance">Pourquoi nous confier vos pièces</h2></div>
  <div class="trust">
    <article class="trust-item" ${R(0)}>${icon.shield}<h3>Confidentialité</h3><p>Aucune donnée partagée avec des tiers.</p></article>
    <article class="trust-item" ${R(1)}>${icon.clock}<h3>Rapidité</h3><p>On vous répond rapidement.</p></article>
    <article class="trust-item" ${R(2)}>${icon.truck}<h3>Transport assuré</h3><p>Emballage professionnel inclus.</p></article>
    <article class="trust-item" ${R(3)}>${icon.home}<h3>À domicile</h3><p>Déplacement pour les grandes collections.</p></article>
    <article class="trust-item" ${R(4)}>${icon.euro}<h3>Paiement cash</h3><p>Règlement à la remise des pièces.</p></article>
  </div>
</div></section>`;
    },
  },

  // ---------------------------------------------------------------- À PROPOS
  'a-propos': {
    title: "À propos : notre savoir-faire d'expert en cristal et verrerie ancienne",
    description: "Passionnés d'arts de la table et de verrerie ancienne, nous estimons et rachetons cristal, vases et verres de collection avec transparence, rigueur et discrétion.",
    crumbs: [['À propos', 'a-propos']],
    body: (rel) => `
<section class="page-hero"><div class="wrap">
  <p class="crumbs"><a href="${rel}">Accueil</a> / À propos</p>
  <h1 ${R()}>Une passion du cristal ancien, une expertise transparente</h1>
  <p class="lead" ${R(1)}>${SITE.name} estime et rachète les pièces de cristallerie et de verrerie d'art avec le même respect que celui qu'elles méritent.</p>
</div></section>

<section class="section section--alt" aria-labelledby="histoire"><div class="wrap split" style="align-items:start">
  <div>
    <h2 id="histoire" ${R()}>Notre histoire</h2>
    <div class="prose" ${R(1)}>
      <p>Le cristal est une matière vivante : il capte la lumière, traverse les générations et raconte l'art de recevoir. Notre métier est né d'une passion pour les arts de la table et la verrerie ancienne, et du constat que trop de belles pièces sont sous-estimées ou bradées faute d'un regard éclairé.</p>
      <p>Nous accompagnons particuliers, familles en succession et collectionneurs pour identifier leurs pièces, comprendre leur valeur et, s'ils le souhaitent, les transmettre à des passionnés dans les meilleures conditions.</p>
    </div>
    <!-- TEXTE ILLUSTRATIF : à personnaliser avec l'histoire réelle de l'équipe -->
  </div>
  <ol class="timeline" ${R(2)}>
    <li><strong>Observer</strong>Poids, sonorité, taille, épaisseur, signature : chaque indice compte.</li>
    <li><strong>Documenter</strong>Comparaison avec les catalogues, modèles et marques de chaque manufacture.</li>
    <li><strong>Estimer</strong>Une valeur argumentée selon la rareté, l'état et le marché des collectionneurs.</li>
    <li><strong>Transmettre</strong>Un rachat clair, un règlement immédiat et des pièces confiées à des amateurs avertis.</li>
  </ol>
</div></section>

<section class="section section--light" aria-labelledby="charte"><div class="wrap">
  <div class="section-head" ${R()}><h2 id="charte">Notre charte de transparence</h2><p class="lead">Trois engagements simples, appliqués à chaque dossier.</p></div>
  <div class="values">
    <article class="value" ${R(0)}><h3>Transparence</h3><p>Nous expliquons chaque critère de l'estimation : manufacture, période, état, rareté. Vous comprenez toujours d'où vient la valeur.</p></article>
    <article class="value" ${R(1)}><h3>Rigueur</h3><p>Nous refusons de surévaluer pour séduire comme de sous-évaluer pour acheter moins cher. Une expertise honnête ou rien.</p></article>
    <article class="value" ${R(2)}><h3>Discrétion</h3><p>Succession, déménagement, collection : votre situation reste confidentielle et votre décision, sans pression, vous appartient.</p></article>
  </div>
</div></section>

<section class="section" aria-labelledby="cta-apropos"><div class="wrap">
  <div class="cta-band" ${R()}>
    <h2 id="cta-apropos">Faites estimer vos pièces par un passionné</h2>
    <p class="lead">Gratuit, sans engagement et sans pression.</p>
    <div class="cta-row">${cta(rel, 'Demander une expertise gratuite')}</div>
  </div>
</div></section>`,
  },

  // ----------------------------------------------------------------- CONTACT
  contact: {
    title: 'Contact & FAQ : estimation, authentification et rachat de cristal',
    description: "Contactez-nous pour estimer votre cristallerie : coordonnées, zones de déplacement et réponses aux questions fréquentes sur l'authentification et le rachat de cristal ancien.",
    crumbs: [['Contact & FAQ', 'contact']],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
    body: (rel) => `
<section class="page-hero"><div class="wrap">
  <p class="crumbs"><a href="${rel}">Accueil</a> / Contact &amp; FAQ</p>
  <h1 ${R()}>Contact et questions fréquentes sur l'estimation de cristal</h1>
  <p class="lead" ${R(1)}>Une question avant d'envoyer vos photos ? Écrivez-nous ou consultez les réponses ci-dessous.</p>
</div></section>

<section class="section section--alt" aria-labelledby="coordonnees" style="padding-block:clamp(56px,8vw,100px)"><div class="wrap contact-grid">
  <div>
    <h2 id="coordonnees" ${R()}>Nous joindre</h2>
    <ul class="contact-list" ${R(1)}>
      <li>${icon.phone}<span><strong>Téléphone</strong><a href="tel:${SITE.phoneHref}">${SITE.phone}</a></span></li>
      <li>${icon.mail}<span><strong>E-mail</strong><a href="mailto:${SITE.email}">${SITE.email}</a></span></li>
      <li>${icon.pin}<span><strong>Zones de déplacement</strong>${SITE.zone}. Déplacement à domicile pour les collections importantes, sur rendez-vous.</span></li>
      <li>${icon.clock}<span><strong>Réactivité</strong>On répond rapidement à chaque demande.</span></li>
    </ul>
  </div>
  <div class="panel" ${R(1)}>
    <h3>Le plus rapide : le formulaire d'estimation</h3>
    <p style="color:var(--ink-dim)">Joignez vos photos directement, nous vous répondons avec une estimation détaillée.</p>
    ${cta(rel)}
  </div>
</div></section>

<section class="section section--light" aria-labelledby="faq-titre"><div class="wrap">
  <div class="section-head" ${R()}><h2 id="faq-titre">Foire aux questions</h2><p class="lead">Authentification, estimation, transport, paiement : l'essentiel en quelques lignes.</p></div>
  <div class="faq">
    ${faqs
      .map(
        ([q, a], k) => `<div class="faq-item" ${R(k % 3)}><h3 style="margin:0;font-size:inherit"><button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-a${k}" id="faq-q${k}"><span>${q}</span>${icon.chevron}</button></h3><div class="faq-a" id="faq-a${k}" role="region" aria-labelledby="faq-q${k}"><div><p>${a}</p></div></div></div>`,
      )
      .join('')}
  </div>
</div></section>`,
  },
  // ------------------------------------------------------------------- MERCI
  merci: {
    noindex: true,
    title: 'Merci pour votre demande d\'estimation',
    description: 'Votre demande d\'estimation de cristallerie a bien été envoyée.',
    crumbs: [],
    body: (rel) => `
<section class="page-hero" style="min-height:70vh;display:grid;align-items:center"><div class="wrap">
  <p class="badge" ${R()}>${icon.check}Demande bien reçue</p>
  <h1 ${R(1)}>Merci, votre demande d'estimation est envoyée</h1>
  <p class="lead" ${R(2)}>Un expert étudie vos photos et vous répond rapidement par e-mail. Pensez à regarder vos courriers indésirables si vous ne voyez rien arriver.</p>
  <ul class="checks" style="margin:28px 0 40px;max-width:640px" ${R(3)}>
    <li>${icon.check}<span>Vous n'avez rien à payer et aucune obligation de vendre.</span></li>
    <li>${icon.check}<span>Vous pouvez compléter votre demande en répondant à notre e-mail avec d'autres photos.</span></li>
    <li>${icon.check}<span>Vos informations restent strictement confidentielles.</span></li>
  </ul>
  <div class="cta-row" ${R(4)}><a class="btn" href="${rel}expertises/">Découvrir nos expertises${icon.arrow}</a><a class="btn btn--ghost" href="${rel}">Retour à l'accueil</a></div>
</div></section>`,
  },
};
