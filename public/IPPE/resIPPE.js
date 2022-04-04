/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import { nav, piedPage, Deconnection } from '../commun.js';

const local3000 = 'http://localhost:3000';

nav();
piedPage();
document.getElementById('déconnection').addEventListener('click', Deconnection);
// Receuille les parametres
function GetParam() {
    const params = new URLSearchParams(window.location.search);
    const nomFamille = params.get('nomFamille');
    const prenomUn = params.get('prenom1');
    const prenomDeux = params.get('prenom2');
    const sexe = params.get('masculin'); // egale 0 ou 1
    const dateNaissance = params.get('dateNaissance');
    const data = {
        nomFamille, prenomUn, prenomDeux, sexe, dateNaissance,
    };
    return data;
}
// --------------Gérance d'affichage-----------------
// Gère l'affichage des conditions
async function getNatCrime(idCrime) {
    const urlNatCrime = new URL(`${local3000}/natcrime?IdNatureCrime=${idCrime}`);
    const response = await fetch(urlNatCrime);
    if (response.ok) {
        const natureCrime = await response.json();
        return natureCrime[0].Nature;
    }
    const natureCrime = await response.json();
    return console.error(natureCrime.status);
}
// Gère l'affichage des conditions
function condDisplay(condition, personne) {
    const dataCond = [];
    const numMaxCond = Object.keys(condition).length;
    for (let i = 0; i < numMaxCond; i += 1) {
        dataCond.push(condition[i].libelle);
        for (const [key, value] of Object.entries(condition[i])) {
            if (key !== 'libelle' && value !== null
           && key !== 'idCondition') {
                dataCond.push(value);
            } else if (value === 'Avoir comme adresse le') {
                dataCond.push(personne.Adresse1);
                if (personne.Adresse2 !== null) { dataCond.push(` ou au ${personne.Adresse2}`); }
            }
        }
        dataCond.push('<br>');
    }
    return dataCond.join(' ');
}
// Rajoute les - au num de telephone
function formatTel(tel, poste) {
    const post = poste === null ? '' : poste;
    const telFormat = `${tel.slice(0, 3)}-${tel.slice(3, 6)}-${tel.slice(6)}`;
    return `${telFormat} Poste : ${post}`;
}
// Retiens la date en format YYYY-MM-DD
function formatDate(date) {
    const slicedDate = date.slice(0, 10);
    return slicedDate;
}
// S'occupe de l'affichage de l'état de santé
function santePersonne(personne) {
    const sante = [];
    let probKnow = false;
    if (personne.toxicomanie) { sante.push('Toxicomane'); probKnow = true; }
    if (personne.desorganise) { sante.push('Desorganise'); probKnow = true; }
    if (personne.depressif) { sante.push('Depressif'); probKnow = true; }
    if (personne.violent) { sante.push('Violent'); probKnow = true; }
    if (personne.suicidaire) { sante.push('Suicidaire'); probKnow = true; }
    if (!probKnow) sante.push('Aucun problème santé connue');
    return sante.join();
}
// retour inconnue si null
function inconnue(data) {
    if (data === null || data === undefined) { return 'inconnu'; }
    return data;
}
// ------------Fin Gérance d'affichage---------------

// ----------------Affichage html--------------------
// Affiche l'information de la personne rechercher et du User

