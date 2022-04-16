<template>
    <div class="container mb-4 is-desktop" v-if="loaded===true">
      <form id="formulaireAjouter" @submit.prevent="handler($event)">
        <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%; padding-bottom:20px" ><b>
            <u v-if="idArme!==-1">MODIFICATION D'UNE RÉPONSE ARME À FEU</u>
            <u v-else>AJOUT D'UNE RÉPONSE ARME À FEU</u></b></h1>
          <div class="block has-text-centered has-background-danger" v-if="errorMessage!== ''">
              <p><strong class="has-text-white">{{ this.errorMessage }}</strong></p>
          </div>
          <div class="block has-text-centered has-background-success" v-if="successMessage!== ''">
              <p><strong class="has-text-white">{{ this.successMessage }}</strong></p>
          </div>
        <div class="box">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="field">
                        <label for="noSerie" class="label">Numéro de série</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="noSerie" class="input" type="text" name="noSerie"
                            placeholder="Numéro de série" required
                            v-model="arme.noSerie"/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p id="nomError" class="help is-danger is-hidden">
                            *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                    </div>
                    <div class="field">
                        <label for="marque" class="label">Marque</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="marque" class="input" type="text" name="marque"
                            placeholder="Marque"
                            v-model="arme.marque" required/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p id="nomError" class="help is-danger is-hidden">
                            *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                    </div>
                    <div class="field">
                        <label for="calibre" class="label">Calibre</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="calibre" class="input" type="text" name="calibre"
                            placeholder="Calibre" required
                            v-model="arme.calibre"/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p id="nomError" class="help is-danger is-hidden">
                            *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                    </div>
                    <div class="field">
                        <label for="typeArme" class="label">Type d'arme</label>
                        <div class = "control">
                            <select id="typeArme" class="select" name="typeArme" required
                                    v-model="arme.typeArme">
                            <option></option>
                            <option>Révolver</option>
                            <option>Pistolet</option>
                            <option>Carabine</option>
                            <option>Fusil</option>
                            </select>
                        </div>
                    </div>
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
                    <div class="buttons">
                        <input type="submit" class="button has-text-weight-bold is-link"
                               id="retour" value="Retour">
                        <input  type="submit" class="button has-text-weight-bold is-primary"
                                id="modifier"
                                value="Modifier" @click="setEvent('modifier')"
                                v-if="idArme !==-1">
                        <button type="reset" class="button has-text-weight-bold is-warning"
                                id="annuler" @click="resetVariable">Annuler
                        </button>
                        <input class="button has-text-weight-bold is-primary" type="submit"
                               id="ajouter" value="Ajouter" @click="setEvent('ajouter')"
                               v-if="idArme===-1">
                        <button class="js-modal-trigger button has-text-weight-bold is-danger"
                                data-target="modal-js-example" @click.prevent="showModal = true"
                                id="suppr"
                                v-if="idArme !==-1">Supprimer
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
    name: 'ArmeView',
    data() {
        return {
            idArme: -1,
            btnCliquee: null,
            loaded: false,
            errorMessage: '',
            successMessage: '',
            arme: {
                noSerie: '',
                marque: '',
                calibre: '',
                typeArme: '',
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
            const regexJJ = /^(0[1-9]|1[0-2])$/;
            const regexMM = /^\d{1,2}$/;
            const regexAA = /^\d{2}$/;
            const regexSChiffres = /^\d{4}$/;
            if ((regexJJ.test(JJ) && regexMM.test(MM)
                && regexAA.test(AA) && regexSChiffres.test(sequenceChiffres)) === true) {
                const formData = new URLSearchParams(new FormData(event.target));
                let method;
                if (this.btnCliquee === 'ajouter') {
                    method = 'POST';
                } else if (this.btnCliquee === 'modifier') {
                    method = 'PUT';
                }
                fetch('http://localhost:3000/armes', { method, body: formData })
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
        },
        setId() {
            if (this.$route.params.id !== undefined) {
                this.idArme = this.$route.params.id;
            }
            this.loaded = true;
        },
        getArme() {
            this.setId();
            if (this.idArme !== -1) {
                fetch(`http://localhost:3000/armes/${this.idArme}`)
                    .then((res) => res.json())
                    .then((resJson) => {
                        this.arme.noSerie = resJson[0].NoSerie;
                        this.arme.calibre = resJson[0].Calibre;
                        this.arme.marque = resJson[0].Marque;
                        this.arme.typeArme = resJson[0].TypeArme;
                        const noEvenement = resJson[0].NoEvenement.split('-');
                        const AAMMJJ = [];
                        AAMMJJ.push(noEvenement[1].slice(0, 2));
                        AAMMJJ.push(noEvenement[1].slice(2, 4));
                        AAMMJJ.push(noEvenement[1].slice(4, 6));
                        noEvenement[1] = AAMMJJ;
                        [this.noEvenement.NoCours, [this.noEvenement.AA, this.noEvenement.MM,
                            this.noEvenement.JJ], this.noEvenement.sequenceChiffres] = noEvenement;
                    })
                    .catch((resJson) => {
                        this.errorMessage = resJson.message;
                    });
            }
        },
        handlerSupprimer() {
            fetch(`http://localhost:3000/armes/${this.idArme}`, { method: 'DELETE' })
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
        this.getArme();
    },
};
</script>

<style scoped>
</style>
