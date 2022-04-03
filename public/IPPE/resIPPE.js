<<<<<<< HEAD
import { nav, piedPage, Deconnection } from '../commun.js';

function GetParam() {
    const params = new URLSearchParams(window.location.search);
    const nom = params.get('nom');
    const prenomUn = params.get('prenom1');
    const prenomDeux = params.get('prenom2');
    const sexe = params.get('sexe'); // egale 0 ou 1
    const date = params.get('date');
    const data = {
        nom, prenomUn, prenomDeux, sexe, date,
    };
    console.log(`this is the url param ${data}`);
    return data;
}

async function Data() {
    const param = GetParam();
    // let sexeNum;
    // if (param.sexe){sexeNum="1";}else{sexeNum="0";}
    const stringDate = param.date.toString();
    const words = stringDate.split('-');
    const trueDate = (words[0] + words[1] + words[2]).toString();
    console.log('http://localhost:3000/ippeInfo?nom=Hébert&sexe=1&prenomUn=Francis&ddn=19921019&prenomDeux=');

    const api = await fetch(`http://localhost:3000/ippeInfo?nomFamille=${param.nom}&masculin=${param.sexe}&prenom1=${param.prenomUn}&dateNaissance=${trueDate}&prenom2=${param.prenomDeux}`);
    console.log(`http://localhost:3000/ippeInfo?nom=${param.nom}&sexe=${param.sexe}&prenomUn=${param.prenomUn}&ddn=${trueDate}&prenomDeux=${param.prenomDeux}`);
    // const api = await fetch(`http://localhost:3000/ippeInfo?nom=Michaud&sexe=0&prenomUn=Noemie&ddn=20020708&prenomDeux=`);
    // const api = await fetch(`http://localhost:3000/ippeInfo?nom=Hébert&sexe=1&prenomUn=Francis&ddn=19921019&prenomDeux=`);
    // traiter la réponse
    const data = await api.json();
    if (api.ok) {
        // works
    } else {
        console.error('ERROR');
    }
    return (data);
}

