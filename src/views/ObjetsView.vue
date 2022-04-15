<template>
    <section>
    <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;
    padding-top: 5%;">
    <b><u>LISTE D'OBJETS</u></b></h1>
    <div class="has-text-right has-text-black" style="padding-bottom: 5%; padding-right: 5%;">
        <div class="select">
            <select id="filtre">
            </select>
        </div>
        <input id="type" style="height: 40px;" placeholder="Valeur du filtre">
        <button id="filter" class="button is-info">Filtrer</button>
        <button id="tous" class="button is-info is-light">Tous</button>
    </div>
    </section>
    <div class="columns">
        <div id="detail" class="column is-centered">
            <div class="table-container">
                <table class="table has-text-black is-fullwidth" style="text-align:center">
                    <tr>
                        <th>Numéro de Série</th>
                        <th>Marque</th>
                        <th>Modèle</th>
                        <th>Type d'objet</th>
                        <th>Numéro d'évènement</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><i class='fas fa-edit'></i></td>
                    </tr>
                </table>
            </div>
       </div>
    </div>
    <div class="columns">
        <div id="detail" class="column is-centered">
            <div class="table-container">
                <table class="table has-text-black is-fullwidth" style="text-align:center">
                    <tr>
                        <th>Identifiant</th>
                        <th>Auteur</th>
                        <th>Type de Valeur</th>
                        <th>Type d'évènement</th>
                        <th>Numéro d'évènement</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><i class='fas fa-edit'></i></td>
                    </tr>
                </table>
            </div>
       </div>
    </div>
    <div class="columns">
        <div id="detail" class="column is-centered">
            <div class="table-container">
                <table class="table has-text-black is-fullwidth" style="text-align:center">
                    <tr>
                        <th>Numéro de Série</th>
                        <th>Marque</th>
                        <th>Calibre</th>
                        <th>Type d'armes</th>
                        <th>Numéro d'évènement</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><i class='fas fa-edit'></i></td>
                    </tr>
                </table>
            </div>
       </div>
    </div>
    <div class="buttons is-centered" >
        <div>
            <button id="retour" onclick="window.location.href='http://localhost:5000/menuModifier'" class="button is-info" type="button">Retour au Menu Modification</button>
        </div>
        <div>
            <button id="ajouter" class="button is-info" type="sumbit">Ajouter</button>
        </div>
    </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ObjetsView',
};
</script>

<style scoped>
</style>
