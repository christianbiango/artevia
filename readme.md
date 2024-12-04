# Bievenue sur le projet Unis pour mieux agir !

Il s'agit d'une campagne de communication créée par l'agence de communication Artevia. L'objectif de cette campagne est de promouvoir un dialogue respecteux et constructif face à des opinions radicales, afin de lutter contre la désinformation sans aggraver les conflits.

# Setup

### 1. Installez toutes les dépendances (à faire en ligne de commandes au niveau du dossier racine) :

`npm i`

### 2. Ensuite, il suffira d'exécuter le script principal :

`npx serve`

## Configuration effectuée

### Générer les icons de la PWA

`npx pwa-asset-generator logo.png icons`

### Créer les favicons

https://realfavicongenerator.net/

Un fond blanc a été appliqué pour les écrans sombres.

Tester la présence des favicons en local :

`npx realfavicon check 3000`

### Installation de tailwindcss

`npm install -D tailwindcss`

`npx tailwindcss init`

`npx tailwindcss -i ./tailwind.css -o ./css/style.css --watch`

## Déploiement automatique

[https://artevia.netlify.app/](https://artevia.netlify.app/)

## Alpine versionning

As we're using this script to use Alpine `<script src="//unpkg.com/alpinejs" defer></script>` we always use the latest version.
