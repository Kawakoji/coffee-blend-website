# Configuration Google Maps

## Problème actuel
Le site utilise une clé API Google Maps qui n'est pas valide, ce qui cause l'erreur "Google Maps ne s'est pas chargé correctement".

## Solutions

### Solution 1 : Obtenir une clé API Google Maps (Recommandée)

1. **Allez sur Google Cloud Console**
   - Visitez : https://console.cloud.google.com/
   - Connectez-vous avec votre compte Google

2. **Créez un projet**
   - Cliquez sur "Nouveau projet"
   - Donnez un nom à votre projet (ex: "coffee-website")
   - Cliquez sur "Créer"

3. **Activez l'API Maps JavaScript**
   - Dans le menu, allez dans "APIs et services" > "Bibliothèque"
   - Recherchez "Maps JavaScript API"
   - Cliquez sur "Activer"

4. **Créez des identifiants**
   - Allez dans "APIs et services" > "Identifiants"
   - Cliquez sur "Créer des identifiants" > "Clé API"
   - Copiez votre clé API

5. **Configurez les restrictions (optionnel mais recommandé)**
   - Cliquez sur votre clé API
   - Dans "Restrictions d'application", sélectionnez "Sites web HTTP"
   - Ajoutez votre domaine (ex: `localhost`, `votre-domaine.com`)

6. **Mettez à jour le code**
   - Ouvrez le fichier `js/config.js`
   - Remplacez `YOUR_API_KEY` par votre vraie clé API
   - Ou remplacez directement dans tous les fichiers HTML la clé existante

### Solution 2 : Désactiver temporairement Google Maps

Si vous ne voulez pas utiliser Google Maps pour le moment :

1. **Commentez les scripts Google Maps** dans tous les fichiers HTML :
   ```html
   <!-- <script src="https://maps.googleapis.com/maps/api/js?key=..."></script> -->
   ```

2. **La carte affichera un message de remplacement** avec l'adresse du café

### Solution 3 : Utiliser une alternative gratuite

Vous pouvez remplacer Google Maps par :
- **OpenStreetMap** avec Leaflet
- **Mapbox** (gratuit jusqu'à 50,000 vues/mois)
- **Apple Maps** (pour les appareils Apple)

## Fichiers à modifier

Une fois que vous avez votre clé API, remplacez `AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s` par votre clé dans ces fichiers :

- `index.html` (ligne 849)
- `about.html` (ligne 358)
- `menu.html` (ligne 703)
- `services.html` (ligne 213)
- `blog.html` (ligne 286)
- `blog-single.html` (ligne 409)
- `contact.html` (ligne 228)
- `shop.html` (ligne 464)
- `product-single.html` (ligne 279)
- `cart.html` (ligne 323)
- `checkout.html` (ligne 411)

## Coûts

- **Google Maps** : Gratuit jusqu'à 28,500 chargements de carte par mois
- **Au-delà** : $7 par 1,000 chargements supplémentaires

## Support

Si vous avez des questions sur la configuration, consultez :
- [Documentation Google Maps](https://developers.google.com/maps/documentation/javascript)
- [Guide de démarrage rapide](https://developers.google.com/maps/documentation/javascript/quickstart)
