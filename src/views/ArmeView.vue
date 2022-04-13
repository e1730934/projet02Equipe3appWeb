<template>
    <div class="container mb-4 is-desktop">
      <form id="formulaireAjouter">
        <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%;" ><b><u>MODIFICATION D'UNE RÉPONSE ARME À FEU</u></b></h1>
        <br>
        <br>
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
                </div>
            </div>
        </div>
      </form>
    </div>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ArmeView',
    data() {
        return {
            arme: {
                id: 0,
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
        };
    },
};
</script>

<style scoped>
</style>
