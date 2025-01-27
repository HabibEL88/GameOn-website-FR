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
const formulaire = document.getElementById("reserve");
function closeModale(el) {
console.log(el.target);
const formulaire = document.getElementById("formulaire")
  // Je récupère la modal 
  modalbg.style.display = "none";
  formulaire.reset(); // reset du formulaire
  const deleteMessage = document.getElementById("confirmation"); 
  deleteMessage.style.display = "none" //je fais disparaitre 
  formulaire.style.display = "block";
  const buttonClose = document.querySelector(".button-close");
  console.log(buttonClose);
  if (buttonClose != null ){
    buttonClose.remove(); 
  }

}






//ici je crée une fonction afin de verifier et valider chaque etape du formulaire
function validateForm() {
  //je declare ici des variable afin de les utiliser pour valider les differentes condition
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
  const Formulaire = document.getElementById("formulaire");
  const modalBody = document.getElementsByClassName("modal-body");
  const inputButton = document.createElement("input");
  inputButton.classList.add("button");
  inputButton.classList.add("button-close")
  inputButton.value = "Fermer";
  inputButton.addEventListener("click", closeModale);


  // je crée une condition afin de verifier ici si  Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  if (first.value.length < 2) {
        errorFirst.style.display = "block";        
    errorFirst.textContent = "Veuillez remplir le champt Prénom";
    first.closest(".formData").setAttribute("data-error-visible", "true");

  } 
  else {    
    errorFirst.style.display = "none";
    firstChecked = true;    
    first.closest(".formData").setAttribute("data-error-visible", "false");
  }

  //je crée une condition afin de verifier ici si Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  if (last.value.length < 2) {  
    errorLastName.style.display = "block";
    errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    last.closest(".formData").setAttribute("data-error-visible", "true");
  }
  else {    
    errorLastName.style.display = "none";
    lastChecked = true;
    last.closest(".formData").setAttribute("data-error-visible", "false");
  }
  
  //3) je crée une condition afin de verifier ici si L'adresse électronique est valide.  
  if ( !email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ) { //regex pour verification format email
    errorEmail.style.display = "block";
    errorEmail.textContent = "Veuillez remplir le champ email";
    email.closest(".formData").setAttribute("data-error-visible", "true");
  }
  else {    
    errorEmail.style.display = "none";
    mailChecked = true;
    email.closest(".formData").setAttribute("data-error-visible", "false");
  }
  //je crée une condition afin de verifier si Pour la date de naissance une donnée est saisie.
  if (!birthdate.value.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/)) { //.match est utilisé pour verifier si la chaine de caractere respecte le regex
    errorBirthdate.style.display = "block";
    errorBirthdate.textContent = "Vous devez entrer votre date de naissance.";
    birthdate.closest(".formData").setAttribute("data-error-visible", "true");
  }
  else{
    errorBirthdate.style.display = "none";
    birthChecked = true;
    birthdate.closest(".formData").setAttribute("data-error-visible", "false");

  } 

  //je crée une condition afin de verifier si Pour le nombre de concours, une valeur numérique est saisie.
  if (!quantity.value.match(/^[0-9]+$/)) { //regex pour check if number
    errorQuantity.style.display = "block";
    errorQuantity.textContent = "Veuiller indiquer un nombre"
    quantity.closest(".formData").setAttribute("data-error-visible", "true");

  }
  else {
    errorQuantity.style.display = "none"
    quantityChecked = true;
    quantity.closest(".formData").setAttribute("data-error-visible", "false");

  };
//je crée une condition afin de verifier si Un bouton radio est sélectionné.
  if (loc1 || loc2 || loc3 || loc4 || loc5 || loc6) { //on reutilise ici les const declaré plus haut avec le .checked qui verifie si un bouton est coché ou pas 
    //|| ou logique renvoie vrai si et seulement si au moins un de ses opérandes est vrai 
    errorLoc.style.display = "none";
    radioChecked = true;
  }
  else{
    errorLoc.style.display = "block";
    errorLoc.textContent = "Vous devez choisir une option."
  }
  
  //je crée une condition afin de verifier si La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  if (!validation.checked) {
    errorCheckbox.style.display = "block";
    errorCheckbox.textContent = "Vous devez vérifier que vous acceptez les termes et conditions."   
  }
  else{
    errorCheckbox.style.display = "none"
    conditionsChecked = true
  }
  //je crée une condition afin de verifier si toute les condition son true pour validation du formulaire
  if (firstChecked === true &&  lastChecked === true && birthChecked === true && quantityChecked === true && radioChecked === true && conditionsChecked === true) {
    confirmation.style.display = "block";
    Formulaire.style.display = "none";
    modalBody[0].appendChild(inputButton); 

  }  
}








const validatebutton = document.querySelector(".btn-submit");
validatebutton.addEventListener("click", validateForm);

 