// personne fps
function PageFps(personne, obj) {
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
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
async function Personne() {
    const obj = GetParam();
    const Matricule = sessionStorage.getItem('Matricule');
    const Nom = sessionStorage.getItem('Nom');
    const sexeNum = obj.sexe === '1' ? 'Homme' : 'Femme';
    const affichage = `
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
    const printing = document.getElementById('infoPersonne');
    printing.innerHTML = affichage;
}
// Affichage si negatif
function Negatif() {
    const affichage = '<strong>*** Negatif ***</strong>';
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// Affichage si recherché
async function Rechercher(obj) {
    const affichage = `<strong>*** Recherché ***</strong><br>
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
           <th>Numéro de Mandat:</th>
           <td style="vertical-align:bottom;">${obj.noMandat}</td>
        </tr>
        <tr>
           <th>Nature du crime:</th>
           <td>${await getNatCrime(obj.idNatureCrime)}</td>
        </tr>
        <tr>
           <th>Numero d'evenement:</th>
           <td style="vertical-align:bottom;">${obj.noEvenement}</td>
        </tr>
     </table>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// Affichage si sous observation
async function Observation(obj) {
    const affichage = `<strong>*** Sous Observation ***</strong><br><br>
   <table>
        <tr>
           <th colspan= 2>*Ne pas révéler au sujet l'intrérêt qu'on lui porte*</th>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
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
           <td style="vertical-align:bottom;">${obj.noEvenement}</td>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Dossier d'enquête :</th>
           <td>${obj.dossierEnquête}</td>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th colspan= 2>*Compléter ficher d'interpellation*</th>
        </tr>
        <tr>
           <th colspan= 2>*Acheminer à l'unité des Renseignements criminels*</th>
        </tr>
   </table><br>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// Affichage si accusé
async function Accuser(personne, obj) {
    const affichage = `<strong>*** Accusé ***</strong><br><br>
  
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
           <td vertical-align:bottom;>${obj.noEvenement}</td>
        </tr>
   </table><br>
   <p><strong>Condition: </strong></p>
   <p style="padding-left:10%">${condDisplay(obj.conditions, personne)}</p><br>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// Affichage si la personne est en probation
async function Probation(personne, obj) {
    const affichage = `<strong>*** Probation ***</strong><br><br>
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
           <td vertical-align:bottom;>${obj.noEvenement}</td>
        </tr>
        <tr>
           <th>Fin de sentence prevue:</th>
           <td>${formatDate(obj.finSentence)}</td>
        </tr>
   </table><br>
   <p><strong>Condition: </strong></p>
   <p style="padding-left:10%">${condDisplay(obj.conditions, personne)}</p><br>
   <table>
   <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Agent de probation :</th>
        </tr>
        <tr>
           <td style="padding-left:10%">${obj.agentProbation}</td>
        </tr>
        <tr>
        <th>Téléphone :</th>
        </tr>
        <tr>
           <td style="padding-left:10%">${formatTel(obj.telephone, obj.poste)}</td>
        </tr>
   </table><br>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// Affichage si la personne est sous liberté conditionelle
async function LibConditionnelle(personne, obj) {
    const affichage = `<strong>*** Liberté conditionnelle ***</strong><br><br>
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
           <td vertical-align:bottom;>${obj.noEvenement}</td>
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
   <p style="padding-left:10%">${condDisplay(obj.conditions, personne)}</p><br>
   <table>
   <tr>
           <th>___________________________________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
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
        </tr>
        <tr>
           <td align= "center">${formatTel(obj.telephone, obj.poste)}</td>
        </tr>
   </table><br>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// Affichage si disparue
function Disparue(personne, obj) {
    const affichage = `<strong>*** Disparu ***</strong><br>
   <table>
        <tr>
           <th>Numéro d'événement :</th>
           <td vertical-align:bottom;>${obj.noEvenement}</td>
        </tr>
        <tr>
           <th>Nature :</th>
           <td>${obj.nature}</td>
        </tr>
        <tr>
           <th>Dernière fois vu :</th>
           <td>${formatDate(obj.vuDerniereFois)}</td>
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
           <td>${inconnue(personne.gilet)}</td>
        </tr>
        <tr>
           <th>Pantalon:</th>
           <td>${inconnue(personne.pantalon)}</td>
        </tr>
        <tr>
           <th>Autre(s) vêtement(s) :</th>
           <td>${inconnue(personne.autreVetement)}</td>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Problématique de santé connu :</th>
           <td></td>
        </tr>
        <tr>
         <td colspan=2 style="padding-left:10%">${santePersonne(obj)}</td>
        </tr>
     </table>`;
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// Affichage si la personne possède des interdits
async function Interdit(obj) {
    const affichage = `<strong>*** Interdit ***</strong><br><br>
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
           <td vertical-align:bottom;>${obj.noEvenement}</td>
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
    const printing = document.getElementById('detail');
    printing.innerHTML = affichage;
}
// ---------------------Fin Affichage HTLM----

// Fetch les datas de la personne
async function Data() {
    const param = GetParam();
    const url = new URL(`${local3000}/ippeInfo?nomFamille=${param.nomFamille}&masculin=${param.sexe}&prenom1=${param.prenomUn}&dateNaissance=${param.dateNaissance}&prenom2=${param.prenomDeux}`);
    const api = await fetch(url);
    if (api.ok) {
        const data = await api.json();
        return data;
    }
    Negatif();
}
// Attribut le bon type d'affichage selon le type d'evenement
function GetFunction(personne, data) {
    if (data) {
        switch (data.typeEvenement) {
        case 'Recherché':
            Rechercher(data);
            break;
        case 'Sous observation':
            Observation(data);
            break;
        case 'Accusé':
            Accuser(personne, data);
            break;
        case 'Probation':
            Probation(personne, data);
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
        default: Negatif();
        }
    } else {
        Negatif();
    }
}
// Creations des boutons pour l'affichage
async function Pagination() {
    const data = await Data();
    const divPagination = document.getElementById('pagination');
    if (data !== undefined) {
        const datalength = data.length;
        // GetFunction est appelé pour afficher la première page automatiquement.
        GetFunction(data[0], data[0].IPPE[0]);

        // Bouton seulement pour le look (si negatif)
        if (datalength === 0) {
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

        // Ajout des boutons qui permetterons d'afficher les informations
        let compteur = 0;
        data[0].IPPE.forEach((element) => {
            const li = document.createElement('li');
            divPagination.appendChild(li);
            const a = document.createElement('a');
            a.setAttribute('class', 'pagination-link');
            a.setAttribute('id', `page${compteur + 1}`);
            a.setAttribute('aria-label', `Goto page ${compteur + 1}`);
            a.innerHTML = `${compteur + 1}`;
            li.appendChild(a);
            // Fonction qui fait apparaitre les informations lors du click
            document.getElementById(`page${compteur + 1}`).addEventListener('click', () => {
                const printing = document.getElementById('detail');
                printing.innerHTML = '';
                GetFunction(data[0], element);
            });
            compteur += 1;
        });
        // Rajoute l'info Fps comme dernière page si présente
        if (data[0].FPS) {
            const li = document.createElement('li');
            divPagination.appendChild(li);
            const a = document.createElement('a');
            a.setAttribute('class', 'pagination-link');
            a.setAttribute('id', `page${compteur + 1}`);
            a.setAttribute('aria-label', `Goto page ${compteur + 1}`);
            a.innerHTML = `${compteur + 1}`;
            li.appendChild(a);
            // Fonction qui fait apparaitre les informations lors du click
            document.getElementById(`page${compteur + 1}`).addEventListener('click', () => {
                const printing = document.getElementById('detail');
                printing.innerHTML = '';
                PageFps(data[0], data[0].FPS);
            });
        }
    } else {
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
}
Personne();
Pagination();
