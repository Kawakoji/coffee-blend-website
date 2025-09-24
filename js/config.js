// Configuration pour Google Maps
// Remplacez 'YOUR_API_KEY' par votre vraie clé API Google Maps
const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY';

// Fonction pour obtenir la clé API
function getGoogleMapsApiKey() {
    return GOOGLE_MAPS_API_KEY;
}

// Vérifier si la clé API est configurée
function isApiKeyConfigured() {
    return GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY' && GOOGLE_MAPS_API_KEY.length > 0;
}
