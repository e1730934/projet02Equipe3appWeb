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
                            <div class = "control">
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
                            <div class = "control">
                                <select id="typeEvenement" class="select"
                                        name="typeEvenement" required
                                        v-model="valeur.typeEvenement">
                                    <option>***NÉGATIF***</option>
                                    <option>***VOLÉ***</option>
                                    <option>***PERDU***</option>
                                </select>
                            </div>
                        </div>
                        <div class="field" style="padding-bottom: 20px">
                            <label for="NoEvenement" class="label">Numéro d'évenement</label>
                            <div id="NoEvenement" class="columns is-mobile is-multiline is-centered"
                                 style="padding-top: 10px; padding-left: 10px">
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
                                   id="retour" value="Retour" @click.prevent>
                            <input  type="submit" class="button has-text-weight-bold is-primary"
                                    id="modifier"
                                    value="Modifier" @click="setEvent('modifier')"
                                    v-if="idValeur !==-1">
                            <button type="reset" class="button has-text-weight-bold is-warning"
                                    id="annuler" @click="resetVariable">Annuler
                            </button>
                            <input class="button has-text-weight-bold is-primary" type="submit"
                                   id="ajouter" value="Ajouter" @click="setEvent('ajouter')"
                                   v-if="idValeur===-1">
                            <button class="js-modal-trigger button has-text-weight-bold is-danger"
                                    data-target="modal-js-example" @click.prevent="showModal = true"
                                    id="suppr"
                                    v-if="idValeur !==-1">Supprimer
                            </button>
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
                AA, MM, JJ, sequenceChiffres,
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
                fetch('http://localhost:3000/valeurs', { method, body: formData })
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
            if (this.$route.params.id !== undefined) {
                this.idValeur = this.$route.params.id;
            }
            this.loaded = true;
        },
        getValeur() {
            this.setId();
            if (this.idValeur !== -1) {
                fetch(`http://localhost:3000/valeurs/${this.idValeur}`)
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
            fetch(`http://localhost:3000/valeurs/${this.idValeur}`, { method: 'DELETE' })
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
</style>
