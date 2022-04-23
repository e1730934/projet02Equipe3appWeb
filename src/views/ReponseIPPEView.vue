<template>
    <div class="columns">
      <!-- left space-->
      <div class="column is-centered is-quarter"></div>
        <!-- middle section-->
        <div class="column is-centered is-half">
            <div class="box">
                <h1 class="title">IPPE Interrogation - Personne </h1><br>
                <h2>Demande de verification pour : </h2><br>
                <div id="infoPersonne" class="table-container">
                    <table class="table">
                            <tr>
                            <th>Nom:</th>
                            <td></td>
                            <th>Prenom1:</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>Sexe:</th>
                            <td></td>
                            <th>Prenom2:</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>Date naissance:</th>
                            <td colspan = 4></td>
                            </tr>
                            <tr>
                            <th>Agent:</th>
                            <td></td>
                            <th>Matricule:</th>
                            <td></td>
                            </tr>
                    </table>
                </div>
                <hr style="background-color: black;">
                <div id="detail" class="table-container">
                    <strong>*** Liberté conditionnelle ***</strong><br><br>
                    <table>
                            <tr>
                            <th>Cour:</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>Numéro de cause:</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>________________________________</th>
                            <td>________________________________</td>
                            </tr>
                            <tr>
                            <th>Nature du crime:</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>Numéro d'événement:</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>________________________________</th>
                            <td>________________________________</td>
                            </tr>
                            <tr>
                            <th>FPS:</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>Lieu de détention :</th>
                            <td></td>
                            </tr>
                            <tr>
                            <th>Fin de la sentence prévue :</th>
                            <td></td>
                            </tr>
                    </table><br>
                    <p><strong>Condition(s):</strong></p>
                    <p style="padding-left:10%">Condition 1</p>
                    <p style="padding-left:10%">Condition 2</p><br>
                    <table>
                    <tr>
                            <th>___________________________________________________________</th>
                            <td>________________________________</td>
                            </tr>
                            <tr>
                            <th>Agent de libération</th>
                            </tr>
                            <tr>
                            <th>conditionnelle à contacter :</th>
                            </tr>
                            <tr>
                            <td></td>
                            </tr>
                            <tr>
                            <th> </th>
                            </tr>
                            <tr>
                            <th>Téléphone :</th>
                            </tr>
                            <tr>
                            <td></td>
                            </tr>
                    </table><br>
                </div><br>
<!--
// Affichage si négatif
    <strong>*** Negatif ***</strong>

// Affichage si recherché
    <strong>*** Recherché ***</strong><br>
    <table>
        <tr>
        <th>Mandat:</th>
        <td>${obj.mandat}</td>
        </tr>
        <tr>
        <th>cour:</th>
        <td>${obj.cour}</td>
        </tr>
        <tr>
        <th>Numéro de Mandat:</th>
        <td style="vertical-align:bottom;">${obj.noMandat}</td>
        </tr>
        <tr>
        <th>Nature du crime:</th>
        <td>${await getNatCrime(obj.idNatureCrime)}</td>
        </tr>
        <tr>
        <th>Numero d'evenement:</th>
        <td style="vertical-align:bottom;">${obj.noEvenement}</td>
        </tr>
    </table>

// Affichage si sous observation
    <strong>*** Sous Observation ***</strong><br><br>
   <table>
        <tr>
           <th colspan= 2>*Ne pas révéler au sujet l'intrérêt qu'on lui porte*</th>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Motif:</th>
           <td>${obj.motif}</td>
        </tr>
        <tr>
           <th>Nature du crime:</th>
           <td>${await getNatCrime(obj.idNatureCrime)}</td>
        </tr>
        <tr>
           <th>Numero devenement:</th>
           <td>${obj.noEvenement}</td>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Dossier d'enquête :</th>
           <td>${obj.dossierEnquête}</td>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th colspan= 2>*Compléter ficher d'interpellation*</th>
        </tr>
        <tr>
           <th colspan= 2>*Acheminer à l'unité des Renseignements criminels*</th>
        </tr>
   </table><br>

