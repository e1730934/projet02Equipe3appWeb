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

export {
    isJourValide,
    isMoisValide,
    isAnneeValide,
    isDateValide,
    capitalizeFirstLetter,
};
