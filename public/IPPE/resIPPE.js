
// test subject
let objTest = {
    nom: "smith",
    prenom1: "john",
    prenom2: "robert",
    sexe: "femme",
    ddn: "29 fev 2000",
    remarque: "trop sexy",
    matricule: "8945",
    mandat:"Arrestation",
    cour:"Cours supremme",
    noMandat:"CM-LGL-A-26840",
    natCrime: "Disparition",
    noEvent: "108-220208-0031",
    motif:"elle a manger un chien",
    dossier: "LVL - RENS - 468259",
    adresse:"705 rue Notre-Dame Repentigny, Qc   J6A 2X1",
    noCause: "CM- MTL-57931-852",
    victime: "Mario Bros",
    date: "14 avril 2018",
    agentProb: "Luigi Time",
    telephone: "514-438-6407",
    fps:"438761F",
    prison: "Prison de Port-Cartier",
    race: "noir",
    taille:"175cm",
    poids:"55kg",
    yeux: "brun",
    cheveux: "noir",
    marque: "tatoot poisson sur la joue gauche",
    gilet:"bleu",
    pantalon:"jeans gris",
    autreVetement:"foulard rouge",
    sante:"depressif",
    natInterdit:"maison de 17h a 5h",
    IPPE:[
        'negatif',
        'rechercher',
        'sousObservation',
        'accuser',
        'probation',
        'libConditionnelle',
        'disparue',
        'interdit',
    ]
}
// navigation section
function Printing(num){
    Personne(objTest);
    Negatif();
    Rechercher(objTest);
    Observation(objTest);
    Accuser(objTest);
    Probation(objTest);
    LibConditionnelle(objTest);
    Disparue(objTest);
    Interdit(objTest);
}
function Pagination(){
    let navlength = objTest.IPPE.length;
    let ulPagination = document.getElementById("pagination");
    for(let i ; i<=navlength;i++){
        let li = document.createElement("li");
            ulPagination.appendChild(li);
        let a = document.createElement("a");
            li.appendChild(a);
    }
}





// for the person
function Personne(obj){
    const affichage = `
    <table>
         <tr>
            <th>Nom :</th>
            <td>${obj.nom}</td>
            <th>Prenom1 :</th>
            <td>${obj.prenom1}</td>
            <th>Prenom2 :</th>
            <td>${obj.prenom2}</td>
         </tr>
         <tr>
            <th>Sexe :</th>
            <td>${obj.sexe}</td>
            <td></td>
            <td></td>
            <th>Date de naissance :</th>
            <td>${obj.ddn}</td>
         </tr>
         <tr>
            <th>Remarque :</th>
            <td>${obj.remarque}</td>
            <td></td>
            <td></td>
            <th> matricule :</th>
            <td>${obj.matricule} </td>
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
            <td>${obj.noMandat}</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natCrime}</td>
         </tr>
         <tr>
            <th>Numero d'evenement:</th>
            <td>${obj.noEvent}</td>
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
            <td>${obj.natCrime}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvent}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Dossier d'enquête :</th>
            <td>${obj.dossier}</td>
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
            <td>${obj.noCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natCrime}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvent}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
    <p><strong>Avoir comme adress le: </strong> ${obj.adresse}</p><br>
    <p style="padding-left:10%">Ne pas entrer en contact avec ${obj.victime}.<br>
    Doit garder la paix et avoir bonne conduite.</p>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
}
// personne en probation
function Probation(obj){
    const affichage = `<strong>*** Accuser ***</strong><br><br>
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
            <td>${obj.natCrime}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvent}</td>
         </tr>
         <tr>
            <th>Fin de sentence prevue:</th>
            <td>${obj.date}</td>
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
            <td>${obj.agentProb}</td>
         </tr>
         <tr>
            <th>Téléphone :</th>
            <td>${obj.telephone}</td>
         </tr>
    </table><br>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
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
            <td>${obj.noCause}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Nature du crime:</th>
            <td>${obj.natCrime}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvent}</td>
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
            <td>${obj.prison}</td>
         </tr>
         <tr>
            <th>Fin de la sentence prévue :</th>
            <td>${obj.date}</td>
         </tr>
    </table><br>
    <p><strong>Condition: </strong></p>
    <p><strong>Avoir comme adress le: </strong> ${obj.adresse}</p><br>
    <p style="padding-left:10%">Ne pas fréquenter des gens ayant des dossiers criminels.<br>
    Aucune consommation d'alcool ou de drogue non prescrite<br>
    Doit garder la paix et avoir bonne conduite.</p><br>
    <table>
    <tr>
            <th>___________________________________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Agent de libération conditionnelle à contacter :</th>
            <td>${obj.agentProb}</td>
         </tr>
         <tr>
            <th>Téléphone :</th>
            <td>${obj.telephone}</td>
         </tr>
    </table><br>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
}

// personne disparue
function Disparue(obj){
    const affichage = `<strong>*** Disparue ***</strong><br>
    <table>
         <tr>
            <th>Numéro d'événement :</th>
            <td>${obj.noEvent}</td>
         </tr>
         <tr>
            <th>Nature :</th>
            <td>${obj.natCrime}</td>
         </tr>
         <tr>
            <th>Dernière fois vu :</th>
            <td>${obj.adresse}</td>
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
            <td>${obj.race}</td>
         </tr>
         <tr>
            <th>Race:</th>
            <td>${obj.race}</td>
         </tr>
         <tr>
            <th>Taille:</th>
            <td>${obj.taille}</td>
         </tr>
         <tr>
            <th>Poids:</th>
            <td>${obj.poids}</td>
         </tr>
         <tr>
            <th>Yeux:</th>
            <td>${obj.yeux}</td>
         </tr>
         <tr>
            <th>Cheveux:</th>
            <td>${obj.cheveux}</td>
         </tr>
         <tr>
            <th>Marque:</th>
            <td>${obj.marque}</td>
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
            <td>${obj.gilet}</td>
         </tr>
         <tr>
            <th>Pantalon:</th>
            <td>${obj.pantalon}</td>
         </tr>
         <tr>
            <th>Autre(s) vêtement(s) :</th>
            <td>${obj.autreVetement}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
      </table>
      <p><strong>Problématique de santé connu :</strong>             ${obj.sante}</p>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
}

// interdit de personne
function Interdit(obj){
    const affichage = `<strong>*** Interdit ***</strong><br><br>
    <table>
    <tr>
            <th>Nature:</th>
            <td>${obj.natInterdit}</td>
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
            <td>${obj.natCrime}</td>
         </tr>
         <tr>
            <th>Numero devenement:</th>
            <td>${obj.noEvent}</td>
         </tr>
         <tr>
            <th>________________________________</th>
            <td>________________________________</td>
         </tr>
         <tr>
            <th>Expiration:</th>
            <td>${obj.date}</td>
         </tr>
    </table>`;
    let printing = document.getElementById("detail");
    printing.innerHTML = affichage;
    console.log(affichage);
}