<template>
        <div class="container mb-4 is-desktop">
        <div class="box">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="field">
                        <label for="nom" class="label">Nom de famille</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id = "nom" class="input" type="text"
                            placeholder="Nom de famille">
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
                            placeholder="Prénom 1">
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
                            placeholder="Prénom 2">
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
                                    placeholder="1998" min="1700" max="2022">
                                </div>
                                <p id="anneeError" class="help is-danger is-hidden">
                                    *Champ obligatoire : seulement les années valides se trouvent
                                    entre 1910 et 2022</p>
                            </div>
                            <div class="column is-4">
                                <label for="mois" class="label">Mois</label>
                                <div class="control">
                                    <input id="mois" class="input" type="number" placeholder="08"
                                    min="1" max="12">
                                </div>
                                <p id="moisError" class="help is-danger is-hidden">
                                    *Champ obligatoire : seulement les chiffres
                                    entre 1 et 12 sont permis</p>
                            </div>
                            <div class="column is-4">
                                <label for="jour" class="label">Jour</label>
                                <div class="control">
                                    <input id="jour" class="input" type="number" placeholder="02"
                                    min="1" max="12">
                                </div>
                                <p id="jourError" class="help is-danger is-hidden">
                                    *Champ obligatoire : seulement les chiffrs
                                    entre 1 et 31 sont permis</p>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-multiline mt-2">
                        <div class="column is-half has-text-centered">
                            <div class="control mt-2">
                                <label for="sexe" class="label">Sexe</label>
                                <div class="select">
                                    <select id="sexe">
                                        <option id="masc">Masculin</option>
                                        <option id="fem">Féminin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="column is-half has-text-centered">
                            <label for="categorie" class="label">Catégorie</label>
                            <div class="select">
                                <select id= "categorie">
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
                <div id='TableauIPPE' class="container has-text-centered  is-centered">
                    <h1 class="title is-4">Réponses - IPPE</h1>
                    <div class="columns is-centered">
                        <div class="column is-narrow">
                            <table id="table" class="table is-bordered
                            is-striped is-narrow is-hoverable" style="align-content: center;">
                                <thead>
                                <tr>
                                    <th class="is-info">Événement</th>
                                    <th class="is-info">Numéro</th>
                                    <th style="border:none;">
                                        <i class="fas fa-user-plus"></i></th>
                                </tr>
                                </thead>
                        <tbody>
                        <tr>
                        <td>Recherché</td>
                        <td>123-140419-1234</td>
                        <td style="border:none;">
                            <i class="fas fa-pen"></i></td>
                        </tr>
                        </tbody>
                            </table>
                        </div>
                    </div>
                    <button class="button is-info" >Enregistrer</button>
                    <button class="button is-info" >Supprimer</button>
                    <button class="button is-info" >Annuler</button>
                </div>
            </section>
        </div>
    </div>

</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'PersonneView',
};
</script>

<style scoped>
</style>
