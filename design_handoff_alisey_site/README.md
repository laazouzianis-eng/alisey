# Handoff — Site vitrine Alisey (BPO comptable)

## Overview
Site vitrine marketing pour **Alisey**, une société d'externalisation comptable et sociale (BPO) basée au Maroc, à destination de cabinets et entreprises français. Le site présente l'offre, la plateforme de suivi (à venir), la démarche, l'équipe, et propose un formulaire de contact qui envoie les demandes par e-mail.

Le site est **multi-pages**, en français, avec une esthétique « premium / méditerranéenne » (marine + or), typographie serif pour les titres.

## About the Design Files
Les fichiers de ce paquet sont des **références de design réalisées en HTML/CSS** — des prototypes haute-fidélité montrant l'apparence et le comportement voulus, **pas du code de production à copier tel quel**.

L'objectif est de **recréer ces designs dans l'environnement cible** (par ex. un projet Next.js / React / Astro / Vue, ou un CMS) en suivant les conventions et la librairie de composants de ce codebase. Si aucun environnement n'existe encore, choisissez le framework le plus adapté (un site essentiellement statique + un formulaire → Astro ou Next.js conviennent très bien) et implémentez-y les designs.

Le HTML fourni est volontairement « canonique » et lisible ; les valeurs (couleurs, espacements, typo) sont centralisées dans `alisey.css` via des variables CSS — réutilisez-les comme design tokens.

