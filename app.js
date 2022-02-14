const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
// const db = require("./database/requete.js");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('admin'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});

app.get('/enseignant/menu', (req, res) => {
  res.sendFile(`${__dirname}/enseignant/menu/menu_enseignant.html`);
});

app.get('/enseignant/modif', (req, res) => {
  res.sendFile(`${__dirname}/enseignant/modif_utilisateurs/modif_utilisateurs.html`);
});

app.get('/etudiant/menu', (req, res) => {
  res.sendFile(`${__dirname}/etudiant/menu/menu_etudiant.html`);
});

app.listen(PORT, () => {
  console.log(`Mon application roule sur http://localhost:${PORT}`);
});
