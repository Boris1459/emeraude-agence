document.addEventListener('DOMContentLoaded', function() {

// 1. GESTION DU MENU MOBILE
var menuToggle = document.getElementById('menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
menuToggle.addEventListener('click', function() {
mobileMenu.classList.toggle('active');
});
}

// 2. GESTION DU WIDGET DE CHAT
var chatWidgetBtn = document.getElementById('chat-widget-btn');
var chatWidgetWindow = document.getElementById('chat-widget-window');
var chatWidgetClose = document.getElementById('chat-widget-close');
var widgetInput = document.getElementById('widget-input');
var widgetSend = document.getElementById('widget-send');
var widgetMessages = document.getElementById('widget-messages');

if (chatWidgetBtn && chatWidgetWindow) {

// Ouvrir/Fermer
chatWidgetBtn.addEventListener('click', function() {
chatWidgetWindow.classList.toggle('open');
});
if (chatWidgetClose) {
chatWidgetClose.addEventListener('click', function() {
chatWidgetWindow.classList.remove('open');
});
}

// Fonction pour envoyer un message du Bot
function botRepond(texte) {
var botMsg = document.createElement('div');
botMsg.className = 'widget-message msg-bot';
botMsg.innerHTML = texte;
widgetMessages.appendChild(botMsg);
widgetMessages.scrollTop = widgetMessages.scrollHeight;
}

// Fonction principale de traitement du message
function envoyerMessageWidget() {
var texte = widgetInput.value.trim();
if (texte === "") return;

// Afficher le message utilisateur
var userMsg = document.createElement('div');
userMsg.className = 'widget-message msg-user';
userMsg.innerText = texte;
widgetMessages.appendChild(userMsg);
widgetInput.value = '';
widgetMessages.scrollTop = widgetMessages.scrollHeight;

// Simulation d'un temps de réflexion
setTimeout(function() {
var txtLower = texte.toLowerCase();

// --- LE MENU INTERACTIF ---
var menuPrincipal = "Que souhaitez-vous savoir ?<br><br>1️⃣ Nos <b>Services</b><br>2️⃣ Nos <b>Tarifs</b><br>3️⃣ Demander un <b>Devis</b><br>4️⃣ Nous <b>Contacter</b><br><br><i>(Tapez le chiffre ou le mot-clé correspondant)</i>";

// --- RÉPONSES AUX CHOIX ---
if (txtLower === "1" || txtLower.includes("service")) {
botRepond("Voici nos 5 domaines d'expertise :<br><br>📱 <b>Communication digitale</b> : Gestion de vos réseaux sociaux et création de contenus.<br>🤖 <b>Chatbots & IA</b> : Assistants virtuels pour répondre à vos clients 24h/24.<br>⚙️ <b>Automatisation</b> : Gagnez du temps sur les tâches répétitives.<br>🎨 <b>Design</b> : Création de logos, flyers et sites web professionnels.<br>💡 <b>Conseil en IA</b> : Accompagnement pour intégrer l'IA dans votre business.<br><br>Sur lequel voulez-vous en savoir plus ? (Tapez le nom, ex: 'Chatbot')");
}
else if (txtLower.includes("chatbot") || txtLower.includes("robot")) {
botRepond("🤖 <b>Chatbots & IA :</b> Nous créons des assistants intelligents capables de discuter avec vos clients, de répondre à leurs questions et de collecter leurs coordonnées, même quand vous dormez !<br><br>Tapez <b>2</b> pour voir les tarifs de ce service.");
}
else if (txtLower.includes("communication") || txtLower.includes("réseaux")) {
botRepond("📱 <b>Communication digitale :</b> Nous créons vos publications, affiches, vidéos et calendriers pour animer vos réseaux sociaux (Facebook, Instagram, TikTok) de manière professionnelle.<br><br>Tapez <b>2</b> pour voir les tarifs.");
}
else if (txtLower.includes("automatisation") || txtLower.includes("tâche")) {
botRepond("⚙️ <b>Automatisation :</b> Nous connectons vos outils pour que les tâches répétitives (envoi d'e-mails, relances, enregistrement de commandes) se fassent toutes seules.<br><br>Tapez <b>2</b> pour voir les tarifs.");
}
else if (txtLower.includes("design") || txtLower.includes("logo") || txtLower.includes("site")) {
botRepond("🎨 <b>Design & Web :</b> Nous concevons votre identité visuelle (logos, flyers) et développons des sites web vitrines modernes et adaptés aux mobiles.<br><br>Tapez <b>2</b> pour voir les tarifs.");
}

else if (txtLower === "2" || txtLower.includes("prix") || txtLower.includes("tarif")) {
botRepond("Pour voir nos tarifs de lancement et nos packs combinés (qui font économiser de l'argent), consultez notre page dédiée :<br><br>👉 <a href='tarifs.html' style='color:var(--vert-emeraude);font-weight:bold;'>Voir la page Tarifs</a>");
}
else if (txtLower === "3" || txtLower.includes("devis")) {
botRepond("Prêt à démarrer ? Remplissez notre formulaire en 2 minutes pour recevoir une proposition adaptée :<br><br>👉 <a href='devis.html' style='color:var(--vert-emeraude);font-weight:bold;'>Demander un devis</a>");
}
else if (txtLower === "4" || txtLower.includes("contact") || txtLower.includes("whatsapp") || txtLower.includes("appel")) {
botRepond("Discutons de vive voix ! Vous pouvez nous joindre directement :<br>📞 Par téléphone : <b>01 51 48 63 35</b><br>💬 Sur WhatsApp : <a href='https://wa.me/2290151486335' target='_blank' style='color:var(--vert-emeraude);font-weight:bold;'>Cliquez ici</a>");
}
else if (txtLower.includes("bonjour") || txtLower.includes("salut")) {
botRepond("Bonjour ! Ravi de vous accueillir chez Emeraude Agence.<br><br>" + menuPrincipal);
}
else {
// Réponse par défaut si le bot ne comprend pas
botRepond("Je ne suis pas sûr de comprendre. Voici ce que je peux faire pour vous :<br><br>" + menuPrincipal);
}

}, 800);
}

if (widgetSend) {
widgetSend.addEventListener('click', envoyerMessageWidget);
}
if (widgetInput) {
widgetInput.addEventListener('keypress', function(e) {
if (e.key === 'Enter') envoyerMessageWidget();
});
}
}
});
