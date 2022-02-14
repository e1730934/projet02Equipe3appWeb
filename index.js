//Fonction qui fait apparaitre et disparaitre le menu
function menuBareNaviguation(){
    let x = document.getElementById("menu")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
  }
}
document.getElementById('buttonMenuBareNaviguation').addEventListener("click",menuBareNaviguation);
