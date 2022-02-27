function Soumettre(event) {
  event.preventDefault();
  const test = new FormData(event.target);
  console.log(test.get('NomFamille'));
  const NomFamille = document.getElementById('NomFamille').value;
  const Prenom1 = document.getElementById('Prenom1').value;
  const Prenom2 = document.getElementById('Prenom2').value;
  const Sexe = document.getElementById('Sexe').value;
  const DateNaissance = document.getElementById('DateNaissance').value;

  const formData = new FormData();
  formData.append('NomFamille', NomFamille);
  formData.append('Prenom1', Prenom1);
  formData.append('Prenom2', Prenom2);
  formData.append('Sexe', Sexe);
  formData.append('DateNaissance', DateNaissance);

  const myHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
  });
  fetch('http://localhost:5000/rechercher/infos/personnes', {
    method: 'POST',
    body: formData,
    // headers: myHeaders,
  })
    .then((res) => res.json())
    .then((resJson) => {
      localStorage.setItem('infoIPPE', JSON.stringify(resJson.data));
      // window.location.href = 'http://localhost:3000/etudiant/IPPE/resultat';
    })
    .catch((err) => {
      alert(`Erreur: ${err}`);
    });
}
