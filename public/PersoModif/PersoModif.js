/* eslint-disable import/extensions */
/* eslint-disable no-restricted-globals */
import {
    nav, piedPage, /* connection, */ Matricule, Nom, Deconnection,
} from '../commun.js';
const local3000 = 'http://localhost:3000'
const local5000 = 'http://localhost:5000'

// S'occupe du pied de page, de la barre de nav et de l'autorisation (lignes 2 - 8)
// connection()
nav();
piedPage();
document.getElementById('déconnection').addEventListener('click', Deconnection);
document.getElementById('nom').innerHTML = Matricule;
document.getElementById('matricule').innerHTML = Nom;
const param = new URLSearchParams(window.location.search);
let idPersonne = null;
// ----------------Gestion d'erreur----------------------

// Pour convertir la permiere lettre d'un string en majuscule
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Check si l'inputs du nom contient les bons characteres
function checkNomInput(str) {
    return /^[a-zA-Z\- ÄäÖöÉéÈèÜüÊêÛûÎî]+$/.test(str);
}
// Check si l'inputs des Prenom contiennent les bons characteres
function checkPrenomInput(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]+$/.test(str);
}
// Check la validité des jours
function checkJourInput(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 31 || strToInt < 1) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité des mois
function checkMoisInput(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 12 || strToInt < 1) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité des années
function checkAnneeInput(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 2020 || strToInt < 1910) {
        return false;
    }
    return /^\d+$/.test(str);
}

// Check la validité de la date
function formatDateValid(annee, mois, jour) {
    const day = new Date(annee, mois, 0);
    const splitDate = day.toUTCString().split(' ');
    const dayMax = parseInt(splitDate[1], 10);
    const jourVal = parseInt(jour, 10);
    if (dayMax < jourVal) {
        return false;
    }
    return true;
}
// ---------------Fin Gestion d'erreur----------------------

