/*document.getElementById("IPPE").addEventListener("click", pageIPPE);


function pageIPPE(){
    
    div = document.getElementById("pageHtml")

    div += "Ceci est la page pour IPPE - Recherche de personnes"


}*/



function fonction(){
    let x = document.getElementById("menu")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
  }
}
document.getElementById('button').addEventListener("click",fonction);