> **Note préview :** les pages contiennent en bas des balises `<script>` chargeant React/Babel + `tweaks-panel.jsx` / `hifi-tweaks.jsx`. C'est un **panneau de réglages d'aperçu** (outil d'édition), **pas** une dépendance du site. Ignorez/supprimez ces scripts lors de l'implémentation — le rendu est entièrement statique sans eux.

## Fidelity
**Haute-fidélité (hifi).** Couleurs, typographie, espacements et mise en page sont définitifs. Recréez l'UI fidèlement en utilisant les patterns/librairies du codebase cible. Les polices et la palette sont à respecter.

---

## Design Tokens

Tous définis dans `alisey.css` (`:root`). Réutilisez-les tels quels.

### Couleurs — marque
| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#1b3a6b` | Couleur primaire, titres |
| `--navy-700` | `#16315c` | |
| `--navy-800` | `#112548` | |
| `--navy-900` | `#0c1c38` | Fonds profonds, footer, encart « Prochainement » |
| `--gold` | `#c9a84c` | Accent précieux (le « S » du logo, badges) |
| `--gold-600` | `#b8943a` | |
| `--gold-soft` | `#ede2c3` | |
| `--blue` | `#1b6fa8` | Bleu « vent » moyen — liens, grand titre du hero |
| `--blue-400` | `#4f9bcf` | |
| `--sky` | `#8bbfdf` | Bleu clair (accents sur fond foncé) |
| `--sky-200` | `#aad0e8` | |

### Couleurs — neutres (chaleureux)
| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#ffffff` | Fond principal |
| `--sand` | `#f5f1e8` | Section alternée (bande crédibilité) |
| `--sand-2` | `#efe9da` | |
| `--mist` | `#eef3f8` | Bleuté très léger (fonds de cartes/icônes) |
| `--ink` | `#1c2533` | Texte courant |
| `--ink-soft` | `#51607a` | Texte secondaire |
| `--ink-faint` | `#8492a8` | Texte tertiaire / placeholders |
| `--line` | `#e4e2d8` | Bordures (chaud) |
| `--line-cool` | `#dde6ef` | Bordures (froid) |

### Système
| Token | Valeur |
|---|---|
| `--accent` | `var(--gold)` |
| `--radius` | `16px` |
| `--radius-sm` | `10px` |
| `--radius-lg` | `26px` |
| `--maxw` | `1200px` (largeur max du conteneur `.wrap`, padding latéral 32px) |
| `--shadow-sm` | `0 2px 10px -4px rgba(17,37,72,.18)` |
| `--shadow` | `0 24px 60px -28px rgba(17,37,72,.40)` |
| `--shadow-lg` | `0 40px 90px -30px rgba(12,28,56,.55)` |

### Typographie (Google Fonts)
- **Display / titres** : `Spectral` (serif), weights 400/500/600/700. `--font-display`
- **Texte courant** : `Hanken Grotesk` (sans), 400/500/600/700. `--font-sans`
- **Labels / mono** : `Spline Sans Mono`, 400/500/600. `--font-mono`

Import : `https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap`

Échelle (base body 17px, line-height 1.6) :
- `h1` : `clamp(40px, 5vw, 68px)`, Spectral 600, color `--navy`, line-height 1.08, letter-spacing -.01em
- `h2` : `clamp(30px, 3.6vw, 46px)`
- `h3` : `22px`
- `.eyebrow` (sur-titre) : mono 12px, weight 500, letter-spacing .22em, UPPERCASE, color `--blue`, avec un petit trait `--accent` de 26×2px avant le texte (sauf variante `.eyebrow.plain`)
- `.lead` (chapô) : `clamp(18px, 1.5vw, 21px)`, color `--ink-soft`

---

## Composants globaux

### Barre de navigation (`.nav`)
- Barre sticky en haut, fond blanc, fine bordure basse.
- Conteneur `.nav-inner` (max-width 1200, flex space-between, gap 30px).
- **Logo** : `assets/alisey-logo.png`, **hauteur 44px**, lien vers `index.html`.
- **Liens** (`.nav-links`) : Accueil, Services (`#services`), Plateforme, Démarche, Nous, Références (`#references`).
- **CTA** (`.nav-cta`, à droite) :
  - « Espace client » → bouton fantôme (`.btn.btn-ghost`), lien `Espace-client.html`
  - « Nous contacter » → bouton plein (`.btn.btn-primary`), lien `Contact.html`

### Boutons (`.btn`)
- `.btn-primary` : fond marine (`--navy`), texte blanc.
- `.btn-ghost` : contour, fond transparent.
- `.btn-gold` / `.btn-light` : variantes sur fond foncé (section CTA finale).
- Police sans, weight 600, coins arrondis (`--radius` / pill selon contexte), icône flèche SVG optionnelle (`path d="M5 12h14M13 6l6 6-6 6"`).

### Pied de page (`.footer`)
- Fond marine profond (`--navy-900`), texte clair.
- Grille 4 colonnes : bloc marque (logo clair `assets/alisey-logo-light.png` + baseline), Navigation, Contact, Accès.
- Bande basse : copyright + chips « Conforme RGPD » / « Standards français ».
- Tous les liens « contact » du footer pointent vers `Contact.html` (formulaire), plus de `mailto:`.

---

## Pages / Vues

### 1. Accueil — `index.html` (page servie par défaut)
> Un fichier `Accueil.html` existe et **redirige** vers `index.html` (compatibilité d'anciens liens). À reproduire par une vraie redirection 301 côté serveur/route.

**HERO** (mise en page la plus travaillée — à soigner) :
- Conteneur en **grille 2 colonnes**, `grid-template-columns: 1.05fr 0.95fr`, `align-items: center`, padding vertical généreux.
- **Colonne gauche** (dans l'ordre) :
  1. Eyebrow : « Externalisation comptable · Maroc → France »
  2. **Grand titre** (`<h1>`) : « Et vos projets d'externalisation comptable ont le vent en poupe. » — Spectral 600, **couleur `--blue`** (et non navy), réglé ~ `clamp(32px, 3.5vw, 60px)` selon largeur. (Dans le prototype l'auteur a fixé 60px en dur ; côté codebase, préférez une taille fluide responsive.)
  3. **Sous-titre** (`.hero-sub`) : « Produire plus, produire mieux. » — Spectral 600, color `--navy`, ~`clamp(20px, 1.9vw, 25px)`. Introduit la liste.
  4. **Liste à puces** (`.hero-points`) : « Sans recruter » / « Sans perdre le contrôle » / « Sans lésiner sur la qualité ». Puces custom = coche `✓` colorée, pas de disque natif.
- **Colonne droite** : **photo** `assets/hero-team.webp` (1020×680, format 3:2). Deux équipes qui collaborent, dont une en visioconférence sur l'écran mural.
  - Cadrage : `object-fit: cover`, `object-position: 16% 22%` (calé pour garder l'écran de visio visible).
  - La photo est **étirée pour occuper toute la hauteur du bloc de texte** (du haut du titre au bas de la dernière puce) : conteneur `align-self: stretch`, image `height: 100%`, `max-width: 600px`, coins droits (`border-radius: 0`).
  - Décalage haut `margin-top: 56px` pour aligner le haut de la photo avec le haut du titre (= hauteur de l'eyebrow + sa marge). Dans un vrai codebase, préférez aligner via la grille plutôt qu'un offset fixe.
- **Encart « Prochainement »** (`.launch-banner`) — **pleine largeur**, sous les deux colonnes (`grid-column: 1 / -1`) :
  - Lien cliquable vers `Contact.html`. Fond marine `--navy-900`, filet doré `--accent` de 4px à gauche, ombre.
  - Badge mono « Prochainement » avec pastille dorée **pulsante** (animation `box-shadow`, désactivée en `prefers-reduced-motion`).
  - Titre blanc : « Suivez vos dossiers en temps réel sur la plateforme Alisey ».
  - Sous-texte gris-bleu : « Le lancement approche — traçabilité totale, reporting et assistant IA. Soyez parmi les premiers informés. »
  - À droite, libellé « Être informé » + flèche (couleur `--sky`), translation au survol.

**Autres sections de l'accueil** (réutilisent des patterns communs `.section`, `.wrap`, `.grid.g3`, `.card`, `.eyebrow`, `.section-head`) :
- **Bande crédibilité** (`.section.tight.sand`) : 3 stats centrées (40 collaborateurs / 2+1 experts / 2 sites).
- **Promesse** (`#promesse`) : grille de 6 cartes (icône SVG + numéro + titre + texte).
- **Plateforme** (`#plateforme`, fond marine) : section sombre, sur-titre clair, grille de cartes « glass ».
- **Services** / mission (`#services`) : 3 cartes (Mission comptable, Mission sociale, Sur mesure) avec chips.
- **Démarche** : 2 process en étapes.
- **Témoignages** (`#references`, fond sable) : cartes avec citation + avatar + nom.
- **CTA final** (fond marine) : « Parlons de votre charge de production. » + boutons « Demander un échange » (→ `Contact.html`) et « Voir nos services » (→ `#services`).

### 2. Plateforme — `Plateforme.html`
Page dédiée à la plateforme de suivi (même nav/footer, sections détaillant les fonctionnalités). Boutons « Demander un échange » → `Contact.html`.

### 3. Démarche — `Démarche.html`
Démarche & philosophie (process d'intégration + cycle récurrent). « Demander un échange » → `Contact.html`.

### 4. Nous — `Nous.html`
Présentation de l'entreprise / équipe.

### 5. Contact — `Contact.html`  ⭐ (comporte de la logique)
Mise en page 2 colonnes : colonne gauche = intro + 3 arguments (réponse 48 h, données RGPD, dossier test) ; colonne droite = **carte formulaire** (`.form-card`, fond blanc, bordure `--line-cool`, `--radius-lg`, ombre).

**Champs** (tous requis) :
- `nom` (texte) — « Votre nom »
- `email` (email) — « Adresse mail »
- `organisme` (texte) — « Nom de l'organisme »
- `message` (textarea, min-height 140px) — « Votre demande »

Labels en mono, UPPERCASE, 11.5px ; inputs 16px, fond `--paper`, bordure 1.5px `--line-cool`, focus → bordure `--blue` + halo `rgba(27,111,168,.14)`.

**Comportement d'envoi (JS en bas de page)** :
- Validation HTML5 (`checkValidity` / `reportValidity`).
- Envoi via **Web3Forms** : `POST https://api.web3forms.com/submit` (JSON), avec `access_key` et les champs. Le formulaire arrive dans la boîte **`Laazouzi.anis@gmail.com`**.
  - **Clé d'accès Web3Forms utilisée dans le prototype** : `f089b80c-a029-4ef9-83dc-133fb731e9a9`. ⚠️ Dans le codebase cible, déplacez cette clé en **variable d'environnement** et idéalement passez par une route serveur (ou conservez Web3Forms si l'envoi côté client convient).
- Pendant l'envoi : bouton désactivé, libellé « Envoi en cours… ».
- Succès → masque le formulaire, affiche un bloc de confirmation (`.form-sent`, coche verte) « Message envoyé, merci ! ».
- Échec → message d'erreur (`.form-error`) avec repli proposé.
- **Repli** : si `ACCESS_KEY` est vide, le formulaire bascule sur un lien `mailto:` pré-rempli vers la même adresse. À conserver ou remplacer par la stratégie d'envoi du codebase.

### 6. Espace client — `Espace-client.html`
Page **« En construction »** : héros centré, badge « Espace client », grand titre « En construction », texte d'attente, boutons « Être informé du lancement » (→ `Contact.html`) et « Retour à l'accueil ». Décor SVG « alizés » (lignes de vent) en fond, très discret.

---

## Interactions & comportements
- **Navigation** : liens internes par ancres (`#services`, `#references`, `#plateforme`) avec `scroll-behavior: smooth`.
- **Hover boutons / cartes** : élévation légère + translation de flèche.
- **Encart « Prochainement »** : pastille dorée pulsante (animation infinie, coupée si `prefers-reduced-motion`), translation de la flèche au survol, toute la zone est un lien.
- **Formulaire de contact** : voir section dédiée (validation, états envoi/succès/erreur).
- **Responsive** : sous **980px**, la grille du hero passe en 1 colonne (`.hero-grid` → `1fr`), la photo repasse en ratio 3:2 auto ; `.g4`→2 col. (voir media queries en bas de `alisey.css`). Adapter selon le système responsive du codebase.

## Motif décoratif « alizés »
Plusieurs sections affichent un motif SVG de lignes de vent (4 traits horizontaux terminés par une spirale), couleurs `#8bbfdf / #1b3a6b / #1b6fa8 / #c9a84c`, opacité faible. C'est un élément de marque récurrent — le réintégrer comme composant décoratif.

## Assets (dossier `assets/`)
| Fichier | Description |
|---|---|
| `alisey-logo.png` | Logo principal (sur fond clair) — nav, hauteur 44px |
| `alisey-logo-light.png` | Logo version claire — footer (fond marine) |
| `hero-team.webp` | Photo du hero, 1020×680 (3:2), deux équipes en collaboration + visio. **À fournir en plusieurs résolutions / formats (`srcset`) côté production.** |

Le logo encode la marque : marine + le « S » doré + un dégradé de lignes « alizés ». Police des titres = Spectral.

## Fichiers de ce paquet
- `index.html` — Accueil (référence principale, hero détaillé)
- `Accueil.html` — redirection vers `index.html`
- `Plateforme.html`, `Démarche.html`, `Nous.html` — pages de contenu
- `Contact.html` — formulaire (logique d'envoi Web3Forms)
- `Espace-client.html` — page « En construction »
- `alisey.css` — design system complet (tokens + composants). **Point d'entrée pour les tokens.**
- `assets/` — logos + photo du hero

> Rappel : ignorez les `<script>` React/Babel + `*tweaks*.jsx` en bas des pages (outil d'aperçu, hors périmètre).

## Captures d'écran (dossier `screenshots/`)
Aperçus haute-résolution du haut de chaque page (rendu de référence) :
- `01-accueil-hero.png` — Accueil : hero (titre + sous-titre + puces + photo plein-hauteur + encart « Prochainement »)
- `02-plateforme.png` — Plateforme
- `03-demarche.png` — Démarche
- `04-nous.png` — Nous
- `05-contact-formulaire.png` — Contact : formulaire
- `06-espace-client-construction.png` — Espace client (« En construction »)

Ce sont des aperçus au-dessus de la ligne de flottaison ; pour le détail exact des sections plus bas, se référer aux fichiers HTML et à `alisey.css`.
