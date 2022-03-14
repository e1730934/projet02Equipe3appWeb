import { nav,piedPage,Deconnection } from '../commun.js';

nav();
piedPage();
document.getElementById("déconnection").addEventListener('click',Deconnection)
Personne();
Pagination();
function GetParam(){
   const params = new URLSearchParams(window.location.search);
   const nom = params.get("nom");
   const prenomUn = params.get("prenom1");
   const prenomDeux = params.get("prenom2");
   const sexe = params.get("sexe"); // egale 0 ou 1
   const date = params.get("date");
   let data = {nom: nom, prenomUn: prenomUn, prenomDeux: prenomDeux, sexe: sexe, date: date};
   console.log("this is the url param "+ data);
   return data;
}

async function Data(){
   let param = GetParam()
   //let sexeNum;
   //if (param.sexe){sexeNum="1";}else{sexeNum="0";}
   let stringDate = param.date.toString();
   const words = stringDate.split('-');
   const trueDate = (words[0]+words[1]+words[2]).toString();
   console.log(`http://localhost:3000/ippeInfo?nom=Hébert&sexe=1&prenomUn=Francis&ddn=19921019&prenomDeux=`);

   const api = await fetch(`http://localhost:3000/ippeInfo?nom=${param.nom}&sexe=${param.sexe}&prenomUn=${param.prenomUn}&ddn=${trueDate}&prenomDeux=${param.prenomDeux}`);
   console.log(`http://localhost:3000/ippeInfo?nom=${param.nom}&sexe=${param.sexe}&prenomUn=${param.prenomUn}&ddn=${trueDate}&prenomDeux=${param.prenomDeux}`);
   // traiter la réponse
   let data = await api.json();
   if (api.ok) {
      //works
   } else {
   console.error('ERROR');
   }
   return(data);
}

