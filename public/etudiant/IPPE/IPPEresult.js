function load() {
  const infoIPPE = JSON.parse(localStorage.getItem('infoIPPE'))[0];
  console.log(infoIPPE);
  document.getElementById('NomFamille').value = infoIPPE.NomFamille;
  document.getElementById('Prenom1').value = infoIPPE.Prenom1;
  document.getElementById('Prenom2').value = infoIPPE.Prenom2;
  if (infoIPPE.Masculin == true){
    infoIPPE.Masculin = "Masculin"
  }
  else {
    infoIPPE.Masculin = "Féminin"
  }
  document.getElementById('Sexe').value = infoIPPE.Masculin;
  document.getElementById('DateNaissance').value = (infoIPPE.DateNaissance.substr(0, 10));
  document.getElementById('Telephone').value = infoIPPE.Telephone;
  document.getElementById('NoPermis').value = infoIPPE.NoPermis;
  document.getElementById('Adresse1').value = infoIPPE.Adresse1;
  document.getElementById('Adresse2').value = infoIPPE.Adresse2;
  document.getElementById('Ville').value = infoIPPE.Ville;
  document.getElementById('Province').value = infoIPPE.Province;
  document.getElementById('CodePostal').value = infoIPPE.CodePostal;
  document.getElementById('Marques').value = infoIPPE.Marques;
  document.getElementById('Race').value = infoIPPE.Race;
  document.getElementById('Taille').value = infoIPPE.Taille;
  document.getElementById('Poids').value = infoIPPE.Poids;
  document.getElementById('Yeux').value = infoIPPE.Yeux;
  document.getElementById('Cheveux').value = infoIPPE.Cheveux;
  document.getElementById('Toxicomanie').value = infoIPPE.Toxicomanie;
  document.getElementById('Desorganise').value = infoIPPE.Desorganise;
  document.getElementById('Depressif').value = infoIPPE.Depressif;
  document.getElementById('Suicidaire').value = infoIPPE.Suicidaire;
  document.getElementById('Violent').value = infoIPPE.Violent;
  document.getElementById('Gilet').value = infoIPPE.Gilet;
  document.getElementById('Pantalon').value = infoIPPE.Pantalon;
  document.getElementById('AutreVetement').value = infoIPPE.AutreVetement;
  document.getElementById('IdPersonne').value = infoIPPE.IdPersonne;
  document.getElementById('NoEvenement').value = infoIPPE.NoEvenement;
  document.getElementById('TypeEvenement').value = infoIPPE.TypeEvenement;
  document.getElementById('Raison').value = infoIPPE.Raison;
  document.getElementById('DossierEnquete').value = infoIPPE.DossierEnquete;
  document.getElementById('Cour').value = infoIPPE.Cour;
  document.getElementById('NoCour').value = infoIPPE.NoCour;
  document.getElementById('NatureCrime').value = infoIPPE.NatureCrime;
  document.getElementById('LieuDetention').value = infoIPPE.LieuDetention;
  document.getElementById('FinSentence').value = infoIPPE.FinSentence;
  document.getElementById('VuDerniereFois').value = infoIPPE.VuDerniereFois;
  document.getElementById('Agent').value = infoIPPE.Agent;
  document.getElementById('Poste').value = infoIPPE.Poste;
  document.getElementById('IdIPPE').value = infoIPPE.IdIPPE;
  document.getElementById('Libelle').value = infoIPPE.Libelle;

}

window.addEventListener('load', load);
