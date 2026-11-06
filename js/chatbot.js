console.log("1. Le fichier chatbot.js est bien chargé.");

document.addEventListener('DOMContentLoaded', function() {
console.log("2. Le DOM est prêt (HTML chargé).");

var chatMessages = document.getElementById('chat-messages');
var chatInput = document.getElementById('chat-input');
var chatSend = document.getElementById('chat-send');

if (chatSend && chatInput && chatMessages) {
console.log("3. Les éléments du chat ont été trouvés.");

// BASE DE CONNAISSANCES ENRICHIE
var botKnowledge = [
{
keywords: ["bonjour", "salut", "hello", "coucou", "bonsoir"],
response: "Bonjour ! Je suis l'assistant d'Emeraude Agence. Comment puis-je vous aider aujourd'hui ?"
},
{
keywords: ["service", "offre", "travail", "faites-vous", "proposez"],
response: "Nous proposons 5 services : Communication digitale, Chatbots et IA, Automatisation, Design et Création, et Conseil en IA. Lequel vous intéresse ?"
},
{
keywords: ["communication", "digital", "digitale", "réseaux", "social", "publication", "affiche"],
response: "Pour la Communication digitale, nous créons vos publications, affiches, vidéos et calendriers éditoriaux pour structurer votre image en ligne. Voulez-vous un devis pour ce service ?"
},
{
keywords: ["chatbot", "bot", "intelligence", "ia", "robot", "assistant"],
response: "Pour les Chatbots et l'IA, nous créons des assistants intelligents pour répondre à vos clients 24h/24. Celui avec qui vous discutez est un exemple simplifié ! Voulez-vous en savoir plus ?"
},
{
keywords: ["automatisation", "automatiser", "tâche", "processus", "flux", "gagner du temps"],
response: "Pour l'Automatisation, nous vous aidons à déléguer les tâches répétitives (relances, emails, organisation) à des outils numériques intelligents. Quel processus souhaitez-vous automatiser ?"
},
{
keywords: ["design", "création", "logo", "flyer", "site web", "site", "web"],
response: "Pour le Design et la Création, nous réalisons des logos, flyers, visuels et la conception de sites web sur mesure. Avez-vous un projet de site ou de logo ?"
},
{
keywords: ["conseil", "accompagnement", "analyse", "stratégie"],
response: "Pour le Conseil en IA, nous analysons vos besoins pour identifier les meilleurs outils d'intelligence artificielle à intégrer dans votre entreprise. Prenons un rendez-vous ?"
},
{
keywords: ["prix", "tarif", "combien", "coût", "devis", "budget", "payer"],
response: "Nos tarifs dépendent de la complexité de votre projet. Je vous invite à remplir notre formulaire de devis pour recevoir une proposition adaptée. Souhaitez-vous le lien ?"
},
{
keywords: ["contact", "whatsapp", "téléphone", "email", "joindre", "appeler"],
response: "Vous pouvez nous joindre par WhatsApp au 01 51 48 63 35 ou par email à emeraudeagence07@gmail.com. Nous répondons rapidement !"
},
{
keywords: ["merci", "super", "génial", "parfait", "d'accord", "ok"],
response: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions."
}
];

var defaultResponse = "Je ne suis pas sûr de comprendre. Vous pouvez me demander des informations sur nos services (communication, design, automatisation...), nos tarifs, ou comment nous contacter.";

function addMessage(text, sender) {
var messageDiv = document.createElement('div');
messageDiv.className = 'message ' + sender + '-message';
messageDiv.innerHTML = text;
chatMessages.appendChild(messageDiv);
chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
var typingDiv = document.createElement('div');
typingDiv.className = 'typing-indicator';
typingDiv.id = 'typing-indicator';
typingDiv.innerHTML = '<span></span><span></span><span></span>';
chatMessages.appendChild(typingDiv);
chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
var typingDiv = document.getElementById('typing-indicator');
if (typingDiv) {
typingDiv.remove();
}
}

function processUserMessage(message) {
addMessage(message, 'user');
showTyping();

setTimeout(function() {
hideTyping();
var lowerMessage = message.toLowerCase();
var botReply = defaultResponse;

// On parcourt la base de connaissances
for (var i = 0; i < botKnowledge.length; i++) {
var item = botKnowledge[i];
var found = false;
// On vérifie si un des mots-clés est dans le message
for (var j = 0; j < item.keywords.length; j++) {
if (lowerMessage.includes(item.keywords[j])) {
found = true;
break;
}
}
if (found) {
botReply = item.response;
break;
}
}

addMessage(botReply, 'bot');
}, 800);
}

chatSend.addEventListener('click', function() {
var message = chatInput.value.trim();
if (message !== "") {
processUserMessage(message);
chatInput.value = "";
}
});

chatInput.addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
var message = chatInput.value.trim();
if (message !== "") {
processUserMessage(message);
chatInput.value = "";
}
}
});

} else {
console.error("ERREUR : Impossible de trouver les éléments du chat.");
}
});
