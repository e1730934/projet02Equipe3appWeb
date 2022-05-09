<template>
    <div class="container mb-4 is-desktop" v-if="loaded===true">
        <form id="formulaireAjouter" @submit.prevent="handler($event)">
            <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%"><b>
                <u v-if="idValeur!==-1">MODIFICATION D'UNE RÉPONSE VALEUR</u>
                <u v-else>AJOUT D'UNE RÉPONSE VALEUR</u></b></h1>
            <div class="block has-text-centered has-background-danger" v-if="errorMessage!== ''">
                <p><strong class="has-text-white">{{ this.errorMessage }}</strong></p>
            </div>
            <div class="block has-text-centered has-background-success" v-if="successMessage!== ''">
                <p><strong class="has-text-white">{{ this.successMessage }}</strong></p>
            </div>
            <div class="box">
                <div class="columns is-centered">
                    <div class="column is-half">
                        <div class="field" v-if="idValeur!==-1">
                            <label for="idValeur" class="label is-hidden">idValeur</label>
                            <div class="control">
                                <input id="idValeur" class="input is-hidden" type="number"
                                       placeholder="idValeur" name="idValeur"
                                       v-model="idValeur" readonly>
                            </div>
                        </div>
                        <div class="field">
                            <label for="identifiant" class="label">Numéro de série,
                                Nom de l'oeuvre ou numéro de carte</label>
                            <div class="control has-icons-left has-icons-right">
                                <input id="identifiant" class="input" type="text" name="identifiant"
                                       placeholder="Identifiant" required
                                       v-model="valeur.identifiant"/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                            </div>
                            <p id="nomError" class="help is-danger is-hidden">
                                *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                        </div>
                        <div class="field">
                            <label for="auteur" class="label">Auteur / Émetteur</label>
                            <div class="control has-icons-left has-icons-right">
                                <input id="auteur" class="input" type="text" name="auteur"
                                       placeholder="Auteur"
                                       v-model="valeur.auteur" required/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                            </div>
                            <p id="nomError" class="help is-danger is-hidden">
                                *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                        </div>
                        <div class="field">
                            <label for="typeValeur" class="label">Type de valeur</label>
                            <div class="control">
                                <select id="typeValeur" class="select" name="typeValeur" required
                                        v-model="valeur.typeValeur">
                                    <option value="" disabled selected></option>
                                    <option>Devise</option>
                                    <option>Passeport</option>
                                    <option>Œuvre d'art</option>
                                    <option>Carte de crédit / débit</option>
                                </select>
                            </div>
                        </div>
                        <div class="field">
                            <label for="typeEvenement" class="label">Réponse IBVA</label>
                            <div class="control">
                                <select id="typeEvenement" class="select"
                                        name="typeEvenement" required
                                        v-model="valeur.typeEvenement">
                                    <option value="Négatif">***NÉGATIF***</option>
                                    <option value="Volé">***VOLÉ***</option>
                                    <option value="Perdu">***PERDU***</option>
                                </select>
                            </div>
                        </div>
                        <div class="field" style="padding-bottom: 20px">
                            <label for="NoEvenement" class="label">Numéro d'évenement</label>
                           <div id="NoEvenement" class="columns is-mobile is-multiline is-centered">
                                <div class="field has-addons">
                                    <div class="select">
                                        <select id="NoCours" name="NoCours" required
                                                v-model="noEvenement.NoCours">
                                            <option value="" disabled selected></option>
                                            <option id="123">123</option>
                                            <option id="302">302</option>
                                            <option id="108">108</option>
                                        </select>
                                    </div>
                                    <div class="control">
                                        <label for="AA">
                                            <input class="input" type="text" id="AA" name="AA"
                                                   maxlength="2" placeholder="AA"
                                                   v-model="noEvenement.AA">
                                        </label>
                                    </div>
                                    <div class="control">
                                        <label for="MM">
                                            <input class="input" type="text" id="MM" name="MM"
                                                   maxlength="2" placeholder="MM"
                                                   v-model="noEvenement.MM">
                                        </label>
                                    </div>
                                    <div class="control">
                                        <label for="JJ">
                                            <input class="input" type="text" id="JJ" name="JJ"
                                                   maxlength="2" placeholder="JJ"
                                                   v-model="noEvenement.JJ">
                                        </label>
                                    </div>
                                    <div class="control">
                                        <label for="sequenceChiffres">
                                            <input class="input" type="text" id="sequenceChiffres"
                                                   name="sequenceChiffres"
                                                   maxlength="4" placeholder="4 chiffres"
                                                   v-model="noEvenement.sequenceChiffres">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <input type="submit" class="button has-text-weight-bold is-link"
                                   id="retour" value="Retour"
                                   @click.prevent="this.$router.push('/valeurs')">
                            <input type="submit" class="button has-text-weight-bold is-primary"
                                   id="modifier"
                                   value="Modifier" @click="setEvent('modifier')"
                                   v-if="idValeur !==-1">
                            <input type="reset" class="button has-text-weight-bold is-warning"
                                   id="annuler" @click="resetVariable" value="Annuler">
                            <input class="button has-text-weight-bold is-primary" type="submit"
                                   id="ajouter" value="Ajouter" @click="setEvent('ajouter')"
                                   v-if="idValeur===-1">
                            <input class="js-modal-trigger button has-text-weight-bold is-danger"
                                   data-target="modal-js-example" @click.prevent="showModal = true"
                                   id="suppr"
                                   v-if="idValeur !==-1" value="Supprimer">
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="modal is-active" v-show="showModal" @close="showModal = false">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Confirmation de suppression</p>
                    <button class="delete" aria-label="close"
                            @click.prevent="showModal = false"></button>
                </header>
                <section class="modal-card-body">
                    Voulez-vous vraiment supprimer cette entrée?
                </section>
                <footer class="modal-card-foot">
                    <button class="button has-text-weight-bold is-danger" id="supprimer"
                            @click.prevent="handlerSupprimer">Supprimer
                    </button>
                    <button class="button" @click.prevent="showModal = false">Retour</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
