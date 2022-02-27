function load() {
  const infoIPPE = JSON.parse(localStorage.getItem('infoIPPE'))[0];
  console.log(infoIPPE);
  document.getElementById('NomFamille').value = infoIPPE.NomFamille;
}

window.addEventListener('load', load);
