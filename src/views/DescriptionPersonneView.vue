<template>
    <div class="container mb-4 is-desktop" v-if="personne !== null">
        <div class="box">
            <div class="columns is-centered">
                <div class="column is-half">
                    <h1>  La personne que vous êtes sur le point de modifier est :
                        <p class="is-bold">{{personne[0].NomFamille}} {{personne[0].Prenom1}}
                        {{personne[0].Prenom2}}</p></h1>
                    <br>
                    <label for="numTel" class="label">Numéro de téléphone</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "numTel" class="input" type="text"
                            placeholder="Numéro de télèphone" v-model="numTel">
                        </div>
                            <p class="help is-danger">{{ ErrorNumTel }}</p>

                    <label for="numPer" class="label">Numéro de permis</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "numPer" class="input" type="text"
                            placeholder="Numéro de permis" v-model="numPermis">
                        </div>
                        <p class="help is-danger" > {{ ErrorNumPermis }} </p>

                    <label for="adresse1" class="label">Adresse 1</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "adresse1" class="input" type="text"
                            placeholder="Adresse 1" v-model="adresse1">
                        </div>
                        <p class="help is-danger"> {{ ErrorAdresse1 }} </p>

                    <label for="adresse2" class="label">Adresse 2</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "adresse2" class="input" type="text"
                            placeholder="Adresse 2" v-model="adresse2">
                        </div>
                        <p class="help is-danger"> {{ ErrorAdresse2 }} </p>

                    <label for="ville" class="label">Ville</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "ville" class="input" type="text"
                            placeholder="ville" v-model="ville">
                        </div>
                        <p class="help is-danger"> {{ ErrorVille }}</p>

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
                                </div>
                                <p class="help is-danger"> {{ ErrorCodePostal }}</p>
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
                                </div>
                                <p id="taille" class="help is-danger"> {{ ErrorTaille }}</p>
                        </div>
                        <div class="column is-4">
                            <label for="poids" class="label">Poids</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "poids" class="input" type="int"
                                    placeholder="Poids" v-model="poids">
                                </div>
                                <p id="poids" class="help is-danger"> {{ ErrorPoids }}</p>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-6">
                            <label for="yeux" class="label">Yeux</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "yeux" class="input" type="text"
                                    placeholder="yeux" v-model="yeux">
                                </div>
                                <p class="help is-danger"> {{ ErrorYeux }}</p>
                        </div>
                        <div class="column is-6">
                            <label for="cheveux" class="label">Cheveux</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "cheveux" class="input" type="text"
                                    placeholder="cheveux" v-model="cheveux">
                                </div>
                                <p class="help is-danger"> {{ ErrorCheveux }}</p>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column">
                                <label for="marques" class="label">Marques</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input id = "marques" class="input" type="text"
                                        placeholder="marques" v-model="marques">
                                    </div>
                                    <p class="help is-danger"> {{ ErrorMarques }}</p>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-6">
                            <p>Choisir ceux qui s'appliquent:</p>
                                <div>
                                    <input type="checkbox" v-model="toxicomanie" name="toxicomanie"
                                    value="Toxicomanie">
                                    <label for="toxicomanie">   Toxicomanie</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="desorganise" name="desorganise"
                                    value="desorganise">
                                    <label for="desorganise">   Desorganise</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="depressif" name="depressif"
                                    value="depressif">
                                    <label for="depressif"> Depressif</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="suicidaire" name="suicidaire"
                                    value="suicidaire">
                                    <label for="suicidaire">    Suicidaire</label>
                                </div>

                                <div>
                                    <input type="checkbox" v-model="violent" name="violent"
                                    value="violent">
                                    <label for="violent">   Violent</label>
                                </div>
                        </div>

                        <div class="column is-6">
                            <label for="gilet" class="label">Gilet</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "gilet" class="input" type="text"
                                    placeholder="Gilet" v-model="gilet">
                                </div>
                                <p id="gilet" class="help is-danger"> {{ ErrorGilet }}</p>

                            <label for="pantalon" class="label">Pantalon</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "pantalon" class="input" type="text"
                                    placeholder="Pantalon" v-model="pantalon">
                                </div>
                                <p id="gilet" class="help is-danger"> {{ ErrorPantalon }}</p>
                        </div>

                    </div>
                        <label for="autreVetements" class="label">Autre Vêtements</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input id = "autreVetements" class="input" type="text"
                                    placeholder="autreVetements" v-model="autreVetement">
                                </div>
                                    <p class="help is-danger"> {{ ErrorAutreVetement }}</p>
                    </div>
            </div>

            <div class="columns">
                <div class="column is-6 has-text-right">
                    <button class="button " v-on:click="retourALaPersonne">Retour</button>
                </div>
                <div class="column is-6">
                    <button class="button" v-on:click="updateDescription">Ajouter</button>
                </div>
                <p class="has-text-success"
                    v-if ="envoyé">
                    *Modification enregistré avec succès</p>
            </div>
        </div>
    </div>