import { svrURL } from '@/constantes';

export default {
    name: 'ValeurView',
    data() {
        return {
            idValeur: -1,
            btnCliquee: null,
            loaded: false,
            errorMessage: '',
            successMessage: '',
            valeur: {
                identifiant: '',
                auteur: '',
                typeValeur: '',
                typeEvenement: '',
            },
            noEvenement: {
                NoCours: '',
                AA: '',
                MM: '',
                JJ: '',
                sequenceChiffres: '',
            },
            showModal: false,
        };
    },
    methods: {
        handler(event) {
            const {
                AA,
                MM,
                JJ,
                sequenceChiffres,
            } = this.noEvenement;
            const regexJJ = /^0[1-9]|[12]\d|3[01]$/;
            const regexMM = /^0[1-9]|1[0-2]$/;
            const regexAA = /^\d{2}$/;
            const regexSChiffres = /^\d{4}$/;
            const validationEvent = (
                regexJJ.test(JJ)
                && regexMM.test(MM)
                && regexAA.test(AA)
                && regexSChiffres.test(sequenceChiffres)
            );
            if (validationEvent === true) {
                const formData = new URLSearchParams(new FormData(event.target));
                let method;
                if (this.btnCliquee === 'ajouter') {
                    method = 'POST';
                } else if (this.btnCliquee === 'modifier') {
                    method = 'PUT';
                }
                fetch(`${svrURL}/valeurs`, {
                    method,
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((resJson) => {
                        if (resJson.success) {
                            this.successMessage = resJson.message;
                        } else {
                            this.errorMessage = resJson.message;
                        }
                        const sleep = (ms) => new Promise((resolve) => {
                            setTimeout(resolve, ms);
                        });
                        sleep(2000)
                            .then(() => {
                                this.successMessage = '';
                                this.errorMessage = '';
                            });
                    })
                    .catch((resJson) => {
                        this.errorMessage = resJson.message;
                    });
            } else {
                this.errorMessage = 'Opération échouée, veuillez vérifier le numéro d\'événement';
            }
        },
        setEvent(msg) {
            this.btnCliquee = msg;
        },
        resetVariable() {
            this.btnCliquee = null;
            this.errorMessage = '';
            this.successMessage = '';
            this.getValeur();
        },
        setId() {
            if (this.$route.params.idValeur !== undefined) {
                this.idValeur = this.$route.params.idValeur;
            }
            this.loaded = true;
        },
        getValeur() {
            this.setId();
            if (this.idValeur !== -1) {
                fetch(`${svrURL}/valeurs/${this.idValeur}`)
                    .then((res) => res.json())
                    .then((resJson) => {
                        this.errorMessage = resJson.message;
                        this.valeur.identifiant = resJson[0].Identifiant;
                        this.valeur.auteur = resJson[0].Auteur;
                        this.valeur.typeValeur = resJson[0].TypeValeur;
                        this.valeur.typeEvenement = resJson[0].TypeEvenement;
                        const noEvenement = resJson[0].NoEvenement.split('-');
                        const AAMMJJ = [];
                        AAMMJJ.push(noEvenement[1].slice(0, 2));
                        AAMMJJ.push(noEvenement[1].slice(2, 4));
                        AAMMJJ.push(noEvenement[1].slice(4, 6));
                        noEvenement[1] = AAMMJJ;
                        [this.noEvenement.NoCours,
                            [this.noEvenement.AA, this.noEvenement.MM,
                                this.noEvenement.JJ],
                            this.noEvenement.sequenceChiffres] = noEvenement;
                    })
                    .catch(() => {
                        this.errorMessage = 'Cette valeur n\'est pas répertoriée';
                    });
            }
        },
        handlerSupprimer() {
            fetch(`${svrURL}/valeurs/${this.idValeur}`, { method: 'DELETE' })
                .then((res) => res.json())
                .then((resJson) => {
                    if (resJson.success) {
                        this.successMessage = resJson.message;
                    } else {
                        this.errorMessage = resJson.message;
                    }
                })
                .catch((resJson) => {
                    this.errorMessage = resJson.message;
                });
            this.showModal = false;
        },
    },
    mounted() {
        this.getValeur();
    },
};
</script>

<style scoped>
html, body {
    min-height: 100%;
}

body, div, form, input, select, textarea, label {
    padding: 0;
    margin: 0;
    outline: none;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 22px;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;

}

.testbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 20px;
}

form {
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
}

.banner {
    position: relative;
    height: 135px;
    width: 135px;
    background-image: url("/public/images/LogoMaisonneuve.jpg");
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    float: left;
}

.banner::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
}

