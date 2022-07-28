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

const formulaire = document.getElementById("reserve");

// Afficher des erreurs
// A/ Ajoute dans ton fichier .html un message d'erreur, que tu hide par défaut, affiche si nécessaire
// B/ Insérer dans le DOM l'erreur quand elle est là


function validateForm() {
  const first = document.getElementById("first");
  const errorFirst = document.getElementById("errorFirstName");
  if (first.value.length < 2) {
    errorFirst.style.display = "block";
    errorFirst.textContent = "Veuillez remplir le firstName";
  } 
  else {    
    errorFirst.style.display = "none";
    console.log("je suis là")
  }
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.


 const last = document.getElementById("last"); /*on crée une variable qui frecupere l'element HTML "last" */
  const errorLastName = document.getElementById("errorLastName"); 
  if (last.value.length < 2) {  // si seulement last.value = true si quelque chose dedans !=contraire de / || = ou / longueur 
    errorLastName.style.display = "block";
    errorLastName.textContent = "Veuillez remplir le lastname";
  }
  else {    
    errorLastName.style.display = "none";
  }

//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorMail");
  if ( !email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ) { //regex pour verification format email
    errorEmail.style.display = "block";
    errorEmail.textContent = "Veuillez remplir l'email";
  }
  else {    
    errorEmail.style.display = "none";
  }

//(3) L'adresse électronique est valide.
  /*const birthday = document.getElementById ("birthday");
  if (!first.value || first.value.length >= 2) {
    const errorFirst = document.getElementById ("errorFirstName");
    errorFirst.style.display = "block";
    errorFirst.textContent = "Veuillez remplir le firstName";
  }
  */
 const quantity = document.getElementById("quantity");
 const errorQuantity = document.getElementById("errorQuantity");
 
 let quantityInt = parseInt(quantity.value, 10) //parseInt change string en int (mettre ",10" pour convertir en base 10)
 console.log((typeof)quantityInt)
if(quantityInt == ""){


}

}

const validatebutton = document.querySelector(".btn-submit");
validatebutton.addEventListener("click", validateForm);

() 