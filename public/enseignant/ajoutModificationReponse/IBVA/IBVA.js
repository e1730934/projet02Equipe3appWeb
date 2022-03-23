const btnSupprimer = document.getElementById('supprimer');
const msgSuccess = document.getElementById('msgSuccess-div');
const msgErreur = document.getElementById('msgErreur-div');
const msgErreurId = document.getElementById('msgErreurId-div');

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
        console.log($target);

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
