// Check la validité des jours
function isJourValide(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 31 || strToInt < 1) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité des mois
function isMoisValide(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 12 || strToInt < 1) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité des années
function isAnneeValide(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 2020 || strToInt < 1910) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité de la date
function isDateValide(annee, mois, jour) {
    const day = new Date(annee, mois, 0);
    const splitDate = day.toUTCString().split(' ');
    const dayMax = parseInt(splitDate[1], 10);
    const jourVal = parseInt(jour, 10);
    if (dayMax < jourVal) {
        return false;
    }
    return true;
}
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
// Vérifie que le numéro de téléphone est juste 10 chiffres
function verifieNumTel(str) {
    return /^[0-9]{10}$/.test(str);
}
// Vérifie que Le numéro de permis est Une lettre suivi de 12 chiffres
function verifieNumPermis(str) {
    return /^[A-Z]{1}[0-9]{12}$/.test(str);
}
// Vérifie que l'adresse a un maximum de 50 caracthères
function verifieAdresse(str) {
    return /^.{0,50}$/.test(str);
}
// Vérifie que la ville a un maximum de 50 caracthères
function verifieVille(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî-\s]{0,50}$/.test(str);
}
// Vérifie que le code postal est une lettre, un chiffre,
// une lettre, un espace, un chiffre, une lettre, un chiffre
function verifieCodePostal(str) {
    return /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/.test(str);
}
// Vérifie que la taille et le poids ont un maximum de 3 nombres
function verifieTaillePoids(str) {
    return /^[0-9]{0,3}$/.test(str);
}
// Vérifie que la couleur des yeux et cheveux ont un maximum de 15 caracthères
function verifieYeuxCheveux(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]{0,15}$/.test(str);
}
// Vérifie que la marque est un maximum de 100 caracthères
function verifieMarques(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,100}$/.test(str);
}
// Vérifie que le gilet, le pantalon et les autres vêtements ont un maximum de 50 caracthères
function verifieGiletPantalonAutreVetement(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,50}$/.test(str);
}

export {
    isJourValide,
    isMoisValide,
    isAnneeValide,
    isDateValide,
    capitalizeFirstLetter,
    verifieNumTel,
    verifieNumPermis,
    verifieAdresse,
    verifieVille,
    verifieCodePostal,
    verifieTaillePoids,
    verifieYeuxCheveux,
    verifieMarques,
    verifieGiletPantalonAutreVetement,
    checkNomInput,
    checkPrenomInput,
};
