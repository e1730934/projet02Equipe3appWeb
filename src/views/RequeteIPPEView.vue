<template>
    <div class="hero-body ">
        <!--box gives it the shadow-->
        <div class="container box mt-6">
            <h2 class="title has-text-info-dark">Interrogation personne - IPPE</h2>
            <form class="row columns is-multiline">
                <!--NOM-->
                <div class="column is-12">
                    <div class="field">
                        <label for="nom" class="label">Nom</label>
                        <div class="control">
                            <input id="nom" class="input" type="text" placeholder="Nom" required>
                        </div>
                    </div>
                </div>
                <!--P1-->
                <div class="column is-12">
                    <div class="field">
                        <label for="prenom1" class="label">Prenom 1</label>
                        <div class="control">
                            <input id="prenom1" class="input" type="text"
                            placeholder="Prenom 1" required>
                        </div>
                    </div>
                </div>
                <!--P2-->
                <div class="column is-12">
                    <div class="field">
                        <label for="prenom2" class="label">Prenom 2</label>
                        <div class="control">
                            <input id="prenom2" class="input" type="text"
                            placeholder="Prenom 2" required>
                        </div>
                    </div>
                </div>
                <!--SEXE-->
                <div class="column is-12">
                    <div class="field">
                        <label for="sexe" class="label">Sexe</label>
                        <div class="select is-fullwidth">
                            <select id='sexe' name='sexe' required >
                                <option></option>
                                <option>F</option>
                                <option>M</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!--DDN-->
                <div class="column is-4">
                    <label for="annee" class="label">Année</label>
                        <div class="control">
                            <input id="annee" class="input" type="number"
                            placeholder="1998" min="1910" max="2022">
                        </div>
                </div>
                <div class="column is-4">
                    <label for="mois" class="label">Mois</label>
                        <div class="control">
                            <input id="mois" class="input" type="number"
                            placeholder="08" min="1" max="12">
                        </div>
                </div>
                <div class="column is-4">
                    <label for="jours" class="label">Jours</label>
                        <div class="control">
                            <input id="jour" class="input" type="number"
                            placeholder="02" min="1" max="12">
                        </div>
                </div>
                <!--BOUTON-->
                <div class="column is-12">
                    <input id="form" class="button is-info is-fullwidth"
                    type="button" value="Recherche">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { isJourValide, isMoisValide, isAnneeValide } from '@/validations';

export default {
    name: 'RequeteIPPEView',

    methods: {
        // S'occupe de l'affichage des messages d'erreur
        checkMandatoryInput(nom, prenom1, annee, mois, jour) {
            // Identification de l'emplacement des messages
            const msgNom = document.getElementById('nomError');
            const msgPrenomUn = document.getElementById('prenom1Error');
            const msgJour = document.getElementById('jourError');
            const msgMois = document.getElementById('moisError');
            const msgAnnee = document.getElementById('anneeError');
            // Check la validité des champs
            const anneeValid = isAnneeValide(annee);
            const moisValid = isMoisValide(mois);
            const jourValid = isJourValide(jour);
            // Retourne true s'il n'y a pas d'erreur
            let errorFalse = true;
            // Condition champs vides
            if (nom === '') {
                msgNom.classList.remove('is-hidden');
                errorFalse = false;
            } else { msgNom.classList.add('is-hidden'); }

            if (prenom1 === '') {
                msgPrenomUn.classList.remove('is-hidden');
                errorFalse = false;
            } else { msgPrenomUn.classList.add('is-hidden'); }

            // s'assure que les dates entrees sont conforme
            if (jour === '' || !jourValid) {
                msgJour.classList.remove('is-hidden');
                errorFalse = false;
            } else { msgJour.classList.add('is-hidden'); }

            if (mois === '' || !moisValid) {
                msgMois.classList.remove('is-hidden');
                errorFalse = false;
            } else { msgMois.classList.add('is-hidden'); }

            if (annee === '' || !anneeValid) {
                msgAnnee.classList.remove('is-hidden');
                errorFalse = false;
            } else {
                msgAnnee.classList.add('is-hidden');
            }
            return errorFalse;
        },
    },
};
</script>

<style scoped>
</style>
