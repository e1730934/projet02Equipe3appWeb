const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path")


app.use(express.static(path.join("public")));

//passer d'index a la page de détail d'articles
app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/public/index.html");

});

app.get("/ProfesseurAccueil",(req, res) =>{
    res.sendFile(__dirname + "/public/Teacher_Hp/TeacherHp.html");
});

app.get("/EtudiantAccueil",(req, res) =>{
    res.sendFile(__dirname + "/public/Teacher_Hp/Student.html");
});

app.get("/IPPE",(req, res) =>{

    res.sendFile(__dirname + "/public/IPPE/reqIPPE.html");

});

app.listen(PORT, () => {
    console.log(`Mon application roule sur le port ${PORT}`);
});