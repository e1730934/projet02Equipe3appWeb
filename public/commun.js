const token = sessionStorage.getItem('token');

function connection() {
    if (token === null) {
        window.location.href = 'http://localhost:5000/';
    }
}

function nav() {
    function header() {
        document.getElementById('Nav').innerHTML = `
                <header>
                    <!-- bare de naviguation avec nom, matricule et le bouton pour afficher les 8 interrogations-->
                        <div class="container">
                            <div class="box" id='navBare' style="background-color: #338cc5">
                                <div class="columns is-mobile ">
                                    <div class=" column is-2-tablet is-3-mobile">
                                        <img src="../image/logoSansText.png">
                                    </div>
                                    <div class="column">
                                        <br>

                                        <a id="link" href="http://localhost:5000/Acceuil">
                                            <p class="is-size-4 has-text-centered has-text-weight-bold has-text-black is-hidden-mobile">
                                                Centre de Renseignement Techniques Policière</p>
                                            <p class="is-size-4 has-text-centered has-text-weight-bold has-text-black is-hidden-tablet">
                                                CRTP
                                            </p>
                                        </a>

                                    </div>
                                    <div class="column has-text-right is-narrow">
                                        <br>
                                        <button id="buttonMenuBareNaviguation" class="button is-outlined"
                                            style="background-color:#338cc5; border-color: #338cc5;">
                                            <img id="imageButton" src="../image/bars-solid.svg" style="height: 100%;width: 100%;">

                                        </button>

                                    </div>
                                </div>
                            </div>

                            <!--menu qui s'affiche lorseque le boutton est cliqué-->
                            <div id="menu" class="box"
                                style="background-color:#bce2e4; margin-top: -20px; position : relative; display: none;">
                                <a id="link" href="http://localhost:5000/IPPE">
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

                                <span id="linkDBProf" class="is-hidden">
                                    <hr class="dropdown-divider">

                                    <a id="link">
                                        <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black"> Ajout de
                                            personne
                                        </p>
                                    </a>
                                </span>

                            </div>

                            <div id="menuSAAQ" class="box"
                                style="background-color:#bce2e4; margin-top: -20px; position : relative; display: none;">

                                <a id="linkRetour">
                                    <p class="is-size-6 has-text-centered has-text-weight-semibold has-text-black">
                                        <-- Retour <-- </p>
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



                </header>
        `;
    }

    header();

    // Fonction qui fait apparaitre et disparaitre le menu Principale
    function menuBareNaviguationPrincipale() {
        const x = document.getElementById('menu');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
            document.getElementById('menuSAAQ').style.display = 'none';
        }
    }
    document.getElementById('buttonMenuBareNaviguation').addEventListener('click', menuBareNaviguationPrincipale);
    document.getElementById('linkRetour').addEventListener('click', menuBareNaviguationPrincipale);

    // Fonction qui fait apparaitre et disparaitre le menu SAAQ
    function menuBareNaviguationSAAQ() {
        const x = document.getElementById('menuSAAQ');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
            document.getElementById('menu').style.display = 'none';
        }
    }
    document.getElementById('linkSAAQ').addEventListener('click', menuBareNaviguationSAAQ);

    if (token === 'false') {
        document.getElementById('linkDBProf').classList.remove('is-hidden');
    }

    // La bare de naviguation etudiante complete
}

function piedPage() {
    document.getElementById('pied').innerHTML = `
    
                <div class="container">
                    <div class="box">
                        
                        <div class="columns is-mobile ">
                        
                        <div class="column">

                                <p id="nom" class="is-size-7 has-text-right has-text-grey">${Matricule}</p>
                                <p id="matricule" class="is-size-7 has-text-right has-text-grey">${Nom}</p>
                                <a> <p id="déconnection" class="is-size-5 has-text-right has-text-danger">déconnection</p></a>
                                
                                   
                                    

                            </div>
                        </div>
                    </div>
                </div>

    `;
}
const Matricule = sessionStorage.getItem('Matricule');
const Nom = sessionStorage.getItem('Nom');

function Deconnection() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('Matricule');
    sessionStorage.removeItem('Nom');

    window.location.href = 'http://localhost:5000/';
}
export {
    nav,
    piedPage,
    connection,
    Matricule,
    Nom,
    token,
    Deconnection,
};