// for the person
async function Personne() {
    const obj = GetParam();
    const Matricule = sessionStorage.getItem('Matricule');
    const Nom = sessionStorage.getItem('Nom');
    let sexeNum;
    if (obj.sexe) { sexeNum = 'Homme'; } else { sexeNum = 'Femme'; }
    const affichage = `
=======
import { nav,piedPage,Deconnection } from '../commun.js';
nav();
piedPage();
document.getElementById('déconnection').addEventListener('click',Deconnection);
Personne();
Pagination();

//Receuille les parametres
function GetParam(){
	const params = new URLSearchParams(window.location.search);
	const nomFamille = params.get('nomFamille');
	const prenomUn = params.get('prenom1');
	const prenomDeux = params.get('prenom2');
	const sexe = params.get('masculin'); // egale 0 ou 1
	const dateNaissance = params.get('dateNaissance');
	let data = {nomFamille: nomFamille, prenomUn: prenomUn, prenomDeux: prenomDeux, sexe: sexe, dateNaissance: dateNaissance};
	return data;
}
//Fetch les datas de la personne
async function Data(){
	let param = GetParam();
	const url = new URL(`http://localhost:3000/ippeInfo?nomFamille=${param.nomFamille}&masculin=${param.sexe}&prenom1=${param.prenomUn}&dateNaissance=${param.dateNaissance}&prenom2=${param.prenomDeux}`);
	const api = await fetch(url);
	if (api.ok) {
		let data = await api.json();
		return data;
	} else 
		console.error('ERROR');
   
}
async function getNatCrime(idCrime){
	const urlNatCrime= new URL(`http://localhost:3000/natcrime?IdNatureCrime=${idCrime}`);
	let response = await fetch(urlNatCrime);
	if (response.ok) {
		let natureCrime = await response.json();
		return natureCrime[0].Nature;
	}
}
//Attribut le bon type d'affichage selon le type d'evenement
function GetFunction(personne, data){
	switch(data.typeEvenement) {
	case 'Recherché':
		Rechercher(data);
		break;
	case 'Sous Observation':
		Observation(data);
		break;
	case 'Accusé':
		Accuser(data);
		break;
	case 'Probation':
		Probation(personne,data);
		break;
	case 'Libération Conditionnelle':
		LibConditionnelle(personne, data);
		break;
	case 'Disparu':
		Disparue(personne, data);
		break;
	case 'Interdit':
		Interdit(data);
		break;
	default:
		Negatif();
	}
}
//Creations des boutons pour l'affichage
async function Pagination(){
	const data = await Data();
	//GetFunction est appelé pour afficher la première page automatiquement.
	GetFunction(data[0],data[0].IPPE[0]);
	let datalength = data.length;
	console.log(data[0].FPS);
	let divPagination = document.getElementById('pagination');

	//Bouton seulement pour le look (si negatif)
	if(datalength === 0){
		let liNothing = document.createElement('li');
		divPagination.appendChild(liNothing);
		let aNothing = document.createElement('a');
		aNothing.setAttribute('class','pagination-link');
		aNothing.setAttribute('id','pageNothing');
		aNothing.setAttribute('aria-label','Goto page nothing');
		aNothing.innerHTML= '1';
		liNothing.appendChild(aNothing);
		aNothing.addEventListener('click', Negatif);
		Negatif();
	}

	//Ajout des boutons qui permetterons d'afficher les informations
	let compteur = 0;
	data[0].IPPE.forEach(element => {
		let li = document.createElement('li');
		divPagination.appendChild(li);
		let a = document.createElement('a');
		a.setAttribute('class','pagination-link');
		a.setAttribute('id',`page${compteur+1}`);
		a.setAttribute('aria-label',`Goto page ${compteur+1}`);
		a.innerHTML= `${compteur+1}`;
		li.appendChild(a);
		//Fonction qui fait apparaitre les informations lors du click
		document.getElementById(`page${compteur+1}`).addEventListener('click', function(){
			let printing = document.getElementById('detail');
			printing.innerHTML = '';
			GetFunction(data[0],element);
		});
		compteur++;
	});
	//Rajoute l'info Fps comme dernière page si présente
	if(data[0].FPS){
		let li = document.createElement('li');
		divPagination.appendChild(li);
		let a = document.createElement('a');
		a.setAttribute('class','pagination-link');
		a.setAttribute('id',`page${compteur+1}`);
		a.setAttribute('aria-label',`Goto page ${compteur+1}`);
		a.innerHTML= `${compteur+1}`;
		li.appendChild(a);
		//Fonction qui fait apparaitre les informations lors du click
		document.getElementById(`page${compteur+1}`).addEventListener('click', function(){
			let printing = document.getElementById('detail');
			printing.innerHTML = '';
			PageFps(data[0],data[0].FPS);
		});
	}
}
//Affiche l'information de la personne rechercher et du User
async function Personne(){
	const obj = GetParam();
	let Matricule = sessionStorage.getItem('Matricule');
	let Nom = sessionStorage.getItem('Nom');
	let sexeNum = obj.sexe == '1' ? 'Homme' : 'Femme';
	const affichage = `
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <table class="table">
         <tr>
            <th>Nom:</th>
            <td>${obj.nomFamille}</td>
            <th>Prenom1:</th>
            <td>${obj.prenomUn}</td>
         </tr>
         <tr>
            <th>Sexe:</th>
            <td>${sexeNum}</td>
            <th>Prenom2:</th>
            <td>${obj.prenomDeux}</td>
         </tr>
         <tr>
            <th>Ddn:</th>
            <td colspan = 4>${obj.dateNaissance}</td>
         </tr>
         <tr>
            <th>Remarque:</th>
            <td>${Nom}</td>
            <th> matricule:</th>
            <td>${Matricule} </td>
         </tr>
      </table>
    `;
<<<<<<< HEAD
    const printing = document.getElementById('infoPersonne');
    printing.innerHTML = affichage;
    console.log(affichage);
}
// if negatif
function Negatif() {
    const affichage = '<strong>*** Negatif ***</strong>';
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
    console.log(affichage);
}
// personne rechercher
function Rechercher(obj) {
    const affichage = `<strong>*** Rechercher ***</strong><br>
=======
	let printing = document.getElementById('infoPersonne');
	printing.innerHTML = affichage;
}
//Affichage si negatif 
function Negatif(){
	const affichage = '<strong>*** Negatif ***</strong>';
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
//Affichage si recherché
async function Rechercher(obj){
	const affichage = `<strong>*** Recherché ***</strong><br>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <table>
         <tr>
            <th>Mandat:</th>
            <td>${obj.mandat}</td>
         </tr>
         <tr>
            <th>cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de Mandat:</th>
            <td>${obj.noMandat}</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${await getNatCrime(obj.idNatureCrime)}</td>
         </tr>
         <tr>
            <th>Numero d'evenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
      </table>`;
<<<<<<< HEAD
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
    console.log(affichage);
}

// personne sous observation
function Observation(obj) {
    const affichage = `<strong>*** Sous Observation ***</strong><br><br>
=======
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
//Affichage si sous observation
async function Observation(obj){
	const affichage = `<strong>*** Sous Observation ***</strong><br><br>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <p>Ne pas révéler au sujet l'intrérêt qu'on lui porte</p>
    <table>
         <tr>
            <th>Motif:</th>
            <td>${obj.motif}</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${await getNatCrime(obj.idNatureCrime)}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Dossier d'enquête :</th>
            <td>${obj.dossierEnquete}</td>
         </tr>
    </table><br>
    <p>Compléter ficher d'interpellation</p>
    <p>Acheminer à l'unité des Renseignements criminels</p>`;
<<<<<<< HEAD
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
    console.log(affichage);
}

// personne accuser
function Accuser(obj) {
    const affichage = `<strong>*** Accuser ***</strong><br><br>
=======
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
//Affichage si accusé
async function Accuser(personne, obj){
	const affichage = `<strong>*** Accusé ***</strong><br><br>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <table>
         <tr>
            <th>Cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de cause:</th>
            <td>${obj.noCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${await getNatCrime(obj.idNatureCrime)}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
<<<<<<< HEAD
    <p><strong>Avoir comme adress le: </strong> ${obj.adresse}</p><br>
    <p style="padding-left:10%">${obj.condition[0]}<br>
    Doit garder la paix et avoir bonne conduite.</p>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// personne en probation
function Probation(obj) {
    const affichage = `<strong>*** Probation ***</strong><br><br>
=======
    <p style="padding-left:10%">${condDisplay(obj.conditions,personne)}</p><br>`;
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
//TODO fix conditions
// Affichage si la personne est en probation
async function Probation(personne, obj){
	const affichage = `<strong>*** Probation ***</strong><br><br>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <table>
         <tr>
            <th>Cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de cause:</th>
            <td>${obj.noCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${await getNatCrime(obj.idNatureCrime)}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
         <tr>
            <th>Fin de sentence prevue:</th>
            <td>${formatDate(obj.finSentence)}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
    <p style="padding-left:10%">${condDisplay(obj.conditions,personne)}</p><br>
    <table>
    <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
<<<<<<< HEAD
            <th>Agent de probation :</th>
            <td>${obj.agentProbation}</td>
=======
            <th align= "center">Agent de probation :</th>
         </tr>
         <tr>
            <td align= "center">${obj.agentProbation}</td>
         </tr>
         <tr>
         <th align= "center">Téléphone :</th>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
         </tr>
         <tr>
            <td align= "center">${formatTel(obj.telephone, obj.poste)}</td>
         </tr>
    </table><br>`;
<<<<<<< HEAD
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}

// liberter conditionelle
function LibConditionnelle(obj) {
    const affichage = `<strong>*** Liberter conditionnelle ***</strong><br><br>
=======
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
//Affichage si la personne est sous liberté conditionelle
async function LibConditionnelle(personne, obj){
	const affichage = `<strong>*** Liberté conditionnelle ***</strong><br><br>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <table>
         <tr>
            <th>Cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de cause:</th>
            <td>${obj.noCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${await getNatCrime(obj.idNatureCrime)}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>FPS:</th>
            <td>${personne.FPS.NoFPS}</td>
         </tr>
         <tr>
            <th>Lieu de détention :</th>
            <td>${obj.lieuDetention}</td>
         </tr>
         <tr>
            <th>Fin de la sentence prévue :</th>
            <td>${formatDate(obj.finSentence)}</td>
         </tr>
    </table><br>
    <p><strong>Condition(s):</strong></p>
    <p style="padding-left:10%">${condDisplay(obj.conditions,personne)}</p><br>
    <table>
    <tr>
            <th>___________________________________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
<<<<<<< HEAD
            <th>Agent de libération conditionnelle à contacter :</th>
            <td>${obj.agentLiberation}</td>
=======
            <th align= "center">Agent de libération</th>
         </tr>
         <tr>
            <th align= "center">conditionnelle à contacter :</th>
         </tr>
         <tr>
            <td align= "center">${obj.agentLiberation}</td>
         </tr>
         <tr>
            <th> </th>
         </tr>
         <tr>
            <th align= "center">Téléphone :</th>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
         </tr>
         <tr>
            <td align= "center">${formatTel(obj.telephone, obj.poste)}</td>
         </tr>
    </table><br>`;
<<<<<<< HEAD
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}

// personne disparue
function Disparue(obj) {
    function sante(objet) {
        let retour = 'L\'individu est ';
        if (objet.problemesSante.toxicomanie) { retour += 'toxicomane '; }
        if (objet.problemesSante.desorganise) { retour += 'desorganise '; }
        if (objet.problemesSante.depressif) { retour += 'depressif '; }
        if (objet.problemesSante.suicidaire) { retour += 'suicidaire '; }
        if (objet.problemesSante.violent) { retour += 'violent '; }
        retour += '.';
        return (retour);
    }
    const affichage = `<strong>*** Disparue ***</strong><br>
=======
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
// Affichage si disparue
function Disparue(personne, obj){
	const affichage = `<strong>*** Disparu ***</strong><br>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <table>
         <tr>
            <th>Numéro d'événement :</th>
            <td>${obj.noEvenement}</td>
         </tr>
         <tr>
            <th>Nature :</th>
            <td>${obj.nature}</td>
         </tr>
         <tr>
            <th>Dernière fois vu :</th>
<<<<<<< HEAD
            <td>${obj.vuDerniereFois}</td>
=======
            <td>${formatDate(obj.vuDerniereFois)}</td>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Description physique</th>
         </tr>
         <tr>
            <th>Race:</th>
<<<<<<< HEAD
            <td>${obj.descrPhysique.race}</td>
         </tr>
         <tr>
            <th>Taille:</th>
            <td>${obj.descrPhysique.taille}</td>
         </tr>
         <tr>
            <th>Poids:</th>
            <td>${obj.descrPhysique.poids}</td>
         </tr>
         <tr>
            <th>Yeux:</th>
            <td>${obj.descrPhysique.yeux}</td>
         </tr>
         <tr>
            <th>Cheveux:</th>
            <td>${obj.descrPhysique.cheveux}</td>
         </tr>
         <tr>
            <th>Marque:</th>
            <td>${obj.descrPhysique.marques}</td>
=======
            <td>${inconnue(personne.race)}</td>
         </tr>
         <tr>
            <th>Taille:</th>
            <td>${inconnue(personne.taille)}</td>
         </tr>
         <tr>
            <th>Poids:</th>
            <td>${inconnue(personne.poids)}</td>
         </tr>
         <tr>
            <th>Yeux:</th>
            <td>${inconnue(personne.yeux)}</td>
         </tr>
         <tr>
            <th>Cheveux:</th>
            <td>${inconnue(personne.cheveux)}</td>
         </tr>
         <tr>
            <th>Marque:</th>
            <td>${inconnue(personne.marques)}</td>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Description vestimentaire</th>
            <td></td>
         </tr>
         <tr>
            <th>Gilet:</th>
<<<<<<< HEAD
            <td>${obj.descrVestimentaire.gilet}</td>
         </tr>
         <tr>
            <th>Pantalon:</th>
            <td>${obj.descrVestimentaire.pantalon}</td>
         </tr>
         <tr>
            <th>Autre(s) vêtement(s) :</th>
            <td>${obj.descrVestimentaire.autreVetements}</td>
=======
            <td>${inconnue(personne.gilet)}</td>
         </tr>
         <tr>
            <th>Pantalon:</th>
            <td>${inconnue(personne.pantalon)}</td>
         </tr>
         <tr>
            <th>Autre(s) vêtement(s) :</th>
            <td>${inconnue(personne.autreVetement)}</td>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
      </table>
<<<<<<< HEAD
      <p><strong>Problématique de santé connu :</strong>${sante(obj)}</p>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}

// interdit de personne
function Interdit(obj) {
    const affichage = `<strong>*** Interdit ***</strong><br><br>
=======
      <p><strong>Problématique de santé connu :</strong>${santePersonne(personne)}</p>`;
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
// Affichage si la personne possède des interdits
async function Interdit(obj){
	const affichage = `<strong>*** Interdit ***</strong><br><br>
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
    <table>
    <tr>
            <th>Nature:</th>
            <td>${obj.nature}</td>
         </tr>
         <tr>
            <th>Cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de cause:</th>
            <td>${obj.noCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${await getNatCrime(obj.idNatureCrime)}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Expiration:</th>
            <td>${formatDate(obj.finSentence)}</td>
         </tr>
    </table>`;
<<<<<<< HEAD
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
=======
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}
//Gère l'affichage des conditions
function condDisplay(condition, personne){
	let checkFalse = true;
	const dataCond = []; 
	const numMaxCond = Object.keys(condition).length;
	for(let i = 0 ; i < numMaxCond; i++){
		checkFalse = true;
		dataCond.push(condition[i].libelle);
		for(let [key,value] of Object.entries(condition[i])){
			console.log(Object.entries(condition[i]));
			if(key !== 'libelle' && value !== null
         && key !== 'idCondition'){
				checkFalse = false;
				dataCond.push(value);
			} else if (value === 'Avoir comme adresse le'){
				dataCond.push(personne.Adresse1);
				if(personne.Adresse2 !== null)
					dataCond.push(` ou au ${personne.Adresse2}`);
            
			}
		}
		dataCond.push('<br>');
	}
	return dataCond.join(' ');
}
//Rajoute les - au num de telephone
function formatTel(tel, poste){
	let post = poste === null ? '' : poste;
	var telFormat = tel.slice(0, 3) + '-' + tel.slice(3, 6) + '-' + tel.slice(6);
	return telFormat +  ` Poste : ${post}`;  
} 
function formatDate(date){
	const slicedDate = date.slice(0, 10);
	return slicedDate;
}
//A FINIR-------------------------------
//S'occupe de l'affichage de l'état de santé
function santePersonne(personne){
	let sante = [];
	switch (personne){
	case personne.toxicomanie : sante.push('Toxicomane');
	case personne.desorganise : sante.push('Desorganise');
	case personne.depressif : sante.push('Depressif');
	case personne.violent : sante.push('Violent');
	case personne.suicidaire : sante.push('Suicidaire');
      break;
	default : sante.push('Aucun problème santé connue');
	}
	return sante;
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
}
// retour inconnue si null
<<<<<<< HEAD
function inconnue(data) {
    if (data === null) {
        return 'inconnue';
    }
    return data;
=======
function inconnue(data){
	if(data === null)
		return 'inconnu';
	else
		return data;
   
>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
}

// navigation section
function GetFunction(data) {
    console.log(`getFunction ${data}`);
    switch (data.titre) {
    case 'Recherché':
        Rechercher(data);
        break;
    case 'Sous Observation':
        Observation(data);
        break;
    case 'Accusé':
        Accuser(data);
        break;
    case 'Probation':
        Probation(data);
        break;
    case 'Libération Conditionnelle':
        LibConditionnelle(data);
        break;
    case 'Disparu':
        Disparue(data);
        break;
    case 'Interdit':
        Interdit(data);
        break;
    default:
        Negatif();
    }
}

// personne fps
<<<<<<< HEAD
function PageFps(obj) {
    let sante = '';
    if (obj.Violent) { sante += ' Violent,'; }
    if (obj.Echappe) { sante += ' Échappe,'; }
    if (obj.Suicidaire) { sante += ' Suicidaire,'; }
    if (obj.Desequilibre) { sante += ' Déséquilibré,'; }
    if (obj.Contagieux) { sante += ' Contagieux,'; }
    const affichage = `<br>
  <table>
       <tr>
          <th>FPS :</th>
          <td>${obj.NoFPS}</td>
       </tr>
       <tr>
          <th>CD :</th>
          <td>${obj.CD}</td>
       </tr>
       <tr>
          <th>*** Fichier Ouvert ***</th>
          <td></td>
       </tr>
       <tr>
          <th>______________________________</th>
          <td>______________________________</td>
       </tr>
       <tr>
          <th>Antecedents:</th>
          <td>${obj.Antecedents}</td>
       </tr>
       <tr>
          <th>Description physique</th>
       </tr>
       <tr>
          <th>Race:</th>
          <td>${inconnue(obj.Race)}</td>
       </tr>
       <tr>
          <th>Taille:</th>
          <td>${inconnue(obj.Taille)}</td>
       </tr>
       <tr>
          <th>Poids:</th>
          <td>${inconnue(obj.Poids)}</td>
       </tr>
       <tr>
          <th>Yeux:</th>
          <td>${inconnue(obj.Yeux)}</td>
       </tr>
       <tr>
          <th>Cheveux:</th>
          <td>${inconnue(obj.Cheveux)}</td>
       </tr>
       <tr>
          <th>Marque:</th>
          <td>${inconnue(obj.Marques)}</td>
       </tr>
     </table>
    <p><strong>Problématique de santé connu :</strong>${sante}</p>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}

async function Pagination() {
    console.log('hello world');
    const obj = await Data();
    const navlength = obj.length;
    console.log(`this is how long is the list: ${navlength}`);
    const divPagination = document.getElementById('pagination');

    // bouton nothing
    if (navlength === 0) {
        const liNothing = document.createElement('li');
        divPagination.appendChild(liNothing);
        const aNothing = document.createElement('a');
        aNothing.setAttribute('class', 'pagination-link');
        aNothing.setAttribute('id', 'pageNothing');
        aNothing.setAttribute('aria-label', 'Goto page nothing');
        aNothing.innerHTML = '1';
        liNothing.appendChild(aNothing);
        aNothing.addEventListener('click', Negatif);
        Negatif();
    }

    // if there is an fps
    if (obj[navlength - 1].titre === 'FPS') {
        for (let i = 0; i < navlength - 1; i += 1) {
            const li = document.createElement('li');
            divPagination.appendChild(li);
            const a = document.createElement('a');
            a.setAttribute('class', 'pagination-link');
            a.setAttribute('id', `page${i + 1}`);
            a.setAttribute('aria-label', `Goto page ${i + 1}`);
            a.innerHTML = `${i + 1}`;
            li.appendChild(a);
            // function btn
            document.getElementById(`page${i + 1}`).addEventListener('click', () => {
                GetFunction(obj[i]);
            });
            if (document.getElementById('page1')) {
                GetFunction(obj[0]);
            }
        }
        const lastli = document.createElement('li');
        divPagination.appendChild(lastli);
        const fps = document.createElement('a');
        fps.setAttribute('class', 'pagination-link');
        fps.setAttribute('id', 'pageFPS');
        fps.setAttribute('aria-label', 'Goto page fps');
        fps.innerHTML = 'fps';
        lastli.appendChild(fps);
        fps.addEventListener('click', () => {
            PageFps(obj[navlength - 1]);
        });
    } else {
        for (let i = 0; i < navlength; i += 1) {
            const li = document.createElement('li');
            divPagination.appendChild(li);
            const a = document.createElement('a');
            a.setAttribute('class', 'pagination-link');
            a.setAttribute('id', `page${i + 1}`);
            a.setAttribute('aria-label', `Goto page ${i + 1}`);
            a.innerHTML = `${i + 1}`;
            li.appendChild(a);
            // function btn
            document.getElementById(`page${i + 1}`).addEventListener('click', () => {
                GetFunction(obj[i + 1]);
            });
            if (document.getElementById('page1')) {
                GetFunction(obj[0]);
            }
        }
    }
}

nav();
piedPage();
document.getElementById('déconnection').addEventListener('click', Deconnection);

Personne();
Pagination();
=======
function PageFps(personne,obj){
	const affichage = `<br>
   <table>
        <tr>
           <th>FPS :</th>
           <td>${obj.NoFPS}</td>
        </tr>
        <tr>
           <th>CD :</th>
           <td>${obj.CD}</td>
        </tr>
        <tr>
           <th>*** Fichier Ouvert ***</th>
           <td></td>
        </tr>
        <tr>
           <th>______________________________</th>
           <td>______________________________</td>
        </tr>
        <tr>
           <th>Antécédents:</th>
           <td>${obj.Antecedents}</td>
        </tr>
        <tr>
           <th>Description physique</th>
        </tr>
        <tr>
           <th>Race:</th>
           <td>${inconnue(personne.Race)}</td>
        </tr>
        <tr>
           <th>Taille:</th>
           <td>${inconnue(personne.Taille)}</td>
        </tr>
        <tr>
           <th>Poids:</th>
           <td>${inconnue(personne.Poids)}</td>
        </tr>
        <tr>
           <th>Yeux:</th>
           <td>${inconnue(personne.Yeux)}</td>
        </tr>
        <tr>
           <th>Cheveux:</th>
           <td>${inconnue(personne.Cheveux)}</td>
        </tr>
        <tr>
           <th>Marque:</th>
           <td>${inconnue(personne.Marques)}</td>
        </tr>
        <br>
        <tr>
         <th>Problématique de santé connu :</th>
         <td></td>
        </tr>
        <tr>
         <td colspan=2 style="padding-left:10%">${santePersonne(obj)}</td>
       </tr>
      </table>`;
	let printing = document.getElementById('detail');
	printing.innerHTML = affichage;
}


>>>>>>> 3933d26365d9325db0cba71e0f372872e2d13889
