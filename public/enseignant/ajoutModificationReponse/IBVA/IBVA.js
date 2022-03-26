const btnSupprimer = document.getElementById('supprimer');
const btnAjouter = document.getElementById('ajouter');
const btnRetour = document.getElementById('retour');
const btnModifier = document.getElementById('modifier');
const btnReset = document.getElementById('annuler');
const form = document.getElementById('formulaire');
const params = new URLSearchParams(window.location.search);
const id = params.get("idIBVA");

const msgSuccess = document.getElementById('msgSuccess-div');
const msgErreur = document.getElementById('msgErreur-div');
const msgErreurId = document.getElementById('msgErreurId-div');
let btnCliquee;

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});
btnSupprimer.addEventListener('click', () => {
    const identifiant = document.getElementById('Identifiant').value;
    if (identifiant !== '') {
        fetch(`http://localhost:3000/IBVA/supression/${identifiant}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    msgSuccess.classList.remove('is-hidden');
                    msgErreurId.classList.add('is-hidden');
                    msgErreur.classList.add('is-hidden');
                } else {
                    msgSuccess.classList.add('is-hidden');
                    msgErreurId.classList.add('is-hidden');
                    msgErreur.classList.remove('is-hidden');
                }
            })
            .catch(() => {
                msgSuccess.classList.add('is-hidden');
                msgErreurId.classList.add('is-hidden');
                msgErreur.classList.remove('is-hidden');
            });
    } else {
        msgErreurId.classList.remove('is-hidden');
        msgSuccess.classList.add('is-hidden');
        msgErreur.classList.add('is-hidden');
    }
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new URLSearchParams(new FormData(event.target));
    let method;
    if (btnCliquee === 'ajouter') {
        method = 'POST';
    } else if (btnCliquee === 'modifier') {
        method = 'PUT';
    }
    fetch('http://localhost:3000/IBVA', { method, body: formData })
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson);
            if (resJson.success) {
                msgSuccess.classList.remove('is-hidden');
                msgErreurId.classList.add('is-hidden');
                msgErreur.classList.add('is-hidden');
            } else {
                msgSuccess.classList.add('is-hidden');
                msgErreurId.classList.add('is-hidden');
                msgErreur.classList.remove('is-hidden');
            }
        })
        .catch(() => {
            msgSuccess.classList.add('is-hidden');
            msgErreurId.classList.add('is-hidden');
            msgErreur.classList.remove('is-hidden');
        });
});

async function Data() {
    await fetch("http://localhost:3000/IBVA/" + id).then((reponse) => {
        if (reponse.ok) {
            // obtenir les données de la fonction asynchrone json()
            reponse.json().then((data) => {
                document.getElementById('Identifiant').setAttribute("value", data[0].Identifiant)
                document.getElementById('Auteur').setAttribute("value", data[0].Auteur)
                //vérificattion pour selectionner le bon champ de la valeur
                if (data[0].TypeValeur == "Devise") {
                    document.getElementById('Devise').setAttribute('selected', 'selected')
                }
                else if (data[0].TypeValeur == "Passeport") {
                    document.getElementById('Passeport').setAttribute('selected', 'selected')
                }
                else if (data[0].TypeValeur == "Œuvre d'art") {
                    document.getElementById('Art').setAttribute('selected', 'selected')
                }
                else if (data[0].TypeValeur == "Carte de crédit / débit") {
                    document.getElementById('Carte').setAttribute('selected', 'selected')
                }
                //vérificattion pour selectionner le bon champ du type d'evennement
                if (data[0].TypeEvenement == "Négatif") {
                    document.getElementById('Négatif').setAttribute('selected', 'selected')
                }
                else if (data[0].TypeEvenement == "Volé") {
                    document.getElementById('Volé').setAttribute('selected', 'selected')
                }
                else if (data[0].TypeEvenement == "Perdu") {
                    document.getElementById('Perdu').setAttribute('selected', 'selected')
                }
                //vérification pour les 3 premiers chiffres du NoEvenement
                if (data[0].NoEvenement.substr(0, 3) == "302") {
                    document.getElementById('302').setAttribute('selected', 'selected')
                }
                else if (data[0].NoEvenement.substr(0, 3) == "108") {
                    document.getElementById('108').setAttribute('selected', 'selected')
                }
                else if (data[0].NoEvenement.substr(0, 3) == "123") {
                    document.getElementById('123').setAttribute('selected', 'selected')
                }
                document.getElementById('AA').setAttribute("value", data[0].NoEvenement.substr(4, 2));
                document.getElementById('MM').setAttribute("value", data[0].NoEvenement.substr(6, 2));
                document.getElementById('JJ').setAttribute("value", data[0].NoEvenement.substr(8, 2));
                document.getElementById('sequenceChiffres').setAttribute("value", data[0].NoEvenement.substr(11, 4));
            })
        }
    })
}

btnAjouter.addEventListener('click', () => {
    btnCliquee = 'ajouter';
});

btnModifier.addEventListener('click', () => {
    btnCliquee = 'modifier';
});
btnReset.addEventListener('click', () => {
    msgSuccess.classList.add('is-hidden');
    msgErreurId.classList.add('is-hidden');
    msgErreur.classList.add('is-hidden');
});

btnRetour.addEventListener('click', () => {
    window.location.href = '/Acceuil';
});

async function verifparams() {
    if (id !== null) {
        Data();
        document.getElementById('title').innerHTML = "MODIFICATION D'UNE RÉPONSE VALEUR";
        document.getElementById('ajouter').setAttribute("class", "is-hidden");
    }
    else {
        document.getElementById('modifier').setAttribute("class", "is-hidden");
        document.getElementById('suppr').setAttribute("class", "is-hidden");
    }
};


window.onload = verifparams();

