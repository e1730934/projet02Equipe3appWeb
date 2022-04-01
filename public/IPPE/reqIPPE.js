import { nav,piedPage,Matricule,Nom,connection,Deconnection } from '../commun.js';
//connection()
nav();
piedPage();

document.getElementById('déconnection').addEventListener('click',Deconnection);
document.getElementById('nom').innerHTML=Matricule;
document.getElementById('matricule').innerHTML=Nom;

let submit = document.getElementById('submit');
let cancel = document.getElementById('cancel');
console.log(submit);
submit.addEventListener('click',()=>{
	// elements
	const nom = capitalizeFirstLetter(document.getElementById('nom').value);
	const prenom1 = capitalizeFirstLetter(document.getElementById('prenom1').value);
	const prenom2 = capitalizeFirstLetter(document.getElementById('prenom2').value);
	let sexe = document.getElementById('sexe').value;
	//Change le sexe en binaire
	sexe = sexe === 'Femme'? sexe = 0: sexe = 1;
	//Identifier les inputs de la date de naissance
	let annee = document.getElementById('annee').value;
	let mois = document.getElementById('mois').value;
	let jour = document.getElementById('jour').value;
	//Rajoute un zero pour le format de jour et mois
	if(jour.length == 1)
		jour = '0' + jour;
    
	if(mois.length == 1)
		mois = '0' + mois;
    
	//Mettre les valeur dans un String pour l'envoie en date
	const date =`${annee}-${mois}-${jour}`;
	//Gerrance des erreurs
	if(checkMandatoryInput(nom,prenom1,annee,mois,jour))
		window.location = `http://localhost:5000/IPPEResponse?nomFamille=${nom}&prenom1=${prenom1}&prenom2=${prenom2}&masculin=${sexe}&dateNaissance=${date}`;
	else
		console.error('Error: Input missings');
    
    
});
cancel.addEventListener('click',()=>{
	window.location.href = 'http://localhost:5000/Acceuil';
});


//Pour convertir la permiere lettre d'un string en majuscule
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
//S'occupe de l'affichage des messages d'erreur
function checkMandatoryInput(nom,prenom1,annee,mois,jour){
	//Identification de l'emplacement des messages
	const msgNom = document.getElementById('nomError');
	const msgPrenomUn = document.getElementById('prenom1Error');
	const msgJour = document.getElementById('jourError');
	const msgMois = document.getElementById('moisError');
	const msgAnnee = document.getElementById('anneeError');
	//Retourne true s'il n'y a pas d'erreur
	let errorFalse = true;
	//Condition champs vides
	if (nom === '') {
		msgNom.classList.remove('is-hidden');
		errorFalse = false;
	} else 
		msgNom.classList.add('is-hidden');
    
	if (prenom1 === '') {
		msgPrenomUn.classList.remove('is-hidden');
		errorFalse = false;
	} else 
		msgPrenomUn.classList.add('is-hidden');
    
	//s'assure que les dates entrees sont conforme
	if (jour === ''){
		msgJour.classList.remove('is-hidden');
		errorFalse = false;
	} else 
		msgJour.classList.add('is-hidden');
    
	if (mois === ''){
		msgMois.classList.remove('is-hidden');
		errorFalse = false;
	} else 
		msgMois.classList.add('is-hidden');
    
	if (annee === ''){
		msgAnnee.classList.remove('is-hidden');
		errorFalse = false;
	} else {
		console.log(typeof annee);
		msgAnnee.classList.add('is-hidden');
	}
	return errorFalse;
}