
function navEtud() {
    headerEtudiant();

    //Fonction qui fait apparaitre et disparaitre le menu Principale
    function menuBareNaviguationPrincipale() {
        let x = document.getElementById("menu")
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
            document.getElementById("menuSAAQ").style.display = "none"
        }
    }
    document.getElementById('buttonMenuBareNaviguation').addEventListener("click", menuBareNaviguationPrincipale);
    document.getElementById('linkRetour').addEventListener("click", menuBareNaviguationPrincipale);


    //Fonction qui fait apparaitre et disparaitre le menu SAAQ
    function menuBareNaviguationSAAQ() {
        let x = document.getElementById("menuSAAQ")
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
            document.getElementById("menu").style.display = "none"

        }
    }
    document.getElementById('linkSAAQ').addEventListener("click", menuBareNaviguationSAAQ);



    //La bare de naviguation etudiante complete
    function headerEtudiant() {

        document.getElementById("NavEtud").innerHTML = `
                <!-- bare de naviguation avec nom, matricule et le bouton pour afficher les 8 interrogations-->
                <div class="container">
                    <div class="box" id='navBare' style="background-color: #338cc5">
                        <div class="columns is-mobile ">
                            <div class=" column is-2-tablet is-3-mobile">
                                <img src="../logoSansText.png">
                            </div>
                            <div class="column">
                                <br>

                                <p class="is-size-4 has-text-centered has-text-weight-bold has-text-black is-hidden-mobile">
                                    Centre de Renseignement Techniques Policière</p>
                                <p class="is-size-4 has-text-centered has-text-weight-bold has-text-black is-hidden-tablet">CRTP
                                </p>

                            </div>
                            <div class="column has-text-right is-narrow">
                                <br>
                                <button id="buttonMenuBareNaviguation" class="button is-outlined" style="background-color:#338cc5; border-color: #338cc5;" >
                                    <img id="imageButton" src="../bars-solid.svg" style="height: 100%;width: 100%;">

                                </button>

                            </div>
                        </div>
                    </div>

                    <!--menu qui s'affiche lorseque le boutton est cliqué-->
                    <div id="menu" class="box" style="background-color:#bce2e4; margin-top: -20px; position : relative; display: none;">
                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IPPE - Recherche de
                                personnes </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> FPS - Recherce de
                                personnes bertillonnées </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IBOB - Recherche
                                d’objets </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IBAF - Recherche
                                d’armes à feu </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IBVA - Recherche de
                                valeurs </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="linkSAAQ">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche de
                                véhicule </p>
                        </a>

                    </div>

                    <div id="menuSAAQ" class="box" style="background-color:#bce2e4; margin-top: -20px; position : relative; display: none;">

                        <a id="linkRetour">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> < </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> Recherche par plaque
                                d'immatriculation </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche Par
                                nom, prénom et date de naissance </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche Par
                                numéro de dossier (permis de conduire) </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche Par
                                adresse </p>
                        </a>



                    </div>
                </div>



                `
            }
}
navEtud()








function navProf() {
    headerProf();

    //Fonction qui fait apparaitre et disparaitre le menu Principale
    function menuBareNaviguationPrincipale() {
        let x = document.getElementById("menu")
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
            document.getElementById("menuSAAQ").style.display = "none"
        }
    }
    document.getElementById('buttonMenuBareNaviguation').addEventListener("click", menuBareNaviguationPrincipale);
    document.getElementById('linkRetour').addEventListener("click", menuBareNaviguationPrincipale);


    //Fonction qui fait apparaitre et disparaitre le menu SAAQ
    function menuBareNaviguationSAAQ() {
        let x = document.getElementById("menuSAAQ")
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
            document.getElementById("menu").style.display = "none"

        }
    }
    document.getElementById('linkSAAQ').addEventListener("click", menuBareNaviguationSAAQ);



    //La bare de naviguation etudiante complete
    function headerProf() {

        document.getElementById("NavProf").innerHTML = `<header>
                <!-- bare de naviguation avec nom, matricule et le bouton pour afficher les 8 interrogations-->
                <div class="container">
                    <div class="box" id='navBare' style="background-color: #338cc5">
                        <div class="columns is-mobile ">
                            <div class=" column is-2-tablet is-3-mobile">
                                <img src="../logoSansText.png">
                            </div>
                            <div class="column">
                                <br>

                                <p class="is-size-4 has-text-centered has-text-weight-bold has-text-black is-hidden-mobile">
                                    Centre de Renseignement Techniques Policière</p>
                                <p class="is-size-4 has-text-centered has-text-weight-bold has-text-black is-hidden-tablet">CRTP
                                </p>

                            </div>
                            <div class="column has-text-right is-narrow">
                                <br>
                                <button id="buttonMenuBareNaviguation" class="button is-outlined" style="background-color:#338cc5; border-color: #338cc5;" >
                                    <img id="imageButton" src="../bars-solid.svg" style="height: 100%;width: 100%;">

                                </button>

                            </div>
                        </div>
                    </div>

                    <!--menu qui s'affiche lorseque le boutton est cliqué-->
                    <div id="menu" class="box" style="background-color:#bce2e4; margin-top: -20px; position : relative; display: none;">
                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IPPE - Recherche de
                                personnes </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> FPS - Recherce de
                                personnes bertillonnées </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IBOB - Recherche
                                d’objets </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IBAF - Recherche
                                d’armes à feu </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> IBVA - Recherche de
                                valeurs </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="linkSAAQ">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche de
                                véhicule </p>
                        </a>

                        <hr class="dropdown-divider">

                         <a id="link">
                             <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> Ajout de personne
                                </p>
                         </a>

                    </div>

                    <div id="menuSAAQ" class="box" style="background-color:#bce2e4; margin-top: -20px; position : relative; display: none;">

                        <a id="linkRetour">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> < </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> Recherche par plaque
                                d'immatriculation </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche Par
                                nom, prénom et date de naissance </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche Par
                                numéro de dossier (permis de conduire) </p>
                        </a>

                        <hr class="dropdown-divider">

                        <a id="link">
                            <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> SAAQ - Recherche Par
                                adresse </p>
                        </a>



                    </div>
                </div>



                </header>`
    }
}
navProf()


/*export {
    navEtud,
    navProf
  };
*/
