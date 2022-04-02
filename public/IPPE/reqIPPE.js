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
	//Valeur de chacun et enleve les champs vides
	const nom = capitalizeFirstLetter(document.getElementById('nom').value).trim();
	const prenom1 = capitalizeFirstLetter(document.getElementById('prenom1').value).trim();
	const prenom2 = capitalizeFirstLetter(document.getElementById('prenom2').value).trim();
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
	if(checkMandatoryInput(nom,prenom1,annee,mois,jour) && formatDateValid(annee,mois,jour))
		window.location = `http://localhost:5000/IPPEResponse?nomFamille=${nom}&prenom1=${prenom1}&prenom2=${prenom2}&masculin=${sexe}&dateNaissance=${date}`;
	else
		alert('Erreur: des entrées obligatoires ne sont pas remplies ou la date n\'est pas valide');
    
    
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
	//Check la validité des champs
	const anneeValid = checkAnneeInput(annee)
	const moisValid = checkMoisInput(mois)
	const jourValid = checkJourInput(jour)
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
	if (jour === '' || !jourValid){
		msgJour.classList.remove('is-hidden');
		errorFalse = false;
	} else 
		msgJour.classList.add('is-hidden');
    
	if (mois === '' || !moisValid){
		msgMois.classList.remove('is-hidden');
		errorFalse = false;
	} else 
		msgMois.classList.add('is-hidden');
    
	if (annee === '' || !anneeValid){
		msgAnnee.classList.remove('is-hidden');
		errorFalse = false;
	} else {
		msgAnnee.classList.add('is-hidden');
	}
	return errorFalse;
}

//Check la validité des jours
function checkJourInput(str){
    let strToInt = parseInt(str)
    if (strToInt > 31 || strToInt < 1){
        return false
    }else {
        return /^\d+$/.test(str);
    }
}
//Check la validité des mois
function checkMoisInput(str){
    let strToInt = parseInt(str)
    if (strToInt > 12 || strToInt < 1){
        return false
    }else {
        return /^\d+$/.test(str);
    }
}
//Check la validité des années
function checkAnneeInput(str){
    let strToInt = parseInt(str)
    if (strToInt > 2020 || strToInt < 1910){
        return false
    }else {
        return /^\d+$/.test(str);
    }
}
//Check la validité de la date
function formatDateValid(annee,mois,jour) {
    const day = new Date(annee,mois, 0)
    const splitDate = day.toUTCString().split(' ');
    const dayMax = parseInt(splitDate[1])
    jour= parseInt(jour)
    if(dayMax < jour){
        return false
    } else {
        return true
    }
  }
