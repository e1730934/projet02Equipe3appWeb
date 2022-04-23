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
                        <p id="nomError" class="help is-danger is-hidden">
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
                        <p id="prenom1Error" class="help is-danger is-hidden">
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
                        <p id="prenom2Error" class="help is-danger is-hidden">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="column has-text-centered">
                        <label for="dateNaissance" class="label">Date de naissance</label>
                        <div id="dateNaissance" class="columns is-multiline mt-2">
                            <div class="column is-4">
                                <label for="annee" class="label">Année</label>
                                <div class="control">
                                    <input id="annee" class="input" type="number"
                                    placeholder="1998" min="1910" max="2022"
                                    v-model="annee">
                                </div>
                                <p id="anneeError" class="help is-danger is-hidden">
                                    *Champ obligatoire : seulement les années valides se trouvent
                                    entre 1910 et 2022</p>
                            </div>
                            <div class="column is-4">
                                <label for="mois" class="label">Mois</label>
                                <div class="control">
                                    <input id="mois" class="input" type="number" placeholder="08"
                                    min="1" max="12" v-model="mois">
                                </div>
                                <p id="moisError" class="help is-danger is-hidden">
                                    *Champ obligatoire : seulement les chiffres
                                    entre 1 et 12 sont permis</p>
                            </div>
                            <div class="column is-4">
                                <label for="jour" class="label">Jour</label>
                                <div class="control">
                                    <input id="jour" class="input" type="number" placeholder="02"
                                    min="1" max="12" v-model="jour">
                                </div>
                                <p id="jourError" class="help is-danger is-hidden">
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
                        </div>
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
                                        params: {idPersonne: parseInt(this.personne.IdPersonne)}}">
                                        <i class="fas fa-user-plus"></i>
                                        </router-link>
                                    </th>
                                </tr>
                                </thead>
                        <tbody v-if="this.ippe !== null && this.personne !== null">
                            <tr v-for="i in this.ippe"
                            v-bind:key="i.IdIppe">
                                <td>{{i.TypeEvenement}}</td>
                                <td>{{i.NoEvenement}}</td>
                                <td style="border:none;">
                                    <router-link v-bind:to="{name: 'modifIPPEView',
                                    params: {idPersonne: parseInt(this.personne.IdPersonne),
                                    idIppe: parseInt(i.IdIppe)}}">
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
                <div class="buttons is-centered">
                    <button class="button is-info" >Enregistrer</button>
                    <button class="button is-info" >Supprimer</button>
                    <button class="button is-info" >Annuler</button>
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
        };
    },
    mounted() {
        if (this.paramId) {
            this.getPersonne();
            this.getIPPE();
        }
    },
    computed: {
        capitalizeName() {
            return capitalizeFirstLetter(this.nomFamille);
        },
        capitalizeFirstNameOne() {
            return capitalizeFirstLetter(this.prenomUn);
        },
        capitalizeFirstNameDeux() {
            return capitalizeFirstLetter(this.prenomDeux);
        },
        dateValid() {
            return isDateValide(this.annee, this.mois, this.jour);
        },
        anneeValid() {
            return isAnneeValide(this.annee);
        },
        jourValid() {
            return isJourValide(this.jour);
        },
        moisValid() {
            return isMoisValide(this.mois);
        },
    },
    methods: {
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
        async getIPPE() {
            const response = await fetch(`${svrURL}/personnes/${this.paramId}/ippes`);
            if (response.ok) {
                this.ippe = await response.json();
            }
        }, /*
        async DeletePersonne() {
            let msg;
            const response = await fetch(`${svrURL}/personnes/${this.param}`, {
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
        }, */
    },
};
</script>

<style scoped>
</style>