// navigation section
function GetFunction(data){
   console.log("getFunction "+ data);
   switch(data.titre) {
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
async function Pagination(){
   console.log("hello world")
   const obj = await Data();
   let navlength = obj.length;
   console.log("this is how long is the list: " + navlength);
   let divPagination = document.getElementById("pagination");

    // bouton nothing
    if(navlength == 0){
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

    // if there is an fps
    if(obj[navlength-1].titre == "FPS"){
      for(let i= 0 ; i < navlength-1;i++){
      let li = document.createElement("li");
      divPagination.appendChild(li);
      let a = document.createElement("a");
      a.setAttribute("class","pagination-link");
      a.setAttribute("id",`page${i+1}`);
      a.setAttribute("aria-label",`Goto page ${i+1}`);
      a.innerHTML= `${i+1}`;
      li.appendChild(a);
      // function btn
      document.getElementById(`page${i+1}`).addEventListener('click', function(){

            GetFunction(obj[i]);
            
         });
         if(document.getElementById("page1")){
            GetFunction(obj[0]);
         }
      }
      let lastli = document.createElement("li");
        divPagination.appendChild(lastli);
        let fps = document.createElement("a");
        fps.setAttribute("class","pagination-link");
        fps.setAttribute("id",`pageFPS`);
        fps.setAttribute("aria-label",`Goto page fps`);
        fps.innerHTML= `fps`;
        lastli.appendChild(fps);
        fps.addEventListener('click',function(){
         PageFps(obj[navlength-1]);
        });
   
   }else{
      for(let i= 0 ; i < navlength;i++){
         let li = document.createElement("li");
      divPagination.appendChild(li);
      let a = document.createElement("a");
      a.setAttribute("class","pagination-link");
      a.setAttribute("id",`page${i+1}`);
      a.setAttribute("aria-label",`Goto page ${i+1}`);
      a.innerHTML= `${i +1}`;
      li.appendChild(a);
      // function btn
      document.getElementById(`page${i+1}`).addEventListener('click', function(){

            GetFunction(obj[i+1]);
            
         });
         if(document.getElementById("page1")){
            GetFunction(obj[0]);
         }
      }
   }
}




// for the person
async function Personne(){
   const obj = GetParam()
   let Matricule = sessionStorage.getItem('Matricule');
   let Nom = sessionStorage.getItem('Nom');
   let sexeNum;
   if (obj.sexe == "1"){sexeNum="Homme";}else{sexeNum="Femme";}
    const affichage = `
    <table class="table">
         <tr>
            <th>Nom:</th>
            <td>${obj.nom}</td>
            <th>Prenom1:</th>
            <td>${obj.prenomUn}</td>
            <th>Prenom2:</th>
            <td>${obj.prenomDeux}</td>
         </tr>
         <tr>
            <th>Sexe:</th>
            <td>${sexeNum}</td>
            <td></td>
            <td></td>
            <th>Ddn:</th>
            <td>${obj.date}</td>
         </tr>
         <tr>
            <th>Remarque:</th>
            <td>${Nom}</td>
            <td></td>
            <td></td>
            <th> matricule:</th>
            <td>${Matricule} </td>
         </tr>
      </table>
    `;
    let printing = document.getElementById("infoPersonne");
    printing.innerHTML = affichage;
    console.log(affichage);
}
// if negatif 
function Negatif(){
    const affichage = `<strong>*** Negatif ***</strong>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
}
// personne rechercher
function Rechercher(obj){
    const affichage = `<strong>*** Rechercher ***</strong><br>
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
            <td>${obj.numMandat}</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natureCrime}</td>
         </tr>
         <tr>
            <th>Numero d'evenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
      </table>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
}

// personne sous observation
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
            <td>${obj.natureCrime}</td>
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
            <td>${obj.dossierEnq}</td>
         </tr>
    </table><br>
    <p>Compléter ficher d'interpellation</p>
    <p>Acheminer à l'unité des Renseignements criminels</p>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
}

// personne accuser
function Accuser(obj){
    const affichage = `<strong>*** Accuser ***</strong><br><br>
    <table>
         <tr>
            <th>Cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de cause:</th>
            <td>${obj.numCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natureCrime}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvenement}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
    <p><strong>Avoir comme adress le: </strong> ${obj.adresse}</p><br>
    <p style="padding-left:10%">${obj.condition[0]}<br>
    Doit garder la paix et avoir bonne conduite.</p>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}
// personne en probation
function Probation(obj){
    const affichage = `<strong>*** Probation ***</strong><br><br>
    <table>
         <tr>
            <th>Cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de cause:</th>
            <td>${obj.numCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natureCrime}</td>
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
            <td>${obj.agent}</td>
         </tr>
         <tr>
            <th>Téléphone :</th>
            <td>${obj.telephone}</td>
         </tr>
    </table><br>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

// liberter conditionelle
function LibConditionnelle(obj){
    const affichage = `<strong>*** Liberter conditionnelle ***</strong><br><br>
    <table>
         <tr>
            <th>Cour:</th>
            <td>${obj.cour}</td>
         </tr>
         <tr>
            <th>Numero de cause:</th>
            <td>${obj.numCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natureCrime}</td>
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
            <td>${obj.fps}</td>
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
    <p><!--<strong>Avoir comme adress le: </strong> ${obj.condition}</p>--><br>
    <p style="padding-left:10%">${obj.condition}</p><br>
    <table>
    <tr>
            <th>___________________________________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Agent de libération conditionnelle à contacter :</th>
            <td>${obj.agent}</td>
         </tr>
         <tr>
            <th>Téléphone :</th>
            <td>${obj.telephone}</td>
         </tr>
    </table><br>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

// personne disparue
function Disparue(obj){
   function sante(obj){
      let sante = "Lindividue est ";
      if(obj.problemeSante.toxicomanie){sante +="toxicomane ";}
      if(obj.problemeSante.desorganise){sante +="desorganise ";}
      if(obj.problemeSante.depressif){sante +="depressif ";}
      if(obj.problemeSante.suicidaire){sante +="suicidaire ";}
      if(obj.problemeSante.violent){sante +="violent ";}
      sante += ".";
      return(sante);
   }
    const affichage = `<strong>*** Disparue ***</strong><br>
    <table>
         <tr>
            <th>Numéro d'événement :</th>
            <td>${obj.noEvenement}</td>
         </tr>
         <tr>
            <th>Nature :</th>
            <td>${obj.motif}</td>
         </tr>
         <tr>
            <th>Dernière fois vu :</th>
            <td>${obj.derniereVu}</td>
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
            <td>${obj.descrPhys.race}</td>
         </tr>
         <tr>
            <th>Taille:</th>
            <td>${obj.descrPhys.taille}</td>
         </tr>
         <tr>
            <th>Poids:</th>
            <td>${obj.descrPhys.poids}</td>
         </tr>
         <tr>
            <th>Yeux:</th>
            <td>${obj.descrPhys.yeux}</td>
         </tr>
         <tr>
            <th>Cheveux:</th>
            <td>${obj.descrPhys.cheveux}</td>
         </tr>
         <tr>
            <th>Marque:</th>
            <td>${obj.descrPhys.marques}</td>
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
            <td>${obj.descrVest.gilet}</td>
         </tr>
         <tr>
            <th>Pantalon:</th>
            <td>${obj.descrVest.pantalon}</td>
         </tr>
         <tr>
            <th>Autre(s) vêtement(s) :</th>
            <td>${obj.descrVest.autreVetements}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
      </table>
      <p><strong>Problématique de santé connu :</strong>${sante(obj)}</p>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

// interdit de personne
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
            <td>${obj.numCour}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natureCrime}</td>
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
            <td>${obj.expiration}</td>
         </tr>
    </table>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
}

// retour inconnue si null
function inconnue(data){
   if(data === null){
      return "inconnue";
   }else{
      return data;
   }
}
// personne fps
function PageFps(obj){
   let sante = "";
   if(obj.Violent){sante+=" Violent,"}
   if(obj.Echappe){sante+=" Échappe,"}
   if(obj.Suicidaire){sante+=" Suicidaire,"}
   if(obj.Desequilibre){sante+=" Déséquilibré,"}
   if(obj.Contagieux){sante+=" Contagieux,"}
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
   let printing = document.getElementById("detail");
   printing.innerHTML = affichage;
}
