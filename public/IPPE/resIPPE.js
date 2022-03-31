import { nav,piedPage,Deconnection } from '../commun.js';
nav();
piedPage();
document.getElementById("déconnection").addEventListener('click',Deconnection)
Personne();
Pagination();

//Receuille les parametres
function GetParam(){
   const params = new URLSearchParams(window.location.search);
   const nomFamille = params.get("nomFamille");
   const prenomUn = params.get("prenom1");
   const prenomDeux = params.get("prenom2");
   const sexe = params.get("masculin"); // egale 0 ou 1
   const dateNaissance = params.get("dateNaissance");
   let data = {nomFamille: nomFamille, prenomUn: prenomUn, prenomDeux: prenomDeux, sexe: sexe, dateNaissance: dateNaissance};
   return data;
}
//Fetch les datas de la personne
async function Data(){
   let param = GetParam()
   const url = new URL(`http://localhost:3000/ippeInfo?nomFamille=${param.nomFamille}&masculin=${param.sexe}&prenom1=${param.prenomUn}&dateNaissance=${param.dateNaissance}&prenom2=${param.prenomDeux}`)
   const api = await fetch(url);
   if (api.ok) {
      let data = await api.json();
      return data;
   } else {
      console.error('ERROR')
   }
}
async function getNatCrime(idCrime){
   let response = await fetch(`http://localhost:3000/natcrime?IdNatureCrime=${idCrime}`)
   if (response.ok) {
      let natureCrime = await response.json()
      return natureCrime.Nature
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
         Probation(data);
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
   let datalength = data.length
   console.log(data[0].FPS)
   let divPagination = document.getElementById("pagination");

    //Bouton seulement pour le look (si negatif)
    if(datalength === 0){
      let liNothing = document.createElement("li");
      divPagination.appendChild(liNothing);
      let aNothing = document.createElement("a");
      aNothing.setAttribute("class","pagination-link");
      aNothing.setAttribute("id",`pageNothing`);
      aNothing.setAttribute("aria-label",`Goto page nothing`);
      aNothing.innerHTML= `1`;
      liNothing.appendChild(aNothing);
      aNothing.addEventListener('click', Negatif);
      Negatif();
    }

    //Ajout des boutons qui permetterons d'afficher les informations
   let compteur = 0;
    data[0].IPPE.forEach(element => {
      let li = document.createElement("li");
      divPagination.appendChild(li);
      let a = document.createElement("a");
      a.setAttribute("class","pagination-link");
      a.setAttribute("id",`page${compteur+1}`);
      a.setAttribute("aria-label",`Goto page ${compteur+1}`);
      a.innerHTML= `${compteur+1}`;
      li.appendChild(a);
      //Fonction qui fait apparaitre les informations lors du click
      document.getElementById(`page${compteur+1}`).addEventListener('click', function(){
            let printing = document.getElementById("detail");
            printing.innerHTML = '';
            GetFunction(data[0],element);
         });
      compteur++
    });
    //Rajoute l'info Fps comme dernière page si présente
    if(data[0].FPS){
      let li = document.createElement("li");
      divPagination.appendChild(li);
      let a = document.createElement("a");
      a.setAttribute("class","pagination-link");
      a.setAttribute("id",`page${compteur+1}`);
      a.setAttribute("aria-label",`Goto page ${compteur+1}`);
      a.innerHTML= `${compteur+1}`;
      li.appendChild(a);
      //Fonction qui fait apparaitre les informations lors du click
      document.getElementById(`page${compteur+1}`).addEventListener('click', function(){
            let printing = document.getElementById("detail");
            printing.innerHTML = '';
            PageFps(data[0],data[0].FPS);
         });
    }
}




//Affiche l'information de la personne rechercher et du User
async function Personne(){
   const obj = GetParam()
   let Matricule = sessionStorage.getItem('Matricule');
   let Nom = sessionStorage.getItem('Nom');
   let sexeNum = obj.sexe == "1" ? "Homme" : "Femme";
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
    let printing = document.getElementById("infoPersonne");
    printing.innerHTML = affichage;
}
//Affichage si negatif 
function Negatif(){
    const affichage = `<strong>*** Negatif ***</strong>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}
//Affichage si recherché
function Rechercher(obj){
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
            <th>Numero de Mandat:</th>
            <td>${obj.noMandat}</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${getNatCrime(obj)}</td>
         </tr>
         <tr>
            <th>Numero d'evenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
      </table>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

//Affichage si sous observation
function Observation(obj){
    const affichage = `<strong>*** Sous Observation ***</strong><br><br>
    <p>Ne pas révéler au sujet l'intrérêt qu'on lui porte</p>
    <table>
         <tr>
            <th>Motif:</th>
            <td>${obj.motif}</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${getNatCrime(obj)}</td>
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
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

//Affichage si accusé
//TODO fix les conditions
function Accuser(obj){
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
            <td>${getNatCrime(obj)}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
    <p><strong>$</p><br>
    <p style="padding-left:10%">a modifier<br>
    Doit garder la paix et avoir bonne conduite.</p>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}
//TODO fix conditions
// Affichage si la personne est en probation
function Probation(obj){
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
            <td>${getNatCrime(obj)}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
         <tr>
            <th>Fin de sentence prevue:</th>
            <td>${obj.finSentence}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
    <p><strong>Avoir comme adress le: </strong> ${obj.adresse}</p><br>
    <p style="padding-left:10%">Ne pas entrer en contact avec ${obj.victime}.<br>
    Aucune consommation d'alcool ou de drogue non prescrite<br>
    Doit garder la paix et avoir bonne conduite.</p><br>
    <table>
    <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Agent de probation :</th>
            <td>${obj.agentProbation}</td>
         </tr>
         <tr>
            <th>Téléphone :</th>
            <td>${obj.telephone}</td>
         </tr>
    </table><br>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}
//TODO Fix FPS et conditions
//Affichage si la personne est sous liberté conditionelle
function LibConditionnelle(personne, obj){
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
            <td>${getNatCrime(obj)}</td>
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
            <td>${obj.finSentence}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
    <p><!--<strong>Avoir comme adress le: </strong>a modifier</p>--><br>
    <p style="padding-left:10%">a modifier}</p><br>
    <table>
    <tr>
            <th>___________________________________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Agent de libération conditionnelle à contacter :</th>
            <td>${obj.agentLiberation}</td>
         </tr>
         <tr>
            <th>Téléphone :</th>
            <td>${obj.telephone} Poste : ${obj.poste} </td>
         </tr>
    </table><br>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

// Affichage si disparue
function Disparue(personne, obj){
    const affichage = `<strong>*** Disparu ***</strong><br>
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
            <td>${obj.vuDerniereFois}</td>
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
      </table>
      <p><strong>Problématique de santé connu :</strong>${santePersonne(personne)}</p>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

// Affichage si la personne possède des interdits
function Interdit(obj){
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
            <td>${getNatCrime(obj)}</td>
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
            <td>${obj.finSentence}</td>
         </tr>
    </table>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

//-------À COMPLETER -------------
function condDisplay(ippe,personne){
   
}



function santePersonne(personne){
   let sante = [];
   switch (sante){
      case personne.toxicomanie : sante.push("Toxicomane")
      case personne.desorganise : sante.push("Desorganise")
      case personne.depressif : sante.push("Depressif")
      case personne.violent : sante.push("Violent")
      case personne.suicidaire : sante.push("Suicidaire")
   }
   return(sante);
}
// retour inconnue si null
function inconnue(data){
   if(data === null){
      return "inconnu";
   }else{
      return data;
   }
}
// personne fps
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
           <th>Antecedents:</th>
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
      </table>
     <p><strong>Problématique de santé connu :</strong>${santePersonne(obj)}</p>`;
   let printing = document.getElementById("detail");
   printing.innerHTML = affichage;
}


