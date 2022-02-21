

window.onload =  function () {

    const BtnEt = document.getElementById('BtnEtudiant');
    const BtnEn = document.getElementById('BtnEnseignant');
    const c = document.getElementById('connection');


    BtnEt.addEventListener('click',()=>{document.getElementById("id").innerText = "Identification étudiant";})
    BtnEn.addEventListener('click',()=>{document.getElementById("id").innerText = "Identification enseignant";})

    c.addEventListener('click', async () => {



        const utilisateur = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const connexion = { username: utilisateur, password: password };
        const response = await fetch('http://localhost:5000/login', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: connexion,

        });


        if (response.success) {
            await response.json();
            if (response.Etudiant ){
                sessionStorage.setItem('token', etudiant)
            
            }
            else{
                sessionStorage.setItem('token', enseignat)
            } 
            window.location.href = "./StudentHp.html";
        }

        // Redirige vers la page pour l'enseignant

        // Redirige vers la page pour l'étudiant

    });

}



