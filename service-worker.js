importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbow.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst() // PWA va essayer de récupérer l'image en cache avant de la récupérer sur le réseau. C'est ok pour les fichiers qui ne changent pas souvent comme les images. Donc, sinon utiliser une NetworkFirst() stratégie
)