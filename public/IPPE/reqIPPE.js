import { nav,piedPage,Matricule,Nom,connection,Deconnection } from '../commun.js';
connection()
nav()
piedPage()
btn()
document.getElementById("déconnection").addEventListener('click',Deconnection)
document.getElementById("nom").innerHTML=Matricule
document.getElementById("matricule").innerHTML=Nom


async function btn(){
    // btns
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
submit.addEventListener("click",()=>{
    // fake as token
    const token = "qwerty1234";
    sessionStorage.setItem('connectionAPI', token);
    // elements
    const nom = document.getElementById('nom').value;
    const prenom1 = document.getElementById("prenom1").value;
    const prenom2 = document.getElementById("prenom2").value;
    let sexe = document.getElementById("sexe").value;
    if(sexe == "Femme"){
        sexe = 0;
    }else{sexe=1}
    const date = document.getElementById("date").value;

    if(nom, prenom1, sexe,date === ""){
        document.getElementById('erreur').innerHTML="Les champs ne peuvent pas être vide"
    }else{

    console.log (" nom "+nom +" 1 "+ prenom1 + " 2 "+prenom2 + " sexe "+sexe + " date "+date);
    window.location = `http://localhost:5000/IPPEResponse?nom=${nom}&prenom1=${prenom1}&prenom2=${prenom2}&sexe=${sexe}&date=${date}`;
}
});
cancel.addEventListener("click",()=>{
    window.location.reload(true);
});
}