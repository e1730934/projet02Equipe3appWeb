<template>
        <div class="container mb-4 is-desktop">
        <div class="box">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="field">
                        <label for="nom" class="label">Nom de famille</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "nom" class="input" type="text"
                            placeholder="Nom de famille"
                            v-model="nomFamille">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="nomError === true" class="help is-danger">
                            *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                    </div>

                    <div class="field">
                        <label for="prenom1" class="label">Prénom 1</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "prenom1" class="input" type="text"
                            placeholder="Prénom 1"
                            v-model="prenomUn">
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="prenom1Error === true" class="help is-danger">
                            *Champ obligatoire : seulement des lettres sont valides</p>
                    </div>

                    <div class="field">
                        <label for="prenom2" class="label">Prénom 2</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Prénom 2"
                            v-model="prenomDeux">
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="column has-text-centered">
                        <label for="dateNaissance" class="label">Date de naissance</label>
                        <p v-if="dateError === true" class="help is-danger has-text-centered">
                            Erreur: date invalide.
                        </p>
                        <div id="dateNaissance" class="columns is-multiline mt-2">
                            <div class="column is-4">
                                <label for="annee" class="label">Année</label>
                                <div class="control">
                                    <input id="annee" class="input" type="number"
                                    placeholder="1998" min="1910" max="2022"
                                    v-model="annee">
                                </div>
                                <p v-if="anneeError === true" class="help is-danger">
                                    *Champ obligatoire : seulement les années valides se trouvent
                                    entre 1910 et 2022</p>
                            </div>
                            <div class="column is-4">
                                <label for="mois" class="label">Mois</label>
                                <div class="control">
                                    <input id="mois" class="input" type="number" placeholder="08"
                                    min="1" max="12" v-model="mois">
                                </div>
                                <p v-if="moisError === true" class="help is-danger">
                                    *Champ obligatoire : seulement les chiffres
                                    entre 1 et 12 sont permis</p>
                            </div>
                            <div class="column is-4">
                                <label for="jour" class="label">Jour</label>
                                <div class="control">
                                    <input id="jour" class="input" type="number" placeholder="02"
                                    min="1" max="12" v-model="jour">
                                </div>
                                <p v-if="jourError === true" class="help is-danger">
                                    *Champ obligatoire : seulement les chiffres
                                    entre 1 et 31 sont permis</p>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-multiline mt-2">
                        <div class="column is-half has-text-centered">
                            <div class="control mt-2">
                                <label for="sexe" class="label">Sexe</label>
                                <div class="select">
                                    <select id="sexe" v-model="sexe">
                                        <option id="masc" value=true>Masculin</option>
                                        <option id="fem" value=false>Féminin</option>
                                    </select>
                                </div>
                            </div>
                            <p v-if="genreError === true" class="help is-danger has-text-centered">
                            *Champ obligatoire.
                            </p>
                        </div>
                        <div class="column is-half has-text-centered">
                            <label for="categorie" class="label">Catégorie</label>
                            <div class="select">
                                <select id= "categorie" v-model="categorie">
                                    <option id="etudiant">Étudiant</option>
                                    <option id="enseignant">Enseignant</option>
                                    <option id="comedien">Comédien</option>
                                    <option id="personnage">Personnage</option>
                                </select>
                            </div>
                            <p v-if="categorieError === true"
                            class="help is-danger has-text-centered">
                            *Champ obligatoire.
                            </p>
                        </div>
                    </div>
                    <div class="has-text-centered">
                        <button class="button is-info is-rounded"
                        v-if="this.personne !== null"
                        v-on:click="goPersonneDescription">
                            Modification des descriptions
                        </button>
                    </div>
                </div>
            </div>

            <section class="section mt-3 has-text-centered ">
                <!--Introduire le tableau ici-->
                <div id='TableauIPPE' class="container has-text-centered is-centered">
                    <h1 class="title is-4">Réponses - IPPE</h1>
                    <div class="columns is-centered">
                        <div class="column is-narrow">
                            <table id="table" class="table is-bordered
                            is-striped is-narrow is-hoverable" style="align-content: center;">
                                <thead>
                                    <tr>
                                        <th class="is-info">Événement</th>
                                        <th class="is-info">Numéro</th>
                                        <th style="border:none;"
                                        v-if="this.personne !== null">
                                            <router-link v-bind:to="{name: 'IPPEView',
                                            params: {idPersonne: this.personne[0].IdPersonne}}">
                                            <i class="fas fa-user-plus"></i>
                                            </router-link>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-if="this.personne === null">
                                    <tr>
                                        <td> <br> </td>
                                        <td> <br> </td>
                                    </tr>
                                </tbody>
                                <tbody v-if="this.ippe !== null && this.personne !== null">
                                    <tr v-for="i in this.ippe"
                                    v-bind:key="i.IdIPPE">
                                        <td>{{i.TypeEvenement}}</td>
                                        <td>{{i.NoEvenement}}</td>
                                        <td style="border:none;">
                                            <router-link v-bind:to="{name: 'modifIPPEView',
                                            params: {
                                                idPersonne: this.personne[0].IdPersonne,
                                                idIppe: i.IdIPPE}}">
                                                <i class="fas fa-pen"></i>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
                <p class="has-text-success has-text-centered" v-if="PUTenvoyé">
                        *Modifications enregistrées avec succès
                </p>
                <p class="has-text-success has-text-centered" v-if="POSTenvoyé">
                        *Personne ajoutée avec succès
                </p>
                <p class="has-text-success has-text-centered" v-if="DELETEenvoyé">
                        *Personne supprimée avec succès
                </p>
                <div class="buttons is-centered">
                    <button class="button is-info"
                    v-if="this.personne === null"
                    v-on:click="CreatePersonnes" >Enregistrer</button>
                    <button class="button is-info"
                    v-if="this.personne !== null"
                    v-on:click="UpdatePersonne" >Enregistrer</button>
                    <button class="button is-info"
                    v-if="this.personne !== null"
                    v-on:click="DeletePersonne">Supprimer</button>
                    <button class="button is-info"
                    v-on:click="retourListePersonnes">Annuler</button>
                </div>
        </div>
    </div>

