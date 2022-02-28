 
 
 async function connexion() {
    
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    

   const connection = { username: username, password: password };

      const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(connection),
       });

        if (response.ok) {
            let data = await response.json();

           
            sessionStorage.setItem('token', data.Etudiant)
            sessionStorage.setItem('Matricule', data.Matricule)
            sessionStorage.setItem('Nom', data.Nom)
            window.location.href = "./Acceuil/Acceuil.html";


      }
        else{
            document.getElementById('error').innerText = 'Matricule ou mot de passe incorrect!'
      }
 
       
   }
   
    window.onload = function bouton  () {
       
        const BtnEt = document.getElementById('BtnEtudiant');
        const BtnEn = document.getElementById('BtnEnseignant');
        
        
        
        BtnEt.addEventListener('click',()=>{document.getElementById("id").innerText = "Identification étudiant";})
        BtnEn.addEventListener('click',()=>{document.getElementById("id").innerText = "Identification enseignant";})
        document.getElementById('connection').addEventListener('click', async() => {await connexion();});

   }
   
   

   
