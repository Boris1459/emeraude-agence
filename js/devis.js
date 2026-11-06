document.addEventListener('DOMContentLoaded', function() {
var form = document.getElementById('devis-form');

// METS TA NOUVELLE URL ICI
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwczDs4ueaWfRBR6kDJCVh92_kF97lKGBFbX38Knf5cFATcCNZkiRfy98a1GT0zaBPw/exec";

if (form) {
form.addEventListener('submit', function(e) {
// On empêche le rechargement de la page par le navigateur
e.preventDefault();

// Vérification des champs
const nom = document.getElementById('nom').value;
const telephone = document.getElementById('telephone').value;
const service = document.getElementById('service').value;
const description = document.getElementById('description').value;

if (!nom || !telephone || !service || !description) {
alert("Veuillez remplir tous les champs obligatoires (*)");
return;
}

// 1. On configure le formulaire pour qu'il s'envoie à Google EN ARRIÈRE-PLAN
form.action = GOOGLE_SCRIPT_URL;
form.method = "POST";
form.target = "hidden_iframe";

// 2. On lance l'envoi à Google (le navigateur ne bouge pas)
form.submit();

// 3. On prépare WhatsApp
const entreprise = document.getElementById('entreprise').value || 'Non renseigné';
const email = document.getElementById('email').value || 'Non renseigné';
const budget = document.getElementById('budget').value || 'Non renseigné';
const delai = document.getElementById('delai').value || 'Non renseigné';

let message = "NOUVELLE DEMANDE DE DEVIS%0A%0A";
message += "Nom : " + nom + "%0A";
message += "Entreprise : " + entreprise + "%0A";
message += "Téléphone : " + telephone + "%0A";
message += "Email : " + email + "%0A%0A";
message += "Service : " + service + "%0A";
message += "Budget : " + budget + "%0A";
message += "Délai : " + delai + "%0A%0A";
message += "Description :%0A" + description;

const numero = CONFIG.agence.numeroWhatsApp;
const urlWhatsApp = "https://wa.me/" + numero + "?text=" + message;

// 4. On attend 1,5 seconde (le temps que Google enregistre), puis on ouvre WhatsApp
setTimeout(function() {
window.location.href = urlWhatsApp;
}, 1500);
});
}
});