</template>

<script>
import { svrURL } from '../constantes';
import {
    isJourValide,
    isMoisValide,
    isAnneeValide,
    isDateValide,
    capitalizeFirstLetter,
    checkNomInput,
    checkPrenomInput,
} from '../validations';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'PersonneView',
    data() {
        return {
            personne: null,
            paramId: this.$route.params.idPersonne,
            ippe: null,
            nomFamille: '',
            prenomUn: '',
            prenomDeux: '',
            annee: '',
            mois: '',
            jour: '',
            sexe: '',
            categorie: '',
            // Les erreurs
            uneErreurEstPresente: false,
            prenom1Error: false,
            nomError: false,
            prenom2Error: false,
            anneeError: false,
            jourError: false,
            moisError: false,
            dateError: false,
            genreError: false,
            categorieError: false,
            // Requête réussi
            PUTenvoyé: false,
            POSTenvoyé: false,
            DELETEenvoyé: false,
        };
    },
    mounted() {
        if (this.paramId) {
            this.getPersonne();
            this.getIPPE();
        }
    },
    computed: {
        // Rajoute une majuscule au nom de famille
        capitalizeName() {
            return capitalizeFirstLetter(this.nomFamille);
        },
        // Rajoute une majuscule au prénom un
        capitalizeFirstNameOne() {
            return capitalizeFirstLetter(this.prenomUn);
        },
        // Rajoute une majuscule au prénom deux
        capitalizeFirstNameDeux() {
            return capitalizeFirstLetter(this.prenomDeux);
        },
        // Vérifie la validité du nom de famille
        nomFamilleValid() {
            return checkNomInput(this.nomFamille);
        },
        // Vérifie la validité du prénom un
        prenomUnValid() {
            return checkPrenomInput(this.prenomUn);
        },
        // Vérifie la validité du prénom deux
        prenomDeuxValid() {
            return checkPrenomInput(this.prenomDeux);
        },
        // Vérifie si le jour ne dépasse pas le jour maximum du mois
        dateValid() {
            return isDateValide(this.annee, this.mois, this.jour);
        },
        // Vérifie la validité de l'année
        anneeValid() {
            return isAnneeValide(this.annee);
        },
        // Vérifie la validité du jour
        jourValid() {
            return isJourValide(this.jour);
        },
        // Vérifie la validité du mois
        moisValid() {
            return isMoisValide(this.mois);
        },
    },
    methods: {
        // Sauve les informations de la personne et les places dans les inputs
        async getPersonne() {
            const response = await fetch(`${svrURL}/personnes/${this.paramId}`);
            if (response.ok) {
                this.personne = await response.json();
                const [anneVal, moisVal, anneeVal] = this.personne[0].DateNaissance.split('-');
                this.nomFamille = this.personne[0].NomFamille;
                this.prenomUn = this.personne[0].Prenom1;
                this.prenomDeux = this.personne[0].Prenom2 === null ? '' : this.personne[0].Prenom2;
                this.annee = anneVal;
                this.mois = moisVal;
                this.jour = anneeVal.substring(0, 2);
                this.sexe = this.personne[0].Masculin;
                this.categorie = this.personne[0].TypePersonne;
            }
        },
        // Recherche si la personne possède des évênements IPPE
        async getIPPE() {
            const response = await fetch(`${svrURL}/personnes/${this.paramId}/ippes`);
            if (response.ok) {
                this.ippe = await response.json();
            }
        },
        // Suppression de la personne et ses IPPE
        async DeletePersonne() {
            let msg;
            const response = await fetch(`${svrURL}/personnes/${this.paramId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                msg = await response.json();
                this.DELETEenvoyé = true;
                setTimeout(() => {
                    this.$router.push('/personnes');
                }, 2000);
            } else {
                msg = await response.json();
                alert(msg);
            }
        },
        // Gère les erreurs
        ErrorHandler() {
            // Reset le verificateur d'erreur
            if (this.uneErreurEstPresente) {
                this.uneErreurEstPresente = false;
            }
            if (!this.dateValid) {
                this.dateError = true;
                this.uneErreurEstPresente = true;
            } else {
                this.dateError = false;
            }
            if (!this.anneeValid) {
                this.anneeError = true;
                this.uneErreurEstPresente = true;
            } else {
                this.anneeError = false;
            }
            if (!this.jourValid) {
                this.jourError = true;
                this.uneErreurEstPresente = true;
            } else {
                this.jourError = false;
            }
            if (!this.moisValid) {
                this.moisError = true;
                this.uneErreurEstPresente = true;
            } else {
                this.moisError = false;
            }
            if (!this.nomFamilleValid) {
                this.nomError = true;
                this.uneErreurEstPresente = true;
            } else {
                this.nomError = false;
            }
            if (!this.prenomUnValid) {
                this.prenom1Error = true;
                this.uneErreurEstPresente = true;
            } else {
                this.prenom1Error = false;
            }
            if (this.prenomDeux !== '') {
                if (!this.prenomDeuxValid) {
                    this.prenom2Error = true;
                    this.uneErreurEstPresente = true;
                } else {
                    this.prenom2Error = false;
                }
            } else {
                this.prenom2Error = false;
            }
            if (this.sexe === '') {
                this.genreError = true;
                this.uneErreurEstPresente = true;
            } else {
                this.genreError = false;
            }
            if (this.categorie === '') {
                this.categorieError = true;
                this.uneErreurEstPresente = true;
            } else {
                this.categorieError = false;
            }
        },
        // Modification de personne
        async UpdatePersonne() {
            this.ErrorHandler();
            if (!this.uneErreurEstPresente) {
                this.jour = this.jour.length === 1 ? `0${this.jour}` : this.jour;
                this.mois = this.mois.length === 1 ? `0${this.mois}` : this.mois;
                const date = `${this.annee}-${this.mois}-${this.jour}`;
                const body = {
                    TypePersonne: this.categorie,
                    NomFamille: this.capitalizeName,
                    Prenom1: this.capitalizeFirstNameOne,
                    Prenom2: this.capitalizeFirstNameDeux,
                    Masculin: this.sexe,
                    DateNaissance: date,
                };

                const response = await fetch(`${svrURL}/personnes/${this.paramId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
                if (response.ok) {
                    this.PUTenvoyé = true;
                    setTimeout(() => {
                        this.$router.push('/personnes');
                    }, 2000);
                } else {
                    const msg = await response.json();
                    alert(msg);
                }
            }
        },
        // Creation de personne
        async CreatePersonnes() {
            this.ErrorHandler();
            if (!this.uneErreurEstPresente) {
                this.jour = this.jour.length === 1 ? `0${this.jour}` : this.jour;
                this.mois = this.mois.length === 1 ? `0${this.mois}` : this.mois;
                const date = `${this.annee}-${this.mois}-${this.jour}`;
                const body = {
                    TypePersonne: this.categorie,
                    NomFamille: this.capitalizeName,
                    Prenom1: this.capitalizeFirstNameOne,
                    Prenom2: this.capitalizeFirstNameDeux,
                    Masculin: this.sexe,
                    DateNaissance: date,
                };

                const response = await fetch(`${svrURL}/personnes`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
                if (response.ok) {
                    this.POSTenvoyé = true;
                    setTimeout(() => {
                        this.$router.push('/personnes');
                    }, 2000);
                } else {
                    const errormsg = await response.json();
                    alert(errormsg);
                }
            }
        },
        // Retour à la liste de personnes
        retourListePersonnes() {
            this.$router.push('/personnes');
        },
        goPersonneDescription() {
            this.$router.push(`/personne/${this.paramId}/description`);
        },
    },
};
</script>

<style scoped>
</style>
