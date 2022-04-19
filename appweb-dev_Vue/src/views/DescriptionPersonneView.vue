<template>
    <div class="container mb-4 is-desktop" v-if="personne !== null">
        <div class="box">
            <div class="columns is-centered">
                <div class="column is-half">
                    <h1>  La personne que vous êtes sur le point de modifier est :
                        {{personne[0].NomFamille}} {{personne[0].Prenom1}}
                        {{personne[0].Prenom2}}</h1>
                    <br>
                    <label for="numTel" class="label">Numéro de téléphone</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "numTel" class="input" type="text"
                            placeholder="Numéro de télèphone" v-model="numTel">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="(numTel !== null && numTel !== '')
                            && !verifieNumTel">
                            * seul 10 chiffres sont acceptés</p>

                    <label for="numPer" class="label">Numéro de permis</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "numPer" class="input" type="text"
                            placeholder="Numéro de permis" v-model="numPermis">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="(numPermis !== null && numPermis !== '')
                        && !verifieNumPermis">
                            *Le numéro de permis est invalide. Ex:A123412341234</p>

                    <label for="adresse1" class="label">Adresse 1</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "adresse1" class="input" type="text"
                            placeholder="Adresse 1" v-model="adresse1">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="adresse1 !== null && !verifieAdresse1">
                            *Maximum de 50 caracthère</p>

                    <label for="adresse2" class="label">Adresse 2</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "adresse2" class="input" type="text"
                            placeholder="Adresse 2" v-model="adresse2">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="adresse2 !== null && !verifieAdresse2">
                            *Maximum de 50 caracthère</p>

                    <label for="ville" class="label">Ville</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "ville" class="input" type="text"
                            placeholder="ville" v-model="ville">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="ville !== null && !verifieVille">
                            *Maximum de 50 caracthère</p>

                    <div class="columns">
                        <div class="column is-6">
                            <label for="province" class="label">Province</label>
                                <div class="select">
                                    <select v-model="province">
                                        <option ></option>
                                        <option >Québec</option>
                                        <option >Terre-Neuve-et-Labrador</option>
                                        <option >Colombie-Britannique</option>
                                        <option >Alberta</option>
                                        <option >Saskatchewan</option>
                                        <option >Manitoba</option>
                                        <option >Ontario</option>
                                        <option >Nouveau-Brunswick</option>
                                        <option >Île-du-prince-Édouard</option>
                                        <option >Nouvelle-Écosse</option>
                                        <option >Yukon</option>
                                        <option >Territoires du Nord-Ouest</option>
                                        <option >Nunavut</option>
                                    </select>
                                </div>
                        </div>
                        <div class="column is-6">
                            <label for="codePostal" class="label">Code Postal</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "codePostal" class="input" type="text"
                                    placeholder="codePostal" v-model="codePostal">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <p class="help is-danger"
                                    v-if="(codePostal !== null && codePostal !== '')
                                    && !verifieCodePostal">
                                    *Entrez un code Postal valide Ex: A1B 2C3</p>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-4">
                            <label for="race" class="label">Race</label>
                                <div class="select">
                                    <select v-model="race">
                                        <option id="vide"></option>
                                        <option id="blanc">Blanc</option>
                                        <option id="noir">Noir</option>
                                        <option id="autre">Autre</option>
                                    </select>
                                </div>
                        </div>
                        <div class="column is-4">
                            <label for="taille" class="label">Taille</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "taille" class="input" type="int"
                                    placeholder="Taille" v-model="taille">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <p id="taille" class="help is-danger"
                                v-if="taille !== null && !verifieTaille">
                                    *Veuillez entrer 3 chiffres max. Taille en CM.</p>
                        </div>
                        <div class="column is-4">
                            <label for="poids" class="label">Poids</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "poids" class="input" type="int"
                                    placeholder="Poids" v-model="poids">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <p id="poids" class="help is-danger"
                                v-if="poids !== null && !verifiePoids">
                                    *Veuillez entrer 3 chiffres max. Poids en KG.</p>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-6">
                            <label for="yeux" class="label">Yeux</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "yeux" class="input" type="text"
                                    placeholder="yeux" v-model="yeux">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <p class="help is-danger" v-if="yeux !== null && !verifieYeux">
                                    *Maximum de 15 caracthères. Pas de chiffres ou caracthères
                                    spéciaux</p>
                        </div>
                        <div class="column is-6">
                            <label for="cheveux" class="label">Cheveux</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "cheveux" class="input" type="text"
                                    placeholder="cheveux" v-model="cheveux">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <p class="help is-danger is-hidden"
                                v-if="cheveux !== null && !verifieCheveux">
                                    *Maximum de 15 caracthères. Pas de chiffres ou caracthères
                                    spéciaux</p>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column">
                                <label for="marques" class="label">Marques</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input id = "marques" class="input" type="text"
                                        placeholder="marques" v-model="marques">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <p class="help is-danger"
                                    v-if="marques !== null && !verifieMarques">
                                        *Maximum de 100 caracthères. Pas de chiffres ou caracthères
                                    spéciaux</p>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-6">
                            <p>Choisir ceux qui s'appliquent:</p>
                                <div>
                                    <input type="checkbox" v-model="toxicomanie" name="toxicomanie"
                                    value="Toxicomanie">
                                    <label for="toxicomanie">Toxicomanie</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="desorganise" name="desorganise"
                                    value="desorganise">
                                    <label for="desorganise">Desorganise</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="depressif" name="depressif"
                                    value="depressif">
                                    <label for="depressif">Depressif</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="suicidaire" name="suicidaire"
                                    value="suicidaire">
                                    <label for="suicidaire">Suicidaire</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="violent" name="violent"
                                    value="violent">
                                    <label for="violent">Violent</label>
                                </div>
                        </div>

                        <div class="column is-6">
                            <label for="gilet" class="label">Gilet</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "gilet" class="input" type="text"
                                    placeholder="Gilet" v-model="gilet">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <p id="gilet" class="help is-danger"
                                v-if ="gilet !== null && !verifieGilet">
                                    *Maximum de 50 caracthères. Pas de chiffres ou caracthères
                                    spéciaux</p>

                            <label for="pantalon" class="label">Pantalon</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "pantalon" class="input" type="text"
                                    placeholder="Pantalon" v-model="pantalon">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <p id="gilet" class="help is-danger"
                                v-if ="pantalon !== null && !verifiePantalon">
                                    *Maximum de 50 caracthères. Pas de chiffres ou caracthères
                                    spéciaux</p>
                        </div>

                    </div>
                        <label for="autreVetements" class="label">Autre Vêtements</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "autreVetements" class="input" type="text"
                                    placeholder="autreVetements" v-model="autreVetement">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                    <p class="help is-danger"
                                    v-if ="autreVetement !== null && !verifieAutreVetement">
                                    *Maximum de 50 caracthères. Pas de chiffres ou caracthères
                                    spéciaux</p>
                    </div>
            </div>

            <div class="columns">
                <div class="column is-6 has-text-right">
                    <button class="button " v-on:click="retourALaPersonne">Retour</button>
                </div>
                <div class="column is-6">
                    <button class="button" v-on:click="updateDescription">Ajouter</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { svrURL } from '@/constantes';

