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
                            placeholder="Numéro de série" required/>
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
                            placeholder="Marque" required/>
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
                            placeholder="Calibre" required/>
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
                            <select id="typeArme" class="select" name="typeArme" required>
                            <option></option>
                            <option>Révolver</option>
                            <option>Pistolet</option>
                            <option>Carabine</option>
                            <option>Fusil</option>
                            </select>
                        </div>
                    </div>
                    <div id="NoEvenement" class="columns is-mobile is-multiline is-centered">
                        <div class="column is-2">
                            <label class="has-text-black" for="NoEvent"><b>Numéro évenement</b>
                                <span style="color: red">*</span></label><br><br>
                            <select id="NoEvent" class="select" name="NoEvent" required>
                                <option></option>
                                <option>123</option>
                                <option>302</option>
                                <option>108</option>
                            </select>
                        </div>

                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="annee"><b>Année</b>
                                <span style="color: red">*</span></label><br><br>
                            <input id="annee" type="text" name="annee" placeholder="Année"
                                required/>
                        </div>

                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Mois</b><span
                                style="color: red">*</span></label><br><br>
                            <select id="Mois" class="select" name="mois" required>
                            <option></option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>

                            </select>
                        </div>
                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Jour</b><span
                                style="color: red">*</span></label><br><br>
                            <select id="Jour" class="select" name="jour" required>
                            <option></option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                            </select>
                        </div>

                        <div class="column is-2">
                            <label class="has-text-black" for="NoSeq"><b>Numéro Séquentiel</b>
                                <span style="color: red">*</span></label><br><br>
                            <input id="NoSeq" type="text" name="NoSeq"
                                placeholder="Numéro Séquentiel" required/>
                        </div>`
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
    float:left;
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
    input:hover::placeholder {
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
    input[type=radio], input[type=checkbox]  {
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
    width:97%;}
    .name-item div label {
    display:block;
    padding-bottom:5px;
    }
    }
</style>
