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
  document.getElementById("formulaire").reset(); // reset du formulaire
  const deleteMessage = document.getElementById("confirmation") 
  deleteMessage.style.display = "none"
}


const formulaire = document.getElementById("reserve");

// Afficher des erreurs
// A/ Ajoute dans ton fichier .html un message d'erreur, que tu hide par défaut, affiche si nécessaire
// B/ Insérer dans le DOM l'erreur quand elle est là




function validateForm() {
  let firstChecked;
  let lastChecked;
  let mailChecked;
  let birthChecked;
  let quantityChecked;
  let radioChecked;
  let conditionsChecked;

  
  const confirmation = document.getElementById("confirmation")

  //Const error

  const errorFirst = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");   
  const errorEmail = document.getElementById("errorMail");
  const errorBirthdate = document.getElementById ("errorBirthdate");  
  const errorQuantity = document.getElementById("errorQuantity");
  const errorLoc = document.getElementById("errorLoc");
  const errorCheckbox = document.getElementById("errorCheckBox");
  //Use document.getElementById('id').checked //method for this. 
  //It will return the checked status of the radio button as a Boolean value. 
  // It can be either true or false.
  
  //Const entries
  const first = document.getElementById("first");
  const last = document.getElementById("last")
  const email = document.getElementById("email");  
  const birthdate = document.getElementById ("birthdate");
  const quantity = document.getElementById("quantity");
  const loc1 = document.getElementById("location1").checked; 
  const loc2 = document.getElementById("location2").checked;
  const loc3 = document.getElementById("location3").checked; 
  const loc4 = document.getElementById("location4").checked; 
  const loc5 = document.getElementById("location5").checked; 
  const loc6 = document.getElementById("location6").checked;  
  const validation = document.getElementById("checkbox1");
  
  
  
  if (first.value.length < 2) {
    errorFirst.style.display = "block";
    errorFirst.textContent = "Veuillez remplir le champt Prénom";
  } 
  else {    
    errorFirst.style.display = "none";
    firstChecked = true;
  }
 ; /*on crée une variable qui frecupere l'element HTML "last" */
  
  if (last.value.length < 2) {  // si seulement last.value = true si quelque chose dedans !=contraire de / || = ou / longueur 
    errorLastName.style.display = "block";
    errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else {    
    errorLastName.style.display = "none";
    lastChecked = true;
  }
 
  if ( !email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ) { //regex pour verification format email
    errorEmail.style.display = "block";
    errorEmail.textContent = "Veuillez remplir le champ email";
  }
  else {    
    errorEmail.style.display = "none";
    mailChecked = true;
  }
  
  if (!birthdate.value.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/)) {
    errorBirthdate.style.display = "block";
    errorBirthdate.textContent = "Vous devez entrer votre date de naissance.";
  }
  else{
    errorBirthdate.style.display = "none";
    birthChecked = true;
  } 
 //let quantityInt = parseInt(quantity.value, 10); //parseInt change string en int (mettre ",10" pour convertir en base 10)
 
  if (!quantity.value.match(/^[0-9]+$/)) { //regex pour check if number
    errorQuantity.style.display = "block";
    errorQuantity.textContent = "Veuiller indiquer un nombre"
  }
  else {
    errorQuantity.style.display = "none"
    quantityChecked = true;
  };

  if (loc1 || loc2 || loc3 || loc4 || loc5 || loc6) {
    errorLoc.style.display = "none";
    radioChecked = true;
  }
  else{
    errorLoc.style.display = "block";
    errorLoc.textContent = "Vous devez choisir une option."
  }
  
  if (!validation.checked) {
    errorCheckbox.style.display = "block";
    errorCheckbox.textContent = "Vous devez vérifier que vous acceptez les termes et conditions."   
  }
  else{
    errorCheckbox.style.display = "none"
    conditionsChecked = true
  }

  if (firstChecked === true &&  lastChecked === true && birthChecked === true && quantityChecked === true && radioChecked === true && conditionsChecked === true) {
    confirmation.style.display = "block"
  }  
}







const validatebutton = document.querySelector(".btn-submit");
validatebutton.addEventListener("click", validateForm);

 