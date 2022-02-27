function Soumettre(event) {
  event.preventDefault();
  const dataForm = new URLSearchParams(new FormData(event.target));

  fetch('http://localhost:5000/rechercher/infos/personnes', {
    method: 'POST',
    body: dataForm,
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
