const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path');


app.use(express.static(path.join('public')));
app.use(express.static(path.join(__dirname + '/public/PersoModif')));
app.use(express.static(path.join(__dirname + '/public/Teacher_Hp')));
app.use(express.static(path.join(__dirname + '/public/Student_Hp')));
app.use(express.static(path.join(__dirname + '/public/IPPE')));

//passer d'index a la page de détail d'articles
app.get('/',(req, res) =>{
	res.sendFile(__dirname + '/index.html');

});

app.get('/Acceuil',(req, res) =>{
	res.sendFile(__dirname + '/public/Acceuil/Acceuil.html');
});

app.get('/IPPE',(req, res) =>{
	res.sendFile(__dirname + '/public/IPPE/reqIPPE.html');
});

app.get('/IPPEResponse',(req, res) =>{
	res.sendFile(__dirname + '/public/IPPE/resIPPE.html');
});

app.get('/Personnes',(req, res) =>{
	res.sendFile(__dirname + '/public/PersoModif/PersoModif.html');
});

app.get('/ModifIppe',(req, res) =>{
	res.sendFile(__dirname + '/public/ModifIPPE/modifIPPE.html');
});

app.get('/AjoutIppe',(req, res) =>{
	res.sendFile(__dirname + '/public/AjoutIPPE/ajoutIPPE.html');
});

app.get('/BiblioPersonne',(req, res) =>{
	res.sendFile(__dirname + '/public/BiblioPersonne/bibioPersonne.html');
});

app.listen(PORT, () => {
	console.log(`Mon application roule sur le port ${PORT} : http://localhost:${PORT}/`);
});