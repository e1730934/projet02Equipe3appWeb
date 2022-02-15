const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");

app.use(express.static(path.join("public")));
app.use(express.static(path.join(__dirname + "/public/Teacher_Hp")));
app.use(express.static(path.join(__dirname + "/public/Student_Hp")));
app.use(express.static(path.join(__dirname + "/public/IPPE")));

//passer d'index a la page de détail d'articles
app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/ProfesseurAccueil",(req, res) =>{
    res.sendFile(__dirname + "/public/Teacher_Hp/TeacherHp.html");
});

app.get("/EtudiantAccueil",(req, res) =>{
    res.sendFile(__dirname + "/public/Student_Hp/Student.html");
});

app.get("/IPPE",(req, res) =>{
    res.sendFile(__dirname + "/public/IPPE/reqIPPE.html");
});

app.get("/IPPEResponse",(req, res) =>{
    res.sendFile(__dirname + "/public/IPPE/resIPPE.html");
});

app.listen(PORT, () => {
    console.log(`Mon application roule sur le port ${PORT}`);
});