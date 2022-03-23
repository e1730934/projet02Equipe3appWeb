const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
// const db = require("./database/requete.js");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/login.html`);
});

app.get('/enseignant/menu', (req, res) => {
  res.sendFile(`${__dirname}/public/enseignant/menu/menu_enseignant.html`);
});

app.get('/enseignant/modif', (req, res) => {
  res.sendFile(`${__dirname}/public/enseignant/modif_utilisateurs/modif_utilisateurs.html`);
});

app.get('/etudiant/menu', (req, res) => {
  res.sendFile(`${__dirname}/public/etudiant/menu/menu_etudiant.html`);
});

app.get('/etudiant/IPPE/requete', (req, res) => {
  res.sendFile(`${__dirname}/public/etudiant/IPPE/IPPErequest.html`);
});

app.get('/etudiant/IPPE/resultat', (req, res) => {
  res.sendFile(`${__dirname}/public/etudiant/IPPE/IPPEresult.html`);
});

app.get('/enseignant/reponse/IBAF', (req, res) => {
    res.sendFile(`${__dirname}/public/enseignant/ajoutModificationReponse/IBAF/IBAF.html`);
});

app.get('/enseignant/reponse/IBOB', (req, res) => {
    res.sendFile(`${__dirname}/public/enseignant/ajoutModificationReponse/IBOB/IBOB.html`);
});

app.listen(PORT, () => {
  console.log(`Mon application roule sur http://localhost:${PORT}`);
});
