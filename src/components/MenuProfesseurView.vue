<template>
<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" >
      <img src="https://media.discordapp.net/attachments/927002688888131606/956803614402297866/logom9.png?width=512&height=128" id="logo" class="zoom" alt="Logo m9" width="112" height="40">
    </a>

    <div class="navbar-burger burger" id="nav" data-target="navmnenu1">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navmnenu1" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable is-mega">
        <div class="navbar-link flex">
          <span>Type de Recherche et plus</span>
        </div>
        <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
          <div class="container is-fluid">
            <div class="columns">
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">
                    Les recherches mise a votre disposition</h1>
                <a class="navbar-item" >
                  <div class="navbar-content" id="ippe">
                    <p>
                      <strong>IPPE</strong>
                      <br>
                      <small>Recherche de personnes</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>FPS</strong>
                      <br>
                      <small>Recherche de personnes bertillones</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>IBOB</strong>
                      <br>
                      <small>Recherche d'objets</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>IBAF</strong>
                      <br>
                      <small>Recherche d'armes a feu</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>IBVA</strong>
                      <br>
                      <small>Recherche de valeurs</small>
                    </p>
                  </div>
                </a>
              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Autres recherches</h1>
                <a class="navbar-item">
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche de personnes par plaque d'immatriculation</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche Par nom,prenoms et date de naissance</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche Par numero de dossier (permis de conduire)</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche de vehicule</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche par adresse</small>
                    </p>
                  </div>
                </a>
              </div>
              <div class="column " id="menuP">
                <h1 class="title is-6 is-mega-menu-title"  >Menu prof</h1>
                <a class="navbar-item " id="banqueP" >
                <strong>Banque de personne</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="navbar-item " id="accueil">
    Accueil
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
          </p>
          <p class="control" id="deco">
            <a class="button">
              <span class="icon">
              <i class="fas fa-sign-out-alt"></i></span>
              <span>Deconnexion</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'MenuProfesseurView',
};
</script>

<style scoped>
</style>