// Affichage si accusé
    <strong>*** Accusé ***</strong><br><br>

   <table>
        <tr>
           <th>Cour:</th>
           <td>${obj.cour}</td>
        </tr>
        <tr>
           <th>Numero de cause:</th>
           <td>${obj.noCause}</td>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Nature du crime:</th>
           <td>${await getNatCrime(obj.idNatureCrime)}</td>
        </tr>
        <tr>
           <th>Numero devenement:</th>
           <td>${obj.noEvenement}</td>
        </tr>
   </table><br>

// Affichage si la personne est en probation
    <strong>*** Probation ***</strong><br><br>
   <table>
        <tr>
           <th>Cour:</th>
           <td>${obj.cour}</td>
        </tr>
        <tr>
           <th>Numero de cause:</th>
           <td>${obj.noCause}</td>
        </tr>
        <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Nature du crime:</th>
           <td>${await getNatCrime(obj.idNatureCrime)}</td>
        </tr>
        <tr>
           <th>Numero devenement:</th>
           <td>${obj.noEvenement}</td>
        </tr>
        <tr>
           <th>Fin de sentence prevue:</th>
           <td>${formatDate(obj.finSentence)}</td>
        </tr>
   </table><br>
   <table>
   <tr>
           <th>________________________________</th>
           <td>________________________________</td>
        </tr>
        <tr>
           <th>Agent de probation :</th>
        </tr>
        <tr>
           <td style="padding-left:10%">${obj.agentProbation}</td>
        </tr>
        <tr>
        <th>Téléphone :</th>
        </tr>
        <tr>
           <td style="padding-left:10%">${formatTel(obj.telephone, obj.poste)}</td>
        </tr>
   </table><br>

   *** FPS ***
  <table>
       <tr>
          <th>FPS :</th>
          <td>${obj.NoFPS}</td>
       </tr>
       <tr>
          <th>CD :</th>
          <td>${obj.CD}</td>
       </tr>
       <tr>
          <th>*** Fichier Ouvert ***</th>
          <td></td>
       </tr>
       <tr>
          <th>______________________________</th>
          <td>______________________________</td>
       </tr>
       <tr>
          <th>Antécédents:</th>
          <td>${obj.Antecedents}</td>
       </tr>
       <tr>
          <th>Description physique</th>
       </tr>
       <tr>
          <th>Race:</th>
          <td>${inconnue(personne.Race)}</td>
       </tr>
       <tr>
          <th>Taille:</th>
          <td>${inconnue(personne.Taille)}</td>
       </tr>
       <tr>
          <th>Poids:</th>
          <td>${inconnue(personne.Poids)}</td>
       </tr>
       <tr>
          <th>Yeux:</th>
          <td>${inconnue(personne.Yeux)}</td>
       </tr>
       <tr>
          <th>Cheveux:</th>
          <td>${inconnue(personne.Cheveux)}</td>
       </tr>
       <tr>
          <th>Marque:</th>
          <td>${inconnue(personne.Marques)}</td>
       </tr>
       <br>
       <tr>
        <th>Problématique de santé connu :</th>
        <td></td>
       </tr>
       <tr>
        <td colspan=2 style="padding-left:10%">${santePersonne(obj)}</td>
      </tr>
     </table>
-->

                <!-- pagination -->
                <nav class="pagination" role="navigation" aria-label="pagination">
                    <ul class="pagination-list" id="pagination">

                    </ul>
                </nav>
            </div>
        </div>
        <div class="column is-quarter"></div>
    </div>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ReponseIPPEView',
};
</script>

<style scoped>
    #date{
    border-radius: 5px;
    font: 15px Arial, sans-serif;
    height: 35px;
    }
</style>
