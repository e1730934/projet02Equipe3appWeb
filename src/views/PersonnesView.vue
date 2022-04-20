<template>
    <div class="columns is-multiline is-size-3-touch">
    <!--box gives it the shadow-->
    <div class="column is-10 is-12-touch is-offset-1-desktop box pb-5">
        <form class="has-text-centered">
            <div class='is-centered'>
                <h1 class='title is-1-touch is-full my-6'>Table IPPE Alimentation</h1>
                <div class="columns is-multiline">
                    <label class="column is-3-desktop is-offset-1-desktop is-6-touch"
                    for="votre-nom">Filtrer par
                        nom de famille:</label>
                    <input class="column input is-hovered is-size-6 is-size-4-touch is-4-desktop
                    is-5-touch mr-6" id="votre-nom" name="votre-nom" type="text">
                </div>
                <div>
                    <hr>
                </div>
                <div class="column is-10 is-offset-1-desktop">
                    <table class='table is-striped is-fullwidth is-bordered is-centered my-5'>
                        <thead>
                        <tr>
                            <th class="is-info">Nom</th>
                            <th class="is-info">Prenom1</th>
                            <th class="is-info">Prenom2</th>
                            <th class="is-info">Categorie</th>
                            <th style="border:none;">
                                <i class="fas fa-user-plus"></i></th>
                        </tr>
                        </thead>
                        <tbody id="BanquePersonne">
                        <tr>
                        <td>NomFamilleUn</td>
                        <td>Prénom1Un</td>
                        <td>Prénom2Un</td>
                        <td>CategorieUn</td>
                        <td style="border:none;">
                            <i class="fas fa-pen"></i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    <!--BUTTON HOME-->
        <div>
            <img id="imgHome" class="shadow zoom" src="/images/home.png" alt="Accueil"
            style="height: 64px;width: 64px; float:left; margin-top: -50px;
            margin-bottom: -100px;">
        </div>
    </div>
    </div>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'PersonnesView',
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
        .zoom:hover {
            transform: scale(1.1);
        }

        .shadow:hover {
            -webkit-filter: drop-shadow(-5px 2px 5px #999999);
        }
</style>
