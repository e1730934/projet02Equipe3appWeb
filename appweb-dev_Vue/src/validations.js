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
// Vérifie que le numéro de téléphone est juste 10 chiffres
function verifieNumTel(numTel) {
    return /^[0-9]{10}$/.test(numTel);
}
// Vérifie que Le numéro de permis est Une lettre suivi de 12 chiffres
function verifieNumPermis() {
    return /^[A-Z]{1}[0-9]{12}$/.test(this.numPermis);
}
// Vérifie que l'adresse a un maximum de 50 caracthères
function verifieAdresse() {
    return /^.{0,50}$/.test(this.adresse1);
}
// Vérifie que la ville a un maximum de 50 caracthères
function verifieVille() {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî-\s]{0,50}$/.test(this.ville);
}
// Vérifie que le code postal est une lettre, un chiffre,
// une lettre, un espace, un chiffre, une lettre, un chiffre
function verifieCodePostal() {
    return /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/.test(this.codePostal);
}
// Vérifie que la taille et le poids ont un maximum de 3 nombres
function verifieTaillePoids() {
    return /^[0-9]{0,3}$/.test(this.taille);
}
// Vérifie que la couleur des yeux et cheveux ont un maximum de 15 caracthères
function verifieYeuxCheveux() {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]{0,15}$/.test(this.yeux);
}
// Vérifie que la marque est un maximum de 100 caracthères
function verifieMarques() {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,100}$/.test(this.marques);
}
// Vérifie que le gilet, le pantalon et les autres vêtements ont un maximum de 50 caracthères
function verifieGiletPantalonAutreVetement() {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,50}$/.test(this.gilet);
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
};
