import { nav,piedPage } from '../commun.js';

nav()
piedPage()


const bdChoice = document.getElementById('BdChoice')
const inputField = document.getElementById('inputField')
const submitBtn = document.getElementById('submitBtn')

bdChoice.addEventListener('change',()=>{
  if(bdChoice.value == `Infomations d'individus`){
    inputField.innerHTML += `
    <div class="field">
      <label class="label">Nom</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">Prenom 1</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
      </div>
    <div class="field">
      <label class="label">Prenom 2</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">Sexe</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">Date de naissance</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">Numero de FPS</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>
    `
  }
});

