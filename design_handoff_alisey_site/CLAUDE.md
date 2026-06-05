# CLAUDE.md — Implémentation du site Alisey

## Contexte
Ce dossier (`design_handoff_alisey_site/`) contient une **référence de design** pour le site vitrine **Alisey** (externalisation comptable / BPO, Maroc → France). Les fichiers HTML/CSS sont des **prototypes haute-fidélité**, pas du code de production à copier tel quel.

## Ta tâche
Recrée ces designs dans **l'environnement de ce dépôt** (React / Next.js / Vue / Astro / autre), en suivant les composants, conventions et la librairie de styles déjà en place. Si aucun environnement n'existe encore, choisis le framework le plus adapté (site essentiellement statique + un formulaire → Astro ou Next.js conviennent) et implémente-y les pages.

## Par où commencer
1. **Lis d'abord `README.md`** dans ce dossier — il est autosuffisant : design tokens, typographie, composants globaux, description détaillée de chaque page, logique du formulaire de contact, et inventaire des assets.
2. Récupère les **design tokens** depuis `alisey.css` (`:root`) — couleurs, espacements, rayons, ombres, polices. Réutilise-les (variables CSS, thème Tailwind, etc. selon le codebase).
3. Référence les fichiers HTML page par page (`index.html` = accueil avec le hero le plus travaillé).
4. Les **captures** dans `screenshots/` montrent le rendu visé.

## Règles importantes
- **Fidélité haute** : respecte couleurs, typo (Spectral / Hanken Grotesk / Spline Sans Mono — Google Fonts), espacements et mise en page.
- **Ignore** les balises `<script>` React/Babel + `*tweaks*.jsx` en bas des pages HTML : c'est un outil d'aperçu, hors périmètre.
- **Formulaire de contact** (`Contact.html`) : envoi via Web3Forms vers `Laazouzi.anis@gmail.com`. La clé d'accès figure dans le README — **mets-la en variable d'environnement** (ne pas la committer en dur), et envisage une route serveur plutôt qu'un appel client direct.
- **Accueil.html** = simple redirection vers l'accueil → implémente une vraie redirection (301 / route).
- **Assets** : garde le dossier `assets/` (photo `hero-team.webp` en 3:2, logos). Prévois un `srcset` / plusieurs résolutions en production.
- Conserve le **motif décoratif « alizés »** (lignes de vent SVG) comme élément de marque.

## Pages
`index.html` (accueil), `Plateforme.html`, `Démarche.html`, `Nous.html`, `Contact.html` (formulaire), `Espace-client.html` (« En construction »).
