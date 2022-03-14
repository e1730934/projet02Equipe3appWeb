import { nav, piedPage, connection, Matricule, Nom, Deconnection } from '../commun.js';
//connection()
nav()
piedPage()
document.getElementById("déconnection").addEventListener('click',Deconnection)
document.getElementById("nom").innerHTML=Matricule
document.getElementById("matricule").innerHTML=Nom
/*
async function createPersonnes(){
    fetch('')
}
*/