</template>

<script>
import { svrURL } from '@/constantes';
import {
    verifieNumTel,
    verifieNumPermis,
    verifieAdresse,
    verifieVille,
    verifieCodePostal,
    verifieTaillePoids,
    verifieYeuxCheveux,
    verifieMarques,
    verifieGiletPantalonAutreVetement,
} from '@/validations';

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
            envoyé: false,
            // Les erreurs
            uneErreurEstPresente: false,
            ErrorNumTel: '',
            ErrorNumPermis: '',
            ErrorAdresse1: '',
            ErrorAdresse2: '',
        };
    },
    computed: {
        /* computedVerifieNumTel() {
            return verifieNumTel(this.numTel);
        },
        computedVerifieNumPermis() {
            return verifieNumPermis(this.numPermis);
        },
        computedVerifieAdresse1() {
            return verifieAdresse(this.adresse1);
        },
        computedVerifieAdresse2() {
            return verifieAdresse(this.adresse2);
        },
        computedVerifieVille() {
            return verifieVille(this.ville);
        },
        computedVerifieCodePostal() {
            return verifieCodePostal(this.codePostal);
        },
        computedVerifieTaille() {
            return verifieTaillePoids(this.taille);
        },
        computedVerifiePoids() {
            return verifieTaillePoids(this.poids);
        },
        computedVerifieYeux() {
            return verifieYeuxCheveux(this.yeux);
        },
        computedVerifieCheveux() {
            return verifieYeuxCheveux(this.cheveux);
        },
        computedVerifieMarques() {
            return verifieMarques(this.marques);
        },
        computedVerifieGilet() {
            return verifieGiletPantalonAutreVetement(this.gilet);
        },
        computedVerifiePantalon() {
            return verifieGiletPantalonAutreVetement(this.pantalon);
        },
        computedVerifieAutreVetement() {
            return verifieGiletPantalonAutreVetement(this.autreVetement);
        }, */

    },
    methods: {
        async GetDescription() {
            const rep = await fetch(`${svrURL}/personnes/${this.$route.params.idPersonne}`);
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

            if (!verifieNumTel(this.numTel) && this.numTel !== '') {
                this.ErrorNumTel += '* seul 10 chiffres sont acceptés';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorNumTel = '';
            }
            if (!verifieNumPermis(this.numPermis) && this.numPermis !== null) {
                this.ErrorNumPermis += '*Le numéro de permis est invalide. Ex:A123412341234';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorNumPermis = '';
            }
            if (!verifieAdresse(this.adresse1) && this.adresse1 !== null) {
                this.ErrorAdresse1 += '*Maximum de 50 caracthère';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorAdresse1 = '';
            }
            if (!verifieAdresse(this.adresse2) && this.adresse2 !== null) {
                this.ErrorAdresse2 += '*Maximum de 50 caracthère';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorAdresse2 = '';
            }
            if (!verifieVille(this.ville) && this.ville !== null) {
                this.ErrorVille += '*Maximum de 50 caracthère';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorVille = '';
            }
            if (!verifieCodePostal(this.codePostal) && this.codePostal !== null) {
                this.ErrorVille += '*Entrez un code Postal valide Ex: A1B 2C3';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorVille = '';
            }
            if (!verifieCodePostal(this.codePostal) && this.codePostal !== null) {
                this.ErrorCodePostal += '*Entrez un code Postal valide Ex: A1B 2C3';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorCodePostal = '';
            }
            if (!verifieTaillePoids(this.taille) && this.taille !== null) {
                this.ErrorTaille += '*Veuillez entrer 3 chiffres max. Taille en CM';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorTaille = '';
            }
            if (!verifieTaillePoids(this.poids) && this.poids !== null) {
                this.ErrorPoids += '*Veuillez entrer 3 chiffres max. Poids en KG';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorPoids = '';
            }
            if (!verifieYeuxCheveux(this.yeux) && this.yeux !== null) {
                this.ErrorYeux += '*Maximum de 15 caracthères. Pas de chiffres ou caracthères spéciaux';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorYeux = '';
            }
            if (!verifieYeuxCheveux(this.cheveux) && this.cheveux !== null) {
                this.ErrorCheveux += '*Maximum de 15 caracthères. Pas de chiffres ou caracthères spéciaux';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorCheveux = '';
            }
            if (!verifieMarques(this.marques) && this.marques !== null) {
                this.ErrorMarques += '*Maximum de 100 caracthères. Pas de chiffres ou caracthères spéciaux';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorMarques = '';
            }
            if (!verifieGiletPantalonAutreVetement(this.gilet) && this.gilet !== null) {
                this.ErrorGilet += '*Maximum de 50 caracthères. Pas de chiffres ou caracthères spéciaux';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorGilet = '';
            }
            if (!verifieGiletPantalonAutreVetement(this.pantalon) && this.pantalon !== null) {
                this.ErrorPantalon += '*Maximum de 50 caracthères. Pas de chiffres ou caracthères spéciaux';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorPantalon = '';
            }
            if (!verifieGiletPantalonAutreVetement(this.autreVetement)
            && this.autreVetement !== null) {
                this.ErrorAutreVetement += '*Maximum de 50 caracthères. Pas de chiffres ou caracthères spéciaux';
                this.uneErreurEstPresente = true;
            } else {
                this.ErrorAutreVetement = '';
            }

            if (this.uneErreurEstPresente === true) {
                this.envoyé = false;
            } else {
            // Envoyer null dans le cas d'une chaine vide
                const tel = this.Telephone === undefined ? null : this.Telephone;
                const permis = this.numPermis === '' ? null : this.numPermis;
                const adresse1 = this.adresse1 === '' ? null : this.adresse1;
                const adresse2 = this.adresse2 === '' ? null : this.adresse2;
                const ville = this.ville === '' ? null : this.ville;
                const province = this.province === '' ? null : this.province;
                const CD = this.codePostal === '' ? null : this.codePostal;
                const race = this.race === '' ? null : this.race;
                const taille = this.taille === '' ? null : this.taille;
                const poids = this.poids === '' ? null : this.poids;
                const yeux = this.yeux === '' ? null : this.yeux;
                const cheveux = this.cheveux === '' ? null : this.cheveux;
                const marques = this.marques === '' ? null : this.marques;
                const gilet = this.gilet === '' ? null : this.gilet;
                const pantalon = this.pantalon === '' ? null : this.pantalon;
                const autreVetement = this.autreVetement === '' ? null : this.autreVetement;

                console.log(taille);
                // la const body contient tout ce qui sera envoyé à la base de données.
                const body = {
                    Telephone: tel,
                    NoPermis: permis,
                    AdresseUn: adresse1,
                    AdresseDeux: adresse2,
                    Ville: ville,
                    Province: province,
                    CP: CD,
                    Race: race,
                    Taille: taille,
                    Poids: poids,
                    Yeux: yeux,
                    Cheveux: cheveux,
                    Marques: marques,
                    Gilet: gilet,
                    Pantalon: pantalon,
                    Autre: autreVetement,
                    Toxicomanie: this.toxicomanie,
                    Desorganise: this.desorganise,
                    Suicidaire: this.suicidaire,
                    Violent: this.violent,
                    Depressif: this.depressif,
                };
                const response = await fetch(`${svrURL}/personnes/$
            {this.$route.params.idPersonne}/description`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
                if (response.ok) {
                    this.envoyé = true;
                } else {
                    msg = await response.json();
                    alert(msg);
                }
            }
        },
        retourALaPersonne() {
            this.$router.push(`/personne/${this.$route.params.idPersonne}`);
        },
        redirect() {
            this.$router.push(`/personne/${this.$route.params.idPersonne}`);
        },
    },
    mounted() {
        this.GetDescription();
    },
};
</script>

<style>

</style>
