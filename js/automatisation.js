document.addEventListener('DOMContentLoaded', function() {
var btnRun = document.getElementById('btn-run-workflow');

if (btnRun) {
btnRun.addEventListener('click', function() {
// On désactive le bouton pendant l'animation
btnRun.disabled = true;
btnRun.innerText = "Traitement en cours...";

// 1. Réinitialiser l'affichage
document.getElementById('step-trigger').classList.remove('active');
document.getElementById('step-engine').classList.remove('active');
document.getElementById('arrow-1').classList.remove('active');
document.getElementById('arrow-2').classList.remove('active');
document.getElementById('result-1').classList.remove('active');
document.getElementById('result-2').classList.remove('active');
document.getElementById('result-3').classList.remove('active');

// 2. Lancer la séquence d'animation (avec des timeouts)

// Étape 1 : Déclencheur
setTimeout(function() {
document.getElementById('step-trigger').classList.add('active');
}, 500);

// Étape 2 : Flèche 1 et Moteur
setTimeout(function() {
document.getElementById('arrow-1').classList.add('active');
document.getElementById('step-engine').classList.add('active');
}, 1500);

// Étape 3 : Flèche 2 et Résultats
setTimeout(function() {
document.getElementById('arrow-2').classList.add('active');
document.getElementById('result-1').classList.add('active');
}, 2500);

setTimeout(function() {
document.getElementById('result-2').classList.add('active');
}, 3000);

setTimeout(function() {
document.getElementById('result-3').classList.add('active');
}, 3500);

// Fin de l'animation : on réactive le bouton
setTimeout(function() {
document.getElementById('step-trigger').classList.remove('active');
document.getElementById('step-engine').classList.remove('active');
btnRun.disabled = false;
btnRun.innerText = "Relancer la simulation";
}, 5000);
});
}
});
