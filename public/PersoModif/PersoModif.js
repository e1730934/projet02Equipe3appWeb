import { nav, piedPage, connection, Matricule, Nom, Deconnection } from '../commun.js';
//S'occupe du pied de page, de la barre de nav et de l'autorisation (lignes 2 - 8)
//connection()
nav();
piedPage();
document.getElementById("déconnection").addEventListener('click',Deconnection);
document.getElementById("nom").innerHTML=Matricule;
document.getElementById("matricule").innerHTML=Nom;
const btnRetour = document.getElementById("return");
btnRetour.addEventListener('click', ()=>{location.href = 'http://localhost:5000/BiblioPersonne'})
/*Lors du chargement, cherche si un Id de personne es transmise dans le url.
Si oui, elle affiche les information de la personne, sinon les champs sont vides. */
const param = new URLSearchParams(window.location.search);
let idPersonne = null
if(param.has('IdPersonne')){
    idPersonne = param.get('IdPersonne');
    CheckPersonnes(idPersonne);
    document.getElementById("modif").addEventListener('click',()=>{UpdatePersonne(idPersonne)});
    document.getElementById("delete").addEventListener('click',()=>{DeletePersonne(idPersonne)});
};
document.getElementById("ajout").addEventListener('click',CreatePersonnes);
//S'occupe de l'affichage des champs lors d'une modification de personne
async function CheckPersonnes(numPersonne){
    //Cherche l'information de la personne
    const response = await fetch(`http://localhost:3000/personnes?IdPersonne=${numPersonne}`);
    if (response.ok) {
        const personne = await response.json();
        //Pour ne pas afficher null dans le prénom 2 
        const prenomDeuxVal = personne[0].Prenom2 === null ? '' : personne[0].Prenom2; 
        //Identification du bouton modifier et ajouter
        const btnModif = document.getElementById("modif");
        const btnAjout = document.getElementById("ajout");
        const btnDelete = document.getElementById("delete");
        //Affiche bouton Modifier et cache le bouton Ajout
        btnModif.classList.remove("is-hidden");
        btnAjout.classList.add("is-hidden");
        btnDelete.classList.remove("is-hidden");
        //Identifier les champs input
        const nomInput = document.getElementById("nom");
        const prenomUnInput = document.getElementById("prenom1");
        const prenomDeuxInput = document.getElementById("prenom2");
        //Attribuer les valeurs de la personne dans les champs
        nomInput.setAttribute("value",`${personne[0].NomFamille}`);
        prenomUnInput.setAttribute("value",`${personne[0].Prenom1}`);
        prenomDeuxInput.setAttribute("value", prenomDeuxVal);
        //Identifier les champs de valeurs du sexe (masculin, feminin)
        const masculin = document.getElementById("masc");
        const feminin = document.getElementById("fem");
        //Choisir la valeur appropriée selon la BD
        if (personne[0].Masculin) {
            masculin.setAttribute('selected', true);
        } else {
            feminin.setAttribute('selected', true);
        }
        //Identifier les inputs de la date de naissance
        const annee = document.getElementById("annee");
        const mois = document.getElementById("mois");
        const jour = document.getElementById("jour");
        //Attribuer les valeurs de la personne dans les champs
        const ddn = new Date(personne[0].DateNaissance);
        annee.setAttribute("value",`${ddn.getFullYear()}`);
        //Rajout de +1, les mois et jours commencent à 0 
        //slice et le +0 s'assure d'avoir un 0 devant le mois et le jour
        mois.setAttribute("value",("0"+ (ddn.getMonth() + 1)).slice(-2));
        jour.setAttribute("value",("0"+ (ddn.getDate() + 1)).slice(-2));
        //Identifier les champs de valeurs de la catégorie de personne
        const etudiant = document.getElementById("etudiant");
        const enseignant = document.getElementById("enseignant");
        const comedien = document.getElementById("comedien");
        const personnage = document.getElementById("personnage");
        //Attribuer la selection de la catégorie selon la BD
        switch (personne[0].TypePersonne){
            case 'Étudiant' : etudiant.setAttribute('selected', true);
                break;
            case 'Enseignant' : enseignant.setAttribute('selected', true);
                break;
            case 'Comédien' : comedien.setAttribute('selected', true);
                break;
            case 'Personnage' : personnage.setAttribute('selected', true);
        }
        //------------GESTION DES IPPE------------------
        //Identifier le corp du tableau
        const tabBody = document.getElementById("TabBody")
        //Check si un dossier IPPE est lié à la personne
        //et l'ajoute au tableau
        const ippe = await fetch(`http://localhost:3000/IppePersonnes?IdPersonne=${numPersonne}`)
        if(ippe.ok){
            const ippeInfo = await ippe.json()
            ippeInfo.forEach((element)=>{
                if(element.TypeEvenement !== null && element.NoEvenement !== null){
                    //Créer des ligne du tableau tant qu'il y a des IPPE
                    document.getElementById('table').classList.remove('is-hidden');
                    let htmlTableau = 
                    `<tr>
                        <td>${element.TypeEvenement}</td>
                        <td>${element.NoEvenement}</td>
                        <td>
                        <button onclick="location.href = 'http://localhost:5000/modifIppe?IdIPPE=${element.IdIPPE[0]}';"
                        class="is-link">
                            <i class="fas fa-pen"></i>
                        </button>
                        </td>
                    </tr>`
                    tabBody.innerHTML += htmlTableau
                }
            })
        }
        //Ajout de la redirection vers la création IPPE
        //Identification du bouton ajout IPPE
        const btnAjoutIPPE = document.getElementById('addIppe')
        //Ajout de l'évênement de redirection incluant l'id de la personne
        btnAjoutIPPE.addEventListener('click', ()=>{
            location.href = `http://localhost:5000/AjoutIPPE?IdPersonne=${idPersonne}`
        })
    }
}
function CreateBody(){
    //Prendre les elememt DOM lors du click du bouton modifier
    const categorie = document.getElementById("categorie");
    const nomPersonne = document.getElementById("nom");
    const prenomUn = document.getElementById("prenom1")
    const prenomDeux = document.getElementById("prenom2")
    const sexe = document.getElementById("sexe")
    const annee = document.getElementById("annee");
    const mois = document.getElementById("mois");
    const jour = document.getElementById("jour");
    //Mettre les valeur dans un String pour le Parse en date
    const date = `${annee.value}${mois.value}${jour.value}`;
    //Envoie la valeur null si le prenom 2 n'est pas entré
    const valPrenomDeux = prenomDeux.value === '' ? null : prenomDeux.value;
    //Change la valeur du sexe en binaire
    const sexeBinaire = sexe.value === "Masculin" ? 1 : 0;
    //S'assure que les premiere lettre des nom soient majuscules
    const capNom = capitalizeFirstLetter(nomPersonne.value);
    const capPrenom1 = capitalizeFirstLetter(prenomUn.value);
    const capPrenom2 = capitalizeFirstLetter(valPrenomDeux);

    
    const body = {
        TypePersonne : categorie.value,
        NomFamille : capNom,
        Prenom1 : capPrenom1,
        Prenom2 : capPrenom2,
        Masculin : sexeBinaire,
        DateNaissance : date
    };
    
    return body;
}
//Modification de personne
async function UpdatePersonne(numPersonne){
    let msg;
    const body = CreateBody();
    const response = await fetch(`http://localhost:3000/personnes?IdPersonne=${numPersonne}`,{
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
       });
    if (response.ok) {
        msg= await response.json();
        confirm(msg);
    } else {
        alert(msg);
    }
}
//Creation de personne
async function CreatePersonnes(){
    let msg;
    const body = CreateBody();
    console.log(body)
    const response = await fetch('http://localhost:3000/personnes',{
        method: 'POST', 
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(body)
       });
       if (response.ok) {
        msg= await response.json();
        confirm(msg.message);
        //Redirection vers personne pour rechercher l'information
        //pour pouvoir modifier par la suite avec l'id fournis par l'API
        location.href = `http://localhost:5000/Personnes?IdPersonne=${msg.IdPersonne[0].IdPersonne}`;
    } else {
        alert(msg);
    }
}
//Suppression de la personne et ses IPPE
async function DeletePersonne(numPersonne){
    let msg;
    const body = CreateBody();
    const response = await fetch(`http://localhost:3000/personnes?IdPersonne=${numPersonne}`,{
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
       });
    if (response.ok) {
        msg= await response.json();
        confirm('La personne à été supprimé de la base de donnée');
        location.href = 'http://localhost:5000/BiblioPersonne'
    } else {
        msg = await response.json();
        alert(msg);
    }
}

//Pour convertir la permiere lettre d'un string en majuscule
function capitalizeFirstLetter(str) {
   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
