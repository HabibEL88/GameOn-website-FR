function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// COMMENTAIRE TYPE
// Je veux ajouter une fonctionnalité
// 1/ Je récupére l'élément => querySelector, querySelectorAll
// 2/ Je crée une fonction JS qui fait ce que je veux
// 3/ J'appelle cette fonction de la bonne manière
// 4/ Je vérifie les cas limites => j'ai pas l'élément, c'est null, undefined, etc.


// Close the Modale on click on X button
// 1/ Retrieve the close button from the DOM
const closebutton = document.querySelector(".close");
// 2/ Create a "Close function"
// ajouter un événement de clique sur le bouton, qui ferme la modale
closebutton.addEventListener("click", closeModale);
// 3/ J'écris la fonction de fermeture de la modale
function closeModale() {
  // Je récupère la modal 
  modalbg.style.display = "none";
}

const formulaire = document.forms["reserve"];
const firstName = formulaire.querySelector("#first");
console.debug(firstName);

// Afficher des erreurs
// A/ Ajoute dans ton fichier .html un message d'erreur, que tu hide par défaut, affiche si nécessaire
// B/ Insérer dans le DOM l'erreur quand elle est là


function validateForm() {
  // Exemple
  formulaire.querySelector(".error").style.display = "block"; 
}