input, select, textarea {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

input {
    width: calc(100% - 10px);
    padding: 5px;
}

textarea {
    width: calc(100% - 12px);
    padding: 5px;
}

.item:hover p,
.item:hover i,
.question:hover p,
.question label:hover,
input:hover::placeholder select:hover::placeholder {
    color: #008bcc;
}

.item input:hover, .item select:hover, .item textarea:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 3px 0 #008bcc;
    color: #008bcc;
}

.item {
    position: relative;
    margin: 10px 0;
}

.item span {
    color: red;
}

input[type="date"]::-webkit-inner-spin-button {
    display: none;
}

.item i, input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    font-size: 20px;
    color: #008bcc;
}

.item i {
    right: 1%;
    top: 30px;
    z-index: 1;
}

[type="date"]::-webkit-calendar-picker-indicator {
    right: 1%;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
}

input[type=radio], input[type=checkbox] {
    display: none;
}

label.radio {
    position: relative;
    display: inline-block;
    margin: 5px 20px 15px 0;
    cursor: pointer;
}

.question span {
    margin-left: 30px;
}

.question-answer label {
    display: block;
}

label.radio:before {
    content: "";
    position: absolute;
    left: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid #ccc;
}

input[type=radio]:checked + label:before, label.radio:hover:before {
    border: 2px solid #008bcc;
}

label.radio:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    width: 8px;
    height: 4px;
    border: 3px solid #008bcc;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
}

input[type=radio]:checked + label:after {
    opacity: 1;
}

.btn-block {
    margin-top: 10px;
    text-align: center;
}

button {
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #008bcc;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background: #008bcc;
}

@media (min-width: 568px) {
    .name-item, .city-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .name-item input, .name-item div {
        width: calc(50% - 20px);
    }

    .name-item div input {
        width: 97%;
    }

    .name-item div label {
        display: block;
        padding-bottom: 5px;
    }
}
</style>
