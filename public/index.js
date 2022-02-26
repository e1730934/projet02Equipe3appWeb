
 async function connexion () {

     
     const utilisateur = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     
     const connexion = { username: utilisateur, password: password };
        const response = await fetch('http://localhost:3000/login', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: connexion.json(),

        });


        if (response.success) {
            const data = await response.json();
            console.log(` ${data.etudiant}`)
            if (response.Etudiant ){
                sessionStorage.setItem('token', data.Etudiant)
                sessionStorage.setItem('Matricule', data.Matricule)
                sessionStorage.setItem('Nom', data.Nom)
                window.location.href = "./public/Student_Hp/StudentHp.html";
            }
                else {
                sessionStorage.setItem('tokenEnsei', data.Enseignant)
                sessionStorage.setItem('Matricule', data.Matricule)
                sessionStorage.setItem('Nom', data.Nom)
                window.location.href = "./public/Teacher_Hp/TeacherHp.html";
            }   
        }
        else{
            document.getElementById('error').innerText = 'Matricule ou mot de passe incorrect!'
        }

        // Redirige vers la page pour l'enseignant

        // Redirige vers la page pour l'étudiant

    
        
        
    }

    window.onload =   function bouton  () {
    
        const BtnEt = document.getElementById('BtnEtudiant');
        const BtnEn = document.getElementById('BtnEnseignant');
        
    
    
        BtnEt.addEventListener('click',()=>{document.getElementById("id").innerText = "Identification étudiant";})
        BtnEn.addEventListener('click',()=>{document.getElementById("id").innerText = "Identification enseignant";})
        document.getElementById('connection').addEventListener('click', connexion);
    }
       
    