// S'occupe de l'affichage des champs lors d'une modification de personne
async function CheckPersonnes(numPersonne) {
    // Cherche l'information de la personne
    const response = await fetch(`${local3000}/personnes?IdPersonne=${numPersonne}`);
    if (response.ok) {
        const personne = await response.json();
        // Pour ne pas afficher null dans le prénom 2
        const prenomDeuxVal = personne[0].Prenom2 === null ? '' : personne[0].Prenom2;
        // Identification du bouton modifier et ajouter
        const btnModif = document.getElementById('modif');
        const btnAjout = document.getElementById('ajout');
        const btnDelete = document.getElementById('delete');
        // Affiche bouton Modifier et cache le bouton Ajout
        btnModif.classList.remove('is-hidden');
        btnAjout.classList.add('is-hidden');
        btnDelete.classList.remove('is-hidden');
        // Identifier les champs input
        const nomInput = document.getElementById('nom');
        const prenomUnInput = document.getElementById('prenom1');
        const prenomDeuxInput = document.getElementById('prenom2');
        // Attribuer les valeurs de la personne dans les champs
        nomInput.setAttribute('value', `${personne[0].NomFamille}`);
        prenomUnInput.setAttribute('value', `${personne[0].Prenom1}`);
        prenomDeuxInput.setAttribute('value', prenomDeuxVal);
        // Identifier les champs de valeurs du sexe (masculin, feminin)
        const masculin = document.getElementById('masc');
        const feminin = document.getElementById('fem');
        // Choisir la valeur appropriée selon la BD
        if (personne[0].Masculin) {
            masculin.setAttribute('selected', true);
        } else {
            feminin.setAttribute('selected', true);
        }
        // Identifier les inputs de la date de naissance
        const annee = document.getElementById('annee');
        const mois = document.getElementById('mois');
        const jour = document.getElementById('jour');
        // Attribuer les valeurs de la personne dans les champ
        const ddn = personne[0].DateNaissance.split('-');
        annee.setAttribute('value', `${ddn[0]}`);
        mois.setAttribute('value', `${ddn[1]}`);
        jour.setAttribute('value', `${ddn[2].substring(0, 2)}`);
        // Identifier les champs de valeurs de la catégorie de personne
        const etudiant = document.getElementById('etudiant');
        const enseignant = document.getElementById('enseignant');
        const comedien = document.getElementById('comedien');
        const personnage = document.getElementById('personnage');
        // Attribuer la selection de la catégorie selon la BD
        switch (personne[0].TypePersonne) {
        case 'Étudiant': etudiant.setAttribute('selected', true);
            break;
        case 'Enseignant': enseignant.setAttribute('selected', true);
            break;
        case 'Comédien': comedien.setAttribute('selected', true);
            break;
        case 'Personnage': personnage.setAttribute('selected', true);
            break;
        default:
        }
        // ------------GESTION DES IPPE------------------
        // Identifier le corp du tableau
        const tabBody = document.getElementById('TabBody');
        // Check si un dossier IPPE est lié à la personne
        // et l'ajoute au tableau
        const ippe = await fetch(`${local3000}/IppePersonnes?IdPersonne=${numPersonne}`);
        if (ippe.ok) {
            const ippeInfo = await ippe.json();
            ippeInfo.forEach((element) => {
                if (element.TypeEvenement !== null && element.NoEvenement !== null) {
                    // Créer des ligne du tableau tant qu'il y a des IPPE
                    document.getElementById('table').classList.remove('is-hidden');
                    const htmlTableau = `<tr>
                        <td>${element.TypeEvenement}</td>
                        <td>${element.NoEvenement}</td>
                        <td>
                        <button onclick="location.href = '${local5000}/modifIppe?IdIPPE=${element.IdIPPE[0]}';"
                        class="is-link">
                            <i class="fas fa-pen"></i>
                        </button>
                        </td>
                    </tr>`;
                    tabBody.innerHTML += htmlTableau;
                }
            });
        }
        // Ajout de la redirection vers la création IPPE
        // Identification du bouton ajout IPPE
        const btnAjoutIPPE = document.getElementById('addIppe');
        // Ajout de l'évênement de redirection incluant l'id de la personne
        btnAjoutIPPE.addEventListener('click', () => {
            location.href = `${local5000}/AjoutIPPE?IdPersonne=${idPersonne}`;
        });
    }
}
function CreateBody() {
    // Prendre les elememt DOM lors du click du bouton modifier
    const categorie = document.getElementById('categorie');
    const nomPersonne = document.getElementById('nom');
    const prenomUn = document.getElementById('prenom1');
    const prenomDeux = document.getElementById('prenom2');
    const sexe = document.getElementById('sexe');
    const annee = document.getElementById('annee').value;
    let mois = document.getElementById('mois').value;
    let jour = document.getElementById('jour').value;
    // Rajoute un zero pour le format de jour et mois
    if (jour.length === 1) {
        jour = `0${jour}`;
    }
    if (mois.length === 1) {
        mois = `0${mois}`;
    }
    // Envoie la valeur null si le prenom 2 n'est pas entré
    const valPrenomDeux = prenomDeux.value === '' ? null : prenomDeux.value;
    // Change la valeur du sexe en binaire
    const sexeBinaire = sexe.value === 'Masculin' ? 1 : 0;
    // S'assure que les premiere lettre des nom soient majuscules
    const capNom = capitalizeFirstLetter(nomPersonne.value);
    const capPrenom1 = capitalizeFirstLetter(prenomUn.value);
    let capPrenom2;
    if (valPrenomDeux) {
        capPrenom2 = capitalizeFirstLetter(valPrenomDeux);
    } else {
        capPrenom2 = valPrenomDeux;
    }
    // Recuperation des messages d'erreurs
    const msgNom = document.getElementById('nomError');
    const msgPrenomUn = document.getElementById('prenom1Error');
    const msgPrenomDeux = document.getElementById('prenom2Error');
    const msgJour = document.getElementById('jourError');
    const msgMois = document.getElementById('moisError');
    const msgAnnee = document.getElementById('anneeError');
    // S'assure que les inputs contiennent des caracteres valides (ligne 147-166)
    let errorTrue = false;
    if (!checkNomInput(capNom)) {
        msgNom.classList.remove('is-hidden');
        errorTrue = true;
    } else {
        msgNom.classList.add('is-hidden');
    }
    if (!checkPrenomInput(capPrenom1)) {
        msgPrenomUn.classList.remove('is-hidden');
        errorTrue = true;
    } else {
        msgPrenomUn.classList.add('is-hidden');
    }
    if ((!checkPrenomInput(capPrenom2))) {
        msgPrenomDeux.classList.remove('is-hidden');
        errorTrue = true;
    } else {
        msgPrenomDeux.classList.add('is-hidden');
    }
    // s'assure que les dates entrees sont conforme
    if ((!checkJourInput(jour))) {
        msgJour.classList.remove('is-hidden');
        errorTrue = true;
    } else {
        msgJour.classList.add('is-hidden');
    }
    if ((!checkMoisInput(mois))) {
        msgMois.classList.remove('is-hidden');
        errorTrue = true;
    } else {
        msgMois.classList.add('is-hidden');
    }
    if ((!checkAnneeInput(annee))) {
        msgAnnee.classList.remove('is-hidden');
        errorTrue = true;
    } else {
        msgAnnee.classList.add('is-hidden');
    }
    // Test si le jour ne depasse le jour max d'un mois
    if (formatDateValid(annee, mois, jour) === false) {
        msgJour.classList.remove('is-hidden');
        return alert('Date non valide');
    }
    // Mettre les valeur dans un String pour l'envoie en date
    const date = `${annee}-${mois}-${jour}`;
    // Si tout les conditions sont respectées le body est alors créée
    if (!errorTrue) {
        const body = {
            TypePersonne: categorie.value,
            NomFamille: capNom,
            Prenom1: capPrenom1,
            Prenom2: capPrenom2,
            Masculin: sexeBinaire,
            DateNaissance: date,
        };
        return body;
    } if (errorTrue) {
        return false;
    }
}
// Modification de personne
async function UpdatePersonne(numPersonne) {
    let msg;
    const body = CreateBody();
    if (body) {
        const response = await fetch(`${local3000}/personnes?IdPersonne=${numPersonne}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            msg = await response.json();
            confirm(msg);
            location.reload();
        } else {
            msg = await response.json();
            alert(msg);
        }
    }
}
// Creation de personne
async function CreatePersonnes() {
    let msg;
    const body = CreateBody();
    if (body) {
        const response = await fetch(`${local3000}/personnes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            msg = await response.json();
            confirm(msg.message);
            // Redirection vers personne pour rechercher l'information
            // pour pouvoir modifier par la suite avec l'id fournis par l'API
            location.href = `${local5000}/personnes?IdPersonne=${msg.IdPersonne[0]}`;
        } else {
            msg = await response.json();
            alert(msg);
        }
    }
}
// Suppression de la personne et ses IPPE
async function DeletePersonne(numPersonne) {
    let msg;
    const response = await fetch(`${local3000}/personnes?IdPersonne=${numPersonne}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        msg = await response.json();
        confirm('La personne à été supprimé de la base de donnée');
        location.href = `${local5000}/BiblioPersonne`;
    } else {
        msg = await response.json();
        alert(msg);
    }
}
const tableau = document.getElementById('TableauIPPE');
const btnRetour = document.getElementById('return');
btnRetour.addEventListener('click', () => { location.href = `${local5000}/BiblioPersonne`; });
/* Lors du chargement, cherche si un Id de personne es transmise dans le url.
Si oui, elle affiche les information de la personne, sinon les champs sont vides. */
if (param.has('IdPersonne')) {
    tableau.classList.remove('is-hidden');
    idPersonne = param.get('IdPersonne');
    CheckPersonnes(idPersonne);
    document.getElementById('modif').addEventListener('click', () => { UpdatePersonne(idPersonne); });
    document.getElementById('delete').addEventListener('click', () => { DeletePersonne(idPersonne); });
}
document.getElementById('ajout').addEventListener('click', CreatePersonnes);
