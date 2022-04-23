<template>
        <div class="container box my-6">
        <h2 class="title has-text-info-dark">AJOUT D'UNE CONDITION À RESPECTER</h2>
        <form class="row columns is-multiline">
            <!--Condition-->
            <div class="column is-12 my-6">
                <div class="field">
                    <div class="columns">
                        <label for="Condition" class="label column is-1">Condition :</label>
                        <div class="select">
                            <select id='Condition' name='Condition'>
                                <option value=1  selected>Choisissez une des conditions</option>
                                <option value=2>Avoir comme adresse le</option>
                                <option value=3>Doit garder la paix et avoir bonne conduite</option>
                                <option value=4>
                                    Aucune consommation d'alcool ou de drogue non prescrite</option>
                                <option value=5>Ne pas entrer en contact avec </option>
                                <option value=6>Ne pas fréquenter </option>
                                <option value=7>Doit demeurer à cet endroit entre</option>
                            </select>
                        </div>
                        <input id="inputconditions1" class="column input is-6 is-hidden"
                        type="text" placeholder="Remplissez la case">
                        <input id="inputconditions2" class="column input is-2 is-hidden"
                        type="text" placeholder="HH:MM:SS">
                        <span id="span1" class="is-hidden"> et </span>
                        <input id="inputconditions3" class="column input is-2 is-hidden"
                        type="text" placeholder="HH:MM:SS">
                        <div></div>
                    </div>
                </div>
            </div>

            <!--BOUTONS-->
            <div class="column is-3 ">
                <input id="retour" class="button is-fullwidth is-info" type="button" value="Retour">
            </div>
            <div class="column is-3 ">
                <input id="ajouter" class="button is-fullwidth is-info" type="button"
                value="Ajouter">
            </div>
            <div class="column is-3 ">
                <input id="annuler" class="button is-fullwidth is-info" type="button"
                value="Annuler">
            </div>
        </form>
    </div>

</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ConditionView',
};
</script>

<style scoped>
    body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    #wrapper {
        flex: 1;
    }

    select option[value="1"]
    {
        color: #999999;
    }
</style>
