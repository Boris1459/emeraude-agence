// Fichier pour gérer le filtrage des réalisations

document.addEventListener('DOMContentLoaded', () => {
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

// Si on est sur la page réalisations
if (filterBtns.length > 0 && portfolioCards.length > 0) {

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {

// 1. Retirer la classe active de tous les boutons
filterBtns.forEach(b => b.classList.remove('active'));
// 2. Ajouter la classe active au bouton cliqué
btn.classList.add('active');

// 3. Récupérer la valeur du filtre (ex: "design")
const filterValue = btn.getAttribute('data-filter');

// 4. Afficher ou cacher les cartes
portfolioCards.forEach(card => {
if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
card.style.display = 'block';
// Petite animation d'apparition
card.style.animation = 'fadeIn 0.5s ease forwards';
} else {
card.style.display = 'none';
}
});
});
});
}
});
