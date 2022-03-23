const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path');

app.use(express.static(path.join('public')));
app.use(express.static(path.join(`${__dirname}/public/Teacher_Hp`)));
app.use(express.static(path.join(`${__dirname}/public/Student_Hp`)));
app.use(express.static(path.join(`${__dirname}/public/IPPE`)));

// passer d'index a la page de détail d'articles
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/Acceuil', (req, res) => {
    res.sendFile(`${__dirname}/public/Acceuil/Acceuil.html`);
});

app.get('/IPPE', (req, res) => {
    res.sendFile(`${__dirname}/public/IPPE/reqIPPE.html`);
});

app.get('/IPPEResponse', (req, res) => {
    res.sendFile(`${__dirname}/public/IPPE/resIPPE.html`);
});

app.get('/enseignant/reponse/IBVA', (req, res) => {
    res.sendFile(`${__dirname}/public/enseignant/ajoutModificationReponse/IBVA/IBVA.html`);
});

app.get('/enseignant/reponse/IBAF', (req, res) => {
    res.sendFile(`${__dirname}/public/enseignant/ajoutModificationReponse/IBAF/IBAF.html`);
});

app.get('/enseignant/reponse/IBOB', (req, res) => {
    res.sendFile(`${__dirname}/public/enseignant/ajoutModificationReponse/IBOB/IBOB.html`);
});

app.listen(PORT, () => {
    console.log(`Mon application roule sur le port ${PORT} : http://localhost:${PORT}/`);
});