export default {
    name: 'DescriptionPersonneView',
    data() {
        return {
            personne: null,
            numTel: null,
            numPermis: null,
            adresse1: null,
            adresse2: null,
            ville: null,
            province: null,
            codePostal: null,
            race: null,
            taille: null,
            poids: null,
            yeux: null,
            cheveux: null,
            marques: null,
            gilet: null,
            pantalon: null,
            autreVetement: null,
            toxicomanie: false,
            desorganise: false,
            depressif: false,
            suicidaire: false,
            violent: false,
        };
    },
    computed: {
        verifieNumTel() {
            return /^[0-9]{10}$/.test(this.numTel);
        },
        verifieNumPermis() {
            return /^[A-Z]{1}[0-9]{12}$/.test(this.numPermis);
        },
        verifieAdresse1() {
            return /^.{0,50}$/.test(this.adresse1);
        },
        verifieAdresse2() {
            return /^.{0,50}$/.test(this.adresse2);
        },
        verifieVille() {
            return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî-\s]{0,50}$/.test(this.ville);
        },
        verifieCodePostal() {
            return /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/.test(this.codePostal);
        },
        verifieTaille() {
            return /^[0-9]{0,3}$/.test(this.taille);
        },
        verifiePoids() {
            return /^[0-9]{0,3}$/.test(this.poids);
        },
        verifieYeux() {
            return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]{0,15}$/.test(this.yeux);
        },
        verifieCheveux() {
            return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]{0,15}$/.test(this.cheveux);
        },
        verifieMarques() {
            return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,100}$/.test(this.marques);
        },
        verifieGilet() {
            return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,50}$/.test(this.gilet);
        },
        verifiePantalon() {
            return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,50}$/.test(this.pantalon);
        },
        verifieAutreVetement() {
            return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,50}$/.test(this.autreVetement);
        },
    },
    methods: {
        async GetDescription() {
            const rep = await fetch(`${svrURL}/personnes/${this.$route.params.IdPersonne}`);
            if (rep.ok) {
                this.personne = await rep.json();

                this.numTel = this.personne[0].Telephone;
                this.numPermis = this.personne[0].NoPermis;
                this.adresse1 = this.personne[0].Adresse1;
                this.adresse2 = this.personne[0].Adresse2;
                this.ville = this.personne[0].Ville;
                if (this.personne[0].Province === 'Qc') {
                    this.province = 'Québec';
                }
                this.province = this.personne[0].Province;
                this.codePostal = this.personne[0].CodePostal;
                this.race = this.personne[0].Race;
                this.taille = this.personne[0].Taille;
                this.poids = this.personne[0].Poids;
                this.yeux = this.personne[0].Yeux;
                this.cheveux = this.personne[0].Cheveux;
                this.marques = this.personne[0].Marques;
                this.gilet = this.personne[0].Gilet;
                this.pantalon = this.personne[0].Pantalon;
                this.autreVetement = this.personne[0].AutreVetement;
                this.toxicomanie = this.personne[0].Toxicomanie;
                this.desorganise = this.personne[0].Desorganise;
                this.depressif = this.personne[0].Depressif;
                this.suicidaire = this.personne[0].Suicidaire;
                this.violent = this.personne[0].Violent;

                // Transformer tous les null en false
                if (this.toxicomanie === null) {
                    this.toxicomanie = false;
                }
                if (this.desorganise === null) {
                    this.desorganise = false;
                }
                if (this.depressif === null) {
                    this.depressif = false;
                }
                if (this.suicidaire === null) {
                    this.suicidaire = false;
                }
                if (this.violent === null) {
                    this.violent = false;
                }
            }
        },
        async updateDescription() {
            let msg;

            // Envoyer null dans le cas d'une chaine vide
            const tel = this.Telephone === undefined ? null : this.Telephone;
            const permis = this.numPermis === '' ? null : this.numPermis;
            const CD = this.codePostal === '' ? null : this.codePostal;
            const taille = this.taille === '' ? null : this.taille;
            const poids = this.poids === '' ? null : this.poids;
            console.log(taille);
            const body = {
                Telephone: tel,
                NoPermis: permis,
                AdresseUn: this.adresse1,
                AdresseDeux: this.adresse2,
                Ville: this.ville,
                Province: this.province,
                CP: CD,
                Race: this.race,
                Taille: taille,
                Poids: poids,
                Yeux: this.yeux,
                Cheveux: this.cheveux,
                Marques: this.marques,
                Gilet: this.gilet,
                Pantalon: this.pantalon,
                Autre: this.autreVetement,
                Toxicomanie: this.toxicomanie,
                Desorganise: this.desorganise,
                Suicidaire: this.suicidaire,
                Violent: this.violent,
                Depressif: this.depressif,
            };
            const response = await fetch(`${svrURL}/personnes/${this.$route.params.IdPersonne}/description`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                this.$router.push(`/personne/${this.$route.params.IdPersonne}`);
            } else {
                msg = await response.json();
                alert(msg);
            }
        },
        retourALaPersonne() {
            this.$router.push(`/personne/${this.$route.params.IdPersonne}`);
        },
    },
    mounted() {
        this.GetDescription();
    },
};
</script>

<style>

</style>
